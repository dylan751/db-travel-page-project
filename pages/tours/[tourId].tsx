import TourHeader from '../../components/tour-detail/tour-header';
import TourContent from '../../components/tour-detail/tour-content';
import tourApi from '../../services/tourApi';
import destinationApi from '../../services/destinationApi';
import reviewApi from '../../services/reviewApi';
import { GetServerSideProps } from 'next';
import { Tour } from '../../models/Tour';
import { Destination } from '../../models/Destination';
import { Review } from '../../models/Review';

const { Fragment } = require('react');

interface TourDetailsPageProps {
  tourId: number;
  tour: Tour;
  destinations: Destination[];
  reviews: Review[];
}

function TourDetailsPage({
  tour,
  tourId,
  destinations,
  reviews,
}: TourDetailsPageProps) {
  return (
    <Fragment>
      <TourHeader title={tour.title} />
      <TourContent
        tour={tour}
        reviews={reviews}
        tourId={tourId}
        destinations={destinations}
      />
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const tourId = params.tourId;

  const tourRes = await tourApi.getTour(tourId);
  const selectedTour = tourRes.data.data;

  const reviews = await reviewApi.getListReviewsByTourId(tourId);

  const destinations = await destinationApi.getDestinationByTourId(tourId);

  return {
    props: {
      tour: selectedTour,
      reviews: reviews,
      tourId: tourId,
      destinations: destinations,
    },
  };
};

export default TourDetailsPage;
