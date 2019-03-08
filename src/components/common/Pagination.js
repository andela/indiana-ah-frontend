import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const PaginationComponent = ({ currentPage, numberOfPages, onPageClick }) => {
  let pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  let firstPage = currentPage - 3;
  if (currentPage <= 3) firstPage = 0;
  if (numberOfPages - firstPage <= 5) firstPage = numberOfPages - 5;

  const lastPage =
    numberOfPages - firstPage <= 5 ? numberOfPages + 1 : firstPage + 5;

  const pagesToDisplay =
    pages.length <= 5 ? pages : pages.slice(firstPage, lastPage);

  return (
    <div className="pagination">
      <NavLink
        to={`?page=${currentPage <= 1 ? 1 : currentPage - 1}`}
        onClick={() => onPageClick(currentPage <= 1 ? 1 : currentPage - 1)}
      >
        <div
          className={`prev-page ${
            currentPage === 1 ? 'caret-left-arrow-disabled' : ''
          }`}
        />
      </NavLink>
      {pagesToDisplay.map(page => (
        <NavLink
          key={page}
          to={`?page=${page}`}
          onClick={() => onPageClick(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </NavLink>
      ))}
      <NavLink
        to={`?page=${
          currentPage >= numberOfPages ? numberOfPages : currentPage + 1
        }`}
        onClick={() =>
          onPageClick(
            currentPage >= numberOfPages ? numberOfPages : currentPage + 1
          )
        }
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
  currentPage: PropTypes.number,
  numberOfPages: PropTypes.number,
  onPageClick: PropTypes.func
};

export default PaginationComponent;
