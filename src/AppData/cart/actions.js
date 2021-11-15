import {
  CART_ITEM_UNIT,
  CART_ITEM_UNIT_DECREASE,
  CART_ITEM_UNIT_INCREASE,
  CART_ITEM_PRICE,
  CART_ITEM_PRICE_ADD,
  CART_ITEM_PRICE_REMOVE,
  SEND_TO_CART,
} from './constants';

export const cartItemAction = totalUnit => {
  return {
    type: CART_ITEM_UNIT,
    totalUnit,
  };
};

export const increaseCartAction = increase => {
  return {
    type: CART_ITEM_UNIT_INCREASE,
    increase,
  };
};

export const decreaseCartAction = decrease => {
  return {
    type: CART_ITEM_UNIT_DECREASE,
    decrease,
  };
};

export const cartPriceAction = totalPrice => {
  return {
    type: CART_ITEM_PRICE,
    totalPrice,
  };
};

export const addCartPriceAction = addPrice => {
  return {
    type: CART_ITEM_PRICE_ADD,
    addPrice,
  };
};

export const removeCartPriceAction = removePrice => {
  return {
    type: CART_ITEM_PRICE_REMOVE,
    removePrice,
  };
};

export const sendToCartAction = product => {
  return {
    type: SEND_TO_CART,
    product,
  };
};
