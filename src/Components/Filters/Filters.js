import React, { useState, memo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import Button from '../Button/Button';
import currentDate from '../../hooks/currentDate';
import 'react-datepicker/dist/react-datepicker.css';

import './filters.scss';

function Filters({ filters }) {
    const { register, handleSubmit } = useForm();
    const [startDate, setStartDate] = useState(
        new Date(`${filters[1].checkIn}`)
    );

    const [submitLoaded, setSubmitLoaded] = useState(false);
    const endDate = 1;
    const dispatch = useDispatch();

    const submit = (data) => {
        setSubmitLoaded(true);

        setTimeout(async () => {
            if (startDate) {
                const date = currentDate(startDate, data.countDay);
                dispatch({
                    type: 'UPDATE_FILTERS',
                    payload: [
                        { location: data.location },
                        {
                            checkIn: `${date.year}-${date.setFormatMonth}-${date.setFormatDay}`,
                        },
                        {
                            checkOut: `${date.year}-${date.setFormatOutMonth}-${date.setFormatOutDay}`,
                        },
                        { countDay: data.countDay },
                    ],
                });
                const req = await fetch(
                    `https://engine.hotellook.com/api/v2/cache.json?location=${data.location}&currency=rub&checkIn=${date.year}-${date.setFormatMonth}-${date.setFormatDay}&checkOut=${date.year}-${date.setFormatOutMonth}-${date.setFormatOutDay}&adults=${data.countDay}&limit=10`
                );
                const hotelsData = await req.json();
                setSubmitLoaded(false);
                dispatch({ type: 'UPDATE_HOTELS', payload: hotelsData });
            }
            setSubmitLoaded(false);
        }, 500);
    };

    return (
        <div className="filter">
            <form onSubmit={handleSubmit(submit)}>
                <div className="input" style={{ marginBottom: '16px' }}>
                    <label style={{ fontFamily: 'roboto-medium' }}>
                        Локация
                        <input
                            type="text"
                            required={true}
                            defaultValue={`${filters[0].location}`}
                            {...register('location')}
                        />
                    </label>
                </div>
                <div
                    className="input input--date"
                    style={{ marginBottom: '20px' }}
                >
                    <label style={{ fontFamily: 'roboto-medium' }}>
                        Дата заселения
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="dd.MM.yyyy"
                            endDate={endDate}
                        />
                    </label>
                </div>
                <div className="input" style={{ marginBottom: '32px' }}>
                    <label style={{ fontFamily: 'roboto-medium' }}>
                        Количество дней
                        <input
                            type="number"
                            required={true}
                            defaultValue={filters[3].countDay}
                            min={1}
                            {...register('countDay')}
                        />
                    </label>
                </div>
                <Button text={'Найти'} disable={submitLoaded}></Button>
            </form>
        </div>
    );
}

export default memo(Filters);
