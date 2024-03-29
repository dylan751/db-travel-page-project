import NewReview from '../Reviews/NewReview';
import ReviewList from '../Reviews/ReviewList';
import BookingForm from './BookingForm';
import classes from './TourContent.module.css';
import Image from 'next/image';
import DestionDetailList from '../DestinationDetail/DestinationDetailList';
import { Tour } from '../../models/Tour';
import { Destination } from '../../models/Destination';
import { Review } from '../../models/Review';

interface TourContentProps {
  tour: Tour;
  tourId: number;
  destinations: Destination[];
  reviews: Review[];
}

const TourContent = ({
  tour,
  tourId,
  destinations,
  reviews,
}: TourContentProps) => {
  return (
    <div className={classes['tour-content-container']}>
      <div className={classes['tour-content-section']}>
        <div className={classes['tour-content']}>
          <h2>Overview</h2>
          <div className={classes['image']}>
            <Image
              src={tour.image}
              alt={tour.title}
              width={1200}
              height={400}
            />
          </div>
          <div className={classes['tour-description']}>
            <ul>
              <li>Price: ${tour.price}</li>
              <li>Hotel: {tour.hotel}</li>
              <li>Tour type: {tour.type}</li>
              <li>Vehicle: {tour.vehicle}</li>
              <li>Number of people: {tour.numberOfPeople}</li>
            </ul>
            <p className={classes['tour-preview']}>{tour.description}</p>
          </div>
        </div>
        <div className={classes['destination-detail-list']}>
          <h2>Tour's detail</h2>
          <DestionDetailList destinations={destinations} />
        </div>
        <ReviewList reviews={reviews} />
        <NewReview tourId={tourId} />
      </div>
      <div className={classes['tour-form']}>
        <BookingForm tourId={tourId} />
      </div>
    </div>
  );
};

export default TourContent;
