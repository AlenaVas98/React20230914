import classNames from "classnames";

import styles from "./RestaurantTabs.module.scss";
import { RestaurantTabContainer } from "../RestaurantTab/container";
export const RestaurantTabs = ({
  onIndexSelect,
  className,
  activeTabIndex,
  restaurantIds,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      {restaurantIds.map((id) => (
        <RestaurantTabContainer
          key={id}
          isActive={id === activeTabIndex}
          onClick={() => onIndexSelect(id)}
          restaurantId={id}
          size="m"
        />
      ))}
    </div>
  );
};
