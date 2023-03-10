import React from "react";

export default function Contact() {
  return (
    <div>
    <section class="text-gray-600 body-font relative font-Roboto">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl font-medium mb-4 text-[#212427] font-CooperBlack">
            Contact Us!
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Please feel free to reach out to us for any questions!
          </p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <form action="https://formsubmit.co/fca1ecffd8e29794c41b539d334e8485" method="POST">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    style={{fontFamily: "Arial"}}
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    style={{fontFamily: "Arial"}}
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-36 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    style={{fontFamily: "Arial"}}
                    required
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto bg-[#813400] hover:bg-[#212427] text-white font-semibold hover:text-white py-2 px-4 rounded transition ease-out duration-200">
                  Send Message
                </button>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href="mailto:fatbigbbq@yahoo.com">fatbigbbq@yahoo.com</a><br />
                <a href="tel:4253617640" className="mt-3">(425) 361-7640</a>
                <p class="leading-normal my-5">
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
