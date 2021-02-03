import { createStore } from 'redux';
import { IS_IN_VIEWPORT, TOAST_MESSAGE, PROJECT_MODAL } from './actions';

const initialStore = {
  mainSectionTop: undefined,
  projectsSectionTop: undefined,
  aboutMeSectionTop: undefined,
  contactSectionTop: undefined,

  toastMessageVisibility: false,
  toastMessageText: undefined,

  projectModalVisibility: false,
  projectModalData: {},
};

const rootReducer = (state = initialStore, action) => {
  if (action.type === PROJECT_MODAL) {
    return {
      ...state,
      projectModalVisibility: action.data.visibility,
      projectModalData: action.data.data,
    };
  }
  if (action.type === TOAST_MESSAGE) {
    return {
      ...state,
      toastMessageVisibility: action.data.visibility,
      toastMessageText: action.data.text,
    };
  }
  if (action.type === IS_IN_VIEWPORT) {
    if (action.data.mainSectionTop) {
      return {
        ...state,
        mainSectionTop: action.data.mainSectionTop,
      };
    }
    if (action.data.projectsSectionTop) {
      return {
        ...state,
        projectsSectionTop: action.data.projectsSectionTop,
      };
    }
    if (action.data.aboutMeSectionTop) {
      return {
        ...state,
        aboutMeSectionTop: action.data.aboutMeSectionTop,
      };
    }
    if (action.data.contactSectionTop) {
      return {
        ...state,
        contactSectionTop: action.data.contactSectionTop,
      };
    }
  }
  return state;
};

export default createStore(rootReducer);
