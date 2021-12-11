import {ADD_TO_BASKET} from './constants';

const initialValue = {
  basket: [],
};

export const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      state.basket.push(action.product);
      return {...state};

    default:
      return state;
  }
};
