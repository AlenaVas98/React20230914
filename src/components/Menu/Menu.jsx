import { DishContainer } from "../Dish/container";
import styles from "./Menu.module.scss";
export const Menu = ({ menu }) => {
  return (
    <ul className={styles.menu}>
      {menu.map((id) => (
        <li key={id}>
          <DishContainer dishId={id} className={styles.dish} />
        </li>
      ))}
    </ul>
  );
};
