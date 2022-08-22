import classes from "./destination-list.module.css";
import DestinationItem from "./destination-item";
import { useState } from "react";

import Pagination from "../pagination";

function DestinationList(props) {
  const { destinations } = props;

  const [pageSize] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;

  const currentDestinations = destinations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  function selectCurrentPage(page) {
    setCurrentPage(page);
  }

  return (
    <>
      <ul className={classes["destination-list"]}>
        {currentDestinations.map((destination) => (
          <DestinationItem
            key={destination.destinationId}
            tourId={destination.tourId}
            tourName={destination.tourName}
            name={destination.name}
            image={destination.image}
            description={destination.description}
          />
        ))}
      </ul>
      <Pagination
        pageSize={pageSize}
        setCurrentPage={selectCurrentPage}
        currentPage={currentPage}
        total={destinations.length}
      />
    </>
  );
}

export default DestinationList;
