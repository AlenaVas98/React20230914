import styles from "./Review.module.scss";
import { UserContainer } from "../User/container";
export const Review = ({ review }) => {
  return (
    <div className={styles.root}>
      <UserContainer userId={review.userId} />: {review.text}
    </div>
  );
};
