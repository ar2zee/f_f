import * as actions from '../actions/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case actions.FETCH_AIRPORT_DATA_FAILED:
            return {message: action.message}
        case actions.FETCH_WEATHER_DATA_FAILED:
            return {message: action.message}
        default:
            return state;
    }
}