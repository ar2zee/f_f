import { takeEvery } from 'redux-saga/effects';
import { fetchAirportDataSaga, fetchAirportWeatherSaga } from './airportSagas';
import * as actions from '../actions/actionTypes';

export function* watchSagas() {
	yield takeEvery(actions.FETCH_AIRPORT_DATA_START, fetchAirportDataSaga);
	yield takeEvery(actions.FETCH_WEATHER_DATA_START, fetchAirportWeatherSaga);
}