import * as actions from '../actions/actionTypes';

let initialState = {
    identifier: undefined,
    name: undefined,
    runways: undefined,
    latitude: undefined,
    longitude: undefined,
    loaded: false
}

export default (state = initialState, action)  => {
    switch (action.type) {
        case actions.FETCH_AIRPORT_DATA_SUCCESS:
            return {
                ...state,
                loaded: true
            }
        default:
            return state;
    }
}