import { createStore } from 'redux';
import { ADD_TO_CART } from './actions';

const initialStore = {
  scrollDownIsInViewport: undefined,
};

const rootReducer = (state = initialStore, action) => {
  if (action.type === ADD_TO_CART) {
    return {
      ...state,
      scrollDownIsInViewport: action.id,
    };
  }
  return state;
};

export default createStore(rootReducer);
