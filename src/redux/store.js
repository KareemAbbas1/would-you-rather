import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from './reducers';
import { saveState, loadState } from '../localStorage/localStorage';
import { throttle } from "lodash";


const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, loadState(), composeEnhancers(applyMiddleware(...middleware, logger)));

store.subscribe(
    throttle(() => saveState(store.getState()), 1000)
);
// window.localStorage.clear();

export default store;