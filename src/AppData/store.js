import {applyMiddleware, combineReducers, createStore} from 'redux';
import {countReducer} from './count/reducer';
import {cartReducer} from './cart/reducers';

const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const reducers = combineReducers({
  count: countReducer,
  cart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
