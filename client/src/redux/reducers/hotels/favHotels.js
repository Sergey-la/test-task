const initial = {
    favHotels: [],
};

export default function favHotels(state = initial, action) {
    switch (action.type) {
        case 'SET_FAV_HOTELS': {
            return {
                ...state,
                favHotels: [...state.favHotels, ...action.payload].sort(
                    (a, b) => b.stars - a.stars
                ),
            };
        }
        case 'DELETE_FAV_HOTEL': {
            return {
                ...state,
                favHotels: state.favHotels.filter(
                    (hotel) => hotel.hotelId !== action.payload
                ),
            };
        }
        case 'SORT_FAV_UP': {
            return {
                ...state,
                favHotels: [...state.favHotels].sort(
                    (a, b) => b.stars - a.stars
                ),
            };
        }
        case 'SORT_FAV_DOWN': {
            return {
                ...state,
                favHotels: [...state.favHotels].sort(
                    (a, b) => a.stars - b.stars
                ),
            };
        }
        case 'SORT_FAV_PRICE_UP': {
            return {
                ...state,
                favHotels: [...state.favHotels].sort(
                    (a, b) => b.priceFrom - a.priceFrom
                ),
            };
        }
        case 'SORT_FAV_PRICE_DOWN': {
            return {
                ...state,
                favHotels: [...state.favHotels].sort(
                    (a, b) => a.priceFrom - b.priceFrom
                ),
            };
        }
        default:
            return state;
    }
}
