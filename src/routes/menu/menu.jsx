import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import BackToTop from "../../components/backtotop/BackToTop.jsx";
import { mealItems, drinkItems, sideItems } from "./menuItems.js";
import wallpaper from "../../assets/meal.jpeg";
import menuPDF from "../../assets/menu.pdf";
import "./menu.styles.css";

function Menu() {
  const sections = [
    { id: "meals", label: "Meals", items: mealItems },
    { id: "sides", label: "Sides", items: sideItems },
    { id: "beverages", label: "Beverages", items: drinkItems },
  ];

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      <BackToTop />

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${wallpaper})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-serif font-bold text-white drop-shadow-lg mb-4"
          >
            Our Menu
          </motion.h1>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            href={menuPDF}
            target="_blank"
            rel="noreferrer"
            className="bg-brand-red hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            View Full PDF Menu
          </motion.a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* Sticky Sub-nav */}
        <div className="sticky top-20 z-30 bg-gray-50/95 backdrop-blur-sm py-4 mb-12 border-b border-gray-200">
          <div className="flex justify-center space-x-2 md:space-x-8">
            {sections.map(({ id, label }) => (
              <Link
                key={id}
                to={id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-150}
                className="cursor-pointer px-6 py-2 rounded-full text-gray-600 font-bold hover:bg-gray-200 hover:text-brand-red transition-all cursor-pointer select-none"
                activeClass="bg-brand-red text-white! shadow-md"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-24">
          {sections.map(({ id, label, items }) => (
            <div key={id} id={id}>
              <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
                {label}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    key={item.title}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <span className="text-lg font-bold text-brand-red">${item.price}</span>
                      </div>
                      {item.description && <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center text-gray-500 text-sm italic border-t pt-8">
          <p>* We also cater to large and small parties. Please contact us for more information</p>
          <p>Note: Prices are subject to change in response to market conditions. Thank you for understanding</p>
        </div>

      </div>
    </div>
  );
}

export default Menu;

