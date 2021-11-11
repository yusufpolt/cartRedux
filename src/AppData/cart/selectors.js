import { createSelector } from "reselect";

export const cartSelector = createSelector(
    state => state.totalPrice.totalPrice,
    totalPrice=>totalPrice
)