import {createSelector} from 'reselect';

export const basketSelector = createSelector(
  state => state.cart.basket,
  basket => basket,
);
