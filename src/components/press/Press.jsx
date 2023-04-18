import React from "react";
// import wallpaper from "../../assets/meal.jpeg";
import visitEdmonds from "../../assets/visitEdmonds.png";
import seattleTimes from "../../assets/seattle-times-logo-960x450.jpg";
import edmondsBeacon from "../../assets/edmondsBeacon.png";
// https://www.edmondsbeacon.com/story/2018/07/13/news/southern-hospitality-makes-its-way-to-edmonds/19956.html
// https://www.seattletimes.com/life/food-drink/head-to-edmonds-for-the-classic-dim-sum-cart-experience-and-some-tasty-bbq/
// https://visitedmonds.com/blog/post/fat-pig-bbq-is-amazeballs
const Press = () => {
  return (
    <div className="max-w-[1400px] m-auto my-16 px-4">
      <h1 className="text-6xl pb-10 font-bold">Fat Pig in the news.</h1>
      <div className="m-auto grid lg:grid-cols-2 gap-4">
        {/* Left Side */}
        <div className="grid grid-cols-2 grid-rows-2 h-fit">
          <img
            className="col-span-1 object-cover object-fit w-full h-full p-2"
            src={visitEdmonds}
            alt="/"
          />
          <img
            alt="/"
            className="col-span-1 object-center object-fit w-full h-full p-2"
            src={edmondsBeacon}
          />
          <img
            className="col-span-2 object-cover w-full h-full p-2 object-left"
            src={seattleTimes}
            alt="/"
          />
        </div>
        {/* Right Side */}
        <div className="grid grid-rows-3 gap-4">
          <a href="https://www.seattletimes.com/life/food-drink/head-to-edmonds-for-the-classic-dim-sum-cart-experience-and-some-tasty-bbq/" className="bg-neutral-100 p-2 flex flex-col justify-center">
            <div>
              <span class="mt-1 text-gray-500 text-sm">Nov 30, 2022</span>
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                Head to Edmonds for the classic dim sum cart experience and some
                tasty BBQ
              </h2>
              <p class="leading-relaxed">
                They were incredibly tender, and the barbecue sauce softened up
                the little blackened bits that were clinging to the edges.
              </p>
            </div>
          </a>
          <a href="https://visitedmonds.com/blog/post/fat-pig-bbq-is-amazeballs" className="bg-neutral-100 p-2 flex flex-col justify-center">
            <div>
              <span class="mt-1 text-gray-500 text-sm">May 12, 2021</span>
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                'Fat Pig BBQ is 'Amazeballs'
              </h2>
              <p class="leading-relaxed">
                Customers rave about the fall-off-the-bone meat, the perfect
                sauce, and the delicious from-scratch cornbread at this
                hole-in-the-wall, pick-up-and-go barbecue restaurant.
              </p>
            </div>
          </a>
          <a href="https://www.edmondsbeacon.com/story/2018/07/13/news/southern-hospitality-makes-its-way-to-edmonds/19956.html" className="bg-neutral-100 p-2 flex flex-col justify-center">
            <div>
              <span class="mt-1 text-gray-500 text-sm">July 17, 2018</span>
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                Southern hospitality makes its way to Edmonds
              </h2>
              <p class="leading-relaxed">
                Passion for food and a sense of community is one thing that
                transcends culture and race, and Truong is a prime example of
                that.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Press;
