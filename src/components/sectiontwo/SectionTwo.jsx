import React from "react";

import grubhub from "../../assets/logo_grubhub.avif";
import uber from '../../assets/uber.jpg'
import doordash from '../../assets/doordash-860x452.png'
import delivery from '../../assets/food-delivery-companies.jpg'

const SectionTwo = ({ images }) => {
  return (
    <div className="max-w-[1400px] h-[400px] bg-gradient-to-r from-rose-600 to-rose-700 mx-auto my-16 pt-16 lg:mb-[15%] md:mb-[25%] px-6 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2 text-white">
        <h3 className="text-4xl font-bold">
          Order Online for pickup or for delivery{" "}
        </h3>
        <p className="text-xl pt-4">Choose to have your food delivered through these partnered companies!</p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <a className="relative overflow-hidden bg-cover bg-no-repeat" href='https://fatpigbbq.dine.online/'>
          <img
            className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
            src={grubhub}
            alt="grubhub link"
          />
        </a>
        <a className="relative overflow-hidden bg-cover bg-no-repeat" href='https://www.ubereats.com/store/fat-pig-bbq/S0VhUzV1RnyR1Jh3vmWdHw'>
          
          <img
            className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
            src={uber}
            alt="ubereats link"
          />
        </a>
        <a className="relative overflow-hidden bg-cover bg-no-repeat" href='https://www.doordash.com/store/fat-pig-bbq-edmonds-429805/'>
          <img
            className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
            src={doordash}
            alt="Doordash link"
          />
        </a>
        <a className="relative overflow-hidden bg-cover bg-no-repeat" href='/'>
          <img
            className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
            src={delivery}
            alt="person delivering a carry out order"
          />
        </a>
      </div>
    </div>
  );
};

export default SectionTwo;
