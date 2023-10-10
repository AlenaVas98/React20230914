import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.content}>{children}</main>
      <Footer />

      <div id="portalReview" className={styles.reviewModal}></div>
    </div>
  );
};
