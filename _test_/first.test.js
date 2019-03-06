import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('first test', () => {
  const wrapper = shallow(<App />);
  it('should render the App', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div')).toHaveLength;
  });
});

