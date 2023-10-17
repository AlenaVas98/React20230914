import styles from "./Review.module.scss";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { User } from "../User/User";
export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  return (
    <div className={styles.root}>
      <User userId={review.userId} />: {review.text}
    </div>
  );
};
