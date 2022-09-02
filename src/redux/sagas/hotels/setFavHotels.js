import { takeEvery, put, spawn } from 'redux-saga/effects';

export function* loadFavHotels() {
    yield put({ type: 'SET_FAV_HOTELS', payload: [] });
}

export function* workerSaga() {
    yield spawn(loadFavHotels);
}

export default function* loadFavHotel() {
    yield takeEvery('LOAD_FAV_HOTELS', workerSaga);
}
