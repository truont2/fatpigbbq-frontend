import React from "react";
import logo from '../../assets/fatpiglogo.png';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white font-sans border-t border-brand-red/20">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="space-y-4">
            <a href='/' className="flex items-center space-x-3 group">
              <img src={logo} className="w-12 h-12 transition-transform group-hover:scale-110" alt="logo" />
              <span className="text-xl font-bold font-serif tracking-wide text-white">
                Fat Pig BBQ
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Authentic slow-cooked, flame-grilled BBQ in the heart of Edmonds. Fast service, unforgettable flavor.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-brand-red font-bold tracking-wider text-sm mb-4 uppercase">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about-page" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">About Us</a></li>
              <li><a href="/menu" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Our Menu</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Contact</a></li>
            </ul>
          </div>

          {/* Delivery Column */}
          <div>
            <h3 className="text-brand-red font-bold tracking-wider text-sm mb-4 uppercase">Order Online</h3>
            <ul className="space-y-3">
              <li><a href="https://www.ubereats.com/store/fat-pig-bbq/S0VhUzV1RnyR1Jh3vmWdHw" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">Uber Eats</a></li>
              <li><a href="https://www.doordash.com/store/fat-pig-bbq-edmonds-429805/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">DoorDash</a></li>
              <li><a href="https://www.grubhub.com/restaurant/fat-pig-bbq-7533-olympic-view-dr-edmonds/970085" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">GrubHub</a></li>
            </ul>
          </div>

          {/* Social / Contact Column */}
          <div>
            <h3 className="text-brand-red font-bold tracking-wider text-sm mb-4 uppercase">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/myfatpigbbq" className="bg-neutral-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/fatpigbbq/" className="bg-neutral-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/20 py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Fat Pig BBQ. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with 🔥 in Edmonds</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;