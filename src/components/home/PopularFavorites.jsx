import React, { useRef } from "react";

// Specific requested images
import fullRack from "../../assets/meals/full-rack-ribs.jpg";
import largeRibMeal from "../../assets/meals/large-rib-meal.jpg";
import porkSandwich from "../../assets/meals/pulledPorkSandwhich.jpg"; // Using the brighter sandwich shot
import cornbread from "../../assets/meals/cornbread.jpg";
import chicken from "../../assets/meals/large-chicken-meal.jpg";

const PopularFavorites = () => {
    const scrollRef = useRef(null);

    const favorites = [
        {
            src: largeRibMeal,
            title: "Large Rib Meal",
            desc: "Our most ordered plate. Tender ribs with your choice of sides."
        },
        {
            src: fullRack,
            title: "Full Rack of Ribs",
            desc: "For the true carnivore. Slow-smoked for 14 hours."
        },
        {
            src: porkSandwich,
            title: "Pulled Pork Sandwich",
            desc: "Piled high on a toasted bun with our signature slaw."
        },
        {
            src: cornbread,
            title: "Homemade Cornbread",
            desc: "Baked fresh daily. Sweet, moist, and perfect."
        },
        {
            src: chicken,
            title: "BBQ Chicken",
            desc: "Juicy, smoky, and falling off the bone."
        },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#FDFBF7] py-16 border-t border-brand-red/10 overflow-hidden relative group">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-between items-end">
                <div>
                    <div className="inline-block border-b-2 border-brand-red pb-1 mb-2">
                        <span className="text-brand-red tracking-widest uppercase text-xs font-bold">Menu Highlights</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F1A17]">Customer Favorites</h2>
                </div>

                {/* Manual Navigation Controls */}
                <div className="hidden md:flex space-x-2">
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 rounded-full border border-gray-300 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-2 rounded-full border border-gray-300 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all"
                    >
                        &rarr;
                    </button>
                </div>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-8 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {favorites.map((item, index) => (
                    <div
                        key={index}
                        className="flex-none w-80 md:w-96 snap-center"
                    >
                        <div className="relative group/card bg-white p-3 shadow-md border border-[#E5E0D8] transition-transform duration-300 hover:-translate-y-1">
                            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-sm relative">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-64 object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="pt-4 pb-2 px-2">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-serif text-xl font-bold text-[#1F1A17]">{item.title}</h3>
                                </div>
                                <p className="text-sm text-gray-500 italic font-serif leading-tight">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Scroll Hint */}
            <div className="text-center text-xs text-brand-red/50 uppercase tracking-widest md:hidden animate-pulse">
                Swipe for more
            </div>
        </div>
    );
};

export default PopularFavorites;
