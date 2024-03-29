import { GetServerSideProps } from 'next';
import TourList from '../../components/Tour/TourList';
import TourSearch from '../../components/Tour/TourSearch';
import { Tour } from '../../models/Tour';
import tourApi from '../../services/tourApi';

interface FilteredToursPageProps {
  tours: Tour[];
}

function FilteredToursPage({ tours }: FilteredToursPageProps) {
  return (
    <>
      <TourSearch />
      <TourList tours={tours} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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
    numberOfPeople,
  );

  return {
    props: {
      tours: filteredTours,
    },
  };
};

export default FilteredToursPage;
