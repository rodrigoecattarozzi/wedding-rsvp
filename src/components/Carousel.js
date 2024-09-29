/* import React, { useState } from "react";

const Carousel = ({ slides }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="relative bg-white rounded-lg overflow-hiddenw-full max-w-2xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
                <div className="relative h-80 md:h-96">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                index === activeIndex
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        >
                            <img
                                src={slide.src}
                                className="object-contain w-full h-full"
                                alt={slide.alt}
                            />
                            {slide.text && (
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">
                                    {slide.text}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${
                                index === activeIndex
                                    ? "bg-gray-400"
                                    : "bg-gray-300"
                            } transition`}
                            onClick={() => handleIndicatorClick(index)}
                        ></button>
                    ))}
                </div>
                <button
                    type="button"
                    className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
                    onClick={handlePrev}
                >
                    <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        ></path>
                    </svg>
                </button>
                <button
                    type="button"
                    className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 transition"
                    onClick={handleNext}
                >
                    <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
 */
/* import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ slides }) => {
    return (
        <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-2xl mx-auto">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="h-80 md:h-96"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full">
                            <img
                                src={slide.src}
                                className="object-contain w-full h-full"
                                alt={slide.alt}
                            />
                            {slide.text && (
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">
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

export default Carousel; */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules"; // Importar módulos adicionales
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./CarouselStyles.css"; // Archivo CSS personalizado para Tailwind

const Carousel = ({ slides }) => {
    return (
        <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-2xl mx-auto">
            <Swiper
                modules={[Navigation, Pagination, EffectCoverflow]}
                spaceBetween={25}
                slidesPerView={3} // Mostrar 3 slides (el activo y dos en segundo plano)
                centeredSlides={true} // Centramos el slide activo
                navigation
                pagination={{ clickable: true }}
                effect="coverflow" // Aplicamos el efecto 3D
                coverflowEffect={{
                    rotate: 50, // Grado de rotación de los slides en segundo plano
                    stretch: 1,
                    depth: 50, // Profundidad del efecto 3D
                    modifier: 1,
                    slideShadows: false, // Opcional, desactivar las sombras
                }}
                loop={true}
                className="h-80 md:h-96"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full">
                            <img
                                src={slide.src}
                                className="object-contain w-full h-full"
                                alt={slide.alt}
                            />
                            {slide.text && (
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">
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
