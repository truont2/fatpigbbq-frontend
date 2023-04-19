import React from "react";
import wallpaper from "../../assets/meal.jpeg";

export default function Contact() {
  return (
    <div>
    <section className="text-gray-600 body-font relative font-Roboto">
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
            Contact Us
          </h1>
        </div>
      </div>
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Please feel free to reach out to us for any questions!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form action="https://formsubmit.co/fca1ecffd8e29794c41b539d334e8485" method="POST">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    style={{fontFamily: "Arial"}}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    style={{fontFamily: "Arial"}}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-36 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    style={{fontFamily: "Arial"}}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto bg-[#813400] hover:bg-[#212427] text-white font-semibold hover:text-white py-2 px-4 rounded transition ease-out duration-200">
                  Send Message
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href="mailto:fatbigbbq@yahoo.com">fatbigbbq@yahoo.com</a><br />
                <a href="tel:4253617640" className="mt-3">(425) 361-7640</a>
                <p className="leading-normal my-5">
                  7533 Olympic View Drive
                  <br />
                  Edmonds, WA 98026
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section >
    </div>
  );
}
