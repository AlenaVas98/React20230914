import { useDispatch, useSelector } from "react-redux";
import { Dish } from "./DishComponent";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { selectDishAmountById } from "../../redux/ui/cart/selectors";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const amount = useSelector((state) => selectDishAmountById(state, dishId));
  const dispatch = useDispatch();

  if (!dish) {
    return null;
  }
  return (
    <Dish dish={dish} amount={amount} dishId={dishId} dispatch={dispatch} />
  );
};
