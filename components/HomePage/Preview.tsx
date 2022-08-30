import {
  MapIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  SpeakerphoneIcon,
} from '@heroicons/react/outline';
import classes from './Preview.module.css';

const Preview = () => {
  return (
    <section className={classes['preview-section']}>
      <div className={classes['preview-list']}>
        <div className={classes['preview-item']}>
          <MapIcon className={classes['icon']} />
          <h2>Your best choice</h2>
          <p>
            Bunichi is a travel website that has been covered in more than 100
            countries around the world world.
          </p>
        </div>
        <div className={classes['preview-item']}>
          <CurrencyDollarIcon className={classes['icon']} />
          <h2>Reasonable price</h2>
          <p>
            We promise to offer the best price for your favorite Tours.
          </p>
        </div>
        <div className={classes['preview-item']}>
          <CreditCardIcon className={classes['icon']} />
          <h2>Safe payment</h2>
          <p>
            We provide multiple payment methods: Credit Card, Paypal, VISA, ...
          </p>
        </div>
        <div className={classes['preview-item']}>
          <SpeakerphoneIcon className={classes['icon']} />
          <h2>Support 24/7</h2>
          <p>
            Find finding tours is hard? We solved that for you! Contact us right away!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Preview;
