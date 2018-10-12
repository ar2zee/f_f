import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import weatherReducer from './reducers/weather';
import informationReducer from './reducers/information';
import {watchSagas} from './sagas/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default () => {
    const store = createStore(
        combineReducers({
            information: informationReducer,
            weather: weatherReducer
        }),
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(watchSagas);
    return store;
}