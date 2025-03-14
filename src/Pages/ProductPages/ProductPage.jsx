
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Account_note from "../../assets/images/icons/Account-note.svg"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import "../../assets/styles/style.css"

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Form } from 'react-router-dom';

const ProductPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isOption, setOption] = useState({
        option1: false,
        option2: false,
    })
    return (
        <div className="bg-bg_gray_pages">
            <div className="container mx-auto md:w-10/12 flex flex-col lg:flex-row gap-3 items-start py-6">
                <div className="w-full lg:w-3/4 py-14 px-5 rounded-md flex md:flex-row flex-col gap-8 bg-white shadow-md">
                    <div className="w-1/4">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#cacaca',
                                '--swiper-pagination-color': '#cacaca',
                            }}
                            loop={true}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2 h-[200px] "
                        >
                            <SwiperSlide className='custom-slide'>
                                <img className='' src="https://m.media-amazon.com/images/I/215bV8bYk9L._AC_.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className='custom-slide'>
                                <img src="https://m.media-amazon.com/images/I/31adXzKd9KL._AC_.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className='custom-slide'>
                                <img src="https://m.media-amazon.com/images/I/21enTu2fQSL._AC_.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className='custom-slide'>
                                <img className='' src="https://m.media-amazon.com/images/I/215bV8bYk9L._AC_.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className='custom-slide'>
                                <img src="https://m.media-amazon.com/images/I/31adXzKd9KL._AC_.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className='custom-slide'>
                                <img src="https://m.media-amazon.com/images/I/21enTu2fQSL._AC_.jpg" />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper3 h-[80px]"
                        >
                            <SwiperSlide className='custom-slide'>
                                <img className='' src="https://m.media-amazon.com/images/I/215bV8bYk9L._AC_.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className='custom-slide'>
                                <img src="https://m.media-amazon.com/images/I/31adXzKd9KL._AC_.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className='custom-slide'>
                                <img src="https://m.media-amazon.com/images/I/21enTu2fQSL._AC_.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className='custom-slide'>
                                <img className='' src="https://m.media-amazon.com/images/I/215bV8bYk9L._AC_.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className='custom-slide'>
                                <img src="https://m.media-amazon.com/images/I/31adXzKd9KL._AC_.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className='custom-slide'>
                                <img src="https://m.media-amazon.com/images/I/21enTu2fQSL._AC_.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="w-3/4 ml-7">
                        <div className='flex flex-col gap-4 mb-5'>
                            <p className='text-clamp_1 text-black '>
                                Calvin Klein Man Perfume for Men Eau De Toilette 50ML
                            </p>
                            <p className='text-clamp_1 text-purple_d font-Iran_Bold'>
                                6,178,000 تومان
                            </p>
                        </div>
                        <div className='py-6 border-t-[1px] border-b-[1px] border-[#00000041]'>
                            Editions :
                        </div>
                        <div className='mt-5'>
                            <p>
                                Brand : Versace
                            </p>
                            <p>
                                Item form : Liquid
                            </p>
                            <p>
                                Item volume : 200 Milliliters
                            </p>
                            <p>
                                Scent : Spicy
                            </p>
                            <p>
                                Special features : Fresh
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/4  bg-white p-5 rounded-md">
                    <div className='flex items-center justify-center gap-3 border-b-[1px] border-bg_gray_pages pb-6 pt-4'>
                        <p className='text-purple_d font-Iran_Bold'>
                            مشاهده در آمازون
                        </p>
                        <svg class="w-10" focusable="false" aria-hidden="true" viewBox="0 0 40 35" data-testid="AmazonIconIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.4203 21.433L29.2495 19.6237C28.8887 19.0661 28.6968 18.416 28.6968 17.7519V10.1519C28.6968 7.11831 28.9166 0.655182 20.2553 0.655182C13.2093 0.655182 11.0305 4.4102 10.3568 6.73272C10.0893 7.65477 10.7178 8.59363 11.6729 8.69217L14.4038 8.97393C15.0466 9.04022 15.663 8.69904 15.9418 8.11606C16.4712 7.00877 17.394 5.35974 20.2416 5.35974C21.3447 5.35974 22.8959 5.82632 22.8959 7.19052C22.8959 9.16995 22.8933 10.1081 22.8933 10.1081C22.9007 10.5212 22.5679 10.8601 22.1547 10.8601H19.4854C17.4713 10.8601 9.81787 11.893 9.81787 19.5464C9.81787 27.1998 17.9391 26.3192 18.4783 26.1928C19.4843 25.9571 21.3691 25.2687 23.1405 23.5796C23.4381 23.2958 23.9129 23.3205 24.1714 23.6404L25.6018 25.4104C26.1579 26.0985 27.1807 26.1708 27.828 25.568L30.1793 23.378C30.7205 22.8738 30.8221 22.054 30.4203 21.433ZM18.6796 21.0065C15.9606 21.0065 16.0381 18.5482 16.6655 17.3812C17.2525 16.2892 18.8034 14.3536 22.9671 14.2217L23.0036 16.253C23.0308 17.7629 22.3361 19.2132 21.101 20.0822C20.3358 20.6208 19.5008 21.0065 18.6796 21.0065Z" fill="black"></path><path d="M0.759324 27.9949C0.345824 27.6212 0.7958 26.9595 1.29568 27.2057C4.8089 28.9364 11.4229 31.612 18.7339 31.612C26.2051 31.612 32.4554 29.8274 35.6012 28.7261C36.1127 28.547 36.4813 29.2165 36.0602 29.5577C33.5644 31.5791 28.2046 34.7063 18.9303 34.7063C9.69077 34.7063 3.68904 30.6424 0.759324 27.9949Z" fill="#FF9900"></path><path d="M32.3086 26.9056C33.2832 26.1841 35.7046 24.9401 39.3234 26.0278C39.6559 26.1277 39.8826 26.4354 39.8851 26.7826C39.8939 27.9698 39.6381 30.7572 37.3141 33.0736C37.1527 33.2344 36.881 33.0765 36.9407 32.8566C37.3376 31.395 38.1445 28.26 37.8885 27.8226C37.595 27.3212 33.9274 27.2973 32.4414 27.3084C32.2246 27.3101 32.1344 27.0346 32.3086 26.9056Z" fill="#FF9900"></path></svg>
                    </div>
                    <div className='border-b-[1px] border-bg_gray_pages py-5'>
                        <p className=' flex items-center gap-4 text-black'>
                            <img src={Account_note} className="w-8" alt="dfdfdf" />
                            محاسبه قیمت
                        </p>
                        <div className='flex items-center justify-between mt-3 '>
                            <p className='text-clamp text-black'>
                                قیمت کل به دلار
                            </p>
                            <span className='text-clamp text-purple_d'>
                                120 $
                            </span>
                        </div>
                        <div className='flex items-center justify-between mt-3 '>
                            <p className='text-clamp text-black'>
                                قیمت کل به تومان
                            </p>
                            <span className='text-clamp text-purple_d'>
                                12000000 تومان
                            </span>
                        </div>
                    </div>
                    <div className='border-b-[1px] border-bg_gray_pages py-5'>
                        <p className=' text-clamp text-black mb-3'>
                            نوع ارسال :
                        </p>
                        <form className='flex w-full flex-col gap-3'>
                            <label htmlFor="option1" className={`${isOption.option1 ? " border-purple_d bg-purple_l text-white" : " border-bg_gray_pages"} w-12/12 border-[3px] py-2 px-3 rounded-xl flex items-center justify-between`}>
                                <span>
                                    دریایی
                                </span>
                                <input type="radio" id="option1" name="group1" value="1" required onClick={() => {
                                    setOption(prevState => ({
                                        ...prevState,
                                        option1: true,
                                        option2: false,
                                    }));
                                }} />
                                {console.log(isOption)}
                            </label>
                            <label htmlFor="option2" className={`${isOption.option2 ? " border-purple_d bg-purple_l text-white" : " border-bg_gray_pages "} w-12/12 border-[3px] py-2 px-3 rounded-xl flex items-center justify-between`}>
                                <span>
                                    هوایی
                                </span>
                                <input type="radio" id="option2" name="group1" value="2" required onClick={() => {
                                    setOption(prevState => ({
                                        ...prevState,
                                        option1: false,
                                        option2: true,
                                    }));
                                }} />
                            </label>
                        </form>
                        <div className={`${!isOption.option1 && "hidden"} flex items-center justify-between pt-3 mt-5 `}>
                            <p className='text-clamp text-black'>
                                کارمزد و هزینه کارگو:
                            </p>
                            <span className='text-clamp text-black'>
                                1,477,000تومان
                            </span>
                        </div>
                        <div className={`${!isOption.option2 && "hidden"}  pt-3`}>
                            <p className='text-clamp text-black'>
                                توجه : بازه زمانی ارسال بعد از دریافت و تایید کالا در انبار امارات شروع خواهد شد.
                                ارسال کفش و کتونی به صورت هوایی بدون کارتن می باشد
                            </p>
                            <div className='text-clamp text-black flex items-center justify-between'>
                                <p>
                                    کارمزد و هزینه کارگو:
                                </p>
                                <p>
                                    2,077,000تومان
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=' pt-5 pb-3'>
                        <div className='flex items-center justify-between'>
                            <p className='text-clamp text-black font-Iran_Bold'>
                                قیمت نهایی کالا:
                            </p>
                            <span className='text-clamp text-purple_d font-Iran_Bold'>
                                1,423,000 تومان
                            </span>
                        </div>
                    </div>
                    <div>
                        <button className='p-3 mt-2 w-full bg-purple_d text-white rounded-xl border-[1px] border-bg_gray_pages'>
                            افزودن به سبد خرید
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductPage