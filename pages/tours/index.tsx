import { GetServerSideProps } from 'next';
import TourList from '../../components/Tour/TourList';
import TourSearch from '../../components/Tour/TourSearch';
import { Tour } from '../../models/Tour';
import tourApi from '../../services/tourApi';

interface AllToursPageProps {
  tours: Tour[];
}

function AllToursPage({ tours }: AllToursPageProps) {
  return (
    <>
      <TourSearch />
      <TourList tours={tours} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await tourApi.getListTours();
  const allTours = res.data.data.edges;

  return {
    props: {
      tours: allTours,
    },
    // revalidate: 1800,
  };
};

export default AllToursPage;
