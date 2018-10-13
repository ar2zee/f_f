import * as actions from '../actions/actionTypes';
import * as HelpersFunction from '../../utilities/Utility';

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
    errors: undefined
}

export default (state = initialState, action)  => {
    switch (action.type) {
        case actions.FETCH_WEATHER_DATA_SUCCESS:

        if(action.data.conditions) {
            const {tempC, relativeHumidity, cloudLayers, visibility, wind} = action.data.conditions;
            const forecast_1 = action.data.forecast.conditions[1];
    	    const forecast_2 = action.data.forecast.conditions[2];
    
            return {
                ...state,
                temp: HelpersFunction.testTemp(tempC),
                relativeHumidity: HelpersFunction.testConditions(relativeHumidity),
                cloudCoverage: HelpersFunction.cloudLayersArray(cloudLayers).coverage,
                visibilitys: HelpersFunction.testConditions(visibility).distanceSm ,
                windSpeed: HelpersFunction.testWindSpeedForCondition(wind),
                windDirection: HelpersFunction.windDirection(wind),
                forecastStartTime_1: HelpersFunction.testPeriod(forecast_1),
                forecastWindSpeed_1: HelpersFunction.testWindSpeed(forecast_1),
                forecastWindDirection_1: HelpersFunction.testWindDirection(forecast_1),
                forecastStartTime_2: HelpersFunction.testPeriod(forecast_2),
                forecastWindSpeed_2: HelpersFunction.testWindSpeed(forecast_2),
                forecastWindDirection_2: HelpersFunction.testWindDirection(forecast_2),
                errors: undefined
            }
        } else {
             return {
                ...state,
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
                errors: "This ICAO doesn't have weather values"
             };
        }
        case actions.FETCH_WEATHER_DATA_FAILED:
            return {
                ...state,
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
                errors: 'Please provide a valid ICAO'
            }
        default:
            return state;
    }
}
