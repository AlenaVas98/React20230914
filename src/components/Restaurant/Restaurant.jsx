import { AddReviewForm } from "../AddReviewForm/AddReviewForm";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/ReviewsComponent";
import styles from "./Restaurant.module.scss";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
  return (
    <div className={styles.restaurant}>
      <h1 className={styles.name}>{name}</h1>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <AddReviewForm className={styles.button} />
    </div>
  );
};
