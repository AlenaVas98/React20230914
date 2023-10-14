import { Review } from "../Review/Review";

import styles from "./Reviews.module.scss";
export const Reviews = ({ review }) => {
  return (
    <ul className={styles.reviews}>
      {review.map((id) => (
        <li key={id}>
          <Review reviewIds={id} />
        </li>
      ))}
    </ul>
  );
};
