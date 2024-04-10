import React from "react";
import image from "../../assets/DSC_7011.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/about-page`; 
    navigate(path);
  }

  return (
    <div className="w-full h-[90vh]">
      <img
        className="top-0 left-0 w-full h-[90vh] object-cover bg-no-repeat bg-auto bg-fixed bg-center" 
        src={image}
        alt="hero fat pig outside"
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-[90vh]' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Fat Pig BBQ
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-3 text-xl'>
            Come visit us in Edmonds to get the most Tender, Delicious, and Amazing BBQ in the area
          </p>
          <button className='bg-white text-black ' onClick={routeChange} >Click Here For More Info</button>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
