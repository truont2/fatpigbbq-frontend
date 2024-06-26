import React from "react";
import wallpaper from "../../assets/meal.jpeg";
import image from "../../assets/DSC_7011.jpg";
import image2 from "../../assets/DSC_7015.jpg";
import image3 from "../../assets/DSC_7018.jpg";
import image4 from "../../assets/DSC_7022.jpg";
import image5 from "../../assets/meals/porkMeal.jpg";
import reggie from "../../assets/o.jpg";
import Carousel2 from "../../components/carousel/Carousel2";
// import data from '../../assets/t.jpg'

function About() {
  const slides = [
    {
      url: reggie,
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
    {
      url: image,
    },
  ];
  return (
    <div>
      {" "}
      <div className="relative w-screen bg-black overflow-hidden">
        {/* background-repeat: no-repeat;
  background-size: auto;
  /* background-attachment: fixed; 
  background-position: center; */}
        <div
          className="bg-fixed bg-repeat-no bg-cover bg-left-bottom w-screen md:h-[250px] h-[100px] object-cover object-center opacity-70"
          style={{ backgroundImage: `url(${wallpaper})` }}
        ></div>
        <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="md:visible invisible md:text-4xl text-4xl font-medium title-font text-center font-CooperBlack">
            About Us
          </h1>
        </div>
      </div>
      {/* content */}
      <div className="max-w-[1400px] m-auto pt-6 px-4 flex justify-center flex-col items-center text-gray-500">
        <div className=" text-center lg:col-span-2 col-span-2 my-10 max-w-[1000px]">
          <h3 className="text-5xl font-bold">The Story of Fat Pig </h3>
          <p data-testid="custom-element" className="pt-10 text-2xl">
            Fat Pig BBQ was established in 2018 by Bao Truong. Bao has always
            enjoyed cooking barbeque for his family & friends at his home. Bao
            later realized that he wanted share his passion to provide great
            barbeque to everyone in the Greater Seattle Area. Shortly after, Bao
            left his Civil Engineering job and opened the doors to Fat Pig BBQ
            in Edmonds.
          </p>
        </div>
        <Carousel2 images={slides} />
      </div>
    </div>
  );
}

export default About;
