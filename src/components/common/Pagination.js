import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { renderPageLinks } from '../../utils';

const PaginationComponent = ({
  currentPage, numberOfPages, onPageClick, query
}) => {
  const pageLinksToDisplay = renderPageLinks(currentPage, numberOfPages);
  const prevPage = currentPage <= 1 ? 1 : currentPage - 1;
  const nextPage = currentPage >= numberOfPages ? numberOfPages : currentPage + 1;
  const additionalQuery = query ? `&${query}` : '';

  return (
    <div className="pagination">
      <NavLink
        to={`?page=${prevPage}${additionalQuery}`}
        onClick={() => onPageClick(prevPage)}
      >
        <div
          className={`prev-page ${currentPage === 1 ? 'caret-left-arrow-disabled' : ''}`}
        />
      </NavLink>
      {pageLinksToDisplay.map(page => (
        <NavLink
          key={page}
          to={`?page=${page}${additionalQuery}`}
          onClick={() => onPageClick(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </NavLink>
      ))}
      <NavLink
        to={`?page=${nextPage}${additionalQuery}`}
        onClick={() => onPageClick(nextPage)}
      >
        <div
          className={`next-page ${
            currentPage === numberOfPages ? 'caret-right-arrow-disabled' : ''
          }`}
        />
      </NavLink>
    </div>
  );
};

PaginationComponent.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
  query: PropTypes.string
};

export default PaginationComponent;