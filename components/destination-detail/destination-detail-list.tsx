import { Destination } from '../../models/Destination';
import DestinationDetailItem from './destination-detail-item';
import classes from './destination-detail-list.module.css';

interface DestionDetailListProps {
  destinations: Destination[];
}

function DestionDetailList({ destinations }: DestionDetailListProps) {
  return (
    <ul className={classes['destination-detail-list']}>
      {destinations.map((destination) => (
        <DestinationDetailItem
          key={destination.destinationId}
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
