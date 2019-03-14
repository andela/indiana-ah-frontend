/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-restricted-globals */
import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://indiana-ah-staging.herokuapp.com/api/v1/',
  headers: {
    'x-auth-token': localStorage.getItem('token')
  }
});

export const sendHttpRequest = async (url, method, data) => {
  const response = await apiInstance({ url, method, data });
  return response.data;
};

export const handlePageClick = (component, page) => {
  component.setState({ currentPage: page });
};

export const renderPageLinks = (currentPage, numberOfPages) => {
  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  let firstPage = currentPage - 3;
  if (currentPage <= 3) firstPage = 0;
  if (numberOfPages - firstPage <= 5) firstPage = numberOfPages - 5;

  const lastPage = numberOfPages - firstPage <= 5 ? numberOfPages + 1 : firstPage + 5;

  const pageLinksToDisplay = pages.length <= 5 ? pages : pages.slice(firstPage, lastPage);
  return pageLinksToDisplay;
};

// call this function in 'componentDidMount' of any 'page component' (that renders paginated data) and pass 'this' as the argument
export const setCurrentPage = (component) => {
  const urlSearchParams = new URLSearchParams(location.search);
  let page = parseInt(urlSearchParams.get('page'));
  if (isNaN(page)) page = 1;
  component.setState({ currentPage: page });
};

export const filterArticlesByLikes = (articles) => {
  const topArticles = articles
    .sort((a, b) => (a.likes > b.likes ? 1 : b.likes < a.likes ? -1 : 0))
    .slice(0, 7);
  return topArticles;
};

export const filterArticlesByDate = (articles) => {
  const newArticles = articles
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);
  return newArticles;
};
