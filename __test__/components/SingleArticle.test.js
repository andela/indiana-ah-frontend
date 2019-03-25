import React from 'react';
import { shallow } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { SingleArticle } from '../../src/components/containers/SingleArticle.jsx';
import reducer from '../../src/redux/reducers/getSingleArticleReducer';
import articleAction from '../../src/redux/actions/getSingleArticleActions/getSingleArticleActions';
import { apiInstance } from '../../src/utils/index';
import {
  GET_SINGLE_ARTICLE_LOADING,
  GET_SINGLE_ARTICLE_SUCCESS
} from '../../src/redux/actions/actionTypes';

const mock = new MockAdapter(apiInstance);
const mockStore = configureMockStore([thunk]);
const store = mockStore();
const auth = {
  isVerified: true
};
const user = {
  userData: {
    username: 'chuks'
  }
};
const article = {
  article: {
    articleBody: '',
    articleTitle: '',
    tags: '',
    imageUrl: '',
    Comments: 5,
    likes: 6,
    dislikes: 3,
    author: '',
    createdAt: ''
  }
};
const expectedResponseData = {
  article: {},
  timeToRead: '1 min read'
};
const articles = {};
const history = { push: jest.fn() };
const mockFn = jest.fn();
const match = {
  params: {
    slug: 'i-love-coding'
  }
};
describe('<SingleArticle/>', () => {
  it('should render the SingleArticle component with 1 div', () => {
    const wrapper = shallow(
      <SingleArticle
        singleArticle={article}
        user={user}
        auth={auth}
        match={match}
        getSingleArticle={mockFn}
        history = { history }
      />
    );
    expect(wrapper.find('div.carousel-spinner').length).toEqual(1);
    article.article.tags = 'hey, hoo, hi';
    article.article.imageUrl = 'http://i3i3i3ii3je';
    article.article.articleBody = 'I am going home';
    wrapper.setProps({ article });
    expect(wrapper.find('div.carousel-spinner').length).toEqual(0);
    expect(wrapper.find('div.SingleArticle').length).toEqual(1);
  });
});

describe('getSingleArticles reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      article: {}
    });
  });

  it('should return loading', () => {
    const successAction = {
      type: GET_SINGLE_ARTICLE_LOADING
    };
    expect(reducer({}, successAction)).toEqual({ isLoading: true, article: {} });
  });

  it('should return all articles', () => {
    const successAction = {
      type: GET_SINGLE_ARTICLE_SUCCESS,
      payload: articles
    };
    expect(reducer({}, successAction)).toEqual({ isLoading: false, article: articles });
  });
});

describe('getSingleArticleActions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  afterEach(() => {
    mock.reset();
  });
  it('should create the GET_SINGLE_ARTICLE_SUCCESS action if the api request was successful', async () => {
    mock.onGet('/articles/i-love-coding').reply(200, expectedResponseData);
    const { timeToRead } = expectedResponseData;

    const expectedActions = [
      { type: GET_SINGLE_ARTICLE_LOADING },
      { type: GET_SINGLE_ARTICLE_SUCCESS, payload: { timeToRead } }
    ];

    await store.dispatch(articleAction('i-love-coding', history));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should redirect to a not-found page if the api request was not successful', async () => {
    mock.onGet('/articles/i-love-coding').reply(404);

    const expectedActions = [{ type: GET_SINGLE_ARTICLE_LOADING }];

    await store.dispatch(articleAction('i-love-coding', history));
    expect(store.getActions()).toEqual(expectedActions);
    expect(history.push).toHaveBeenCalled();
  });
});
