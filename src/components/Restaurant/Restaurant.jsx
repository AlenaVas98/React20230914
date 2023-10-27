import { Outlet } from "react-router-dom";
import { AddReviewForm } from "../AddReviewForm/AddReviewForm";
import styles from "./Restaurant.module.scss";
import { MenuContainer } from "../Menu/container";
import { ReviewsContainer } from "../Reviews/container";

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.restaurant}>
      <h1 className={styles.name}>{restaurant.name}</h1>
      <MenuContainer restaurantId={restaurant.id} />
      <ReviewsContainer restaurantId={restaurant.id} />
      <AddReviewForm className={styles.button} restaurantId={restaurant.id} />
      <Outlet />
    </div>
  );
};
