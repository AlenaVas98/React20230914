import { Dish } from "../Dish/DishComponent";
import styles from "./Menu.module.scss";
export const Menu = ({ menu }) => {
  return (
    <ul className={styles.menu}>
      {menu.map((name) => (
        <li key={name.id}>
          <Dish nameDish={name} className={styles.dish} />
        </li>
      ))}
    </ul>
  );
};
