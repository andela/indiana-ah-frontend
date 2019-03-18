import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Home } from '../../src/components/Home.jsx';
import Index from '../../src/components/IndexPage.jsx';
import initialState from '../../__fixtures__/indexPage';

const mockStore = configureStore([thunk]);
const store = mockStore(initialState);

describe('Home component test', () => {
  it('should test that the Home component rendered', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home auth={{ isAuthenticated: false }} />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(Index).length).toEqual(1);
    wrapper.setProps({ auth: { isAuthenticated: true } });
  });
});
