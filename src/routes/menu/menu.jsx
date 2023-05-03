import React from "react";
// import styles from "../../styles/Navbar.module.css";
// https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9
import BackToTop from "../../components/backtotop/BackToTop.jsx";

import { Link } from "react-scroll";
import { mealItems, drinkItems, sideItems } from "./menuItems.js";
import wallpaper from "../../assets/meal.jpeg";
import menuPDF from "../../assets/menu.pdf";
import "./menu.styles.css";
function Menu() {
  return (
    <section className="text-gray-600 body-font font-Roboto">
      <BackToTop />
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
        <div className="container md:px-5 py-7 mx-auto" key="meals">
          <div className="w-fit mx-auto text-center text-gray-500  transition east-in-out ">
            <a
              href={menuPDF}
              target="_blank"
              className={`new-link md:text-xl transition ease-in-out font-medium`}
              rel="noreferrer"
            >
              View Menu PDF
            </a>

            <div className="my-5 text-lg">
              <h3>
                * We also cater to large and small parties. Please contact us
                for more information
              </h3>
              <h5>
                Note: Prices are subject to change in response to market
                conditions. Thank you for understanding
              </h5>
            </div>
          </div>

          <div
            id="menu nav"
            className="grid grid-cols-1 md:grid-cols-3 text-center max-w-[600px] mx-auto my-10 gap-3 "
          >
            <div>
              <Link
                to="meals"
                smooth={true}
                duration={800}
                activeClass="active"
                spy={true}
                hashSpy={true}
                offset={-100}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                className="cursor-pointer font-bold "
              >
                <div
                  className="button button--winona p-0 relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest align-middle overflow-hidden"
                  data-text="Meals"
                >
                  <span className="align-middle block">Meals</span>
                </div>
              </Link>
            </div>
            <div>
              <Link
                to="sides"
                smooth={true}
                duration={800}
                activeClass="active"
                spy={true}
                hashSpy={true}
                offset={-100}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                className="cursor-pointer font-bold"
              >
                <div
                  className="hover: button button--winona p-0 relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest align-middle overflow-hidden"
                  data-text="Sides"
                >
                  <span className="align-middle block">Sides</span>
                </div>
              </Link>
            </div>
            <div>
              <Link
                to="beverages"
                smooth={true}
                duration={800}
                activeClass="active"
                spy={true}
                hashSpy={true}
                offset={-100}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                className="cursor-pointer font-bold"
              >
                <div
                  className="button button--winona p-0 relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest align-middle overflow-hidden"
                  data-text="Beverages"
                >
                  <span className="align-middle block">Beverages</span>
                </div>
              </Link>
            </div>
          </div>

          {/* content */}
          <h3
            className="text-4xl font-medium title-font mb-5 pt-5 text-center "
            id="meals"
          >
            Meals
          </h3>
          <div className="flex flex-wrap m-4 justify-center ">
            {/* map through the data twice for two sections menu and sides */}
            {mealItems.map((item) => {
              return (
                <div
                  className="lg:w-1/4 md:w-1/2 py-4 md:p-4 w-full"
                  key={item.title}
                >
                  <div
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt={item.title}
                      className="object-cover object-center w-full h-full block"
                      src={item.image}
                    />
                  </div>
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
        <div className="container px-5 pt-10 mx-auto" key="sides" id="sides">
          <h3 className="text-4xl font-medium title-font font-CooperBlack text-gray-500 mb-5 pt-5 text-center">
            Sides
          </h3>
          <div className="flex flex-wrap md:m-4  justify-center">
            {/* map through the data twice for two sections menu and sides */}
            {sideItems.map((item) => {
              return (
                <div
                  className="lg:w-1/4 md:w-1/2 py-4 md:p-4 w-full"
                  key={item.title}
                >
                  <div
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={item.image}
                    />
                  </div>
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
        <div
          className="container px-5 py-10 mx-auto"
          key="beverages"
          id="beverages"
        >
          <h3 className="text-4xl font-medium title-font font-CooperBlack text-gray-500 mb-5 pt-5 text-center">
            Beverages
          </h3>
          <div className="flex flex-wrap md:m-4 justify-center">
            {/* map through the data twice for two sections menu and sides */}
            {drinkItems.map((item) => {
              return (
                <div
                  className="lg:w-1/4 md:w-1/2 py-4 md:p-4 w-full"
                  key={item.title}
                >
                  <div className="mt-4">
                    <div
                      href="/"
                      className="block relative h-48 rounded overflow-hidden"
                    >
                      <img
                        alt="ecommerce"
                        className="object-cover md:object-left object-center w-full h-full block"
                        src={item.image}
                      />
                    </div>
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
