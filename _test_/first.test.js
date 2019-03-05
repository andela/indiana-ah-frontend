import React from 'react';
import { shallow } from 'enzyme';

describe('first test', () => {
  const wrapper = shallow(<h1 className="heading">Author's Haven</h1>);
  it('should render a component', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('h1.heading')).toHaveLength(1);
  });
});
