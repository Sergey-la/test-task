import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

export default function Slider() {
    const hotels = useSelector((store) => store.images);

    return (
        <div className="slider">
            <Swiper
                slidesPerView={4}//брейкпоинты убрал, всё оставил как есть, в изначальном виде.
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
        </div>
    );
}
