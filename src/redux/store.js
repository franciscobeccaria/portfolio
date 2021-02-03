import { createStore } from 'redux';
import { IS_IN_VIEWPORT } from './actions';

const initialStore = {
  mainSectionTop: undefined,
  projectsSectionTop: undefined,
  aboutMeSectionTop: undefined,
  contactSectionTop: undefined,
};

const rootReducer = (state = initialStore, action) => {
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
