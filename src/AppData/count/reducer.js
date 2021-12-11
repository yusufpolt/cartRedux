import {INCREASE_COUNT, DECREASE_COUNT} from './constants';

const initilValue = {
  value: 0,
};

export const countReducer = (state = initilValue, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      state.value += 1;
      return {...state};

    case DECREASE_COUNT:
      state.value -= 1;
      return {...state};

    default:
      return state;
  }
};
