import React from "react";
import { motion } from "framer-motion";
import wallpaper from "../../assets/meal.jpeg";

export default function Contact() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${wallpaper})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-7xl font-serif font-bold text-white drop-shadow-lg"
          >
            Contact Us
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Have a question about our menu, catering services, or just want to say hello? Fill out the form or reach out directly!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-red text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Visit Us</h3>
                  <p className="mt-1 text-gray-600">7533 Olympic View Dr, Edmonds, WA 98026</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-red text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Call Us</h3>
                  <a href="tel:4253617640" className="mt-1 text-gray-600 hover:text-brand-red transition-colors">(425) 361-7640</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-red text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                  <a href="mailto:fatbigbbq@yahoo.com" className="mt-1 text-gray-600 hover:text-brand-red transition-colors">fatbigbbq@yahoo.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <form action="https://formsubmit.co/fca1ecffd8e29794c41b539d334e8485" method="POST" className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-shadow bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-shadow bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-shadow bg-gray-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-red text-white font-bold py-4 rounded-full shadow-lg hover:bg-red-800 transition-colors"
              >
                Send Message
              </motion.button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
