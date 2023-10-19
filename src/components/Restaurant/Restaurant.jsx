import { AddReviewForm } from "../AddReviewForm/AddReviewForm";
import { MenuContainer } from "../Menu/container";
import { ReviewsContainer } from "../Reviews/container";
import styles from "./Restaurant.module.scss";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews, id } = restaurant;
  console.log(restaurant);
  return (
    <div className={styles.restaurant}>
      <h1 className={styles.name}>{name}</h1>
      <MenuContainer restaurantId={id} menu={menu} />
      <ReviewsContainer restaurantId={id} reviews={reviews} />
      <AddReviewForm className={styles.button} />
    </div>
  );
};
