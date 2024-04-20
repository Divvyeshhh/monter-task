import React from 'react';
import './Paginator.css';
import left from './left.png'
import right from './right.png'

function Paginator({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="paginator">
        
      <button onClick={handlePrevPage}><img src={left}/></button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={pageNumber === currentPage ? 'orange' : ''}
        >
          {pageNumber}
        </button>
      ))}
      <button onClick={handleNextPage}><img src={right}/></button>
    </div>
  );
}

export default Paginator;
