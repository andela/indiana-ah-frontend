import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ConnectedSocialAuthPage from '../../src/components/SocialAuthPage.jsx';

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
