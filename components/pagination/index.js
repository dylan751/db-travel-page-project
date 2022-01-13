import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import classes from "./Pagination.module.css";

function Pagination(props) {
  const { pageSize, total, currentPage, setCurrentPage } = props;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / pageSize); i++) {
    pageNumbers.push(i);
  }
  if (currentPage > pageNumbers.length) {
    setCurrentPage(1);
  }

  if (!pageNumbers.includes(Number(currentPage))) {
    setCurrentPage(1);
  }

  if (!total) {
    return null;
  }

  return (
    <nav className={classes["pagination"]}>
      <ul className={classes["pagination__list"]}>
        <li className={classes["arrow"]}>
          <ChevronLeftIcon className="w-6 h-6 inline-block" />
        </li>
        {pageNumbers.map((number) => {
          return (
            <li
              className={classes[currentPage == number ? "current" : ""]}
              key={number}
              id={JSON.stringify(number)}
              onClick={() => {
                setCurrentPage(number);
              }}
            >
              {number}
            </li>
          );
        })}
        <li className={classes["arrow"]}>
          <ChevronRightIcon className="w-6 h-6 inline-block" />
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
