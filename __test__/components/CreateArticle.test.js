import React from 'react';
import { shallow } from 'enzyme';
import { CreateArticle, mapStateToProps } from '../../src/components/CreateArticle.jsx';
import Button from '../../src/styles/styledComponents/Button.jsx';

let wrapper;
const mockFn = jest.fn();
const event = { preventDefault() {}, target: { files: [] } };
const initialState = {
  isLoading: false,
  allArticles: [],
  error: ''
};

global.URL.createObjectURL = jest.fn();
describe('Test HoverMenu Component', () => {
  it('Should render Properly', () => {
    wrapper = shallow(<CreateArticle articles={initialState} />);
    expect(wrapper.exists()).toBe(true);

    wrapper.instance().handleChange(event);
    wrapper.instance().handleImageUpload(event);
    wrapper.instance().handleAddition(mockFn);
    wrapper.instance().handleDelete(mockFn);
    wrapper.instance().handleImageDelete(event);
    wrapper.instance().onChange(event);
    wrapper.instance().onSubmit(event);
    expect(mapStateToProps(initialState).isLoading).toEqual(undefined);
  });

  it('set state', () => {
    expect(wrapper.state().articleBody).toEqual(event);
    expect(wrapper.state().imageUrl).toEqual('');
    expect(wrapper.find('div').length).toEqual(5);
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('span').length).toEqual(1);
  });
});
