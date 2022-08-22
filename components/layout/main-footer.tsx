import Link from 'next/link';
import classes from './main-footer.module.css';

const MainFooter = () => {
  return (
    <footer className={classes['footer']}>
      <div className={classes['footer-container']}>
        <div className={classes['footer-item']}>
          <h4>About</h4>
          <div className={classes['footer-link']}>
            <Link href="/">
              <a className={classes['link']}>Company</a>
            </Link>
            <Link href="/">
              <a className={classes['link']}>Careers</a>
            </Link>
            <Link href="/">
              <a className={classes['link']}>Help Center</a>
            </Link>
            <Link href="/">
              <a className={classes['link']}>Privacy</a>
            </Link>
            <Link href="/">
              <a className={classes['link']}>Terms & Conditions</a>
            </Link>
          </div>
        </div>
        <div className={classes['footer-item']}>
          <h4>Services</h4>
          <div className={classes['footer-link']}>
            <Link href="/">
              <a className={classes['link']}>Hotel Booking</a>
            </Link>
            <Link href="/">
              <a className={classes['link']}>Car Rental</a>
            </Link>
            <Link href="/">
              <a className={classes['link']}>Bus Ticket</a>
            </Link>
            <Link href="/">
              <a className={classes['link']}>Flight Booking</a>
            </Link>
            <Link href="/">
              <a className={classes['link']}>Restaurant</a>
            </Link>
          </div>
        </div>
        <div className={classes['footer-item']}>
          <h4>Quick Links</h4>
          <div className={classes['footer-link']}>
            <Link href="/">
              <a className={classes['link']}>Australia Experience</a>
            </Link>
            <Link href="/">
              <a className={classes['link']}>Newzealand Discover</a>
            </Link>
            <Link href="/">
              <a className={classes['link']}>Get Into Egypt</a>
            </Link>
            <Link href="/">
              <a className={classes['link']}>Vietnam Island Experience</a>
            </Link>
            <Link href="/">
              <a className={classes['link']}>Africa Trip</a>
            </Link>
          </div>
        </div>
        <div className={classes['footer-item']}>
          <h4>Pay Safely With Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            quaerat nam, similique assumenda quam dolor ratione voluptatibus
            iure dicta pariatur.
          </p>
          <div className={classes['sponsor-logo']}>
            <img src="/images/paypal.png" alt="Paypal" />
            <img src="/images/american-express.png" alt="American Express" />
            <img src="/images/visa.png" alt="Visa" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
