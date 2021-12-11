import {ADD_TO_BASKET} from './constants';

export const addToBasketAction = product => {
  return {
    type: ADD_TO_BASKET,
    product,
  };
};
