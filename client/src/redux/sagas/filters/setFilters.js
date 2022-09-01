import { takeEvery, put, spawn } from 'redux-saga/effects';

export function* setDefaultFilters() {

    yield put({
        type: 'SET_FILTERS',
    });
}

export function* workerSaga() {
    yield spawn(setDefaultFilters);
}

export default function* loadFIlters() {
    yield takeEvery('LOAD_FILTERS', workerSaga);
}
