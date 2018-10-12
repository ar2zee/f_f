import * as actions from './actionTypes';

export const fetchAirportData = (airportIcao) => ({
    type: actions.FETCH_AIRPORT_DATA_START,
    airportIcao
})