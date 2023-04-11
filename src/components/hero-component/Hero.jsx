import React from "react";
import image from "../../assets/DSC_7011.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        className="top-0 left-0 w-full h-[90vh] object-cover bg-no-repeat bg-auto bg-fixed bg-center" 
        src={image}
        alt="hero"
      />
      <div className="bg-black/20 absolute top-0 left-0 w-full h-[90vh]" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto p-4">
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Best Barbecue in Edmonds</h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">Fat Pig BBQ</p>
          <button className="bg-white text-black">Visit Today</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
