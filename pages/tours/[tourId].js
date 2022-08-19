import TourHeader from "../../components/tour-detail/tour-header";
import TourContent from "../../components/tour-detail/tour-content";

import { getAllTours, getTourById, getTourReviews, getDestinationById } from "../../lib/api-utils";
import tourApi from "../../services/tourApi";
import destinationApi from "../../services/destinationApi";
import reviewApi from "../../services/reviewApi";

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
}

export default TourDetailsPage;
