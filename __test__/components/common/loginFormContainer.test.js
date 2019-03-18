import React from 'react';
import { mount, shallow } from 'enzyme';
import axios from 'axios';
import { LoginFormContainer } from '../../../src/components/LoginFormContainer.jsx';

jest.mock('axios');

const props = {
  auth: { isLoading: false },
  error: ''
};

describe('test the login container form', () => {
  it('should match snap shot', () => {
    const tree = mount(<LoginFormContainer {...props} />);
    expect(tree).toMatchSnapshot();
  });
  it('should simulate the handleSubmit', () => {
    const loginWithEmail = jest.fn();
    const wrapper = mount(
      <LoginFormContainer {...props} loginWithEmail={loginWithEmail} />
    );
    wrapper.find('form').simulate('submit');
    const input1 = wrapper.find('input').at(0);
    const input2 = wrapper.find('input').at(1);
    input1.simulate('change', { target: { value: 'fafa@gmail.com' } });
    input2.simulate('change', { target: { value: 'fafasecret22' } });
    expect(loginWithEmail).toHaveBeenCalled();
  });
  it('should simulate the failure of handleSubmit', () => {
    const loginWithEmail = jest.fn();
    const wrapper = mount(
      <LoginFormContainer {...props} loginWithEmail={loginWithEmail} />
    );
    props.auth.isLoading = true;
    wrapper.find('form').simulate('submit');
    const input1 = wrapper.find('input').at(0);
    const input2 = wrapper.find('input').at(1);
    wrapper.setState({ error: 'error logging in' });
    input1.simulate('change', { target: { value: 'fafa@gmail.com' } });
    input2.simulate('change', { target: { value: 'fafasecret33' } });
    expect(wrapper.state('error')).toEqual('error logging in');
    expect(wrapper.find('.text-danger')).toHaveLength(7);
  });
  it('should simulate the click of the button', () => {
    const displayForm = jest.fn();
    const wrapper = mount(<LoginFormContainer {...props} displayForm={displayForm} />);
    const aTag = wrapper.find('a').at(3);
    aTag.simulate('click');
    expect(displayForm).toHaveBeenCalled();
  });
});
