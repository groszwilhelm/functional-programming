import { ACTION_TYPES } from '../actions/actions';

export function update(action, state) {
  switch(action) {
    case ACTION_TYPES.ADD: {
      const counter = state.counter + 1;
      return { ...state, counter };
    }
    case ACTION_TYPES.SUBSTRACT: {
      const counter = state.counter - 1;
      return { ...state, counter };
    }
    default: {
      return {...state};
    }
  }
}