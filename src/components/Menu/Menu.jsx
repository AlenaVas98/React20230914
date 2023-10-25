import { DishContainer } from "../Dish/container";
import styles from "./Menu.module.scss";
export const Menu = ({ data }) => {
  return (
    <ul className={styles.menu}>
      {data?.map((dish) => (
        <li key={dish.id}>
          <DishContainer
            nameDish={dish.name}
            dishId={dish.id}
            className={styles.dish}
          />
        </li>
      ))}
    </ul>
  );
};
