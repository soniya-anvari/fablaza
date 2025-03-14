import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

import "../../assets/styles/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { off_price, shorten_text } from "../../helper/helper";
import ProductsCard from "../Products/ProductCard";
function SliderOff({ offProducts }) {
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        slidesOffsetAfter={30}
        modules={[Navigation, Mousewheel, Keyboard]}
        className='mySwiper '>
        {offProducts?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductsCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SliderOff;
