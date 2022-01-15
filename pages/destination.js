import DestinationHeader from "../components/destination/destination-header";
import DestinationList from "../components/destination/destination-list";
import ContactUs from "../components/home-page/contact-us";
import { getAllDestinations, getTourById } from "../lib/api-utils";

function DestinationPage(props) {
  const { destinations } = props;

  return (
    <div>
      <DestinationHeader />
      <DestinationList destinations={destinations} />
      <ContactUs />
    </div>
  );
}

export async function getServerSideProps() {
  const allDestinations = await getAllDestinations();

  return {
    props: {
      destinations: allDestinations,
    },
    // revalidate: 1800,
  };
}

export default DestinationPage;
