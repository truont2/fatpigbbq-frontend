import React from "react";
import { motion } from "framer-motion";
import ownerImage from "../../assets/owner.jpeg"; // Assuming this is Bao
import smokerImage from "../../assets/DSC_7015.jpg"; // Good process shot

const OurProcess = () => {
    return (
        <div className="bg-white py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-brand-red uppercase tracking-widest mb-2">Our Promise</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Quality & Affordability.</h3>
                    <div className="w-24 h-1 bg-brand-red mx-auto text-center mt-6 rounded"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
                            <img src={smokerImage} alt="Smoker full of meat" className="w-full h-auto object-cover" />
                        </div>
                        {/* Offset Image */}
                        <div className="absolute -bottom-10 -right-10 w-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden md:block">
                            <img src={ownerImage} alt="Owner Bao Truong" className="w-full h-auto object-cover" />
                        </div>
                        {/* Decorative pattern */}
                        <div className="absolute -top-10 -left-10 w-full h-full bg-gray-100 rounded-3xl -z-10 transform -rotate-3"></div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Slow-Cooked Perfection</h4>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At Fat Pig BBQ, we believe that great barbecue relies on patience. We start with high-quality cuts of meat and slow-cook them until they are incredibly tender and juicy. No smoke and mirrors—just time, temperature, and technique.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Handcrafted with Love</h4>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                From our signature BBQ sauces to our moist cornbread, everything is made from scratch in our kitchen. We honor the traditions of American BBQ while prioritizing affordable, quality meals for our community.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="pt-6"
                        >
                            <a href="/about-page" className="text-brand-red font-bold text-lg hover:text-red-800 transition-colors flex items-center">
                                Read Our Story <span className="ml-2">&rarr;</span>
                            </a>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurProcess;
