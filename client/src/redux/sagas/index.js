import { call, spawn, all } from 'redux-saga/effects';
import loadHotelData from './hotels/initialHotels';
import loadFIlters from './filters/setFilters';
import loadFavHotel from './hotels/setFavHotels';

export default function* rootSaga() {
    const sagas = [loadHotelData, loadFIlters, loadFavHotel];

    const retrySagas = yield sagas.map((saga) => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                    break;
                } catch (e) {
                    console.log(e);
                }
            }
        });
    });

    yield all(retrySagas);
}
