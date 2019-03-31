import commentReducer from '../../src/redux/reducers/commentReducer';
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_ALL_ARTICLE_COMMENTS,
  COMMENTS_LOADING
} from '../../src/redux/actions/actionTypes';

const initialState1 = {
  isLoading: false,
  comments: [{
    id: 4,
    articleId: 3,
    userId: 2,
    commenter: {
      name: 'Omenkish',
      username: 'Omenkish',
      imageUrl: 'www.livescores.com'
    }
  }],
};
const responseData = { comments: [{ commentBody: 'Im the man' }] };
describe('commentReducer test', () => {
  const action = {
    payload: 'comment'
  };

  it('should test for the the initial state', () => {
    expect(commentReducer(undefined, {})).toEqual({
      ...initialState1, comments: []
    });
  });

  it('should handle the COMMENTS_LOADING action', () => {
    expect(commentReducer(initialState1, { type: COMMENTS_LOADING })).toEqual({
      ...initialState1,
      isLoading: true
    });
  });
  it('should handle the ADD_COMMENT action', () => {
    expect(
      commentReducer(initialState1, {
        type: ADD_COMMENT,
        payload: 'comment'
      })
    ).toEqual({
      ...initialState1,
      comments: [...initialState1.comments, action.payload]
    });
  });

  it('should handle the DELETE_BOOKMARK action', () => {
    expect(commentReducer(initialState1, { type: DELETE_COMMENT, id: 1 })).toEqual({
      ...initialState1,
      comments: initialState1.comments.filter(post => post.id !== 1)
    });
  });

  it('should handle the GET_ALL_ARTICLE_COMMENTS action', () => {
    expect(commentReducer(initialState1, { type: GET_ALL_ARTICLE_COMMENTS, payload: responseData })).toEqual({
      ...initialState1,
      comments: responseData
    });
  });
});
