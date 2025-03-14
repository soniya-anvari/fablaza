
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { off_price, shorten_text } from "../../helper/helper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../../assets/styles/style.css";
import ProductsCard from '../Products/ProductCard';

function Slider({ Products }) {
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
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: "#containerForBullets", // المنت مورد نظر برای نمایش پیجینیشن
          type: "progressbar",             // نوع پیجینیشن (bullets, progressbar, etc.)
          bulletClass: "custom-bullet", // کلاس سفارشی برای هر بولت
          bulletActiveClass: "active",  // کلاس سفارشی برای بولت فعال
          clickable: true,              // قابلیت کلیک کردن روی بولت‌ها
          dynamicBullets: true,
        }}



        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {Products?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductsCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id='containerForBullets'></div>
      <div className=' flex items-center gap-5 mx-auto justify-end mt-5'>
        <button className="arrow-right arrow bg-text_muted p-3 rounded-full">
          <svg width="10" height="13" viewBox="0 0 8 14" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13L7 7L0.999999 1" stroke="#2B7DC0" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
        <button className="arrow-left arrow bg-text_muted p-3 rounded-full">
          <svg width="10" height="13" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L1 7L7 1" stroke="#2B7DC0" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Slider;
