import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { SignupFormContainer } from '../../src/components/SignupFormContainer.jsx';

const mockFn = jest.fn();

const spyRegisterWithEmail = sinon.spy(() => Promise.resolve({}));

const emailEvent = {
  preventDefault() {},
  target: { id: 'email', type: 'email', value: 'ezenwaogbonna1@gmail.com' }
};

const usernameEvent = {
  preventDefault() {},
  target: { id: 'username', type: 'text', value: 'o' }
};

const prevProps = { auth: { error: '' } };
const initialState = {
  data: {
    email: '',
    username: '',
    password: ''
  },
  errors: {}
};

describe('Sign up form container test', () => {
  const wrapper = shallow(
    <SignupFormContainer
      auth={{ error: '', isLoading: false }}
      registerWithEmail={mockFn}
      displayForm={mockFn}
    />
  );

  it('should check that the component renders correctly and it functions as expected', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.state()).toEqual(initialState);

    expect(wrapper.instance().validate()).toEqual(true);
    wrapper.setState({
      errors: { username: 'ozone4real', password: 'password too short' }
    });
    expect(wrapper.instance().validate()).toEqual(false);
    wrapper.instance().handleSubmit(emailEvent);
    wrapper.setProps({ registerWithEmail: spyRegisterWithEmail });
    wrapper.instance().handleChange(emailEvent);
    wrapper.instance().handleBlur(emailEvent);
    wrapper.setProps({ auth: { error: 'email already taken' } });
    wrapper.instance().componentDidUpdate(prevProps);
    wrapper.setProps({ auth: { error: 'username already exists' } });
    wrapper.instance().componentDidUpdate(prevProps);
    wrapper
      .find('a')
      .at(3)
      .simulate('click');
    wrapper.setState({
      errors: {
        username:
          'Username must be at least 3 characters long and must include at least an alphabet'
      },
      data: { username: 'dk' }
    });
    wrapper.instance().handleBlur(usernameEvent);
    expect(wrapper.state().errors.username).toEqual(
      'Username must be at least 3 characters long and must include at least an alphabet'
    );

    wrapper.setState({
      errors: {},
      data: {
        email: 'ezenwaogbonna1@gmail.com',
        username: 'ozone4real',
        password: 'skjeju8383900'
      }
    });

    wrapper.instance().handleSubmit(emailEvent);
    wrapper.setState({ data: {} });
    wrapper.instance().handleBlur(usernameEvent);
    wrapper.instance().validate();
    wrapper.setProps({ auth: { error: '', isLoading: true } });
  });
});