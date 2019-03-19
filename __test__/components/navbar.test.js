import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Navbar, { NavBar } from '../../src/components/common/Navbar.jsx';

const initialState = {
  auth: { isAuthenticated: false },
  user: { userData: { username: 'ozone4real' } }
};

const mockStore = configureStore([thunk]);
const store = mockStore(initialState);
const event = {
  preventDefault: jest.fn()
};

describe('Custom Navbar component test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders a navbar', () => {
    const navbar = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );
    expect(navbar.find('.navbar')).toBeDefined();
    const inputField = navbar.find('input');
    const button = navbar.find('button');
    const button2 = navbar.find('button').at(1);
    button2.simulate('click');
    expect(inputField.length).toEqual(1);
    expect(button.length).toEqual(2);
  });

  it('tests for its functionalities', () => {
    const wrapper = shallow(<NavBar {...initialState} signOutUser={jest.fn()} />);
    wrapper.instance().openModal();
    expect(wrapper.state().modalIsOpen).toEqual(true);
    wrapper.instance().closeModal();
    expect(wrapper.state().modalIsOpen).toEqual(false);
    wrapper.instance().displayForm('login');
    wrapper.instance().dropDown(event);
    wrapper.instance().closeDropDown();
    wrapper.instance().componentWillUnmount();
    wrapper.setProps({ auth: { isAuthenticated: true } });
    wrapper.setState({ dropDown: true });
    wrapper
      .find('Link')
      .at(1)
      .simulate('click');
  });
});
