import { Review } from "../Review/Review";

import styles from "./Reviews.module.scss";
export const Reviews = ({ data }) => {
  return (
    <ul className={styles.reviews}>
      {data?.map((review) => (
        <li key={review.id}>
          <Review
            reviewId={review.id}
            text={review.text}
            userId={review.userId}
          />
        </li>
      ))}
    </ul>
  );
};
