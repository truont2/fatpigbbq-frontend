import React from "react";
import { motion } from "framer-motion";

import wallpaper from "../../assets/meal.jpeg";
import image from "../../assets/DSC_7011.jpg";
import image3 from "../../assets/DSC_7018.jpg";
import image4 from "../../assets/DSC_7022.jpg";
import amazeballs from "../../assets/fat-pig-bbq-is-amazeballs.jpg";

function About() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${wallpaper})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-serif font-bold text-white drop-shadow-lg"
          >
            About Us
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 border-l-4 border-brand-red pl-6">
              The Story of <span className="text-brand-red">Fat Pig BBQ</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fat Pig BBQ was established in 2018 by Bao Truong. What started as a backyard passion for cooking barbecue for family and friends grew into a mission to share affordable, quality food with the Edmonds community.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              We prioritize slow-cooking our meats to achieve the most tender and juicy flavor possible. No shortcuts, just simple, good food that brings people together.
            </p>
          </motion.div>

          {/* New Modern Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 h-full min-h-[500px]"
          >
            <div className="space-y-4">
              <img src={amazeballs} alt="Fat Pig BBQ is Amazeballs" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" />
              <img src={image4} alt="Delicious BBQ" className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" />
            </div>
            <div className="space-y-4 pt-8">
              <img src={image} alt="Restaurant Atmosphere" className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" />
              <img src={image3} alt="Close up BBQ" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default About;
