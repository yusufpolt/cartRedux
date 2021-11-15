import {combineReducers, createStore} from 'redux';
import {cartReducer} from './cart/reducers';

const reducers = combineReducers({
  cart: cartReducer,
});

const store = createStore(reducers);

export default store;
