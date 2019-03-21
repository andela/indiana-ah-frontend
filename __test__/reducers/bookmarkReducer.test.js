import bookmarkReducer from '../../src/redux/reducers/bookmarkReducer';
import {
  GET_ALL_BOOKMARKS,
  GET_ALL_BOOKMARKS_LOADING,

} from '../../src/redux/actions/actionTypes';

const initialState = {
  isLoading: false,
  userBookmarks: [],
};

const payload = [
  {
    id: 'bf531beb-5814-446c-a0b7-40e00a9912e0',
    articleId: 'f2d7da57-28c4-444b-840c-d9a78afe00cd',
    userId: '0113f2ed-8e4f-4fab-9431-2cc4f8554f0d',
    createdAt: '2019-03-20T12:26:51.156Z',
    updatedAt: '2019-03-20T12:26:51.156Z',
    deletedAt: null,
    Article: {
      id: 'f2d7da57-28c4-444b-840c-d9a78afe00cd',
      articleTitle: 'How I met your mother2',
      articleBody: 'This is the story of how I met your mother part 2. How I met your mother, How I met your mother. End of story',
      imageUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--94JUxrpM--/c_scale,f_auto,fl_progressive,q_80,w_800/zjeabjityzca61on7izk.jpg',
      numberOfReads: 0,
      slug: 'how-i-met-your-mother2-1',
      tags: null,
      userId: '551e0214-9d2f-4602-be8a-71284a2aec33',
      createdAt: '2019-03-20T12:15:07.167Z',
      updatedAt: '2019-03-20T12:15:07.167Z',
      deletedAt: null
    }
  },
  {
    id: '1d2eb29e-0a58-4927-814c-9b0e64c5c0fd',
    articleId: '36d9ecea-d005-476c-b1a5-ab64600236fe',
    userId: '0113f2ed-8e4f-4fab-9431-2cc4f8554f0d',
    createdAt: '2019-03-20T14:32:41.604Z',
    updatedAt: '2019-03-20T14:32:41.604Z',
    deletedAt: null,
    Article: {
      id: '36d9ecea-d005-476c-b1a5-ab64600236fe',
      articleTitle: 'Deploying node modules -Dozie',
      articleBody: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      imageUrl: 'https://avatars0.githubusercontent.com/u/38977569?s=400&v=4',
      numberOfReads: 0,
      slug: 'deploying-node-modules-dozie',
      tags: 'deploy,docker, isVerified',
      userId: '0113f2ed-8e4f-4fab-9431-2cc4f8554f0d',
      createdAt: '2019-03-20T12:12:32.319Z',
      updatedAt: '2019-03-20T12:12:32.319Z',
      deletedAt: null
    }
  },
];

describe('User reducer test', () => {
  it('should test the initial state', () => {
    expect(bookmarkReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle the GET_ALL_BOOKMARKS_LOADING action', () => {
    expect(bookmarkReducer(initialState, { type: GET_ALL_BOOKMARKS_LOADING })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should handle the GET_ALL_BOOKMARKS action', () => {
    expect(
      bookmarkReducer(initialState,
        { type: GET_ALL_BOOKMARKS, payload })
    ).toEqual({
      ...initialState,
      userBookmarks: payload
    });
  });
});
