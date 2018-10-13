import * as actions from '../actions/actionTypes';

let initialState = {
    identifier: undefined,
    name: undefined,
    runways: undefined,
    latitude: undefined,
    longitude: undefined,
    errors: undefined
}

export default (state = initialState, action)  => {
    switch (action.type) {
        case actions.FETCH_AIRPORT_DATA_SUCCESS:
            
        const {icao, name, runways, latitude, longitude} = action.data;
            return {
                ...state,
                identifier: icao,
                name: name,
                runways: runways,
                latitude: latitude,
                longitude: longitude,
                errors: undefined
            }
            
        case actions.FETCH_AIRPORT_DATA_FAILED:
            return {
                ...state,
                identifier: undefined,
                name: undefined,
                runways: undefined,
                latitude: undefined,
                longitude: undefined,
                errors: 'Please provide a valid ICAO'
            }
        default:
            return state;
    }
}
