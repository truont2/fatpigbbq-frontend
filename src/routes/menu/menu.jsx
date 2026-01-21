import React from "react";
import { Link } from "react-scroll";

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
    <div className="bg-brand-cream font-serif min-h-screen text-[#2C2C2C]">
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
          <h1
            className="text-6xl md:text-8xl font-bold text-[#FDFBF7] drop-shadow-xl mb-4 tracking-wide"
          >
            Our Menu
          </h1>
          <a
            href={menuPDF}
            target="_blank"
            rel="noreferrer"
            className="text-white border-b-2 border-brand-red hover:text-brand-red transition-colors pb-1 text-lg tracking-wider uppercase font-bold mt-4"
          >
            Download PDF Menu
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-20 px-4 sm:px-6 lg:px-8">

        {/* Sticky Sub-nav */}
        <div className="sticky top-20 z-30 bg-brand-cream/95 backdrop-blur-sm py-6 mb-16 border-b border-brand-red/10">
          <div className="flex justify-center space-x-6 md:space-x-12">
            {sections.map(({ id, label }) => (
              <Link
                key={id}
                to={id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-150}
                className="cursor-pointer text-lg md:text-xl font-bold text-gray-500 hover:text-brand-red transition-colors select-none font-serif italic"
                activeClass="text-brand-red! border-b-2 border-brand-red"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-32">
          {sections.map(({ id, label, items }) => (
            <div key={id} id={id} className="relative">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-[#1F1A17] mb-4">{label}</h2>
                <div className="w-16 h-1 bg-brand-red mx-auto opacity-50"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {items.map((item, index) => (
                  <div
                    key={item.title}
                    className="group flex flex-col"
                  >
                    {/* Image */}
                    <div className="mb-6 overflow-hidden rounded-xl border-4 border-white shadow-md">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    {/* Item Header with Leaders */}
                    <div className="flex items-baseline justify-between mb-2 px-2">
                      <h3 className="text-xl font-bold text-[#1F1A17] font-serif">{item.title}</h3>
                      <div className="flex-grow mx-4 border-b-2 border-dotted border-brand-red/30 relative top-[-6px]"></div>
                      <span className="text-xl font-bold text-brand-red font-serif">${item.price}</span>
                    </div>

                    {/* Description */}
                    {item.description && (
                      <p className="text-gray-600 text-sm italic leading-relaxed font-serif px-2">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-24 text-center text-gray-500 text-sm border-t border-brand-red/10 pt-12 max-w-2xl mx-auto font-sans">
          <p className="mb-2 italic">* We also cater to large and small parties. Please contact us for more information.</p>
          <p>Note: Prices are subject to change in response to market conditions. Thank you for understanding.</p>
        </div>

      </div>
    </div>
  );
}

export default Menu;

