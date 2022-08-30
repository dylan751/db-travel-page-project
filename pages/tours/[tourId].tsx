import TourHeader from '../../components/TourDetail/TourHeader';
import TourContent from '../../components/TourDetail/TourContent';
import tourApi from '../../services/tourApi';
import destinationApi from '../../services/destinationApi';
import reviewApi from '../../services/reviewApi';
import { GetServerSideProps } from 'next';
import { Tour } from '../../models/Tour';
import { Destination } from '../../models/Destination';
import { Review } from '../../models/Review';

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
    <>
      <TourHeader title={tour.title} />
      <TourContent
        tour={tour}
        reviews={reviews}
        tourId={tourId}
        destinations={destinations}
      />
    </>
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
