import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../../src/components/NotFoundPage.jsx';

describe('<NotFoundPage /> ', () => {
  const wrapper = shallow(<NotFoundPage />);
  it('should render the App component', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
