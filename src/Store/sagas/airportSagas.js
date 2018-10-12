import { call, put } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes';
import * as API from '../../api/AirportsAPI';

export function* fetchAirportDataSaga(action) {
	try {
		const response = yield call(API.getAirportsData);
		const data = yield response.json();
		yield put({ type: actions.FETCH_AIRPORT_DATA_SUCCESS, data: data });
	} catch (error) {
		yield put({ type: actions.FETCH_AIRPORT_DATA_FAILED, message: error.message});
	}
};

export function* fetchAirportWeatherSaga(action) {
	try {
		const response = yield call(API.getAirportWeather);
		const data = yield response.json();
		yield put({ type: actions.FETCH_WEATHER_DATA_SUCCESS, data: data });
	} catch (error) {
		yield put({ type: actions.FETCH_WEATHER_DATA_FAILED, message: error.message});
	}
};