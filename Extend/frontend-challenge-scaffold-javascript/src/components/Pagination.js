import React from "react";

export default function Pagination({
  picsPerPage,
  totalPics,
  paginate,
  currPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPics / picsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="page-numbers">
        {currPage > 1 ? (
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
          <li key={number} className="each-page-num">
            {number === currPage ? (
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="PageLink"
              >
                {(number, "current")}
              </a>
            ) : (
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="PageLink"
              >
                {number}
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
}
