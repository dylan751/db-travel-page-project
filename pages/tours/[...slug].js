import { Fragment } from "react/cjs/react.production.min";
import TourList from "../../components/tour/tour-list";
import TourSearch from "../../components/tour/tour-search";
import {getFilteredTours} from '../../lib/api-utils';

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
  const tourType = filteredData[3];
  const numberOfPeople = filteredData[4];

  const filteredTours = await getFilteredTours(
    price,
    star,
    vehicle,
    tourType,
    numberOfPeople
  );

  return {
    props: {
      tours: filteredTours,
    },
  };
}

export default FilteredToursPage;
