import React from 'react';
import Tabs from './Tabs';
import Hotel from '../Panel/Hotel';
import getMonthString from '../../hooks/getMonthString';
import './favFilters.scss';

export default function FavFilters({ favHotels, filters }) {
    const year = new Date().getFullYear();
    const day = new Date(`${filters[1]?.checkIn}`).getDate();
    const formatDay = day < 10 ? `0${day}` : `${day}`;
    const month = new Date(`${filters[1]?.checkIn}`).getMonth();
    const monthString = getMonthString(month);

    return (
        <div className="favFilters">
            <div className="favFilters-wrapper">
                <h2>Избранное</h2>
                <Tabs favHotels={favHotels} />
                <div className="favHotels">
                    {favHotels.length > 0 ? (
                        <React.Fragment>
                            {favHotels.map((hotel) => {
                                let fav = undefined;
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
                                        className={
                                            'hotel-wrapper hotel-wrapper--small'
                                        }
                                        isFav={fav !== undefined ? true : false}
                                        key={hotel.hotelId}
                                    />
                                );
                            })}
                        </React.Fragment>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
