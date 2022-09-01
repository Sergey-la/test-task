const initial = {
    hotels: [],
};

export default function hotels(state = initial, action) {
    switch (action.type) {
        case 'SET_HOTELS': {
            return {
                ...state,
                hotels: [...state.hotels, ...action.payload],
            };
        }
        case 'UPDATE_HOTELS': {
            return {
                ...state,
                hotels: [...action.payload],
            };
        }
        default:
            return state;
    }
}
