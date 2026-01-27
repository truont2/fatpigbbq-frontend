import React from "react";

import wallpaper from "../../assets/meal.jpeg";

export default function Contact() {
  return (
    <div className="bg-brand-cream font-sans">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${wallpaper})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-6xl md:text-7xl font-serif font-bold text-white drop-shadow-lg"
          >
            Contact Us
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info Side */}
          <div className="space-y-12">
            <div>
              <div className="inline-block border-b-2 border-brand-red pb-2 mb-6">
                <span className="text-brand-red tracking-widest uppercase text-sm font-bold">Contact Us</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-xl md:text-2xl leading-relaxed font-light text-[#4A4A4A]">
                Have a question about our menu, catering services, or just want to say hello? Fill out the form or reach out directly!
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Visit Us</h3>
                  <p className="text-lg text-[#1F1A17] font-serif leading-relaxed max-w-xs">
                    7533 Olympic View Dr,<br />Edmonds, WA 98026
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Call Us</h3>
                  <a href="tel:4253617640" className="text-lg text-[#1F1A17] font-serif hover:text-brand-red transition-colors block">
                    (425) 361-7640
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Us</h3>
                  <a href="mailto:fatpigbbq@yahoo.com" className="text-lg text-[#1F1A17] font-serif hover:text-brand-red transition-colors block border-b border-gray-300 hover:border-brand-red pb-0.5 w-fit">
                    fatpigbbq@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side - Matching Catering Page Style */}
          <div className="border border-[#E5E0D8] bg-white p-10 md:p-14 shadow-sm relative">
            {/* Decorative Corner - Matches Catering */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-brand-red/20 -mt-2 -ml-2"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-brand-red/20 -mb-2 -mr-2"></div>

            <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b border-gray-200 pb-4">Send us a Message</h2>

            <form action="https://formsubmit.co/fca1ecffd8e29794c41b539d334e8485" method="POST" className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors resize-none"
                  placeholder="Tell us about your event or question..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-brand-red text-white font-bold py-4 shadow-md hover:bg-red-800 transition-colors uppercase tracking-widest text-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
