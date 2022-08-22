import { useState } from 'react';
import Pagination from '../pagination';
import TourItem from './tour-item';
import classes from './tour-list.module.css';

function TourList(props) {
  const { tours } = props;

  const [pageSize] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;

  const currentTours = tours.slice(indexOfFirstItem, indexOfLastItem);

  function selectCurrentPage(page) {
    setCurrentPage(page);
  }

  if (tours.length === 0) {
    return (
      <>
        <h2 className={classes['no-tour-inform']}>
          Không tìm thấy Tour phù hợp
        </h2>
      </>
    );
  }

  return (
    <>
      <ul className={classes.list}>
        {currentTours.map((tour) => (
          <TourItem
            key={tour.tourId}
            tourId={tour.tourId}
            title={tour.title}
            duration={tour.duration}
            hotel={tour.hotel}
            vehicle={tour.vehicle}
            rating={tour.rating}
            type={tour.type}
            numberOfPeople={tour.numberOfPeople}
            price={tour.price}
            numberOfBooking={tour.numberOfBooking}
            image={tour.image}
          />
        ))}
      </ul>
      <Pagination
        pageSize={pageSize}
        setCurrentPage={selectCurrentPage}
        currentPage={currentPage}
        total={tours.length}
      />
    </>
  );
}

export default TourList;
