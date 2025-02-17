import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/DSC_7011.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload the image before displaying it
  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-[90vh] bg-gray-300">
      {/* Background Image */}
      <img
        className={`absolute top-0 left-0 w-full h-[90vh] object-cover transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={image}
        alt="Hero Fat Pig Outside"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-[90vh] bg-black/30" />

      {/* Hero Content */}
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4 text-center md:text-left">
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Fat Pig BBQ
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-3 text-xl">
            Come visit us in Edmonds to get the most Tender, Delicious, and Amazing BBQ in the area.
          </p>

          {/* BBQ-Themed Interactive Button */}
          <button
            className="bg-[#B91C1C] text-white px-6 py-3 mt-3 font-semibold rounded-full
            transition duration-300 ease-in-out transform
            hover:bg-[#991B1B] 
            active:bg-[#7F1D1D] 
            focus:outline-none focus:ring-4 focus:ring-[#FACC15]"
            onClick={() => navigate("/about-page")}
          >
            Click Here For More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
