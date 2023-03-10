import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import dynamic from "next/dynamic";
import CustomLink from "../components/elements/custom-link";

export default function Location({ data }) {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });
  return (
    <section className="text-gray-600 body-font relative container px-5 py-10 mx-auto">
      <div className=" text-center mb-0">
        <h1 className="text-4xl font-medium title-font text-[#212427] mb-5 text-center font-CooperBlack">
          Location and Hours
        </h1>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#813400] inline-flex"></div>
        </div>
      </div>
      <div className="container px-5 md:py-16 py-5 mx-auto flex sm:flex-nowrap flex-wrap md:text-start text-center">
        <div className="lg:w-2/3 md:w-1/2 w-screen h-80 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="absolute inset-0 bg-gray-300">
            <MapWithNoSSR />
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 font-Roboto">
          <h1 className="text-[#212427] text-3xl mb-1 font-large title-font">
            Information
          </h1>
          <div className="relative my-4">
            <h2 className="title-font font-semibold text-[#212427] tracking-widest text-s">
              LOCATION
            </h2>
            <p className="mt-1">7533 Olympic View Dr, Edmonds, WA 98026</p>
          </div>
          <div className="relative mb-4">
            <h2 className="title-font font-semibold text-[#212427] tracking-widest text-s">
              HOURS
            </h2>
            <p className="mt-1">Mon - Thurs: 11am - 7:30pm</p>
            <p className="mt-1">Fri: 11am - 8:00pm</p>
            <p className="mt-1">Sat: 11am - 8:00pm</p>
          </div>
          <a
            className=" with-arrow hover:underline md:ml-0 mx-auto"
            href="https://www.google.com/maps/place/Fat+Pig+BBQ/@47.8316326,-122.3389854,17z/data=!3m1!4b1!4m5!3m4!1s0x5490052a7d10f1c3:0xff02e07c8951f070!8m2!3d47.8315578!4d-122.3367393"
          >
            <div className="flex flex-row items-center text-[#212427]">Get Directions <FaRegArrowAltCircleRight className="ml-2"/></div>
          </a>
        </div>
      </div>
    </section>
  );
}
