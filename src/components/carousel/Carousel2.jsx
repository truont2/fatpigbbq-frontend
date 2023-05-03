import React, { Component } from "react";
import Slider from "react-slick";
// https://www.youtube.com/watch?v=8kbS2WEZieU
import "./carousel.style.css";

export default class MultipleItems extends Component {
  render() {
    const { images } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div
        className=""
        style={{
          width: "80%",
          margin: "0 auto",
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
