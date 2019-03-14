import authReducer from '../../src/redux/reducers/authReducer';
import {
  REGISTER_WITH_EMAIL_FAILURE,
  REGISTER_WITH_EMAIL_REQUEST,
  REGISTER_WITH_EMAIL_SUCCESS,
  LOGIN_WITH_EMAIL_FAILURE,
  LOGIN_WITH_EMAIL_REQUEST,
  LOGIN_WITH_EMAIL_SUCCESS,
  VERIFY_USER_FAILURE,
  VERIFY_USER_REQUEST,
  VERIFY_USER_SUCCESS
} from '../../src/redux/actions/actionTypes';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  isVerified: false,
  error: ''
};

describe('authReducer test', () => {
  it('should render the initial state', () => {
    expect(initialState).toEqual(authReducer(undefined, {}));
  });

  it('should handle the REGISTER_WITH_EMAIL_REQUEST action', () => {
    expect(authReducer(initialState, { type: REGISTER_WITH_EMAIL_REQUEST })).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('should handle the LOGIN_WITH_EMAIL_REQUEST action', () => {
    expect(authReducer(initialState, { type: LOGIN_WITH_EMAIL_REQUEST })).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('should handle the REGISTER_WITH_EMAIL_FAILURE action', () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_WITH_EMAIL_FAILURE,
        payload: 'Email already taken'
      })
    ).toEqual({ ...initialState, isAuthenticated: false, error: 'Email already taken' });
  });

  it('should handle the LOGIN_WITH_EMAIL_FAILURE action', () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_WITH_EMAIL_FAILURE,
        payload: 'error logging in'
      })
    ).toEqual({ ...initialState, isAuthenticated: false, error: 'error logging in' });
  });

  it('should handle the REGISTER_WITH_EMAIL_SUCCESS action', () => {
    expect(
      authReducer(initialState, {
        type: REGISTER_WITH_EMAIL_SUCCESS,
        payload: {
          email: 'ezenwaogbonna1@gmail.com',
          id: '9e0eu93033-4ieuueu',
          username: 'ozone4real'
        }
      })
    ).toEqual({ ...initialState, isAuthenticated: true });
  });

  it('should handle the LOGIN_WITH_EMAIL_SUCCESS action', () => {
    expect(
      authReducer(initialState, {
        type: LOGIN_WITH_EMAIL_SUCCESS
      })
    ).toEqual({
      ...initialState,
      isAuthenticated: true,
      error: '',
      isLoading: false
    });
  });

  it('should handle the VERIFY_USER_REQUEST action', () => {
    expect(authReducer(initialState, { type: VERIFY_USER_REQUEST })).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('should handle the VERIFY_USER_FAILURE action', () => {
    expect(
      authReducer(initialState, {
        type: VERIFY_USER_FAILURE,
        payload: 'Invalid token supplied'
      })
    ).toEqual({
      ...initialState,
      error: 'Invalid token supplied'
    });
  });

  it('should handle the VERIFY_USER_SUCCESS action', () => {
    expect(
      authReducer(initialState, {
        type: VERIFY_USER_SUCCESS
      })
    ).toEqual({
      ...initialState,
      isAuthenticated: true,
      isVerified: true
    });
  });
});
