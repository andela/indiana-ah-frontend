/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';

describe('<App /> ', () => {
  const wrapper = shallow(<App />);
  it('should render the App component', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div')).toHaveLength;
  });
});
