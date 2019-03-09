export const handlePageClick = (component, page) => {
  component.setState({ currentPage: page });
};

export const renderPageLinks = (currentPage, numberOfPages) => {
  let pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  let firstPage = currentPage - 3;
  if (currentPage <= 3) firstPage = 0;
  if (numberOfPages - firstPage <= 5) firstPage = numberOfPages - 5;

  const lastPage =
    numberOfPages - firstPage <= 5 ? numberOfPages + 1 : firstPage + 5;

  const pageLinksToDisplay =
    pages.length <= 5 ? pages : pages.slice(firstPage, lastPage);
  return pageLinksToDisplay;
};

// call this function in 'componentDidMount' of any 'page component' (that renders paginated data) and pass 'this' as the argument
export const setCurrentPage = component => {
  const urlSearchParams = new URLSearchParams(location.search);
  const page = urlSearchParams.get('page');
  component.setState({ currentPage: parseInt(page) });
};
