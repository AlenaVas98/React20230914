import { Button } from "../Button/ButtonComponent";
import styles from "./Dish.module.scss";
import classNames from "classnames";
import { cartActions } from "../../redux/ui/cart";

export const Dish = ({ nameDish, dishId, amount, dispatch }) => {
  return (
    <div className={classNames(styles.dish)}>
      {nameDish} -
      <Button
        onClick={() => {
          // dispatch(cartActions.removeItemCart(restaurantId)),
          dispatch(cartActions.decrement(dishId));
        }}
        disabled={amount === 0}
      >
        -
      </Button>
      {amount}
      <Button
        onClick={() => {
          // dispatch(cartActions.addItemCart({ nameDish, restaurantId })),
          dispatch(cartActions.increment(dishId));
        }}
        disabled={amount === 5}
      >
        +
      </Button>
    </div>
  );
};
