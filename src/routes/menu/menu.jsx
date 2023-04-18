import React from "react";
// import styles from "../../styles/Navbar.module.css";
// https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9
import { mealItems, drinkItems, sideItems } from "./menuItems.js";
import wallpaper from "../../assets/meal.jpeg";
import menuPDF from '../../assets/menu.pdf';

function Menu() {
  return (
    <section className="text-gray-600 body-font font-Roboto">
      <div className="relative w-screen bg-black overflow-hidden">
        <div
          className="bg-fixed bg-repeat-no bg-cover bg-left-bottom w-screen md:h-[250px] h-[100px] object-cover object-center opacity-70"
          style={{ backgroundImage: `url(${wallpaper})` }}
        ></div>

        <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="invisible md:visible md:text-4xl text-4xl font-medium title-font text-center">
            Menu
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] m-auto pt-6 px-4 flex justify-center flex-col items-center text-gray-500">
        <div className="container px-5 py-10 mx-auto" key="meals">
          <div
            className="w-fit mx-auto text-center text-gray-500  transition east-in-out"
            href="../../"
          >
            <a href={menuPDF} target="_blank" className={`md:text-xl transition ease-in-out hover:text-slate-950 font-medium`} rel="noreferrer">
              View a PDF Menu
            </a>

            <div className="my-5 text-lg">
              <h3>
                * We also cater to large and small parties. Please contact us for
                more information
              </h3>
              <h5>
                Note: Prices are subject to change in response to market
                conditions. Thank you for understanding
              </h5>
            </div>
          </div>

          {/* content */}
          <h3 className="text-4xl font-medium title-font mb-5 pt-5 text-center ">
            Meals
          </h3>
          <div className="flex flex-wrap m-4 justify-center ">
            {/* map through the data twice for two sections menu and sides */}
            {mealItems.map((item) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.title}>
                  <a
                    href="/"
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt={item.title}
                      className="object-cover object-center w-full h-full block"
                      src={item.image}
                    />
                  </a>
                  <div className="mt-4">
                    <h2 className="text-gray-500 title-font text-lg my-1">
                      {item.title}
                    </h2>
                    <p>{item.description}</p>
                    <p className="mt-1">${item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container px-5 pt-10 mx-auto" key="sides">
          <h3 className="text-4xl font-medium title-font font-CooperBlack text-gray-500 mb-5 pt-5 text-center">
            Sides
          </h3>
          <div className="flex flex-wrap m-4  justify-center">
            {/* map through the data twice for two sections menu and sides */}
            {sideItems.map((item) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.title}>
                  <a
                    href="/"
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={item.image}
                    />
                  </a>
                  <div className="mt-4">
                    <h2 className="text-gray-600 title-font text-lg font-medium">
                      {item.title}
                    </h2>
                    <p>{item.description}</p>
                    <p className="mt-1">${item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container px-5 py-10 mx-auto" key="beverages">
          <h3 className="text-4xl font-medium title-font font-CooperBlack text-gray-500 mb-5 pt-5 text-center">
            Beverages
          </h3>
          <div className="flex flex-wrap m-4 justify-center">
            {/* map through the data twice for two sections menu and sides */}
            {drinkItems.map((item) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full " key={item.title}>
                  <div className="mt-4">
                    <a
                      href="/"
                      className="block relative h-48 rounded overflow-hidden"
                    >
                      <img
                        alt="ecommerce"
                        className="object-cover md:object-left object-center w-full h-full block"
                        src={item.image}
                      />
                    </a>
                    <h2 className="text-gray-600 title-font text-2xl font-medium ">
                      {item.title}
                    </h2>
                    <p className="mt-1">${item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
