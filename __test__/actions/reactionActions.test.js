import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { apiInstance } from '../../src/utils';

import { LIKE_ARTICLE, DISLIKE_ARTICLE } from '../../src/redux/actions/actionTypes';
import reactToArticle from '../../src/redux/actions/reactionActions';

const mock = new MockAdapter(apiInstance);
const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe('Reaction actions test', () => {
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    mock.reset();
  });

  it('should create the LIKE_ARTICLE action if the reaction type is "like"', async () => {
    const expectedActions = [{ type: LIKE_ARTICLE }];
    store.dispatch(reactToArticle('when-i-get-older', 'like'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create the DISLIKE_ARTICLE action if the reaction type is "dislike"', async () => {
    const expectedActions = [{ type: DISLIKE_ARTICLE }];
    store.dispatch(reactToArticle('when-i-get-older', 'dislike'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
