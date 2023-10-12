import { useState } from "react";
import { Button } from "../Button/ButtonComponent";
import styles from "./Dish.module.scss";
import classNames from "classnames";

export const Dish = ({ nameDish }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div className={classNames(styles.dish)}>
      {nameDish.name} -
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
