import React from "react";
import { Link } from "react-router-dom";


import image from '../../assets/mh_dsc08075min.jpg'
import image2 from '../../assets/o.jpg'
import image3 from '../../assets/meals/pulledPorkSandwhich.jpg'
import image5 from '../../assets/meals/full-rack-ribs.jpg'

const Section1 = () => {
  return (
    <div className="bg-brand-cream/30 overflow-hidden">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-[600px]">
            <div
              className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl shadow-xl border-4 border-white"
            >
              <img className="w-full h-full object-cover" src={image} alt="BBQ Platter" />
            </div>
            <div
              className="col-span-1 relative overflow-hidden rounded-2xl shadow-xl border-4 border-white"
            >
              <img className="w-full h-full object-cover" src={image2} alt="Delicious BBQ" />
            </div>
            <div
              className="col-span-1 relative overflow-hidden rounded-2xl shadow-xl border-4 border-white"
            >
              <img className="w-full h-full object-cover" src={image5} alt="Ribs" />
            </div>
            <div
              className="col-span-2 relative h-48 overflow-hidden rounded-2xl shadow-xl border-4 border-white"
            >
              <img className="w-full h-full object-cover object-center" src={image3} alt="Sandwich" />
            </div>
          </div>

          {/* Content Side */}
          <div
            className="flex flex-col justify-center space-y-8"
          >
            <div className="border-l-4 border-brand-red pl-8 py-2">
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-[#1F1A17] leading-tight drop-shadow-sm">
                Experience the Taste of <br />
                <span className="text-brand-red italic">Authentic BBQ</span>
              </h3>
            </div>

            <p className="text-xl text-[#2C2C2C] leading-relaxed font-serif">
              Located in beautiful Edmonds, WA, we pride ourselves on serving the most <span className="font-bold text-brand-red/80">tender, fall-off-the-bone ribs</span> and flame-grilled meats in the Pacific Northwest.
            </p>

            <p className="text-lg text-gray-600 italic">
              From our signature pulled pork sandwiches to our homemade cornbread, every dish is crafted with passion and patience.
            </p>

            <div className="pt-6">
              <Link to="/menu">
                <button className="bg-brand-red text-white px-10 py-4 rounded-full font-bold hover:bg-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg tracking-wide uppercase">
                  Explore Our Menu
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section1;
