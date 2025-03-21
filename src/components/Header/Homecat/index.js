import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Homecat.css";
import phone1 from "../../../assest/images/download.jpeg";
import phone2 from "../../../assest/images/download.jpeg";  



const smartphoneDeals = [
  {
    img: phone1, 
    name: "Motorola Edge 50 Pro",
    price: "Just ₹20,999*",
  },
  {
    img: phone2, 
    name: "Vivo T3 5G",
    price: "From ₹16,999*",
  },
  {
    img:phone2, 
    name: "CMF Phone 1 (8GB)",
    price: "Just ₹12,999*",
  },
  {
    img: phone2,
    name: "Oppo K12x 5G",
    price: "From ₹10,999*",
  },
  {
    img:phone2,
    name: "Moto G35 5G",
    price: "From ₹9,999*",
  },
  {
    img: phone2,
    name: "Moto G64 5G",
    price: "Just ₹12,999*",
  },
  {
    img: phone2,
    name: "Vivo T3 Pro 5G",
    price: "From ₹21,499*",
  },
];

const Homecat = () => {
  return (
    <section className="homecat">
      <div className="container3">
        <h3 className="title">Best Deals on Smartphones</h3>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true}}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="swiper-container"
        >
          {smartphoneDeals.map((phone, index) => (
            <SwiperSlide key={index} className="slide">
              <img src={phone.img} alt={phone.name} />
              <h4 className="phone-name">{phone.name}</h4>
              <p className="phone-price">{phone.price}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Homecat;
