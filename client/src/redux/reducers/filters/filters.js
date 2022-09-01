import currentDate from '../../../hooks/currentDate';

const date = currentDate();
const location = { location: 'Москва' };
const checkIn = {
    checkIn: `${date.year}-${date.formatMonth}-${date.formatDay}`,
};
const checkOut = {
    checkOut: `${date.year}-${date.formatOutMonth}-${date.formatOutDay}`,
};
const countDay = {
    countDay: 1,
};

const initial = {
    filters: [location, checkIn, checkOut, countDay],
};

export default function filters(state = initial, action) {
    switch (action.type) {
        case 'SET_FILTERS': {
            return {
                ...state,
                filters: { ...state.filters, ...action.payload },
            };
        }
        case 'UPDATE_FILTERS': {
            return {
                ...state,
                filters: [ ...action.payload ],
            };
        }
        default:
            return state;
    }
}
