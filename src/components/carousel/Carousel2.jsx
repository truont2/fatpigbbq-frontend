import React, { Component } from "react";
import Slider from "react-slick";
// https://www.youtube.com/watch?v=8kbS2WEZieU
import "./carousel.style.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", fill: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
export default class MultipleItems extends Component {
  render() {
    const { images } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };
    return (
      <div
        className="pb-10"
        style={{
          width: "70%",
          margin: "auto",
          position: "relative",
        }}
      >
        <Slider {...settings}>
          {images.map((image, key) => {
            return (
              <div>
                <img
                  src={image.url}
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
