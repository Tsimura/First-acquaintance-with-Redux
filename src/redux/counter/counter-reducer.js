import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from './counter-types';

const valueReducer = (state = 50, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;

    case DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 1, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
