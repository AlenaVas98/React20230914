import { useDispatch, useSelector } from "react-redux";
import { Dish } from "./DishComponent";
import { selectDishAmountById } from "../../redux/ui/cart/selectors";

export const DishContainer = ({ dishId, ...props }) => {
  const amount = useSelector((state) => selectDishAmountById(state, dishId));
  const dispatch = useDispatch();

  return (
    <Dish amount={amount} dishId={dishId} dispatch={dispatch} {...props} />
  );
};
