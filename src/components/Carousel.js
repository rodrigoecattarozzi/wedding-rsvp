
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./CarouselStyles.css";

const Carousel = ({ slides }) => {
    return (
        <div className="relative bg-white rounded-lg overflow-hidden w-full md:max-w-2xl mx-auto">
            <Swiper
                modules={[Navigation, Pagination, EffectCoverflow]}
                spaceBetween={25}
                slidesPerView={1}
                centeredSlides={true}
                navigation
                pagination={{ clickable: true }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 1,
                    depth: 50,
                    modifier: 1,
                    slideShadows: false,
                }}
                loop={true}
                className="sm:h-80 md:h-96"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full">
                            <img
                                src={slide.src}
                                className="object-contain h-full w-full"
                                alt={slide.alt}
                            />
                            {slide.text && (
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white sm:text-2xl dark:text-gray-800">
                                    {slide.text}
                                </span>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
