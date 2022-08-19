import { Fragment } from "react";
import TourList from "../../components/tour/tour-list";
import TourSearch from "../../components/tour/tour-search";
import { getAllTours } from "../../lib/api-utils";
import tourApi from "../../services/tourApi";

function AllToursPage(props) {
  const { tours } = props;
  
  return (
    <Fragment>
      <TourSearch />
      <TourList tours={tours} />
    </Fragment>
  );
}

export async function getServerSideProps() {  
  const res = await tourApi.getListTours();
  const allTours = res.data.data.edges;
  
  return {
    props: {
      tours: allTours,
    },
    // revalidate: 1800,
  };
}

export default AllToursPage;
