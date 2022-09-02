import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

function Slider() {
    const hotels = useSelector((store) => store.images);

    return (
        <div className="slider">
            <Swiper slidesPerView={3}>
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
export default memo(Slider);
