import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { CommentItem } from '../../../src/components/comment/CommentItem.jsx';
import comments from '../../../__fixtures__/comments';

const mockFn = jest.fn();
const props = {
  user: {
    userData: {
      id: 1,
      imageUrl: 'www.my-url.com',
      name: 'omenkish',
      username: 'omenkish'
    }
  },
  deleteComment: mockFn,
  isLoading: false
};

test('It should render the comment item component', () => {
  const tree = renderer.create(<CommentItem comment={comments[0]} {...props} />);
  expect(tree).toMatchSnapshot();
});

test('It should render the comment item component', () => {
  const wrapper = shallow(<CommentItem comment={comments[0]} {...props} />);
  wrapper.setState({ modalIsOpen: true });
  expect(wrapper).toMatchSnapshot();
});

describe('Test CommentItem component', () => {
  const wrapper = mount(<CommentItem comment={comments[0]} {...props} />);
  it('It should render the comment item component', () => {
    expect(wrapper.state('modalIsOpen')).toBe(false);
  });

  it('should simulate button clicks', () => {
    wrapper.setState({ modalIsOpen: true });
    const modal = wrapper.find('CustomModal');
    expect(modal.find('h2').text()).toBe(
      ' Are you sure you want to delete this comment?'
    );
    modal
      .find('button')
      .at(0)
      .simulate('click');
    expect(wrapper.state('modalIsOpen')).toBe(false);
    modal
      .find('button')
      .at(1)
      .simulate('click');
  });

  it('should find and simulate modal open button click', () => {
    wrapper.instance().openModal();
    props.isLoading = true;
    wrapper.setProps({ ...props });
    props.user.userData.id = 12;
    wrapper.setProps({ ...props });
  });
});
