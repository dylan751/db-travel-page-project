import TourHeader from "../../components/tour-detail/tour-header";
import TourContent from "../../components/tour-detail/tour-content";

import { getAllTours, getTourById, getTourReviews, getDestinationById } from "../../lib/api-utils";

const { Fragment } = require("react");

function TourDetailsPage(props) {
  const { tour, tourId } = props;
  const { destinations } = props;
  const { reviews } = props;

  return (
    <Fragment>
      <TourHeader TieuDe={tour.TieuDe} />
      <TourContent tour={tour} reviews={reviews} tourId={tourId} destinations={destinations} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const tourId = params.tourId;

  const selectedTour = await getTourById(tourId);
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

// export async function getStaticPaths() {
//   // Get all tours
//   const allTours = await getAllTours();

//   const paths = allTours.map((tour) => ({ params: { tourId: `${tour.TourID}` } }));

//   return {
//     paths: paths,
//     fallback: true,
//   };
// }

export default TourDetailsPage;
