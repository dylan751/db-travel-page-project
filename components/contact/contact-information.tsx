import classes from './contact-information.module.css';

const ContactInformation = () => {
  return (
    <div className={classes['contact-information']}>
      <div className={classes['contact-information-container']}>
        <div className={classes['contact-information-item']}>
          <div className={classes['contact-information-icon']}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h5>Location</h5>
          <p>
            1 Dai Co Viet Street <br />
            Hanoi University of Science and Technology <br />
            Viet Nam
          </p>
        </div>
        <div className={classes['contact-information-item']}>
          <div className={classes['contact-information-icon']}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h5>Contact Information</h5>
          <p>
            Phone: 033-941-0781 <br />
            Email: bunichi@gmail.com <br />
            Website: bunichi.com
          </p>
        </div>
        <div className={classes['contact-information-item']}>
          <div className={classes['contact-information-icon']}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h5>Follow Us On</h5>
          <p>
            Facebook: Bunichi Travel <br />
            Viet Nam
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
