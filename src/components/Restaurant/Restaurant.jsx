import { AddReviewForm } from "../AddReviewForm/AddReviewForm";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/ReviewsComponent";
import styles from "./Restaurant.module.scss";

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.restaurant}>
      <h1 className={styles.name}>{restaurant.name}</h1>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <AddReviewForm />
    </div>
  );
};
