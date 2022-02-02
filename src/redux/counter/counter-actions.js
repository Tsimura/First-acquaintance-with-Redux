import actiontypes from './counter-types';
export const increment = value => ({
  type: actiontypes.INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: actiontypes.DECREMENT,
  payload: value,
});
