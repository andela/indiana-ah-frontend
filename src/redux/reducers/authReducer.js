import {
  REGISTER_WITH_EMAIL_REQUEST,
  REGISTER_WITH_EMAIL_FAILURE,
  REGISTER_WITH_EMAIL_SUCCESS,
  LOGIN_WITH_EMAIL_REQUEST,
  LOGIN_WITH_EMAIL_FAILURE,
  LOGIN_WITH_EMAIL_SUCCESS,
  VERIFY_USER_REQUEST,
  VERIFY_USER_FAILURE,
  VERIFY_USER_SUCCESS,
  NETWORK_FAILURE,
  SET_CURRENT_USER,
  REGISTER_WITH_SM,
  SIGN_OUT_USER
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  isVerified: false,
  error: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_WITH_SM:
      return {
        ...state,
        isAuthenticated: true
      };
    case REGISTER_WITH_EMAIL_REQUEST:
      return { ...state, isLoading: true, error: '' };
    case REGISTER_WITH_EMAIL_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case REGISTER_WITH_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        isAuthenticated: true
      };
    case LOGIN_WITH_EMAIL_REQUEST:
      return { ...state, isLoading: true, error: '' };
    case LOGIN_WITH_EMAIL_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case LOGIN_WITH_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        isAuthenticated: true
      };
    case VERIFY_USER_REQUEST:
      return { ...state, isLoading: true, error: '' };
    case VERIFY_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case VERIFY_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        isAuthenticated: true,
        isVerified: true
      };
    case NETWORK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SET_CURRENT_USER:
      return {
        isLoading: false,
        error: '',
        isAuthenticated: true,
        isVerified: action.user.isVerified
      };
    case SIGN_OUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
