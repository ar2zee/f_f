import * as actions from '../actions/actionTypes';

let initialState = {
    temp: undefined,
    relativeHumidity: undefined,
    cloudCoverage: undefined,
    visibilitys: undefined,
    windSpeed: undefined,
    windDirection: undefined,
    forecastStartTime_1: undefined,
    forecastWindSpeed_1: undefined,
    forecastWindDirection_1: undefined,
    forecastStartTime_2: undefined,
    forecastWindSpeed_2: undefined,
    forecastWindDirection_2: undefined,
    loaded: false
}

export default (state = initialState, action)  => {
    switch (action.type) {
        case actions.FETCH_WEATHER_DATA_SUCCESS:
            return {
                ...state,
                loaded: true
            }
        default:
            return state;
    }
}