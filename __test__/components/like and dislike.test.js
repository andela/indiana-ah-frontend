/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import LikeComponent from '../../src/components/common/LikeComponent';
import DislikeComponent from '../../src/components/common/DislikeComponent';

describe('<LikeComponent />', () => {
  const likeCount = 2;
  const wrapper = shallow(<LikeComponent likeCount={likeCount} color='green' />);
  it('should render a like component', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('span')).toHaveLength;
  });
});

describe('<DislikeComponent />', () => {
  const dislikeCount = 2;
  const wrapper = shallow(<DislikeComponent dislikeCount={dislikeCount} color='green' />);
  it('should render a dislike component', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('span')).toHaveLength;
  });
});
