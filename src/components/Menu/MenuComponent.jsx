import { Dish } from "../Dish/DishComponent";

export const Menu = ({ menu }) => {
  return (
    <div>
      {menu.map((menu) => (
        <Dish key={menu.id} nameDish={menu.name} />
      ))}
    </div>
  );
};
