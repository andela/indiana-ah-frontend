import { SET_CURRENT_USER, SIGN_OUT_USER } from '../../src/redux/actions/actionTypes';
import userReducer from '../../src/redux/reducers/userReducer';

const initialState = {
  userData: {}
};

const user = {
  username: 'omenkish',
  email: 'shkdjddkkkkdkd@gmail.com'
};

describe('User reducer test', () => {
  it('should test the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle the SET_CURRENT_USER action', () => {
    expect(userReducer(initialState, { type: SET_CURRENT_USER, user })).toEqual({
      ...initialState,
      userData: user
    });
  });

  it('should handle the SIGN_OUT_USER action', () => {
    expect(
      userReducer(initialState, {
        type: SIGN_OUT_USER
      })
    ).toEqual(initialState);
  });
});
