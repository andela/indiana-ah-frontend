/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CommentComponent from '../../src/components/common/CommentComponent';

describe('<CommentComponent />', () => {
  const wrapper = shallow(<CommentComponent commentCount={5} />);
  it('should render a comment component', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('sub')).toHaveLength(1);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<CommentComponent commentCount={5} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
