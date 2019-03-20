import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { apiInstance } from '../../../utils/index';

import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_LOADING
} from '../actionTypes';
import createUserArticle from './createArticleAction';

const mock = new MockAdapter(apiInstance);
const mockStore = configureMockStore([thunk]);
const store = mockStore();
const history = { push: jest.fn() };
const wrongArticle = {
  articleTitle: '',
  articleBody: 'This is real',
  tags: 'noyhimg',
  imageUrl: ''
};

const rightArticle = {
  article: {
    articleTitle: 'This is Life, so sweet ggog hjut ',
    articleBody: 'This is real, as in for real  szdykctavszf dsgfasehh ygdfaujvdf ',
    tags: 'know,good,success',
    imageUrl: 'http://images.unsplash.com/photo-1521120413309-42e7eada0334?'
  }
};

describe('Auth action creators test', () => {
  beforeEach(() => {
    store.clearActions();
  });
  afterEach(() => {
    mock.reset();
  });
  it('should call CREATE_ARTICLE action', async () => {
    mock.onPost('/articles').reply(201, rightArticle);

    const expectedAction = [
      { type: CREATE_ARTICLE_LOADING },
      { type: CREATE_ARTICLE, article: rightArticle.article }
    ];

    await store.dispatch(createUserArticle(rightArticle.article, { history }));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should call CREATE_ARTICLE_FAILURE action', async () => {
    mock
      .onPost('/articles')
      .reply(400, { message: '"articleTitle" is not allowed to be empty' });

    const expectedAction = [
      { type: CREATE_ARTICLE_LOADING },
      { type: CREATE_ARTICLE_FAILURE }
    ];

    await store.dispatch(createUserArticle(wrongArticle, { history }));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
