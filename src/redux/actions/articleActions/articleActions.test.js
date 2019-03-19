import configureStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import swal from 'sweetalert2';
import { apiInstance } from '../../../utils/index';
import getAllArticles from './articleActions';
import { GET_ALL_ARTICLES, NO_ARTICLES, GET_ALL_ARTICLES_LOADING } from '../actionTypes';

const mock = new MockAdapter(apiInstance);
const mockStore = configureStore([thunk]);
const store = mockStore({});
const mockData = {
  articles: [
    {
      title: 'How I got into andela',
      slug: 'How I got into andela'
    }
  ]
};
const noData = {
  message: 'No articles found'
};
const error = {
  status: 500,
  data: { Error: 'Request failed with status code 500' },
  headers: undefined,
  config: {}
};

describe('get all parcels action', () => {
  it('handles getting all parcels', async () => {
    mock.onGet('/articles?page=1&limit=10').reply(200, mockData);

    const expectedActions = [
      {
        type: GET_ALL_ARTICLES_LOADING
      },
      {
        type: GET_ALL_ARTICLES,
        payload: mockData.articles
      }
    ];

    await store.dispatch(getAllArticles());
    const actualActions = store.getActions();
    expect(actualActions).toEqual(expectedActions);
  });

  it('handles getting all parcels when there is no parcel returned', async () => {
    mock.onGet('/articles?page=1&limit=10').reply(200, noData);

    const expectedActions = [
      {
        type: GET_ALL_ARTICLES_LOADING
      },
      {
        type: GET_ALL_ARTICLES,
        payload: mockData.articles
      },
      {
        type: GET_ALL_ARTICLES_LOADING
      },
      {
        type: NO_ARTICLES,
        payload: []
      }
    ];

    await store.dispatch(getAllArticles());
    const actualActions = store.getActions();
    expect(actualActions).toEqual(expectedActions);
  });

  it('handles error events', async () => {
    mock.onGet('/articles?page=1&limit=10').reply(500, error);

    const expectedActions = [
      {
        type: GET_ALL_ARTICLES_LOADING
      },
      {
        type: GET_ALL_ARTICLES,
        payload: mockData.articles
      },
      {
        type: GET_ALL_ARTICLES_LOADING
      },
      {
        type: NO_ARTICLES,
        payload: []
      },
      {
        type: GET_ALL_ARTICLES_LOADING
      }
    ];

    await store.dispatch(getAllArticles());
    const actualActions = store.getActions();

    expect(swal.isVisible()).toEqual(false);
    expect(actualActions).toEqual(expectedActions);
  });
});
