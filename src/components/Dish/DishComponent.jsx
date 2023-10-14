import { useState } from "react";
import { Button } from "../Button/ButtonComponent";
import styles from "./Dish.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectorDishById } from "../../redux/entities/dish/selectors";

export const Dish = ({ nameDishId }) => {
  const dish = useSelector((state) => selectorDishById(state, nameDishId));
  const [amount, setAmount] = useState(0);
  return (
    <div className={classNames(styles.dish)}>
      {dish.name} -
      <Button onClick={() => setAmount(amount - 1)} disabled={amount === 0}>
        -
      </Button>
      {amount}
      <Button onClick={() => setAmount(amount + 1)} disabled={amount === 5}>
        +
      </Button>
    </div>
  );
};
