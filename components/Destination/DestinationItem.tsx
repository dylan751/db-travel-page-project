import Image from 'next/image';
import Link from 'next/link';
import { ArrowSmRightIcon } from '@heroicons/react/solid';

import classes from './DestinationItem.module.css';

interface DestinationItemProps {
  tourId: number;
  name: string;
  tourName: string;
  image: string;
  description: string;
}

const DestinationItem = ({
  tourId,
  name,
  tourName,
  image,
  description,
}: DestinationItemProps) => {
  return (
    <li className={classes['destination-item']}>
      <div className={classes['destination-item-container']}>
        <div className={classes['image']}>
          <Image src={image} alt={name} width={550} height={310} />
        </div>
        <div className={classes['content']}>
          <div className={classes['content-container']}>
            <Link href={`/tours/${tourId}`}>
              <a className={classes['name']}>{name}</a>
            </Link>
            <p className={classes['tour-name']}>Tour: {tourName}</p>
            <p>{description}</p>
            <Link href={`/tours/${tourId}`}>
              <a className={classes['explore']}>
                Explore{' '}
                <ArrowSmRightIcon className="w-5 h-5 inline-block text-clr_jaffa" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DestinationItem;
