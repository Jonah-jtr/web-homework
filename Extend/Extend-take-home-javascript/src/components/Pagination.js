import React from "react";

const Pagination = ({ paginate, pageNumbers, currPage }) => {
  return (
    <nav>
      <ul>
        {currPage > [pageNumbers[0]] ? (
          <li>
            <a
              href="!#"
              className="LeftArrow"
              onClick={() => paginate((currPage -= 1))}
            >
              {" "}
              {"<"}
            </a>
          </li>
        ) : (
          <div></div>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className="pageNum">
            {number === currPage ? (
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="currentPage"
              >
                {"current"}
              </a>
            ) : (
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="pageLink"
              >
                {number + 1}
              </a>
            )}
          </li>
        ))}
        {currPage < pageNumbers.length - 1 ? (
          <li>
            <a
              href="!#"
              onClick={() => paginate((currPage += 1))}
              className="rightArrow"
            >
              {" "}
              {">"}
            </a>
          </li>
        ) : (
          <div></div>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
