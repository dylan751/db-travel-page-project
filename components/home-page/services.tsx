import Image from 'next/image';

import classes from './services.module.css';

const Services = () => {
  return (
    <section className={classes['services']}>
      <div className={classes['services-header']}>
        <div>
          <span>All</span>
          <h2>Our Services</h2>
        </div>
      </div>
      <div className={classes['services-content']}>
        <div className={classes['services-item']}>
          <div className={classes['image-container']}>
            <div className={classes['image']}>
              <Image
                src="/images/service/service-1.png"
                alt="Service 1"
                width={240}
                height={240}
              />
            </div>
          </div>
          <h2>Car Renting</h2>
          <span>100+ Rents</span>
        </div>
        <div className={classes['services-item']}>
          <div className={classes['image-container']}>
            <div className={classes['image']}>
              {' '}
              <Image
                src="/images/service/service-2.png"
                alt="Service 2"
                width={240}
                height={240}
              />
            </div>
          </div>
          <h2>Hotel Booking</h2>
          <span>78+ Bookings</span>
        </div>
        <div className={classes['services-item']}>
          <div className={classes['image-container']}>
            <div className={classes['image']}>
              {' '}
              <Image
                src="/images/service/service-3.png"
                alt="Service 3"
                width={240}
                height={240}
              />
            </div>
          </div>
          <h2>Restaurant</h2>
          <span>50+ Reserves</span>
        </div>
        <div className={classes['services-item']}>
          <div className={classes['image-container']}>
            <div className={classes['image']}>
              {' '}
              <Image
                src="/images/service/service-4.png"
                alt="Service 4"
                width={240}
                height={240}
              />
            </div>
          </div>
          <h2>Club & Bar</h2>
          <span>90+ Guests</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
