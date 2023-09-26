import { useState } from "react";
import { Button } from "../Button/ButtonComponent";

export const Dish = ({ nameDish }) => {
  const [amount, setAmount] = useState(0);
  return (
    <ul>
      <li>
        {nameDish} -
        <Button
          text="-"
          onClick={() => setAmount(amount - 1)}
          disabled={amount === 0}
        />
        {amount}
        <Button
          text="+"
          onClick={() => setAmount(amount + 1)}
          disabled={amount === 5}
        />
      </li>
    </ul>
  );
};