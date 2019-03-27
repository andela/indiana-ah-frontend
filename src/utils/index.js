import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const getUrl = (hostName) => {
  if (hostName.includes('master')) {
    return 'https://indiana-ah-master.herokuapp.com/api/v1/';
  }
  return 'https://indiana-ah-staging.herokuapp.com/api/v1/';
};

const apiInstance = axios.create({
  baseURL: getUrl(window.location.hostname)
});

// intercept api requests and add auth token to the request headers
apiInstance.interceptors.request.use((apiConfig) => {
  const token = localStorage.getItem('token');
  const config = apiConfig;

  if (token) config.headers['x-auth-token'] = token;
  return config;
});

export { apiInstance };

// fuction to check if token is valid
export const validateToken = (token) => {
  try {
    const decoded = jwtDecode(token);

    if (Date.now() / 1000 < decoded.exp) {
      delete decoded.exp;
      delete decoded.iat;
      return decoded;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const sendHttpRequest = async (url, method, data, headers) => {
  const response = await apiInstance({
    url,
    method,
    data,
    headers: { ...headers }
  });
  return response.data;
};

export const renderPageLinks = (currentPage, numberOfPages) => {
  const pages = [];
  for (let i = 1; i <= numberOfPages; i += 1) {
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
export const setAndGetCurrentPage = (component) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  let page = parseInt(urlSearchParams.get('page'), 10);
  if (Number.isNaN(page)) page = 1;
  component.setState({ currentPage: page });
  return page;
};

const sortLikes = (current, next) => {
  if (current.like > next.like) return 1;
  if (current.like < next.like) return -1;
  return 0;
};

export const filterArticlesByLikes = (articles) => {
  const topArticles = articles.sort(sortLikes).slice(0, 7);
  return topArticles;
};

export const filterArticlesByDate = (articles) => {
  const newArticles = articles
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);
  return newArticles;
};
