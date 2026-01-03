import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel2 = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Cleaner look, rely on dots/swipe
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)"
  };

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="outline-none focus:outline-none">
            <div className="aspect-w-16 aspect-h-12 md:aspect-h-9 overflow-hidden rounded-xl">
              <img
                src={image.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel2;
