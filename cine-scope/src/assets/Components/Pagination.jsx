import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function Pagination({isLoading, movies, page, setPage, totalPages}) {
  return (
    <div>
      {/* CONDITIONAL RENDERING MOVIE PAGES */}
      {!isLoading && movies && movies.length > 0 ? (
        <div className="pages">
          <button
            className="page-control-btn"
            style={
              page === 1 ? { cursor: "not-allowed" } : { cursor: "pointer" }
            }
            onClick={() => {
              if (page > 1) {
                setPage((prevPage) => prevPage - 1);
              }
            }}
          >
            <FaArrowCircleLeft /> Prev Page
          </button>

          <div className="page-number">
            <h2>
              {page} off {totalPages}
            </h2>{" "}
          </div>

          <button
            className="page-control-btn"
            style={
              page === totalPages
                ? { cursor: "not-allowed" }
                : { cursor: "pointer" }
            }
            onClick={() => {
              if (page < totalPages) {
                setPage((prevPage) => prevPage + 1);
              }
            }}
          >
            Next Page <FaArrowCircleRight />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Pagination;
