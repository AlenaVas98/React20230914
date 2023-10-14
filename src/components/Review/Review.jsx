import styles from "./Review.module.scss";
import { useSelector } from "react-redux";
import { selectorReviewById } from "../../redux/entities/review/selectors";
export const Review = ({ reviewIds }) => {
  const user = useSelector((state) => state.user.entities);
  const review = useSelector((state) => selectorReviewById(state, reviewIds));
  const userId = review.userId;
  return (
    <div className={styles.root}>
      {user[userId].name}: {review.text}
    </div>
  );
};
