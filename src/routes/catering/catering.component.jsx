import React from "react";
import { motion } from "framer-motion";
import cateringImage from "../../assets/meal.jpeg";
import largeRibMeal from "../../assets/meals/large-rib-meal.jpg";

const Catering = () => {
    return (
        <div className="bg-[#FDFBF7] font-serif text-[#2C2C2C]">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cateringImage})` }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold text-[#FDFBF7] drop-shadow-xl tracking-wide"
                    >
                        Catering
                    </motion.h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8">

                {/* Intro */}
                <div className="text-center mb-20">
                    <div className="inline-block border-b-2 border-brand-red pb-2 mb-8">
                        <span className="text-brand-red tracking-widest uppercase text-sm font-bold">Est. 2018 in Edmonds, WA</span>
                    </div>
                    <p className="text-2xl md:text-3xl leading-relaxed font-light text-[#4A4A4A] max-w-4xl mx-auto">
                        "Planning a party or family gathering? As a small family business, we take pride in personally handling your catering needs with the same love and care we put into our daily smoker."
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Left Column: Personal Note & Ordering */}
                    <div className="space-y-12">

                        {/* Personal Note Card */}
                        <div className="border border-[#E5E0D8] bg-white p-10 shadow-sm relative">
                            {/* Decorative Corner */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-brand-red/20 -mt-2 -ml-2"></div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-brand-red/20 -mb-2 -mr-2"></div>

                            <h2 className="text-4xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">A Note on Ordering</h2>

                            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                                <p>
                                    To ensure the best quality, we don't use a fixed catering menu. Instead, we tailor pricing based on your specific needs and party size.
                                </p>
                                <p>
                                    <span className="font-bold text-brand-red">Call us directly</span> or stop by the restaurant to discuss your event. We love being part of your special occasions!
                                </p>
                                <div className="pt-6 font-sans text-sm text-gray-500 italic">
                                    *Please try to give us 24-48 hours notice for large orders so our small team can prepare everything perfectly.
                                </div>
                            </div>
                        </div>

                        {/* Delivery Info - Subtle */}
                        <div className="pl-6 border-l-2 border-brand-red/30">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery Service</h3>
                            <p className="text-gray-600">
                                Available for special occasions depending on order size and location. Just ask us when you call!
                            </p>
                        </div>

                    </div>

                    {/* Right Column: Instructions & Visual */}
                    <div className="space-y-12">

                        {/* Image with texture frame */}
                        <div className="p-2 bg-white shadow-sm border border-[#E5E0D8] rotate-1">
                            <img src={largeRibMeal} alt="Large Rib Meal" className="w-full h-auto object-cover grayscale-[10%] contrast-110" />
                        </div>

                        {/* Reheating - Clean Typography */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Reheating Instructions</h2>
                            <p className="text-gray-600 mb-6 italic">If you aren't serving immediately:</p>
                            <div className="space-y-4 border-t border-gray-200 pt-6">
                                <div className="flex gap-4">
                                    <span className="text-4xl text-brand-red/20 font-bold">1</span>
                                    <div>
                                        <h4 className="font-bold text-lg">Preheat to 250°F</h4>
                                        <p className="text-gray-600">Low and slow is the way like we do it.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-4xl text-brand-red/20 font-bold">2</span>
                                    <div>
                                        <h4 className="font-bold text-lg">Wrap Tightly</h4>
                                        <p className="text-gray-600">Use aluminum foil. Adding a splash of apple juice or broth helps keep it moist.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-4xl text-brand-red/20 font-bold">3</span>
                                    <div>
                                        <h4 className="font-bold text-lg">Heat for 20-30 Mins</h4>
                                        <p className="text-gray-600">Until warm throughout.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Catering;
