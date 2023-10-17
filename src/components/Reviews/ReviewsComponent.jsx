import { ReviewContainer } from "../Review/container";

import styles from "./Reviews.module.scss";
export const Reviews = ({ reviews }) => {
  return (
    <ul className={styles.reviews}>
      {reviews.map((id) => (
        <li key={id}>
          <ReviewContainer reviewId={id} />
        </li>
      ))}
    </ul>
  );
};
