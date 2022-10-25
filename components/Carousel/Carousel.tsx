// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { length, imagesByIndex } from "./Media";
import Image from 'next/future/image';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

// Carousel component
const Carousel = () => {
    return (

            <Swiper
                className="relative w-full max-h-[350px] sm:max-h-[500px] h-full"
                // effect={"fade"}
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 8500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: "progressbar",

                    clickable: true,
                }}
                navigation={true}
                // fadeEffect={{ crossFade: true }}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {Array.from({ length }, (_, index) => (

                    <SwiperSlide key={index} className="relative flex min-w-full h-full">
                        <div className="absolute flex flex-col justify-center items-center left-1/2 right-1/2 top-1/2 bottom-1/2">
                            <div className="bg-opacity-70 text-white p-4 bg-carousel-title1 my-5 whitespace-nowrap fluid-base sm:fluid-3xl">
                                <span className="mr-2 font-medium">
                                    San Fernando
                                </span>
                                <span className="font-light">
                                    Auto Collision Repair
                                </span>

                            </div>
                            <div className=" bg-opacity-80 font-light text-main-red p-4 bg-carousel-title2 my-5 whitespace-nowrap fluid-base sm:fluid-3xl">
                                San Fernando Auto Repair
                            </div>



                        </div>
                        <Image
                            
                            className=" object-cover w-full h-auto"
                            src={imagesByIndex(index)}
                            alt="Big Guy Auto Body"
                            sizes="100vw"

                        />
                    </SwiperSlide>
                ))}

            </Swiper>

    );
};

export default Carousel;