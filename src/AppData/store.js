import {combineReducers, createStore} from 'redux';
import {cartReducers} from './cart/reducers';

const reducers = combineReducers({
  cart: cartReducers,
});

const store = createStore(reducers);

export default store;
