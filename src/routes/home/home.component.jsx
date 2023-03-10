import React from "react";
import { Carousel } from "flowbite-react";
import image from '../../assets/Fat-Pig-BBQ.jpeg'

export default function Home() {
  return (
    <div style={{borderRadius: '0'}}>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-[50rem] rounded-none">
        <Carousel>
          <img
            src={image}
            alt=""
          />
          <img
            src={image}
            alt=""
          />
          <img
            src={image}
            alt=""
          />
          <img
            src={image}
            alt=""
          />
          <img
            src={image}
            alt=""
          />
        </Carousel>
      </div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}
