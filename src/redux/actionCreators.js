import { IS_IN_VIEWPORT } from './actions';

const isInViewport = (data) => ({
  type: IS_IN_VIEWPORT,
  data,
});

export { isInViewport };
