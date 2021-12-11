import {createSelector} from 'reselect';

export const countSelector = createSelector(
  state => state.count.value,
  value => value,
);
