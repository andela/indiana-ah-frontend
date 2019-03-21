import React from 'react';
import { shallow } from 'enzyme';

import SingleArticle from '../../src/components/containers/SingleArticle.jsx';

describe('<SideNav/>', () => {
  it('should render the SingleArticle component with 9 divs', () => {
    const wrapper = shallow(<SingleArticle />);
    expect(wrapper.find('div')).toHaveLength(9);
    expect(wrapper.find('h1')).toHaveLength(2);
  });
});

describe('<SideNav/>', () => {
  it('should render the SingleArticle component with 9 divs', () => {
    const wrapper = shallow(<SingleArticle />);
    expect(wrapper.find('div')).toHaveLength(9);
    expect(wrapper.find('h1')).toHaveLength(2);
  });
});
