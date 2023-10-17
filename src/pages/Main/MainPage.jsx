import { useState } from "react";

import styles from "./MainPage.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { RestaurantContainer } from "../../components/Restaurant/container";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );

  return (
    <Layout>
      <RestaurantTabsContainer
        onIndexSelect={setActiveRestaurantId}
        activeTabIndex={activeRestaurantId}
        className={styles.tabsRestaurant}
      />
      <RestaurantContainer restaurantId={activeRestaurantId} />
    </Layout>
  );
};
