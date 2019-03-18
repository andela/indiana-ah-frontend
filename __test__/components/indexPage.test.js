import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import IndexForm from '../../src/components/forms/indexForm.jsx';
import reducer from '../../src/redux/reducers/articleReducer';
import IndexPage from '../../src/components/IndexPage.jsx';
import IndexCarousel from '../../src/components/carousels/indexCarousel.jsx';
import initialState from '../../__fixtures__/indexPage';
import {
  GET_ALL_ARTICLES,
  NO_ARTICLES,
  GET_ALL_ARTICLES_LOADING
} from '../../src/redux/actions/actionTypes';

const mockStore = configureStore([thunk]);
const store = mockStore(initialState);
const onChange = jest.fn();
let indexPage;
let articles;

describe('Index page component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Provider store={store}>
            <IndexPage />
          </Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Index page', () => {
  beforeEach(() => {
    indexPage = shallow(
      <Provider store={store}>
        <IndexPage />
      </Provider>
    );
  });
  it('renders the Index Page', () => {
    expect(indexPage.find('.container')).toBeDefined();
    expect(indexPage.find(<IndexCarousel />)).toBeDefined();
  });
  it('passes articles from state', () => {
    const props = indexPage.props().value.storeState;
    expect(props.articles).toEqual(initialState.articles);
  });
});

describe('articles reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      allArticles: [],
      error: '',
      isLoading: false
    });
  });
  it('should return all articles', () => {
    const successAction = {
      type: GET_ALL_ARTICLES,
      payload: articles
    };
    expect(reducer({}, successAction)).toEqual({
      allArticles: articles,
      isLoading: false
    });
  });
  it('should return loading', () => {
    const successAction = {
      type: GET_ALL_ARTICLES_LOADING
    };
    expect(reducer({}, successAction)).toEqual({ isLoading: true });
  });
  it('should return no articles', () => {
    const successAction = {
      type: NO_ARTICLES,
      payload: []
    };
    expect(reducer({}, successAction)).toEqual({ allArticles: [], isLoading: false });
  });
});

describe('Index subscribe form', () => {
  it('should change state', () => {
    const indexForm = mount(<IndexForm handleChange={onChange} />);
    const input = indexForm.find('input').at(0);
    input.instance().value = 'yinks@gmail.com';
    input.simulate('change');
    expect(indexForm.state().email).toEqual('yinks@gmail.com');
  });
});
