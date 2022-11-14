import axios from 'axios';
import {
  LOADING_DOCUMENT,
  FETCH_DOCUMENT,
} from '../constants/documentConstants';

export const fetchDocument = (payload) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_DOCUMENT });

    const { data } = axios;

    dispatch({ type: ADD_DOCUMENT, payload: data });
  } catch (error) {}
};
