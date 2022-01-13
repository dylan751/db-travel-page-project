import classes from "./contact-information.module.css";

function ContactInformation() {
  return (
    <div className={classes["contact-information"]}>
      <div className={classes["contact-information-container"]}>
        <div className={classes["contact-information-item"]}>
          <div className={classes["contact-information-icon"]}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h5>Trụ Sở Chính</h5>
          <p>
            1 Đại Cồ Việt, <br />
            Đại học Bách Khoa Hà Nội, <br />
            Việt Nam
          </p>
        </div>
        <div className={classes["contact-information-item"]}>
          <div className={classes["contact-information-icon"]}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h5>Liên Lạc</h5>
          <p>
            Phone: 033-941-0781 <br />
            Email: bunichi@gmail.com <br />
            Website: bunichi.com
          </p>
        </div>
        <div className={classes["contact-information-item"]}>
          <div className={classes["contact-information-icon"]}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h5>Theo Dõi Trên</h5>
          <p>
            Facebook: Bunichi Travel <br />
            Viet Nam
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInformation;
