import { SET_CURRENT_USER, SIGN_OUT_USER } from '../actions/actionTypes';

const initialState = {
  userData: {}
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        userData: action.user
      };
    case SIGN_OUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
