import React from 'react';
import { toast } from 'react-toastify';
import {
  REGISTER_WITH_EMAIL_REQUEST,
  REGISTER_WITH_EMAIL_FAILURE,
  REGISTER_WITH_EMAIL_SUCCESS,
  VERIFY_USER_REQUEST,
  VERIFY_USER_FAILURE,
  VERIFY_USER_SUCCESS,
  NETWORK_FAILURE,
  SET_CURRENT_USER,
  SIGN_OUT_USER
} from './actionTypes';
import { sendHttpRequest, validateToken } from '../../utils';

export const registerWithEmail = (data, { closeModal, history }) => async (dispatch) => {
  dispatch({ type: REGISTER_WITH_EMAIL_REQUEST });
  try {
    const { message, token } = await sendHttpRequest('/register', 'POST', data);
    localStorage.setItem('token', token);
    const user = validateToken(token);
    dispatch({ type: REGISTER_WITH_EMAIL_SUCCESS });
    dispatch({ type: SET_CURRENT_USER, user });
    closeModal();
    history.push('/');
    toast.success(<div>{message}</div>);
  } catch ({ response }) {
    if (!response) {
      dispatch({ type: NETWORK_FAILURE, payload: 'Connection error.' });
      toast.error(<div>Network Error. Check your connection</div>);
      return;
    }

    dispatch({
      type: REGISTER_WITH_EMAIL_FAILURE,
      payload: response.data.message
    });
  }
};

export const verifyUser = (query, { history }) => async (dispatch) => {
  dispatch({ type: VERIFY_USER_REQUEST });
  try {
    const { token } = await sendHttpRequest(`/users/verify?query=${query}`, 'PATCH');
    localStorage.setItem('token', token);
    dispatch({ type: VERIFY_USER_SUCCESS });
    toast.success(<div>Email verification successful</div>);
    history.push('/');
  } catch ({ response }) {
    if (!response) {
      dispatch({ type: NETWORK_FAILURE, payload: 'Connection error.' });
      toast.error(<div>Network Error. Check your connection</div>);
      history.push('/');
      return;
    }

    dispatch({ type: VERIFY_USER_FAILURE, payload: response.data.message });
    toast.error(<div>Email verification failed</div>);
    history.push('/');
  }
};

export const signOutUser = () => (dispatch) => {
  window.localStorage.clear();
  dispatch({ type: SIGN_OUT_USER });
};
