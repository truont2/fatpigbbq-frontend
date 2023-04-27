import React from "react";
import image from '../../assets/mh_dsc08075min.jpg'
import image2 from '../../assets/fat-pig-bbq-is-amazeballs.jpg'
import image3 from '../../assets/meals/pulledPorkSandwhich.jpg'
import image4 from '../../assets/meals/cornbread.jpg'
import image5 from '../../assets/meals/full-rack-ribs.jpg'

import { useNavigate } from "react-router-dom";
const Section1 = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/menu`; 
    navigate(path);
  }

  return (
    <div className='max-w-[1600px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
    {/* Left Side */}
    <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
      <img
        className='row-span-3 object-cover w-full h-full p-2'
        src={image}
        alt='/'
      />
      <img
      alt='/'
        className='row-span-2 object-cover w-full h-full p-2'
        src={image2}
      />
      <img
        className='row-span-2 object-cover w-full h-full p-2 object-left'
        src={image3}
        alt='/'
      />
      <img
        className='row-span-3 object-cover w-full h-full p-2 object-center'
        src={image5}
        alt='/'
      />
      <img
        className='row-span-2 object-cover w-full h-full p-2'
        src={image4}
        alt='/'
      />
    </div>
    {/* Right Side */}
    <div className='flex flex-col h-full justify-center text-gray-500'>
      <h3 className='text-4xl md:text-5xl'>Check out the amazing food we offer</h3>
      <p className='text-2xl py-4'>
        Located in Edmonds, WA. Come to enjoy the most tender ribs in the area!
      </p>
      <p className='pb-4 text-lg'>
        Here are some of our amazing meals and sides we offer
      </p>
      <div>
        <button className='border-black mr-4 hover:shadow-xl px-4' onClick={routeChange}>
          Menu
        </button>
      </div>
    </div>
  </div>
  );
};

export default Section1;
