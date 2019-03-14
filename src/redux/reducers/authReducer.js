import {
  LOGIN_WITH_EMAIL_REQUEST,
  LOGIN_WITH_EMAIL_FAILURE,
  LOGIN_WITH_EMAIL_SUCCESS,
  VERIFY_USER_REQUEST,
  VERIFY_USER_FAILURE,
  VERIFY_USER_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  isVerified: false,
  error: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default authReducer;
