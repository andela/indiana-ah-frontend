import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import InputField from '../../../components/common/Input.jsx';
import Input from '../Input.jsx';

describe('Custom Input component', () => {
  const props = {
    type: 'email',
    id: 'email',
    value: 'Odinks',
    placeholder: 'Enter your email',
    handleChange: () => 2,
  };
  const wrapper = shallow(<InputField {...props}/>);
  it('should create an instance and render correctly', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div')).toHaveLength(1);
    wrapper.setProps({ ...props });
  });
});

describe('Custom Input styled-component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Input/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
