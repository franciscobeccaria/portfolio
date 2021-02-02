import { ADD_TO_CART } from './actions';

const addToCart = (id) => ({
  type: ADD_TO_CART,
  id,
});

export { addToCart };
