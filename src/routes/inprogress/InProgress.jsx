import React from 'react'
import wallpaper from "../../assets/meal.jpeg";
const InProgress = () => {
  return (
    <div>
      {" "}
      <div className="relative w-screen bg-black overflow-hidden">
        {/* background-repeat: no-repeat;
  background-size: auto;
  /* background-attachment: fixed; 
  background-position: center; */}
        <div
          className="bg-fixed bg-repeat-no bg-cover bg-left-bottom w-screen md:h-[300px] h-50 object-cover object-center opacity-70"
          style={{ backgroundImage: `url(${wallpaper})` }}
        ></div>
        <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="md:text-4xl text-4xl font-medium title-font text-center font-CooperBlack">
            Page under construction
          </h1>
        </div>
      </div>
    </div>
  )
}

export default InProgress
