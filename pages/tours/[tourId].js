import TourHeader from "../../components/tour-detail/tour-header";
import TourContent from "../../components/tour-detail/tour-content";

import { getAllTours, getTourById, getTourReviews, getDestinationById } from "../../lib/api-utils";
import tourApi from "../../services/tourApi";

const { Fragment } = require("react");

function TourDetailsPage(props) {
  const { tour, tourId } = props;
  const { destinations } = props;
  const { reviews } = props;

  return (
    <Fragment>
      <TourHeader title={tour.title} />
      <TourContent tour={tour} reviews={reviews} tourId={tourId} destinations={destinations} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const tourId = params.tourId;

  const res = await tourApi.getTour(tourId);
  const selectedTour = res.data.data;
  const reviews = await getTourReviews(tourId);
  const destinations = await getDestinationById(tourId);

  return {
    props: {
      tour: selectedTour,
      reviews: reviews,
      tourId: tourId,
      destinations: destinations,
    },
  };
}

export default TourDetailsPage;
