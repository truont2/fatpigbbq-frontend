import React, { useState } from "react";
// import { Carousel } from "flowbite-react";
import image from "../../assets/DSC_7011.jpg";
import image2 from "../../assets/DSC_7015.jpg";
import image3 from "../../assets/DSC_7018.jpg";
import image4 from "../../assets/DSC_7022.jpg";
import image5 from "../../assets/DSC_7032.jpg";


import Carousel from "../../components/carousel/Carousel";

// https://www.youtube.com/watch?v=tXlZCW26bto

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
      <Carousel autoSlide={false} slides={slides}></Carousel>
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
