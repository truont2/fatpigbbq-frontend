import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import image from "../../assets/DSC_7011.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen bg-neutral-900 overflow-hidden">
      {/* Background Image */}
      <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <img
          className="w-full h-full object-cover transform scale-105"
          src={image}
          alt="Fat Pig BBQ Outside"
        />
        {/* Reverted Overlay - Standard Black Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div
            className="max-w-xl text-left"
          >
            <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-lg">
              <span className="text-brand-red italic">Fat Pig</span> <br /> BBQ
            </h1>

            <p className="font-serif italic text-xl md:text-2xl text-gray-200 mb-8 border-l-4 border-brand-red pl-6 leading-relaxed drop-shadow-md">
              Edmonds' premier spot for tender, slow-cooked, flame-grilled authentic barbecue.
            </p>

            <button
              onClick={() => navigate("/menu")}
              className="bg-brand-red text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:bg-red-800 transition-all duration-300 border-none outline-none focus:outline-none"
            >
              View Our Menu
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce"
      >
        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
