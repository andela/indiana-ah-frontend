import React from 'react';
import { shallow } from 'enzyme';
// eslint-disable-next-line import/no-unresolved
import Modal from '../../../components/common/Modal';
// eslint-disable-next-line import/no-unresolved
import IndexPage from '../../../components/IndexPage';

describe('Custom Input component', () => {
  const props = {
    body: 'This is the body',
    modalIsOpen: jest.fn(),
    closeModal: jest.fn(),
  };
  const wrapper = shallow(<Modal {...props}/>);
  it('should create an instance and render correctly', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div')).toHaveLength(1);
    wrapper.setProps({ ...props });
  });
});

describe('Index Page component', () => {
  const wrapper = shallow(<IndexPage />);
  it('should create an instance and render correctly', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div')).toHaveLength(1);
  });
});
