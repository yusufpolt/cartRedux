import {createSelector} from 'reselect';

export const productsSelector = createSelector(
  state => state.cart.products,
  products => products,
);

export const totalProductsSelector = createSelector(
  state => state.cart.products,
  products => products.length,
);

export const totalPriceSelector = createSelector(
  state => state.cart.products,
  products => {
    let total = 0;
    products.forEach(product => {
      total += product.price * product.quantity;
    });

    return total;
  },
);
