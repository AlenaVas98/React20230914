import { Review } from "../Review/Review";
import styles from "./Reviews.module.scss";
export const Reviews = ({ reviews }) => {
  return (
    <ul className={styles.reviews}>
      {reviews.map((reviews) => (
        <li key={reviews.id}>
          <Review reviews={reviews} />
        </li>
      ))}
    </ul>
  );
};
