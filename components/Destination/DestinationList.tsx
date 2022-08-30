import classes from './DestinationList.module.css';
import DestinationItem from './DestinationItem';
import { useState } from 'react';

import Pagination from '../Pagination';
import { Destination } from '../../models/Destination';

interface DestinationListProps {
  destinations: Destination[];
}

const DestinationList = ({ destinations }: DestinationListProps) => {
  const [pageSize] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;

  const currentDestinations = destinations.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  function selectCurrentPage(page) {
    setCurrentPage(page);
  }

  return (
    <>
      <ul className={classes['destination-list']}>
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
};

export default DestinationList;
