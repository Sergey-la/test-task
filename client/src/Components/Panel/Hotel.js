import React from 'react';
import { useDispatch } from 'react-redux';

import Rate from './Rate';
import img from '../../assets/icons/hotel.svg';
import Fav from '../../Components/Svg/Fav';

export default function Hotel({
    hotel,
    date,
    countDay,
    isFav,
    className = 'hotel-wrapper',
}) {
    const dispatch = useDispatch();

    const onClick = () => {
        !isFav && dispatch({ type: 'SET_FAV_HOTELS', payload: [hotel] });
        if (isFav) {
            dispatch({
                type: 'DELETE_FAV_HOTEL',
                payload: hotel.hotelId,
            });
        }
    };

    function enumerate(num, dec) {
        if (num > 100) num = num % 100;
        if (num <= 20 && num >= 10) return dec[2];
        if (num > 20) num = num % 10;
        return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
    }
    function numberWithSpaces() {
        if (hotel.priceFrom) {
            return hotel.priceFrom
                .toFixed(0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        }
    }
    return (
        <div className={className}>
            <div className="img">
                <img src={img} alt="фото отеля" width={35} height={30} />
            </div>
            <div className="hotel-info">
                <h2 title={hotel.hotelName}>{hotel.hotelName}</h2>
                <div className="hotel-info__date">
                    <span> {`${date[0]} ${date[1]} ${date[2]}`} </span>
                    <div className="hotel-info__date-separator"></div>
                    {countDay} {enumerate(countDay, ['день', 'дня', 'дней'])}
                </div>
                <div className="hotel-info__rate">
                    <Rate rate={hotel.stars} />
                </div>
            </div>
            <div className="hotel-price">
                <Fav isFav={isFav} onClick={onClick} />
                <div className="hotel-price__info">
                    Price: <span>{numberWithSpaces()} ₽</span>
                </div>
            </div>
        </div>
    );
}
