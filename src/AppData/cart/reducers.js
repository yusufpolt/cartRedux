import {iteratorSymbol} from 'immer/dist/internal';
import {CART_DATA} from '../../data/cartData';
import {
  initialValue,
  CART_ITEM_UNIT,
  CART_ITEM_UNIT_INCREASE,
  CART_ITEM_UNIT_DECREASE,
  CART_ITEM_PRICE,
  CART_ITEM_PRICE_ADD,
  CART_ITEM_PRICE_REMOVE,
} from './constants';

export function cartReducers(state = initialValue, action) {
  switch (action.type) {
    case CART_ITEM_UNIT: {
      state.totalUnit = action.totalUnit;
      return {...state};
    }
    case CART_ITEM_UNIT_INCREASE: {
      state.totalUnit = action.increase + 1;
      return {...state};
    }
    case CART_ITEM_UNIT_DECREASE: {
      if (state.totalUnit !== 0) {
        state.totalUnit = action.decrease - 1;
      }
      return {...state};
    }
    case CART_ITEM_PRICE: {
      state.totalPrice = action.totalPrice;
      return {...state};
    }
    case CART_ITEM_PRICE_ADD: {
      state.totalPrice = action.addPrice + 5

      return {...state};
    }
    case CART_ITEM_PRICE_REMOVE: {
      if (state.totalUnit != 0) {
        state.totalPrice = action.removePrice - 5;
      }
      return {...state};
    }

    default:
      return state;
  }
}
