import { Disclosure } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/fatpiglogo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-page" },
    { name: "Menu", path: "/menu" },
    { name: "Catering", path: "/catering" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

              {/* Logo Section */}
              <Link to="/" className="flex items-center group">
                <img
                  className={`h-10 w-auto transition-transform ${scrolled ? 'scale-90' : 'scale-100'}`}
                  src={logo}
                  alt="Fat Pig BBQ"
                />
                <span className={`ml-3 text-xl font-serif font-bold tracking-widest uppercase text-white transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-90'}`}>
                  Fat Pig BBQ
                </span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-serif font-bold text-lg tracking-widest uppercase hover:text-brand-red transition-all duration-300 ${location.pathname === link.path ? "text-brand-red" : "text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Social Icons */}
                <div className="flex items-center space-x-4 border-l border-gray-600 pl-6">
                  <a href="https://www.facebook.com/myfatpigbbq" target="_blank" rel="noreferrer" className="text-white hover:text-blue-500 transition-colors">
                    <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                  </a>
                  <a href="https://www.instagram.com/fatpigbbq/" target="_blank" rel="noreferrer" className="text-white hover:text-pink-500 transition-colors">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
                  </a>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700/50 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {open && (
              <Disclosure.Panel
                static
                as={motion.div}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-brand-dark/95 backdrop-blur-xl overflow-hidden"
              >
                <div className="px-4 pt-2 pb-6 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block px-3 py-4 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-brand-red transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="mt-4 flex justify-center space-x-6">
                    <a href="https://www.facebook.com/myfatpigbbq" className="text-gray-400 hover:text-blue-500">
                      <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/fatpigbbq/" className="text-gray-400 hover:text-pink-500">
                      <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
                    </a>
                  </div>
                </div>
              </Disclosure.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
