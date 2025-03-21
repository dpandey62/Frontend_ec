import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./HomeBanner.css";

import banner1 from "../../../assest/images/1e425e74403181.5c2e97fb1cdee.jpg";
import banner2 from "../../../assest/images/2daefc74403181.5d62b92fd4ee0.jpg";
import banner3 from "../../../assest/images/31319774403181.5c2e97fb1d219.jpg";
import banner4 from "../../../assest/images/modern-sale-banner-website-slider-template-design_54925-45.avif";
import banner5 from "../../../assest/images/f52c9b74403181.5c2e97fb1fd3e.jpg";
import banner6 from "../../../assest/images/f52c9b74403181.5c2e97fb1fd3e.jpg";



const HomeBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Slide every 3 seconds
  };
  

  return (
    <div className="home-banner-section">
      <Slider {...settings}>
        <div className="banner-item">
          <img
            src={banner1}
            alt="Banner 1"
          />
        </div>
        <div className="banner-item">
          <img
            src={banner2}


            alt="Banner 2"
          />
        </div>
        <div className="banner-item">
          <img
            src={banner3}


            alt="Banner 3"
          />
        </div>
        <div className="banner-item">
          <img
            src={banner4}


            alt="Banner 4"
          />
        </div>
        <div className="banner-item">
          <img
            src={banner5}


            alt="Banner 5"
          />
        </div>
        <div className="banner-item">
          <img
            src={banner6}


            alt="Banner 6"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
