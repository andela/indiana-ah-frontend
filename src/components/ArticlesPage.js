import React, { Component } from 'react';
import PaginationComponent from '../components/common/Pagination';
import { handlePageClick, setCurrentPage } from '../utils';

class ArticlesPage extends Component {
  state = {};

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      // call action creator to make API request/dispatch action(s)
    }
  }
  componentDidMount() {
    // set the current page to whatever page is in the url query
    setCurrentPage(this);
  }
  render() {
    return (
      <PaginationComponent
        numberOfPages={10}
        currentPage={this.state.currentPage}
        onPageClick={page => handlePageClick(this, page)}
      />
    );
  }
}

export default ArticlesPage;
