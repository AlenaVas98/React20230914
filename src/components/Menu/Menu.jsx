import { Dish } from "../Dish/DishComponent";
import styles from "./Menu.module.scss";
export const Menu = ({ menu }) => {
  return (
    <ul className={styles.menu}>
      {menu.map((id) => (
        <li key={id}>
          <Dish nameDishId={id} className={styles.dish} />
        </li>
      ))}
    </ul>
  );
};
