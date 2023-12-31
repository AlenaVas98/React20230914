import classNames from "classnames";
import styles from "./Button.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  isActive,
  size = "s",
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.button, className, styles[size], {
        [styles.dark]: theme === "dark",
        [styles.active]: isActive,
        [styles.activeDark]: isActive && theme === "dark",
      })}
    >
      {children}
    </button>
  );
};
