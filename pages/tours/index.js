import { Fragment } from "react";
import TourList from "../../components/tour/tour-list";
import TourSearch from "../../components/tour/tour-search";
import { getAllTours } from "../../lib/api-utils";

function AllToursPage(props) {
  const { tours } = props;
  
  return (
    <Fragment>
      <TourSearch />
      <TourList tours={tours} />
    </Fragment>
  );
}

export async function getStaticProps() {  
  const tours = await getAllTours();
  
  return {
    props: {
      tours: tours,
    },
    revalidate: 1800,
  };
}

export default AllToursPage;
