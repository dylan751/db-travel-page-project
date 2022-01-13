import classes from "./review-item.module.css";

function ReviewItem(props) {
  const { HoTen, NoiDung } = props;

  return (
    <li className={classes["review-item"]}>
      <h3 className={classes["review-header"]}>{HoTen}</h3>
      <p className={classes["review-content"]}>{NoiDung}</p>
    </li>
  );
}

export default ReviewItem;
