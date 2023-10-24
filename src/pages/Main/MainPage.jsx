import { useEffect, useState } from "react";

import styles from "./MainPage.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantLoading,
} from "../../redux/entities/restaurant/selectors";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { RestaurantContainer } from "../../components/Restaurant/container";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { REQUEST_STATUS } from "../../constans/statuses";
import { Cart } from "../../components/Cart/Cart";

export const MainPage = () => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const loadingStatus = useSelector(selectRestaurantLoading);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );
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
      <div className={styles.box}>
        <RestaurantContainer restaurantId={activeRestaurantId} />
        <Cart />
      </div>
    </Layout>
  );
};
