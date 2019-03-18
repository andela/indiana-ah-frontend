import authReducer from '../../src/redux/reducers/authReducer';
import {
  REGISTER_WITH_EMAIL_FAILURE,
  REGISTER_WITH_EMAIL_REQUEST,
  REGISTER_WITH_EMAIL_SUCCESS,
  VERIFY_USER_FAILURE,
  VERIFY_USER_REQUEST,
  VERIFY_USER_SUCCESS,
  SET_CURRENT_USER,
  SIGN_OUT_USER,
  NETWORK_FAILURE
} from '../../src/redux/actions/actionTypes';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  isVerified: false,
  error: ''
};

describe('authReducer test', () => {
  it('should test for the the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle the REGISTER_WITH_EMAIL_REQUEST action', () => {
    expect(authReducer(initialState, { type: REGISTER_WITH_EMAIL_REQUEST })).toEqual({
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

  it('should handle the SET_CURRENT_USER action', () => {
    expect(
      authReducer(initialState, {
        type: SET_CURRENT_USER,
        user: { username: 'ozone', email: 'ozone@gmail.com' }
      })
    ).toEqual({ isLoading: false, isAuthenticated: true, error: '' });
  });

  it('should handle the SIGN_OUT_USER action', () => {
    expect(
      authReducer(initialState, {
        type: SIGN_OUT_USER
      })
    ).toEqual(initialState);
  });

  it('should handle the NETWORK_FAILURE failure', () => {
    expect(
      authReducer(initialState, {
        type: NETWORK_FAILURE,
        payload: 'Network error'
      })
    ).toEqual({ ...initialState, error: 'Network error' });
  });
});
