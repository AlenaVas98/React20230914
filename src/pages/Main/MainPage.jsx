import styles from "./MainPage.module.scss";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
  const { data, isFetching } = useGetRestaurantsQuery();
  console.log(data);
  return (
    <div>
      {isFetching ? (
        <h1 className={styles.loading}>Loading</h1>
      ) : (
        <RestaurantTabsContainer
          restarants={data}
          className={styles.tabsRestaurant}
        />
      )}
      <Outlet />
    </div>
  );
};
