import React from 'react';
import { shallow } from 'enzyme';
import { CreateArticle, mapStateToProps } from '../../src/components/CreateArticle.jsx';

const FormDataMock = () => {
  this.append = jest.fn();
};
global.FormData = FormDataMock;
let wrapper;
const mockFn = jest.fn();
const event = { preventDefault() {}, target: { files: [] } };
const initialState = {
  isLoading: false,
  allArticles: [],
  error: ''
};
const articleTitle = 'thi';
const articleBody = 'this';
const tags = 't';
const articleIsValid = true;
const errors = {};

const data = {
  preventDefault() {},
  image: 'gfsdjhskfskejrd',
  tags: ['ghjfsdjg', 'trdufgkcfgyh', 'ghokhjhlk'],
  articleTitle: 'Goood this is working',
  articleBody: 'Goood this is working'
};

global.URL.createObjectURL = jest.fn();
describe('Test CreateArticle Component', () => {
  it('Should render Properly', () => {
    wrapper = shallow(<CreateArticle articles={initialState} />);
    expect(wrapper.exists()).toBe(true);

    wrapper.instance().handleChange(event);
    wrapper.instance().handleImageUpload(event);
    wrapper
      .instance()
      .handleArticleValidation(articleTitle, articleBody, tags, errors, articleIsValid);
    wrapper.instance().handleAddition(mockFn);
    wrapper.instance().handleImageDelete(event);
    wrapper.instance().onChange(event);
    wrapper.instance().onSubmit(data);
    expect(mapStateToProps(initialState).isLoading).toEqual(undefined);
  });

  it('set state and find element', () => {
    expect(wrapper.state().articleBody).toEqual(event);
    wrapper.setState({ displayImage: 'svvsjrgbksgadgfhbakjbgjf`vkjfs' });

    expect(wrapper.find('span i').length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(8);
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('form').length).toEqual(1);
    wrapper.find('form').simulate('click');
  });
});
