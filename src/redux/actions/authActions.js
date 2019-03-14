import React from 'react';
import { toast } from 'react-toastify';
import {
  REGISTER_WITH_EMAIL_REQUEST,
  REGISTER_WITH_EMAIL_FAILURE,
  REGISTER_WITH_EMAIL_SUCCESS,
  VERIFY_USER_REQUEST,
  VERIFY_USER_FAILURE,
  VERIFY_USER_SUCCESS,
  LOGIN_WITH_EMAIL_REQUEST,
  LOGIN_WITH_EMAIL_FAILURE,
  LOGIN_WITH_EMAIL_SUCCESS
} from './actionTypes';
import { sendHttpRequest } from '../../utils';

export const registerWithEmail = (data, { closeModal }) => async (dispatch) => {
  dispatch({ type: REGISTER_WITH_EMAIL_REQUEST });
  try {
    const { message, token } = await sendHttpRequest('/register', 'POST', data);
    localStorage.setItem('token', token);
    dispatch({ type: REGISTER_WITH_EMAIL_SUCCESS });
    closeModal();
    toast.success(<div>{message}</div>);
  } catch ({ response }) {
    dispatch({
      type: REGISTER_WITH_EMAIL_FAILURE,
      payload: response.data.message
    });
  }
};

export const loginWithEmail = (data, { closeModal }) => async (dispatch) => {
  dispatch({ type: LOGIN_WITH_EMAIL_REQUEST });
  try {
    const { message, token } = await sendHttpRequest('/login', 'POST', data);
    localStorage.setItem('token', token);
    dispatch({ type: LOGIN_WITH_EMAIL_SUCCESS });
    closeModal();
    toast.success(<div>{message}</div>);
  } catch ({ response }) {
    dispatch({
      type: LOGIN_WITH_EMAIL_FAILURE,
      payload: response.data.message
    });
    return response.data.message;
  }
};

export const verifyUser = (history, query) => async (dispatch) => {
  dispatch({ type: VERIFY_USER_REQUEST });
  try {
    const { token } = await sendHttpRequest(`/users/verify?query=${query}`, 'PATCH');
    localStorage.setItem('token', token);
    dispatch({ type: VERIFY_USER_SUCCESS });
    history.push('/');
  } catch ({ response }) {
    dispatch({ type: VERIFY_USER_FAILURE, payload: response.data.message });
  }
};
