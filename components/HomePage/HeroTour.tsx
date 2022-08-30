import classes from './HeroTour.module.css';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/solid';
import Button from '../UI/Button';

const HeroTour = () => {
  return (
    <section className={classes['hero-tour-section']}>
      <div className={classes['single-tour-item']}>
        <div className={classes['single-tour-info']}>
          <div className={classes['single-tour-price']}>
            <p>10 days</p>
            <p>
              4 <StarIcon className="w-5 h-5 inline-block text-clr_jaffa" />
            </p>
          </div>
          <h2 className={classes['single-tour-header']}>Dicover the beautiful Bali</h2>
          <p>
            The gorgeous island of Bali in Indonesia is so famous among the world's
            destinations, especially for the honey moons. The tour to Bali is so
            interesting due to it's warming climate, the blue oceans, the sun shines,
            and lots of beautiful islands, ...
          </p>
          <Link href="/tours/2">
            <Button>More details</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroTour;
