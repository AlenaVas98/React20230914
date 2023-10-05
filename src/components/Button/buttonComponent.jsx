import classNames from "classnames";
import styles from "./Button.module.scss";
export const Button = ({ text, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.button, className)}
    >
      {text}
    </button>
  );
};
