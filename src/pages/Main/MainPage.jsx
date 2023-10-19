import { useEffect, useState } from "react";

import styles from "./MainPage.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantLoadingStatus,
} from "../../redux/entities/restaurant/selectors";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { RestaurantContainer } from "../../components/Restaurant/container";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { REQUEST_STATUS } from "../../constans/statuses";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );
  const loadingStatus = useSelector(selectRestaurantLoadingStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <Layout>
      {loadingStatus === REQUEST_STATUS.pending ? (
        <h1 className={styles.loading}>Loading</h1>
      ) : (
        <RestaurantTabsContainer
          onIndexSelect={setActiveRestaurantId}
          activeTabIndex={activeRestaurantId}
          className={styles.tabsRestaurant}
        />
      )}
      <RestaurantContainer restaurantId={activeRestaurantId} />
    </Layout>
  );
};
