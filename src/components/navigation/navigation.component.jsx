import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar.component";
import Footer from "../footer/footer.component";

export default function Navigation() {
  const { pathname } = useLocation();

  // Client-side route changes keep the old scroll offset; start each page at the top.
  useEffect(() => {
    // "instant" overrides the global smooth scroll-behavior so the jump isn't animated.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
