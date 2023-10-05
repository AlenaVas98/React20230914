import styles from "./Review.module.scss";
export const Review = ({ reviews }) => {
  return (
    <div className={styles.root}>
      {reviews.user}: {reviews.text}
    </div>
  );
};
