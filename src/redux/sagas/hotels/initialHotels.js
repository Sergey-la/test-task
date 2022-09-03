import { takeEvery, put, call, spawn, select } from 'redux-saga/effects';

const swapGetData = async (pattern) => {
    const req = await fetch(`https://engine.hotellook.com/api/v2/${pattern}`);
    const data = await req.json();

    return data;
};

export function* loadHotels() {
    const state = yield select((s) => s.filters);
    const hotels = yield call(
        swapGetData,
        `cache.json?location=${state.filters[0].location}&currency=rub&checkIn=${state.filters[1].checkIn}&checkOut=${state.filters[2].checkOut}&adults=1&limit=10`
    );
    yield put({ type: 'SET_HOTELS', payload: hotels });
}

export function* workerSaga() {
    yield spawn(loadHotels);
}

export default function* loadHotelData() {
    yield takeEvery('LOAD_HOTELS', workerSaga);
}
