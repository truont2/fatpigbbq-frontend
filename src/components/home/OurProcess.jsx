import React from "react";

import ownerImage from "../../assets/owner.jpeg"; // Assuming this is Bao
import smokerImage from "../../assets/DSC_7015.jpg"; // Good process shot

const OurProcess = () => {
    return (
        <div className="bg-[#FDFBF7] py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-2 font-serif">Our Promise</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#1F1A17] italic">Quality & Affordability.</h3>
                    <div className="w-24 h-1 bg-brand-red mx-auto text-center mt-6 rounded opacity-50"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <div
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-sm overflow-hidden shadow-xl z-10 border-8 border-white">
                            <img src={smokerImage} alt="Smoker" className="w-full h-auto object-cover" />
                        </div>
                        {/* Offset Image */}
                        <div className="absolute -bottom-10 -right-10 w-2/3 rounded-sm overflow-hidden shadow-xl border-8 border-white z-20 hidden md:block">
                            <img src={ownerImage} alt="Owner Bao Truong" className="w-full h-auto object-cover" />
                        </div>
                        {/* Decorative pattern */}
                        <div className="absolute -top-10 -left-10 w-full h-full border-4 border-brand-red/10 rounded-sm -z-10"></div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <h4 className="text-2xl font-bold text-[#1F1A17] mb-4 font-serif">Slow-Cooked Perfection</h4>
                            <p className="text-lg text-gray-700 leading-relaxed font-serif">
                                At Fat Pig BBQ, we believe that great barbecue relies on patience. We start with high-quality cuts of meat and slow-cook them until they are incredibly tender and juicy, then finish them over the flame for the perfect char.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-2xl font-bold text-[#1F1A17] mb-4 font-serif">Handcrafted with Love</h4>
                            <p className="text-lg text-gray-700 leading-relaxed font-serif">
                                From our signature BBQ sauces to our moist cornbread, everything is made from scratch in our kitchen. We honor the traditions of American BBQ while prioritizing affordable, quality meals for our community.
                            </p>
                        </div>

                        <div className="pt-6">
                            <a href="/about-page" className="text-brand-red font-bold text-lg hover:text-red-800 transition-colors flex items-center font-serif italic border-b border-brand-red/20 pb-1 w-fit">
                                Read Our Story <span className="ml-2">&rarr;</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurProcess;
