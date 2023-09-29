import { Dish } from "../Dish/DishComponent";

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((name) => (
        <li key={name.id}>
          <Dish nameDish={name} />
        </li>
      ))}
    </ul>
  );
};
