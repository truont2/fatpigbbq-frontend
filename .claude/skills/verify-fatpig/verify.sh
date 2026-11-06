#!/usr/bin/env bash
# Verification harness for the Fat Pig BBQ web app (CRA dev server + gstack headless browser).
# Usage: verify.sh launch | doctor | b <browse args...> | shot <name> [browse screenshot flags] | url [path] | out | cleanup
set -euo pipefail

REPO="$(cd "$(dirname "$0")/../../.." && pwd)"
PORT="${FATPIG_PORT:-3100}"
B="${BROWSE_BIN:-$HOME/.claude/skills/gstack/browse/dist/browse}"
TMP_REAL="$(cd /tmp && pwd -P)"                 # /private/tmp on macOS; browse only writes under real tmp paths
ROOT="${FATPIG_VERIFY_ROOT:-$TMP_REAL/fatpig-verify}"
STATE="$ROOT/state/$PORT"                      # per-port instance state (removed by cleanup)
RUNS="$ROOT/runs"                              # evidence (never removed by cleanup)
export BROWSE_SESSION="fatpig-verify-$PORT"    # own browser tab, isolated from other agents

die() { echo "ERROR: $*" >&2; exit 1; }
base_url() { echo "http://localhost:$PORT"; }
run_dir() { [ -f "$STATE/run_id" ] || die "no instance on port $PORT; run launch first"; echo "$RUNS/$(cat "$STATE/run_id")"; }
listener_pid() { lsof -nP -tiTCP:"$PORT" -sTCP:LISTEN 2>/dev/null | head -1 || true; }

rendered_ok() {
  "$B" goto "$(base_url)/" >/dev/null 2>&1 || return 1
  "$B" wait nav >/dev/null 2>&1 || return 1
  [ "$("$B" js "document.querySelector('nav') && document.querySelector('nav').innerText.includes('FAT PIG BBQ') ? 'yes' : 'no'" 2>/dev/null | tail -1)" = "yes" ]
}

cmd_launch() {
  [ -x "$B" ] || die "browse binary missing at $B (install gstack, or set BROWSE_BIN)"
  [ -d "$REPO/node_modules" ] || die "node_modules missing; run: (cd $REPO && npm install)"
  [ -z "$(listener_pid)" ] || die "port $PORT already in use (pid $(listener_pid)); pick another: FATPIG_PORT=31xx"
  [ ! -f "$STATE/pgid" ] || die "stale state for port $PORT; run cleanup first"
  mkdir -p "$STATE" "$RUNS"
  local run_id; run_id="$(date +%Y%m%d-%H%M%S)-p$PORT"
  mkdir -p "$RUNS/$run_id"; echo "$run_id" > "$STATE/run_id"
  set -m   # background job gets its own process group, so cleanup can kill exactly what we started
  ( cd "$REPO" && exec env BROWSER=none PORT="$PORT" npx react-scripts start ) >"$STATE/server.log" 2>&1 </dev/null &
  echo $! > "$STATE/pgid"; set +m
  echo "launching pgid=$(cat "$STATE/pgid") port=$PORT log=$STATE/server.log"
  for _ in $(seq 1 90); do
    if grep -q -E "Failed to compile|Something is already running" "$STATE/server.log"; then
      tail -20 "$STATE/server.log" >&2; die "dev server failed to start"
    fi
    if grep -q "compiled" "$STATE/server.log" && [ "$(curl -s -o /dev/null -w '%{http_code}' "$(base_url)/")" = 200 ]; then
      if rendered_ok; then
        echo "READY $(base_url)  run_dir=$RUNS/$run_id"; return 0
      fi
    fi
    sleep 2
  done
  tail -20 "$STATE/server.log" >&2; die "not ready after 180s"
}

cmd_doctor() {
  local ok=1
  [ -f "$STATE/pgid" ] || die "no instance recorded for port $PORT"
  local pgid; pgid="$(cat "$STATE/pgid")"
  if kill -0 "$pgid" 2>/dev/null; then echo "process: up (pgid $pgid)"; else echo "process: DOWN"; ok=0; fi
  local lp; lp="$(listener_pid)"
  if [ -n "$lp" ] && [ "$(ps -o pgid= -p "$lp" | tr -d ' ')" = "$pgid" ]; then echo "port $PORT: owned by us (pid $lp)"
  else echo "port $PORT: NOT owned by this run (listener=${lp:-none})"; ok=0; fi
  echo "build: $(cd "$REPO" && git rev-parse --abbrev-ref HEAD)@$(cd "$REPO" && git rev-parse --short HEAD)$( [ -n "$(cd "$REPO" && git status --porcelain)" ] && echo ' +dirty')"
  if grep -q "Failed to compile" "$STATE/server.log"; then echo "compile: FAILED (see $STATE/server.log)"; ok=0; else echo "compile: ok"; fi
  if rendered_ok; then echo "render: nav with brand present"; else echo "render: FAILED"; ok=0; fi
  echo "run_dir: $(run_dir)"
  [ "$ok" = 1 ] && echo "DOCTOR OK" || { echo "DOCTOR FAIL"; exit 1; }
}

cmd_shot() {
  [ $# -ge 1 ] || die "usage: shot <name> [--viewport|selector]"
  local name="$1"; shift
  local dir; dir="$(run_dir)"
  "$B" screenshot "$@" "$dir/$name.png"
}

cmd_cleanup() {
  if [ -f "$STATE/pgid" ]; then
    local pgid; pgid="$(cat "$STATE/pgid")"
    kill -TERM -- "-$pgid" 2>/dev/null || true
    for _ in $(seq 1 10); do kill -0 -- "-$pgid" 2>/dev/null || break; sleep 1; done
    kill -KILL -- "-$pgid" 2>/dev/null || true
    echo "stopped pgid $pgid"
  else
    echo "no instance recorded for port $PORT"
  fi
  local run_id=""; [ -f "$STATE/run_id" ] && run_id="$(cat "$STATE/run_id")"
  [ -n "$run_id" ] && [ -f "$STATE/server.log" ] && cp "$STATE/server.log" "$RUNS/$run_id/server.log"
  rm -rf "$STATE"
  [ -n "$run_id" ] && echo "evidence kept at $RUNS/$run_id"
  [ -z "$(listener_pid)" ] && echo "port $PORT free" || echo "WARNING: port $PORT still has a listener"
}

case "${1:-}" in
  launch)  cmd_launch ;;
  doctor)  cmd_doctor ;;
  b)       shift; exec "$B" "$@" ;;
  shot)    shift; cmd_shot "$@" ;;
  url)     echo "$(base_url)${2:-/}" ;;
  out)     run_dir ;;
  cleanup) cmd_cleanup ;;
  *) echo "usage: $0 launch|doctor|b <browse args>|shot <name> [flags]|url [path]|out|cleanup" >&2; exit 2 ;;
esac
