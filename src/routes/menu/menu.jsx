import React from "react";
// import styles from "../../styles/Navbar.module.css";
// https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9
import image from "../../assets/meals/full-rack-ribs.jpg";
import wallpaper from "../../assets/meal.jpeg";
function Menu() {
  const menuItem = [];
  return (
    <section className="text-gray-600 body-font font-Roboto">
      <div className="relative w-screen bg-black overflow-hidden">
        <div
          className="bg-fixed bg-repeat-no bg-cover bg-left-bottom w-screen md:h-[300px] h-50 object-cover object-center opacity-70"
          style={{ backgroundImage: `url(${wallpaper})` }}
        ></div>

        <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="md:text-7xl text-4xl font-medium title-font text-center font-CooperBlack">
            Menu
          </h1>
          <div className="mx-auto text-center" href="/">
            <a href="/" target="_blank" className={`md:text-lg text-base`}>
              View a PDF Menu
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="container px-5 pt-5 mx-auto" key="meals">
          <h3 className="text-2xl font-medium title-font  mb-5 pt-5 md:text-left text-center font-CooperBlack text-[#212427]">
            Meals
          </h3>
          <div className="flex flex-wrap -m-4">
            {/* map through the data twice for two sections menu and sides */}
            {menuItem.map((item) => {
              return (
                <>
                  {item.type === "meal" ? (
                    <div
                      className="lg:w-1/4 md:w-1/2 p-4 w-full"
                      key={item.title}
                    >
                      <a href='/' className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt={item.title}
                          className="object-cover object-center w-full h-full block"
                          src={image}
                        />
                      </a>
                      <div className="mt-4">
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {item.title}
                        </h2>
                        <p>{item.description}</p>
                        <p className="mt-1">${item.price}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div className="container px-5 pt-10 mx-auto" key="sides">
          <h3 className="text-2xl font-medium title-font font-CooperBlack text-[#212427] mb-5 pt-5 md:text-left text-center">
            Sides
          </h3>
          <div className="flex flex-wrap -m-4">
            {/* map through the data twice for two sections menu and sides */}
            {menuItem.map((item) => {
              return (
                <>
                  {item.type === "sides" ? (
                    <div
                      className="lg:w-1/4 md:w-1/2 p-4 w-full"
                      key={item.title}
                    >
                      <a href='/' className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-full block"
                          src={image}
                        />
                      </a>
                      <div className="mt-4">
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {item.title}
                        </h2>
                        <p>{item.description}</p>
                        <p className="mt-1">${item.price}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div className="container px-5 py-10 mx-auto" key="beverages">
          <h3 className="text-2xl font-medium title-font font-CooperBlack text-[#212427] mb-5 py=t-5 md:text-left text-center">
            Beverages
          </h3>
          <div className="flex flex-wrap -m-4">
            {/* map through the data twice for two sections menu and sides */}
            {menuItem.map((item) => {
              return (
                <>
                  {item.type === "beverages" ? (
                    <div
                      className="lg:w-1/4 md:w-1/2 p-4 w-full "
                      key={item.title}
                    >
                      <div className="mt-4">
                        <a href='/' className="block relative h-48 rounded overflow-hidden">
                          <img
                            alt="ecommerce"
                            className="object-cover md:object-left object-center w-full h-full block"
                            src={image}
                          />
                        </a>
                        <h2 className="text-gray-900 title-font text-2xl font-medium ">
                          {item.title}
                        </h2>
                        <p className="mt-1">${item.price}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
