import React from "react";
import "./footer.styles.css";
import logo from '../../assets/fatpiglogo.png'

const Footer = () => {
  return (
    <div className="footer pt-10 bg-black text-white">
      <footer className=" body-font font-Roboto">
        <div className="container px-5 mb-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href='/' className="flex title-font font-medium items-center md:justify-start justify-center ">
              <img src={logo} style={{ width: "40px" }} alt='logo'/>
              <span className="ml-3 text-xl font-CooperBlack">
                Fat Pig BBQ
              </span>
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  tracking-widest text-sm mb-3 font-bold">
                COMPANY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="/about-page"
                    className=" hover:text-gray-800"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className=" hover:text-gray-800"
                  >
                    Contact
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font tracking-widest text-sm mb-3 font-bold">
                DELIVERY/ORDER
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://www.ubereats.com/store/fat-pig-bbq/S0VhUzV1RnyR1Jh3vmWdHw"
                    className=" hover:text-gray-800"
                  >
                    Uber
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.doordash.com/store/fat-pig-bbq-edmonds-429805/"
                    className=" hover:text-gray-800"
                  >
                    DoorDash
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.grubhub.com/restaurant/fat-pig-bbq-7533-olympic-view-dr-edmonds/970085"
                    className=" hover:text-gray-800"
                  >
                    GrubHub
                  </a>
                </li>
                {/* <li>
                <a href="" className="text-gray-600 hover:text-gray-800">SquareSpace</a>
              </li> */}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font tracking-widest text-sm mb-3 font-bold">
                FOLLOW US
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://www.facebook.com/myfatpigbbq"
                    className=" hover:text-gray-800"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/fatpigbbq/"
                    className=" hover:text-gray-800"
                  >
                    Instagram
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row text-[#666]">
            <p className=" text-sm text-center sm:text-left">
              © 2022 Fat Pig BBQ, All Rights Reserved
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                className=" ml-3"
                href="https://www.facebook.com/myfatpigbbq"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
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
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
