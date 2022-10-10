import { createArrayOfDigits } from "../../../utils/pages";

function Pagination({ totalPages, currentPage, changePage }) {
  // TODO: use useMemo
  const pagesArray = createArrayOfDigits(totalPages);

  return (
    <div className="page_wrapper">
      {pagesArray.map((pageNumber) => (
        <span
          className={pageNumber === currentPage ? "page page__current" : "page"}
          onClick={() => changePage(pageNumber)}
          key={pageNumber}
        >
          {pageNumber}
        </span>
      ))}
    </div>
  );
}

export default Pagination;
