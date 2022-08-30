import { Review } from '../../models/Review';
import ReviewItem from './ReviewItem';
import classes from './ReviewList.module.css';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <div className={classes['review-list']}>
      <h2>Reviews</h2>
      <ul className={classes['review-list-container']}>
        {reviews.map((review) => (
          <ReviewItem
            key={review.reviewId}
            name={review.name}
            content={review.content}
          />
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
