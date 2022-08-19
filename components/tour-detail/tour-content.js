import NewReview from "../reviews/new-review";
import ReviewList from "../reviews/review-list";
import BookingForm from "./booking-form";
import classes from "./tour-content.module.css";
import Image from "next/image";
import DestionDetailList from "../destination-detail/destination-detail-list";

function TourContent(props) {
  const { tour, tourId } = props;
  const { destinations } = props;
  const { reviews } = props;

  return (
    <div className={classes["tour-content-container"]}>
      <div className={classes["tour-content-section"]}>
        <div className={classes["tour-content"]}>
          <h2>Tổng quan</h2>
          <div className={classes["image"]}>
            <Image src={tour.image} alt={tour.title} width={1200} height={400} />
            {/* <img src={tour.image} alt={tour.title} /> */}
          </div>
          <div className={classes["tour-description"]}>
            <ul>
              <li>Giá: ${tour.price}</li>
              <li>Khách sạn: {tour.hotel}</li>
              <li>Kiểu tour: {tour.type}</li>
              <li>Phương tiện: {tour.vehicle}</li>
              <li>Số lượng người: {tour.numberOfPeople}</li>
            </ul>
            <p className={classes["tour-preview"]}>{tour.description}</p>
          </div>
        </div>
        <div className={classes["destination-detail-list"]}>
          <h2>Lịch Trình Trong Tour</h2>
          <DestionDetailList destinations={destinations} />
        </div>
        <ReviewList reviews={reviews} />
        <NewReview tourId={tourId} />
      </div>
      <div className={classes["tour-form"]}>
        <BookingForm tourId={tourId} />
      </div>
    </div>
  );
}

export default TourContent;
