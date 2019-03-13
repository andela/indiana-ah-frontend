import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import FormComponent from '../../src/components/common/FormComponent.jsx';

const handleSubmit = jest.fn();
const handleChange = jest.fn();

describe('loginForm test', () => {
  const wrapper = shallow(
    <FormComponent loginForm onClick={handleSubmit} onChange={handleChange} />
  );
  it('should test that the login form rendered correctly', () => {
    const tree = renderer
      .create(<FormComponent loginForm onClick={handleSubmit} onChange={handleChange} />)
      .toJSON();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.fbButton')).toBeDefined();
    expect(wrapper.find('.bg-light')).toBeDefined();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('div')).toHaveLength(7);
  });
});
describe('registerForm test', () => {
  const wrapper = shallow(
    <FormComponent registerForm onClick={handleSubmit} onChange={handleChange} />
  );
  it('should test that the register form rendered correctly', () => {
    const tree = renderer
      .create(
        <FormComponent registerForm onClick={handleSubmit} onChange={handleChange} />
      )
      .toJSON();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.fbButton')).toBeDefined();
    expect(wrapper.find('.bg-light')).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
describe('resetPasswordForm test', () => {
  const wrapper = shallow(
    <FormComponent resetPasswordForm onClick={handleSubmit} onChange={handleChange} />
  );
  it('should test that the reset password form rendered', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
