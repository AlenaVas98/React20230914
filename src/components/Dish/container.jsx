import { useSelector } from "react-redux";
import { Dish } from "./DishComponent";
import { selectDishById } from "../../redux/entities/dish/selectors";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }
  return <Dish dish={dish} />;
};
