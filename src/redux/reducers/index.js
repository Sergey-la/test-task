import { combineReducers } from 'redux';

import hotels from './hotels/hotels';
import favHotels from './hotels/favHotels';
import filters from './filters/filters';
import images from './images/images';

const rootReducer = combineReducers({
    hotels: hotels,
    favHotels: favHotels,
    filters: filters,
    images: images,
});

export default rootReducer;
