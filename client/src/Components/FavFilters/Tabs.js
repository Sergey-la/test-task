import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import './favFilters.scss';

function Tabs({ favHotels }) {
    const [activeRate, setActiveRate] = useState(true);
    const [activePrice, setActivePrice] = useState(false);
    const [activeToggleRate, setActiveToggleRate] = useState('up');
    const [activeTogglePrice, setActiveTogglePrice] = useState('up');
    const dispatch = useDispatch();

    function toggleTabs(type) {
        if (type === 'rate' && !activeRate) {
            setActiveRate(!activeRate);
            dispatch({ type: 'SORT_FAV_UP' });
            if (activePrice) {
                setActivePrice(!activePrice);
            }
            if (activeToggleRate === 'down') {
                setActiveToggleRate('up');
            }
        }
        if (type === 'price' && !activePrice) {
            setActivePrice(!activePrice);
            dispatch({ type: 'SORT_FAV_PRICE_UP' });
            if (activeRate) {
                setActiveRate(!activeRate);
            }
            if (activeTogglePrice === 'down') {
                setActiveTogglePrice('up');
            }
        }
    }

    function changeToggleRate(status) {
        if (status === 'up' && activeRate && activeToggleRate === 'down') {
            setActiveToggleRate('up');
            dispatch({ type: 'SORT_FAV_UP' });
        } else if (
            status === 'down' &&
            activeRate &&
            activeToggleRate === 'up'
        ) {
            setActiveToggleRate('down');
            dispatch({ type: 'SORT_FAV_DOWN' });
        }
    }

    function changeTogglePrice(status) {
        if (status === 'up' && activePrice && activeTogglePrice === 'down') {
            setActiveTogglePrice('up');
            dispatch({ type: 'SORT_FAV_PRICE_UP' });
        } else if (
            status === 'down' &&
            activePrice &&
            activeTogglePrice === 'up'
        ) {
            setActiveTogglePrice('down');
            dispatch({ type: 'SORT_FAV_PRICE_DOWN' });
        }
    }

    return (
        <div className="tabs">
            <div
                className={
                    activeRate ? 'tabs-item tabs-item--active' : 'tabs-item'
                }
                onClick={() => toggleTabs('rate')}
            >
                Рейтинг
                <div className="tabs-item__toggle">
                    <svg
                        width="11"
                        height="9"
                        viewBox="0 0 9 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => changeToggleRate('up')}
                    >
                        <path
                            d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z"
                            fill="#41522E"
                            fillOpacity={
                                activeToggleRate === 'up' && activeRate
                                    ? '1'
                                    : '0.3'
                            }
                        />
                    </svg>
                    <svg
                        width="11"
                        height="9"
                        viewBox="0 0 9 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => changeToggleRate('down')}
                    >
                        <path
                            d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z"
                            fill="#41522E"
                            fillOpacity={
                                activeToggleRate === 'down' && activeRate
                                    ? '1'
                                    : '0.3'
                            }
                        />
                    </svg>
                </div>
            </div>
            <div
                className={
                    activePrice ? 'tabs-item tabs-item--active' : 'tabs-item'
                }
                onClick={() => toggleTabs('price')}
            >
                Цена
                <div className="tabs-item__toggle">
                    <svg
                        width="11"
                        height="9"
                        viewBox="0 0 9 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => changeTogglePrice('up')}
                    >
                        <path
                            d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z"
                            fill="#41522E"
                            fillOpacity={
                                activeTogglePrice === 'up' && activePrice
                                    ? '1'
                                    : '0.3'
                            }
                        />
                    </svg>
                    <svg
                        width="11"
                        height="9"
                        viewBox="0 0 9 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => changeTogglePrice('down')}
                    >
                        <path
                            d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z"
                            fill="#41522E"
                            fillOpacity={
                                activeTogglePrice === 'down' && activePrice
                                    ? '1'
                                    : '0.3'
                            }
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default memo(Tabs);
