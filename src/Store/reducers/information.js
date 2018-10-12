import * as actions from '../actions/actionTypes';

let initialState = {
    identifier: undefined,
    name: undefined,
    runways: undefined,
    latitude: undefined,
    longitude: undefined
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
            }
        default:
            return state;
    }
}
