import React from "react";

// Import selected images
import fullRack from "../../assets/meals/full-rack-ribs.jpg";
import chickenMeal from "../../assets/meals/large-chicken-meal.jpg";
import coleslaw from "../../assets/meals/coleslaw.jpg";
import cornbread from "../../assets/meals/cornbread.jpg";
import porkSandwich from "../../assets/meals/large-pulled-pork-sandwich.jpg";
import beans from "../../assets/meals/beans.jpg";

const ImageGallery = () => {
    const images = [
        { src: fullRack, alt: "Full Rack of Ribs", caption: "Flame-grilled to perfection" },
        { src: chickenMeal, alt: "BBQ Chicken Meal", caption: "Signature Chicken" },
        { src: porkSandwich, alt: "Pulled Pork Sandwich", caption: "Pulled Pork" },
        { src: cornbread, alt: "Homemade Cornbread", caption: "Fresh Cornbread" },
        { src: beans, alt: "BBQ Beans", caption: "BBQ Beans" },
        { src: coleslaw, alt: "Creamy Coleslaw", caption: "Creamy Coleslaw" },
    ];

    return (
        <div className="bg-[#FDFBF7] py-24 border-t border-brand-red/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block border-b-2 border-brand-red pb-2 mb-6">
                        <span className="text-brand-red tracking-widest uppercase text-sm font-bold">Gallery</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1F1A17] mb-6">Taste of the Pit</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif italic leading-relaxed">
                        A glimpse at what makes our customers keep coming back.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-3 shadow-md border border-[#E5E0D8] transform transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-64 object-cover object-center filter contrast-110"
                                />
                            </div>
                            <div className="pt-4 pb-2 text-center">
                                <span className="font-serif text-lg text-[#1F1A17] italic group-hover:text-brand-red transition-colors">
                                    {img.caption}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
