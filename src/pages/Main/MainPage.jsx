import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { restaurants } from "../../constans/mock";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  const [restaurantId, setRestaurantId] = useState(0);
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <div className={styles.content}>
        <RestaurantTabs
          restaurants={restaurants}
          onIndexSelect={setRestaurantId}
          className={styles.tabsRestaurant}
        />
        <Restaurant restaurant={restaurants[restaurantId]} />
      </div>
      <Footer />
    </div>
  );
};
