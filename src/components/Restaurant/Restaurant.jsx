import { Button } from "../Button/ButtonComponent";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/ReviewsComponent";
import styles from "./Restaurant.module.scss";

export const Restaurant = ({ restaurant, onClose }) => {
  return (
    <div className={styles.restaurant}>
      <h1 className={styles.name}>{restaurant.name}</h1>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <Button text={"Add Review"} onClick={onClose} className={styles.button} />
    </div>
  );
};
