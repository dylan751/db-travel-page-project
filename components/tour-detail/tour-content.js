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
            <Image src={tour.Anh} alt={tour.TieuDe} width={1200} height={400} />
            {/* <img src={tour.Anh} alt={tour.TieuDe} /> */}
          </div>
          <div className={classes["tour-description"]}>
            <ul>
              <li>Giá: ${tour.Gia}</li>
              <li>Khách sạn: {tour.KhachSan}</li>
              <li>Kiểu tour: {tour.NoiNgoaiQuoc}</li>
              <li>Phương tiện: {tour.PhuongTien}</li>
              <li>Số lượng người: {tour.SoLuongKhach}</li>
            </ul>
            <p className={classes["tour-preview"]}>{tour.MoTa}</p>
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
