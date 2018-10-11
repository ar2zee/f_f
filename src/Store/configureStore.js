import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import forecastReducer from './reducers/forecast';
import weatherReducer from './reducers/weather';
import informationReducer from './reducers/information';
import errorsReducer from "./reducers/errors";
import {watchSagas} from './sagas/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default () => {
    const store = createStore(
        combineReducers({
            info: informationReducer,
            error: errorsReducer,
            weather: weatherReducer,
            forecast: forecastReducer
        }),
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(watchSagas);
    return store;
}