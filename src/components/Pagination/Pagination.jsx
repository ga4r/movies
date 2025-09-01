import React from "react";
import "./Pagination.scss";
import { useSearchParams } from "react-router";

function Pagination({ pagesNum, setPage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page"), 10) || 1; // Преобразование строки в число
  const arr = new Array(pagesNum).fill(null);

  return (  
    <div className="paginationWrapper">
      <div className="pagination">
        <button
          className="paginationController paginationDecrease"
          onClick={() => {
            if (currentPage > 1) {
              setSearchParams({ page: currentPage - 1 });
              setPage(currentPage - 1);
            }
          }}
          disabled={currentPage <= 1}
        >
          &lt;
        </button>

        {arr.map((item, index) => (
          <button
            className={`paginationButton ${currentPage === index + 1 ? 'paginationActive' : ''}`} 
            key={index}
            onClick={() => {
              setSearchParams({ page: index + 1 });
              setPage(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="paginationController paginationIncrease"
          onClick={() => {
            if (currentPage < pagesNum) {
              setSearchParams({ page: currentPage + 1 });
              setPage(currentPage + 1);
            }
          }}
          disabled={currentPage >= pagesNum}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
