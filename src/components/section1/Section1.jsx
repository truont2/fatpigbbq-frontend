import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import image from '../../assets/mh_dsc08075min.jpg'
import image2 from '../../assets/fat-pig-bbq-is-amazeballs.jpg'
import image3 from '../../assets/meals/pulledPorkSandwhich.jpg'
import image5 from '../../assets/meals/full-rack-ribs.jpg'

const Section1 = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 h-[600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl shadow-xl"
          >
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src={image} alt="BBQ Platter" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 relative overflow-hidden rounded-2xl shadow-xl"
          >
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src={image2} alt="Restaurant Interior" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 relative overflow-hidden rounded-2xl shadow-xl"
          >
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src={image5} alt="Ribs" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-2 relative h-48 overflow-hidden rounded-2xl shadow-xl"
          >
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src={image3} alt="Sandwich" />
          </motion.div>
        </div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          <div className="border-l-4 border-brand-red pl-6">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Experience the Taste of <br />
              <span className="text-brand-red">Authentic BBQ</span>
            </h3>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed">
            Located in beautiful Edmonds, WA, we pride ourselves on serving the most tender, fall-off-the-bone ribs and smoked meats in the Pacific Northwest.
          </p>

          <p className="text-lg text-gray-500">
            From our signature pulled pork sandwiches to our homemade cornbread, every dish is crafted with passion and patience.
          </p>

          <div className="pt-4">
            <Link to="/menu">
              <button className="bg-brand-red text-white px-8 py-3 rounded-full font-bold hover:bg-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Our Menu
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Section1;
