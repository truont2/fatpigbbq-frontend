import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      name: "Ghazal Tariri",
      rating: 5,
      review: "The best ribs ever! We drive half an hour to Edmonds every time we want to treat ourselves with a super yummy ribs!",
    },
    {
      name: "Collin Miller",
      rating: 4,
      review: "First time eating in the restaurant vs getting take out, and while there is not much in the way of decor the staff is super friendly and the food, as usual, was tender and delicious.",
    },
    {
      name: "Mark H.",
      rating: 5,
      review: "The barbecue was excellent. Both the barbecue pork ribs and chickens were very tender. The meat easily fell off the bone. The corn bread and roasted corn were very buttery.",
    },
    {
      name: "Jin Kyong Lee.",
      rating: 5,
      review: "The food is BOMB. Must try!!! I love this place and has the best service.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [data.length]);

  return (
    <div className="bg-[#F6F4EF] py-24 text-[#2C2C2C] relative overflow-hidden">
      {/* Background Decor - Subtle */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-2">Testimonials</h2>
          <h2 className="text-4xl font-serif font-bold text-[#1F1A17] mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded opacity-50"></div>
        </div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-8">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-6 h-6 ${index < data[currentIndex].rating ? "text-[#D4AF37]" : "text-gray-300"}`} // Gold color for stars
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-xl md:text-3xl font-serif italic text-[#1F1A17] leading-relaxed mb-10 max-w-3xl">
                "{data[currentIndex].review}"
              </blockquote>

              <cite className="not-italic font-bold text-lg text-brand-red tracking-wide uppercase font-sans">
                — {data[currentIndex].name}
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border-none ${idx === currentIndex ? "bg-brand-red w-8" : "bg-[#D1CCC0] hover:bg-[#BDB8AC]"
                }`}
            />
          ))}
        </div>

        <div className="mt-16">
          <a
            href="https://www.yelp.com/biz/fat-pig-bbq-edmonds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gray-500 hover:text-brand-red transition-colors border-b border-transparent hover:border-brand-red pb-1 tracking-wider uppercase"
          >
            Read more on Yelp
          </a>
        </div>

      </div>
    </div>
  );
};

export default Reviews;
