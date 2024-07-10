import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Pagination, Navigation } from "swiper/modules";
import Data from "Entites/Data";
import { Avatar } from "./style";

export default function SimpleSlider() {
  const { images } = Data.person;
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1140}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((data) => (
          <SwiperSlide key={data.id}>
            <Avatar src={data.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
