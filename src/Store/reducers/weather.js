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
    forecastWindDirection_2: undefined
}

export default (state = initialState, action)  => {
    switch (action.type) {
        case actions.FETCH_WEATHER_DATA_SUCCESS:

        const {tempC, relativeHumidity, cloudLayers, visibility, wind} = action.data.conditions;
        const forecast_1 = action.data.forecast.conditions[1];
    	const forecast_2 = action.data.forecast.conditions[2];
    
            return {
                ...state,
                temp: (tempC * 9/5) + 32,
                relativeHumidity: relativeHumidity,
                cloudCoverage: HelpersFunction.cloudLayersArray(cloudLayers).coverage,
                visibilitys: visibility.distanceSm ,
                windSpeed: (wind.speedKts * 1.15077945).toFixed(3),
                windDirection: HelpersFunction.windDirection(wind),
                forecastStartTime_1: forecast_1.period.dateStart,
                forecastWindSpeed_1: (forecast_1.wind.speedKts * 1.15077945).toFixed(3),
                forecastWindDirection_1: forecast_1.wind.direction,
                forecastStartTime_2: HelpersFunction.testPeriod(forecast_2),
                forecastWindSpeed_2: HelpersFunction.testWindSpeed(forecast_2),
                forecastWindDirection_2: HelpersFunction.testWindDirection(forecast_2),
            }
        default:
            return state;
    }
}
