import React from "react";
// import { Carousel } from "flowbite-react";
import image from "../../assets/DSC_7011.jpg";
import image2 from "../../assets/DSC_7015.jpg";
import image3 from "../../assets/DSC_7018.jpg";
import image4 from "../../assets/DSC_7022.jpg";
import image5 from "../../assets/DSC_7032.jpg";
import SectionTwo from '../../components/sectiontwo/SectionTwo'

import Carousel from "../../components/carousel/Carousel";
import Hero from "../../components/hero-component/Hero";
import Section1 from "../../components/section1/Section1";
import Location from "../../components/location/location.component";

// https://www.youtube.com/watch?v=tXlZCW26bto
// website tutorial 
// https://www.youtube.com/watch?v=l5gP3a--NpA&t=59s

export default function Home() {
  const slides = [
    {
      url: image,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
    {
      url: image5,
    },
  ];

  return (
    <>
      {/* <Carousel autoSlide={false} slides={slides}></Carousel> */}
      <Hero />
      <Section1 />
      <SectionTwo /> 
      <Location />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </>
  );
}
