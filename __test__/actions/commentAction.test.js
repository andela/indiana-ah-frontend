import thunk from 'redux-thunk';
import { toast } from 'react-toastify';
import configureMockStore from 'redux-mock-store';
import { sendHttpRequest } from '../../src/utils';
import { ADD_COMMENT, DELETE_COMMENT, GET_ALL_ARTICLE_COMMENTS } from '../../src/redux/actions/actionTypes';
import { addComment, deleteComment, getArticleComments }
  from '../../src/redux/actions/commentActions';

jest.mock('../../src/utils');
jest.mock('react-toastify');
const mockStore = configureMockStore([thunk]);

const user = {
  userData: {
    name: 'omenkish',
    username: 'Omenkish',
    imageUrl: 'goal.com/en-gb'
  }
};
const store = mockStore({ user });

describe('Auth action creators test', () => {
  beforeEach(() => {
    store.clearActions();
  });
  const id = 'f2d7da57-28c4-444b-840c-d9a78afe00cd';
  const comment = {
    payload: {
      commentBody: true,
      id,
      commenter: {
        name: user.name,
        username: user.username,
        imageUrl: user.imageUrl
      }
    }
  };

  const getError = status => ({
    response: {
      status,
      data: {
        message: 'hello'
      }
    }
  });

  it('should create the ADD_COMMENT action', async () => {
    sendHttpRequest.mockResolvedValue({
      data: comment.payload,
      message: 'Comment created successfully'
    });
    const expectedActions = [
      { type: ADD_COMMENT, payload: comment.payload },
    ];

    await store.dispatch(addComment());
    expect(store.getActions()[0]).toEqual(expectedActions[0]);
  });
  it('should create the ADD_COMMENT action', async () => {
    sendHttpRequest.mockRejectedValue(getError(404));
    await store.dispatch(addComment());
    expect(toast.error).toHaveBeenCalledWith('hello');
  });

  it('should create the ADD_BOOKMARK action', async () => {
    sendHttpRequest.mockRejectedValue(getError(401));
    await store.dispatch(addComment());
    expect(toast.error).toHaveBeenCalledWith('hello');
  });

  it('should create the ADD_BOOKMARK action', async () => {
    sendHttpRequest.mockRejectedValue(getError(400));
    await store.dispatch(addComment());
    expect(toast.error).toHaveBeenCalledWith(`Cannot comment on this article at the moment.
          Please try again later`);
  });
  it('should create the REMOVE_BOOKMARK action', async () => {
    sendHttpRequest.mockResolvedValue({
      message: 'Comment deleted successfully'
    });
    const expectedActions = [
      { type: DELETE_COMMENT, id },
    ];

    await store.dispatch(deleteComment(id));
    expect(store.getActions()[0]).toEqual(expectedActions[0]);
  });

  it('should create the REMOVE_COMMENT action', async () => {
    sendHttpRequest.mockRejectedValue(getError(404));
    await store.dispatch(deleteComment(id));
    expect(toast.error).toHaveBeenCalledWith('hello');
  });

  it('should create the REMOVE_BOOKMARK action', async () => {
    sendHttpRequest.mockRejectedValue(getError(401));
    await store.dispatch(deleteComment(id));
    expect(toast.error).toHaveBeenCalledWith('hello');
  });

  it('should create the REMOVE_BOOKMARK action', async () => {
    sendHttpRequest.mockRejectedValue(getError(400));
    await store.dispatch(deleteComment(id));
    expect(toast.error).toHaveBeenCalledWith(`Cannot delete this comment at the moment.
          Please try again later`);
  });

  it('should create the GET_ALL_COMMENTS action', async () => {
    sendHttpRequest.mockResolvedValue({
      comments: comment.payload,
      message: 'Comment created successfully'
    });
    const expectedActions = [
      { type: GET_ALL_ARTICLE_COMMENTS, payload: comment.payload },
    ];

    await store.dispatch(getArticleComments(id));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('should create the GET_ALL_COMMENTS action', async () => {
    sendHttpRequest.mockRejectedValue(getError(404));
    await store.dispatch(getArticleComments(id));
    expect(toast.error).toHaveBeenCalledWith('hello');
  });

  it('should create the ADD_BOOKMARK action', async () => {
    sendHttpRequest.mockRejectedValue(getError(401));
    await store.dispatch(getArticleComments(id));
    expect(toast.error).toHaveBeenCalledWith('hello');
  });

  it('should create the ADD_BOOKMARK action', async () => {
    sendHttpRequest.mockRejectedValue(getError(400));
    await store.dispatch(getArticleComments(id));
    expect(toast.error).toHaveBeenCalledWith(`Cannot fetch the comments on this article at the moment. 
          Please try again later`);
  });
});
