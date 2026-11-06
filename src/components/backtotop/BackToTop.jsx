import React, { useState, useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-40 h-12 w-12 flex items-center justify-center rounded-full border-0 p-0 bg-brand-red text-white shadow-lg hover:bg-red-800 active:scale-95 transition-colors"
    >
      <BsChevronUp size={20} aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
