import classNames from "classnames";

import styles from "./RestaurantTabs.module.scss";
import { RestaurantTab } from "../RestaurantTab/RestaurantTab";
export const RestaurantTabs = ({
  onIndexSelect,
  className,
  activeTabIndex,
  restaurantId,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      {restaurantId.map((id) => (
        <RestaurantTab
          key={id}
          isActive={id === activeTabIndex}
          onClick={() => onIndexSelect(id)}
          RestaurantTabId={id}
          size="m"
        />
      ))}
    </div>
  );
};
