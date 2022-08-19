import { Fragment } from "react/cjs/react.production.min";
import TourList from "../../components/tour/tour-list";
import TourSearch from "../../components/tour/tour-search";
import { getFilteredTours } from "../../lib/api-utils";
import tourApi from "../../services/tourApi";

function FilteredToursPage(props) {
  const { tours } = props;

  return (
    <Fragment>
      <TourSearch />
      <TourList tours={tours} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.slug;

  const price = filteredData[0];
  const star = filteredData[1];
  const vehicle = filteredData[2];
  const type = filteredData[3];
  const numberOfPeople = filteredData[4];

  const filteredTours = await tourApi.getFilteredTours(
    price,
    star,
    vehicle,
    type,
    numberOfPeople
  );
  console.log(filteredTours);

  return {
    props: {
      tours: filteredTours,
    },
  };
}

export default FilteredToursPage;
