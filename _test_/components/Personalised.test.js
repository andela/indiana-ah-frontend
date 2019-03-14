/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import PersonalisedViewComponent from '../../src/components/personalised/Index.jsx';

describe('<PersonalisedViewComponent />', () => {
  const wrapper = shallow(<PersonalisedViewComponent />);
  it('should render a Personalised ViewComponent if user is logged in', () => {
    expect(wrapper.find('section')).toHaveLength(4);
  });
});
