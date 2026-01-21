import React from "react";
import { motion } from "framer-motion";
import cateringImage from "../../assets/meal.jpeg";

const CateringSection = () => {
    return (
        <div className="bg-brand-cream/30 py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-2">Catering</h2>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Bring the BBQ Home.</h3>
                            <div className="w-24 h-1 bg-brand-red mb-8 rounded"></div>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Bring the best of Fat Pig BBQ to your home or office. Whether it's a family gathering, corporate event, or game day, our authentic, slow-cooked BBQ is sure to impress. Catering is available for pickup at our Edmonds location.
                            </p>

                            <a href="/catering" className="inline-block bg-brand-red text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-red-800 transition-colors transform hover:-translate-y-1">
                                Learn More
                            </a>
                        </motion.div>
                    </div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative order-1 lg:order-2"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 transition-transform duration-500">
                            <img src={cateringImage} alt="Fat Pig BBQ Catering Spread" className="w-full h-auto object-cover" />
                        </div>
                        {/* Decorative background */}
                        <div className="absolute top-10 right-10 w-full h-full border-4 border-brand-red/20 rounded-2xl -z-10"></div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default CateringSection;
