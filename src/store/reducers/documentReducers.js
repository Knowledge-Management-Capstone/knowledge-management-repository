import {
  FETCH_DOCUMENT,
  LOADING_DOCUMENT,
} from '../constants/documentConstants';

export const documentReducer = (
  state = { loading: false, error: null, data: {} },
  action
) => {
  switch (action.type) {
    case FETCH_DOCUMENT: {
      return { ...state, loading: true };
    }
    case FETCH_DOCUMENT: {
      return { loading: false, error: null, data: action.payload };
    }
  }
};
