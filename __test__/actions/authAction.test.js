import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { apiInstance } from '../../src/utils';

import {
  VERIFY_USER_REQUEST,
  VERIFY_USER_FAILURE,
  VERIFY_USER_SUCCESS,
  LOGIN_WITH_EMAIL_REQUEST,
  LOGIN_WITH_EMAIL_FAILURE,
  LOGIN_WITH_EMAIL_SUCCESS
} from '../../src/redux/actions/actionTypes';
import { verifyUser, loginWithEmail } from '../../src/redux/actions/authActions';

const mock = new MockAdapter(apiInstance);
const mockStore = configureMockStore([thunk]);
const store = mockStore();

const badUserLoginData = {
  email: 'ozone4life@gmail.com',
  password: 'jjd'
};

const rightUserLoginData = {
  email: 'akeembalo@gmail.com',
  password: 'jdjjjjd99'
};

const expectedResponseDataReg = {
  message:
    'Successfully registered to Authors haven. Kindly check your email to verify your account',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI3ZmU5ZTRmLTg4MzMtNGYwZC05NmI1LWM2MTYwMzBiNjU3ZiIsInVzZXJuYW1lIjoiYWtwb2JpIiwiZW1haWwiOiJjaGluYXNhQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTUyMzk0NzI1LCJleHAiOjE1NTI0ODExMjV9.T86wbM-V_IO64gBphxIyXuTrzUIafj1Pj1SroDgUBM4'
};
const expectedLoginResponseDataReg = {
  message:
    'Successfully registered to Authors haven. Kindly check your email to verify your account',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI3ZmU5ZTRmLTg4MzMtNGYwZC05NmI1LWM2MTYwMzBiNjU3ZiIsInVzZXJuYW1lIjoiYWtwb2JpIiwiZW1haWwiOiJjaGluYXNhQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTUyMzk0NzI1LCJleHAiOjE1NTI0ODExMjV9.T86wbM-V_IO64gBphxIyXuTrzUIafj1Pj1SroDgUBM4'
};

const { token } = expectedResponseDataReg;

const history = { push: jest.fn() };
const closeModal = jest.fn();

describe('Auth action creators test', () => {
  beforeEach(() => {
    store.clearActions();
  });
  afterEach(() => {
    mock.reset();
  });
  it('should create the LOGIN_WITH_EMAIL_FAILURE action if the api request was not successful', async () => {
    mock.onPost('/login').reply(401, { message: 'error logging in' });

    const expectedActions = [
      { type: LOGIN_WITH_EMAIL_REQUEST },
      { type: LOGIN_WITH_EMAIL_FAILURE, payload: 'error logging in' }
    ];

    await store.dispatch(loginWithEmail(badUserLoginData, { closeModal }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create the LOGIN_WITH_EMAIL_SUCCESS action if the api request was successful', async () => {
    mock.onPost('/login').reply(200, expectedLoginResponseDataReg);

    const expectedActions = [
      { type: LOGIN_WITH_EMAIL_REQUEST },
      { type: LOGIN_WITH_EMAIL_SUCCESS }
    ];

    await store.dispatch(loginWithEmail(rightUserLoginData, { closeModal }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create VERIFY_USER_FAILURE action if the api request was not successful', async () => {
    mock.onPatch(`/users/verify?query=${token}`).reply(401, {
      message: 'Access denied, you are not authorized to access this route'
    });

    const expectedActions = [
      { type: VERIFY_USER_REQUEST },
      {
        type: VERIFY_USER_FAILURE,
        payload: 'Access denied, you are not authorized to access this route'
      }
    ];

    await store.dispatch(verifyUser(history, token));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create VERIFY_USER_SUCCESS action if the api request was successful', async () => {
    mock.onPatch(`/users/verify?query=${token}`).reply(200, expectedResponseDataReg);

    const expectedActions = [
      { type: VERIFY_USER_REQUEST },
      { type: VERIFY_USER_SUCCESS }
    ];

    await store.dispatch(verifyUser(history, token));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
