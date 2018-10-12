import * as actions from './actionTypes';

export const fetchAirportError = (errors) => ({
    type: actions.FETCH_AIRPORT_DATA_FAILED,
    errors
})

export const fetchAirportWeatherError = (errors) => ({
    type: actions.FETCH_WEATHER_DATA_FAILED,
    errors
})