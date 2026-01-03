import React from "react";
import { motion } from "framer-motion";

import grubhub from "../../assets/logo_grubhub.avif";
import uber from '../../assets/uber.jpg'
import doordash from '../../assets/doordash-860x452.png'

const SectionTwo = () => {
  const platforms = [
    { name: 'GrubHub', img: grubhub, url: 'https://fatpigbbq.dine.online/' },
    { name: 'Uber Eats', img: uber, url: 'https://www.ubereats.com/store/fat-pig-bbq/S0VhUzV1RnyR1Jh3vmWdHw' },
    { name: 'DoorDash', img: doordash, url: 'https://www.doordash.com/store/fat-pig-bbq-edmonds-429805/' },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Order Online from Home
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Craving BBQ but want to stay in? We've partnered with top delivery services to bring the smokehouse to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-50 border border-gray-100"
            >
              <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/5 transition-colors z-10" />
              <img
                className="w-full h-full object-contain p-8 transition-all duration-500"
                src={platform.img}
                alt={`${platform.name} logo`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-white/90 p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity text-center border-t border-gray-100">
                <span className="text-brand-red font-bold text-lg">Order on {platform.name} &rarr;</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
