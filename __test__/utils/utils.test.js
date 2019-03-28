import {
  setAndGetCurrentPage,
  getUrl,
  recordDisLike,
  recordLike,
  filterArticlesByLikes
} from '../../src/utils';

describe('Pagination utils test', () => {
  const component = {
    state: {},
    setState(obj) {
      Object.assign(this.state, obj);
    }
  };
  it('should test that the current page is set in a component\'s state when the \'setCurrentPage\' method is called', () => {
    setAndGetCurrentPage(component);
    expect(component.state.currentPage).toBeDefined();
  });
});

describe('Backend url', () => {
  it('should point to the right backend branch', () => {
    const url = getUrl(window.location.hostname);
    expect(url).toEqual('https://indiana-ah-staging.herokuapp.com/api/v1/');
  });
  it('should point to the right backend branch', () => {
    const host = 'https://indiana-ah-frontend-master.herokuapp.com';
    const url = getUrl(host);
    expect(url).toEqual('https://indiana-ah-master.herokuapp.com/api/v1/');
  });
});

describe('filterArticlesByLikes test', () => {
  it('should test the filterArticlesByLikes function', () => {
    const articles = [
      { likes: 26 },
      { likes: 20 },
      { likes: 8 },
      { likes: 50 },
      { likes: 100 },
      { likes: 15 },
      { likes: 18 },
      { likes: 98 },
      { likes: 10 }
    ];
    const filteredArticles = filterArticlesByLikes(articles);
    expect(filteredArticles[0].likes).toEqual(100);
    expect(filteredArticles.length).toEqual(7);
  });
});

describe('reactions utils test', () => {
  it('should test the recordLike function', () => {
    let article = {
      likedByMe: true,
      dislikedByMe: false,
      likes: 1
    };
    recordLike(article);
    expect(article.likes).toEqual(0);
    article = {
      dislikedByMe: true,
      likedByMe: false,
      dislikes: 1
    };
    recordLike(article);
    expect(article.likedByMe).toEqual(true);
  });

  it('should test the recordDisLike function', () => {
    const article = {
      dislikedByMe: true,
      dislikes: 1
    };
    recordDisLike(article);
    expect(article.dislikes).toEqual(0);
  });
});
