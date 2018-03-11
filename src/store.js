import allReducer from './reducers/all.reducer'
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();

const middleware = applyMiddleware(
    routerMiddleware(history),
    thunk
);

const store = createStore(allReducer, middleware);

export default store;