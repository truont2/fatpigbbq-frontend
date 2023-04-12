import React from "react";
import "./location.styles.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

// https://developers.google.com/maps/documentation/embed/get-started

export default function Location({ data }) {
  return (

      <div className="m-auto pb-16 px-4 grid lg:grid-cols-2 grid-cols-1 gap-3">
        {/* need to hide the api key  */}
        {/* https://www.freecodecamp.org/news/hide-api-keys-in-frontend-apps-using-netlify-functions/#:~:text=Create%20a%20serverless%20function&text=In%20this%20functions%20directory%2C%20create,images%20from%20the%20Pixabay%20API. */}
        {/* https://blog.hubspot.com/website/how-to-embed-google-map-in-html#:~:text=To%20make%20a%20responsive%20Google,with%20the%20class%20google%2Dmap. */}
        <div className="google-map">
          <iframe
          className="col-span-1 lg:col-span-2"
            title="test"
            width="900"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=APIKEY
    &q=fat+pig+bbq, Edmonds+WA"
          ></iframe>
        </div>
        <div className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 font-Roboto lg:col-span-1 col-span-2">
          <h1 className="text-[#212427] text-3xl mb-1 font-large title-font">
            Information
          </h1>
          <div className="relative my-4">
            <h2 className="title-font font-semibold text-[#212427] tracking-widest text-s">
              LOCATION
            </h2>
            <p className="mt-1">7533 Olympic View Dr, Edmonds, WA 98026</p>
          </div>
          <div className="relative mb-4">
            <h2 className="title-font font-semibold text-[#212427] tracking-widest text-s">
              HOURS
            </h2>
            <p className="mt-1">Mon - Thurs: 11am - 7:30pm</p>
            <p className="mt-1">Fri: 11am - 8:00pm</p>
            <p className="mt-1">Sat: 11am - 8:00pm</p>
          </div>
          <h6>Note:</h6>
          <p>
            Hours may be subject to change during the holidays. Please check our
            facebok for any updated Information
          </p>
        </div>
      </div>
  );
}
