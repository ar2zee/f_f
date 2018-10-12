import * as actions from './actionTypes';

export const fetchAirportWeather = (airportIcao) => ({
    type: actions.FETCH_WEATHER_DATA_START,
    airportIcao
})