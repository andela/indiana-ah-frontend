import configureStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { apiInstance } from '../../../utils/index';
import getAllArticles from './articleActions';
import { GET_ALL_ARTICLES } from '../actionTypes';

const mock = new MockAdapter(apiInstance);
const mockStore = configureStore([thunk]);
const store = mockStore({});
const mockData = {
  articles: [{
    title: 'How I got into andela',
    slug: 'How I got into andela'
  }]
};

describe('get all parcels action', () => {
  it('handles getting all parcels', async () => {
    mock.onGet('/articles?page=1&limit=10')
      .reply(200, mockData);

    const expectedActions = [
      { type: GET_ALL_ARTICLES, payload: mockData.articles },
    ];

    await store.dispatch(getAllArticles());
    const actualActions = store.getActions();
    expect(actualActions).toEqual(expectedActions);
  });
});
