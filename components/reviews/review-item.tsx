import classes from './review-item.module.css';

const ReviewItem = (props) => {
  const { name, content } = props;

  return (
    <li className={classes['review-item']}>
      <h3 className={classes['review-header']}>{name}</h3>
      <p className={classes['review-content']}>{content}</p>
    </li>
  );
};

export default ReviewItem;
