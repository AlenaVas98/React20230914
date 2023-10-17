import { Dish } from "../Dish/DishComponent";
import styles from "./Menu.module.scss";
export const Menu = ({ menu }) => {
  return (
    <ul className={styles.menu}>
      {menu.map((id) => (
        <li key={id}>
          <Dish dishId={id} className={styles.dish} />
        </li>
      ))}
    </ul>
  );
};
