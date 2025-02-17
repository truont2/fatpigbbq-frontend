import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";
import logo from "../../assets/fatpiglogo.png";
import "./navbar.styles.css";

// source https://codepen.io/Vinny92/pen/XWNdxvj

function Navbar() {
  const [color, setColor] = useState(false);
  const [open, setOpen] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  // const [flyer, setFlyer] = useState(false);
  // const [flyerTwo, setFlyerTwo] = useState(false);
  return (
    <>
      <Disclosure
        as="nav"
        className={`py-2 ${color ? "nav nav-bg" : "nav"} z-50`}
      >
        {() => (
          <>
            {/* This example requires Tailwind CSS v2.0+ */}
            <div className="relative font-Roboto">
              <div className="mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a
                      href="/"
                      className="flex title-font font-medium items-center md:justify-start justify-center"
                    >
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src={logo}
                        alt="fat pig logo"
                      />
                      <span className="ml-3 text-xl md:text-2xl xl:text-4xl text-white invisible lg:visible  font-semibold">
                        Fat Pig BBQ
                      </span>
                    </a>
                  </div>
                  <div className="-mr-2 -my-2 md:hidden relative">
                    <button
                      type="button"
                      className="z-50 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Open menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                  <nav className="hidden md:flex">
                    {/* drop down menu */}
                    {/* <button
                      type="button"
                      className="
                   group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pb-8'
                  "
                      onClick={() => setFlyer(!flyer)}
                    >
                      <span className="text-sm lg:text-lg">Solutions</span>
                      <svg
                        className={
                          flyer === true
                            ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                            : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      onMouseLeave={() => setFlyer(false)}
                      className={
                        flyer
                          ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-12 transform px-2 w-screen max-w-md sm:px-0 lg:-ml-10 lg:left-1/2 lg:-translate-x-3/4"
                          : " opacity-0 translate-y-1 absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 -z-50"
                      }
                    >
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <a
                            href="/"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Analytics
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Get a better understanding of where your traffic
                                is coming from.
                              </p>
                            </div>
                          </a>
                          <a
                            href="/"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Engagement
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Speak directly to your customers in a more
                                meaningful way.
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <a
                      href="/"
                      className={`nav-link text-sm lg:text-lg font-medium text-white`}
                    >
                      Home
                    </a>
                    <a
                      href="/about-page"
                      className={`nav-link text-sm lg:text-lg font-medium text-white`}
                    >
                      About
                    </a>
                    <a
                      href="/menu"
                      className={`nav-link text-sm lg:text-lg font-medium text-white`}
                    >
                      Menu
                    </a>
                    <a
                      href="/contact"
                      className={`nav-link text-sm lg:text-lg font-medium text-white`}
                    >
                      Contact
                    </a>
                    {/* <a
                      href="/press"
                      className={`nav-link text-lg font-medium text-white`}
                    >
                      Press
                    </a>
                    <a
                      href="/shop"
                      className={`nav-link text-lg font-medium text-white`}
                    >
                      Shop
                    </a> */}
                  </nav>
                  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    {/* <a
                      href="/contact"
                      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-[#212427] bg-white hover:bg-[#212427] hover:text-white transition ease-out duration-200 text-lg"
                    >
                      Contact Us
                    </a> */}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-white">
                      <a
                        className=" ml-3"
                        href="https://www.facebook.com/myfatpigbbq"
                      >
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-10 h-10"
                          viewBox="0 0 32 32"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        className="ml-3 "
                        href="https://www.instagram.com/fatpigbbq/"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-8 h-8"
                          viewBox="0 0 32 32"
                        >
                          <rect
                            width="24"
                            height="24"
                            x="4"
                            y="4"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M22 14.96a5.5 5.5 0 11-4.04-5.24 5.5 5.5 0 014.04 5.24zm2 0h.01"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

              <div
                className={
                  open
                    ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-auto"
                    : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden -z-50 pointer-events-none"
                }
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div className="flex justify-start lg:w-0 lg:flex-1">
                        <img
                          className="mx-auto h-14 w-auto"
                          src={logo}
                          alt="fat pig logo"
                        />
                        <span className="ml-3 mt-2 text-3xl font-CooperBlack text-black/30">
                          Fat Pig BBQ
                        </span>
                      </div>
                      <div className="-mr-2">
                        <button
                          type="button"
                          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          onClick={() => setOpen(!open)}
                        >
                          <span className="sr-only">Close menu</span>
                          {/* Heroicon name: outline/x */}
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        <a
                          href="/"
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/refresh */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-[rgba(129,52,0,255)]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          <span className="ml-3 text-base font-medium text-gray-900">
                            Home
                          </span>
                        </a>
                        <a
                          href="/about-page"
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/chart-bar */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-[rgba(129,52,0,255)]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                          <span className="ml-3 text-base font-medium text-gray-900">
                            About Page
                          </span>
                        </a>
                        <a
                          href="/menu"
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/shield-check */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-[rgba(129,52,0,255)]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                          <span className="ml-3 text-base font-medium text-gray-900">
                            Menu
                          </span>
                        </a>
                        <a
                          href="/contact"
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/view-grid */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-[rgba(129,52,0,255)]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span className="ml-3 text-base font-medium text-[#212427]">
                            Contact
                          </span>
                        </a>
                      </nav>
                    </div>
                  </div>
                  {/* <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Enterprise
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Guides
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Security
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Events
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div> */}
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Navbar;
