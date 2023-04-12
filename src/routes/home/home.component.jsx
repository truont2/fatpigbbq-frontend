import React from "react";
import SectionTwo from '../../components/sectiontwo/SectionTwo'

import Hero from "../../components/hero-component/Hero";
import Section1 from "../../components/section1/Section1";
import Location from "../../components/location/location.component";

// https://www.youtube.com/watch?v=tXlZCW26bto
// website tutorial 
// https://www.youtube.com/watch?v=l5gP3a--NpA&t=59s

export default function Home() {

  return (
    <>
      {/* <Carousel autoSlide={false} slides={slides}></Carousel> */}
      <Hero />
      <Section1 />
      <SectionTwo /> 
      <Location />
      {/* ordering options */}
      <div>reviews</div>
      <div>ordering options</div>
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
