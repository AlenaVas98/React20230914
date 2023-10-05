import classNames from "classnames";
import styles from "./Header.module.scss";

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.header, className)}>
      <div className={styles.logoBox}>
        <h2 className={styles.logo}>RestaurantGit</h2>
      </div>
      <div className={styles.nav}>
        <a href="/" className={styles.tab}>
          Some text
        </a>
        <a href="/" className={styles.tab}>
          Some text
        </a>
      </div>
    </header>
  );
};
