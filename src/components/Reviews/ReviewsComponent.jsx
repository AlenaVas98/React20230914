import { Review } from "../Review/Review";

import styles from "./Reviews.module.scss";
export const Reviews = ({ reviews }) => {
  return (
    <ul className={styles.reviews}>
      {reviews.map((id) => (
        <li key={id}>
          <Review reviewId={id} />
        </li>
      ))}
    </ul>
  );
};
