import {createSelector} from 'reselect';

export const cartSelector = createSelector(
  state => state.cart.totalUnit,
  totalUnit => totalUnit,
);

export const totalCartPriceSelector = createSelector(
  state => state.cart.totalPrice,
  totalPrice => totalPrice,
);
