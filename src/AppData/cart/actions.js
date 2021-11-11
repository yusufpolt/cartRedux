import {SET_CART} from './constants';

export const setCartAction = (totalPrice, totalUnit) => {
  return {
    type: SET_CART,
    totalPrice,
  };
};
