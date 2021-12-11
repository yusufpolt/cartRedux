import {INCREASE_COUNT, DECREASE_COUNT} from './constants';

export const increaseCountAction = value => {
  return {
    type: INCREASE_COUNT,
    value,
  };
};

export const decreaseCountAction = value => {
  return {
    type: DECREASE_COUNT,
    value,
  };
};
