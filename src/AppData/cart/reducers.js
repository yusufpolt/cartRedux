import {
  CART_ITEM_PRICE,
  CART_ITEM_PRICE_ADD,
  CART_ITEM_PRICE_REMOVE,
  CART_ITEM_UNIT,
  CART_ITEM_UNIT_DECREASE,
  CART_ITEM_UNIT_INCREASE,
  initialValue,
  SEND_TO_CART,
} from './constants';

export function cartReducer(state = initialValue, action) {
  switch (action.type) {
    case SEND_TO_CART: {
      const productIndex = state.products.findIndex(
        p => p.id === action.product.id,
      );

      if (productIndex === -1) {
        state.products.push(action.product);
      } else {
        state.products[productIndex].quantity += 1;
      }

      return state;
    }

    default:
      return state;
  }
}
