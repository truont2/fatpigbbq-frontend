import React, { useState, useEffect } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTop && <div className="fixed md:bottom-16 md:right-16 md:h-16 md:w-16 bg-red-500 shadow-lg text-white flex justify-center items-center rounded-full hover:rotate-180 transition hover:bg-green-900 cursor-pointer bottom-2 right-2 h-8 w-8 z-50">
        <BsChevronCompactDown onClick={() => scrollUp()} size={25} />
      </div>}
    </>
  );
};

export default BackToTop;
