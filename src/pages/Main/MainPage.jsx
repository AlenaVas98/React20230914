import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { restaurants } from "../../constans/mock";

import styles from "./MainPage.module.scss";
import { Layout } from "../../components/Layout/Layout";

export const MainPage = () => {
  const [restaurantId, setRestaurantId] = useState(0);

  return (
    <Layout>
      <RestaurantTabs
        restaurants={restaurants}
        onIndexSelect={setRestaurantId}
        activeTabIndex={restaurantId}
        className={styles.tabsRestaurant}
      />
      <Restaurant restaurant={restaurants[restaurantId]} />
    </Layout>
  );
};
