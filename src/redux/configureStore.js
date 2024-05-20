import {legacy_createStore , combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import { HomeReducer } from './reducer/HomeReducer';
import { AuthReducer } from './reducer/AuthReducer';

const rootReducer = combineReducers({
 userInfo: AuthReducer,
 homeReducer: HomeReducer,
});

const store = legacy_createStore(
 rootReducer,
 applyMiddleware(thunk),
);

export default store;