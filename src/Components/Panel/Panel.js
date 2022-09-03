import React from 'react';
import getMonthString from '../../hooks/getMonthString';
import Slider from './Slider';
import Hotel from './Hotel';

import './panel.scss';

export default function Panel({ hotels, favHotels, filters }) {
    function enumerate(num, dec) {
        if (num > 100) num = num % 100;
        if (num <= 20 && num >= 10) return dec[2];
        if (num > 20) num = num % 10;
        return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
    }
    const year = new Date(`${filters[1]?.checkIn}`).getFullYear();
    const day = new Date(`${filters[1]?.checkIn}`).getDate();
    const formatDay = day < 10 ? `0${day}` : `${day}`;
    const month = new Date(`${filters[1]?.checkIn}`).getMonth();
    const monthString = getMonthString(month);

    return (
        <div className="panel">
            <div className="panel-wrapper">
                <div className="panel-top">
                    <div className="panel-top__city">
                        <span>Отели</span>
                        <svg
                            width="11"
                            height="18"
                            viewBox="0 0 11 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1.33334L9.66667 10L1 18.6667"
                                stroke="#A7A7A7"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span
                            className="panel-top__city-location"
                            title={filters[0]?.location}
                        >
                            {filters[0]?.location}
                        </span>
                    </div>
                    <div className="panel-top__date">{`${formatDay} ${monthString} ${year}`}</div>
                </div>
                <Slider />
                <div className="fav-hotel-status">
                    Добавлено в Избранное: <span>{favHotels.length}</span>{' '}
                    {enumerate(favHotels.length, ['отель', 'отеля', 'отелей'])}
                </div>
                <ul className="hotel-list">
                    {hotels.hotels.length > 0 ? (
                        <React.Fragment>
                            {hotels.hotels.map((hotel, i) => {
                                let fav = false;
                                if (favHotels.length) {
                                    fav = favHotels.find(
                                        (favHotel) =>
                                            favHotel.hotelId === hotel.hotelId
                                    );
                                }
                                return (
                                    <Hotel
                                        hotel={hotel}
                                        date={[formatDay, monthString, year]}
                                        countDay={filters[3].countDay}
                                        isFav={fav}
                                        key={hotel.hotelId + i}
                                    />
                                );
                            })}
                        </React.Fragment>
                    ) : null}
                </ul>
            </div>
        </div>
    );
}
