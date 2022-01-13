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
//   // const allTours = await getAllTours();

//   // const paths = allTours.map((tour) => ({ params: { tourId: tour.TourID } }));

//   return {
//     paths: [
//       { params: { tourId: "1" } },
//       { params: { tourId: "2" } },
//       { params: { tourId: "3" } },
//       { params: { tourId: "4" } },
//       { params: { tourId: "5" } },
//       { params: { tourId: "6" } },
//       { params: { tourId: "7" } },
//       { params: { tourId: "8" } },
//       { params: { tourId: "9" } },
//       { params: { tourId: "10" } },
//       { params: { tourId: "11" } },
//       { params: { tourId: "12" } },
//       { params: { tourId: "13" } },
//       { params: { tourId: "14" } },
//       { params: { tourId: "15" } },
//       { params: { tourId: "16" } },
//     ],
//     fallback: true,
//   };
// }

export default TourDetailsPage;
