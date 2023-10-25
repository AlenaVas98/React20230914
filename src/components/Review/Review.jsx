import styles from "./Review.module.scss";
import { UserContainer } from "../User/container";
export const Review = ({ text, userId }) => {
  return (
    <div className={styles.root}>
      <UserContainer userId={userId} />: {text}
    </div>
  );
};
