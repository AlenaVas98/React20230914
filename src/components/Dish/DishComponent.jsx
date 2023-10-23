import { Button } from "../Button/ButtonComponent";
import styles from "./Dish.module.scss";
import classNames from "classnames";
import { cartActions } from "../../redux/ui/cart";

export const Dish = ({ dish, amount, dishId, dispatch }) => {
  const { name, id } = dish;
  return (
    <div className={classNames(styles.dish)}>
      {name} -
      <Button
        onClick={() => {
          dispatch(cartActions.removeItemCart(id)),
            dispatch(cartActions.decrement(dishId));
        }}
        disabled={amount === 0}
      >
        -
      </Button>
      {amount}
      <Button
        onClick={() => {
          dispatch(cartActions.addItemCart({ name, id })),
            dispatch(cartActions.increment(dishId));
        }}
        disabled={amount === 5}
      >
        +
      </Button>
    </div>
  );
};
