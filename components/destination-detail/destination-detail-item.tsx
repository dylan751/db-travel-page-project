import Image from 'next/image';

import classes from './destination-detail-item.module.css';

interface DestinationDetailItemProps {
  name: string;
  address: string;
  description: string;
  content: string;
  image: string;
}

const DestinationDetailItem = ({
  name,
  address,
  description,
  content,
  image,
}: DestinationDetailItemProps) => {
  return (
    <li className={classes['destination-detail-item']}>
      <h1>{name}</h1>
      <p className={classes['destination-address']}>Địa chỉ: {address}</p>
      <p>{description}</p>
      <div className={classes['image']}>
        <Image src={image} alt={name} width={1200} height={600} />
      </div>
      <p>{content}</p>
    </li>
  );
};

export default DestinationDetailItem;
