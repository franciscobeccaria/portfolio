import { IS_IN_VIEWPORT, TOAST_MESSAGE, PROJECT_MODAL } from './actions';

const isInViewport = (data) => ({
  type: IS_IN_VIEWPORT,
  data,
});

const toastMessage = (data) => ({
  type: TOAST_MESSAGE,
  data,
});

const projectModal = (data) => ({
  type: PROJECT_MODAL,
  data,
});

export { isInViewport, toastMessage, projectModal };
