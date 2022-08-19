import DestinationDetailItem from "./destination-detail-item";
import classes from "./destination-detail-list.module.css";

function DestionDetailList(props) {
  const { destinations } = props;

  return (
    <ul className={classes["destination-detail-list"]}>
      {destinations.map((destination) => (
        <DestinationDetailItem
          key={destination.destinationId}
          tourId={destination.tourId}
          name={destination.name}
          address={destination.address}
          description={destination.description}
          content={destination.content}
          image={destination.image}
        />
      ))}
    </ul>
  );
}

export default DestionDetailList;
