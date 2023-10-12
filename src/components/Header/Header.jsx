import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { Button } from "../Button/ButtonComponent";
import classNames from "classnames";
import styles from "./Header.module.scss";

export const Header = ({ className }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={classNames(styles.header, className)}>
      <div className={styles.logoBox}>
        <h2 className={styles.logo}>RestaurantGit</h2>
      </div>
      <div className={styles.nav}>
        <Button
          className={classNames(styles.tab, {
            [styles.dark]: theme === "dark",
            [styles.light]: theme === "light",
          })}
          onClick={toggleTheme}
          size="m"
        >
          Dark theme
        </Button>
      </div>
    </header>
  );
};
