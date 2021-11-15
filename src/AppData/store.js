import {applyMiddleware, combineReducers, createStore} from 'redux';
import {cartReducer} from './cart/reducers';

const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const reducers = combineReducers({
  cart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
