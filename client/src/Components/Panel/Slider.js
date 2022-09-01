import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider() {
    const hotels = useSelector((store) => store.images);

    return (
        <Swiper
            slidesPerView={4}
            breakpoints={{
                // when window width is >= 640px
                640: {
                    width: 640,
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    width: 768,
                    slidesPerView: 4,
                },
            }}
        >
            <SwiperSlide>
                <img src={hotels.images[0]} alt="классная картинка" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hotels.images[1]} alt="классная картинка" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hotels.images[2]} alt="классная картинка" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hotels.images[0]} alt="классная картинка" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hotels.images[1]} alt="классная картинка" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hotels.images[2]} alt="классная картинка" />
            </SwiperSlide>
        </Swiper>
    );
}
