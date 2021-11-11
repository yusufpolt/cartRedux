import {initialValue, SET_CART} from './constants';

export function cartReducers(state = initialValue, action) {
  switch (action.type) {
    case SET_CART: {
      state.totalPrice = action.totalPrice;
      return {...state};
    }

    default:
      return state;
  }
}
