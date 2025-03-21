import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./minislider.css"; // Custom styling

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider">
          <img src={require("../../../../assest/images/download (1).jpeg")} alt="Slide 1" className="slider-image" />
        </div>
        <div className="slider">
          <img src={require("../../../../assest/images/713QKJ4vevL._SY695_.jpg")} alt="Slide 2" className="slider-image" />
        </div>
        <div className="slider">
          <img src={require("../../../../assest/images/713QKJ4vevL._SY695_.jpg")} alt="Slide 3" className="slider-image" />
        </div>
        <div className="slider">
          <img src={require("../../../../assest/images/51xE68OfNsL._SS40_.jpg")} alt="Slide 4" className="slider-image" />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
