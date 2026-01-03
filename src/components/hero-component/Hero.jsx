import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-xl text-left"
          >
            <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-lg">
              <span className="text-brand-red">Fat Pig</span> <br /> BBQ
            </h1>

            <p className="font-sans text-xl md:text-2xl text-gray-200 mb-8 border-l-4 border-brand-red pl-6 leading-relaxed drop-shadow-md">
              Edmonds' premier spot for tender, slow-smoked authentic barbecue.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/menu")}
              className="bg-brand-red text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:bg-red-800 transition-all duration-300 ring-4 ring-red-900/50"
            >
              View Our Menu
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
