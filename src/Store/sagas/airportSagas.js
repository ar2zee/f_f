import { put } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes';
import * as API from '../../api/AirportsAPI';

export function* fetchAirportDataSaga(action) {
	try {
		const response = yield API.getAirportsData(action.airportIcao);
		const data = yield response.data.airport.results;
		yield put({ type: actions.FETCH_AIRPORT_DATA_SUCCESS, data: data });
	} catch (errors) {
		yield put({ type: actions.FETCH_AIRPORT_DATA_FAILED, errors: errors});
	}
};

export function* fetchAirportWeatherSaga(action) {
	try {
		const response = yield API.getAirportWeather(action.airportIcao);
		const data = yield response.data.report;
		yield put({ type: actions.FETCH_WEATHER_DATA_SUCCESS, data: data });
	} catch (errors) {
		yield put({ type: actions.FETCH_WEATHER_DATA_FAILED, errors: errors});
	}
};