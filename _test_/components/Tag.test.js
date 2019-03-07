import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../../src/components/common/Tag';

let mockFn = jest.fn();

describe('Test Tag Component', () => {
  it('should render order component', () => {
    const wrapper = shallow(
      <Tag
        handleDelete={mockFn}
        handleAddition={mockFn}
      />
    );
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.state().tags).toEqual([]);
    wrapper.instance().handleAddition(mockFn);
    wrapper.instance().handleDelete(mockFn);
  });
});
