import ReviewItem from "./review-item";
import classes from "./review-list.module.css";

function ReviewList(props) {
  const { reviews } = props;

  return (
    <div className={classes["review-list"]}>
      <h2>Reviews</h2>
      <ul className={classes["review-list-container"]}>
        {reviews.map((review) => (
          <ReviewItem
            key={review.ReviewID}
            HoTen={review.HoTen}
            NoiDung={review.NoiDung}
          />
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
