import { GetServerSideProps } from 'next';
import DestinationHeader from '../components/destination/destination-header';
import DestinationList from '../components/destination/destination-list';
import ContactUs from '../components/home-page/contact-us';
import { Destination } from '../models/Destination';
import destinationApi from '../services/destinationApi';

interface DestinationPageProps {
  destinations: Destination[];
}

function DestinationPage({ destinations }: DestinationPageProps) {
  return (
    <div>
      <DestinationHeader />
      <DestinationList destinations={destinations} />
      <ContactUs />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await destinationApi.getListDestinations();
  const allDestinations = res.data.data.edges;

  return {
    props: {
      destinations: allDestinations,
    },
    // revalidate: 1800,
  };
};

export default DestinationPage;
