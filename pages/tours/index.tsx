import { GetServerSideProps } from 'next';
import { Fragment } from 'react';
import TourList from '../../components/tour/tour-list';
import TourSearch from '../../components/tour/tour-search';
import { Tour } from '../../models/Tour';
import tourApi from '../../services/tourApi';

interface AllToursPageProps {
  tours: Tour[];
}

function AllToursPage({ tours }: AllToursPageProps) {
  return (
    <Fragment>
      <TourSearch />
      <TourList tours={tours} />
    </Fragment>
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
