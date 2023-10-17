import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";

import styles from "./MainPage.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );

  return (
    <Layout>
      <RestaurantTabs
        restaurantId={restaurantIds}
        onIndexSelect={setActiveRestaurantId}
        activeTabIndex={activeRestaurantId}
        className={styles.tabsRestaurant}
      />
      <Restaurant restaurantId={activeRestaurantId} />
    </Layout>
  );
};
