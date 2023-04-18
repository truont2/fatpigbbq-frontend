import React from 'react'
import wallpaper from "../../assets/meal.jpeg";

const Press = () => {
  return (
    <div>
      <div>
      <div className="relative w-screen bg-black overflow-hidden">
        {/* background-repeat: no-repeat;
  background-size: auto;
  /* background-attachment: fixed; 
  background-position: center; */}
        <div
          className="bg-fixed bg-repeat-no bg-cover bg-left-bottom w-screen md:h-[250px] h-[100px] h-50 object-cover object-center opacity-70"
          style={{ backgroundImage: `url(${wallpaper})` }}
        ></div>
        <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="invisible md:visible md:text-4xl text-4xl font-medium title-font text-center">
            Press
          </h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Press
