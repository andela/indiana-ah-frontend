import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ConnectedSocialAuthPage from '../../src/components/SocialAuthPage.jsx';
import reducer from '../../src/redux/reducers/authReducer';
import { REGISTER_WITH_SM } from '../../src/redux/actions/actionTypes';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('Social auth page component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Provider store={store}>
            <ConnectedSocialAuthPage />
          </Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('social auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      isAuthenticated: false,
      isVerified: false,
      error: ''
    });
  });
  it('should authenticate the user', () => {
    const successAction = {
      type: REGISTER_WITH_SM,
    };
    expect(reducer({}, successAction)).toEqual({
      isAuthenticated: true,
    });
  });
});
