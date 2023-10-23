import { useSelector } from "react-redux";
import { selectCart } from "../../redux/ui/cart/selectors";
import styles from "./cart.module.scss";
export const Cart = () => {
  const cart = useSelector((state) => selectCart(state));
  return (
    <div>
      <h1 className={styles.headText}>Your Cart</h1>
      {cart.map((item) => (
        <ul key={item.id}>
          <li className={styles.list}>{item.name}</li>
          <li className={styles.list}>{item.quantity}</li>
        </ul>
      ))}
    </div>
  );
};
