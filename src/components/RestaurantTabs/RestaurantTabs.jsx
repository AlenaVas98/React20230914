import classNames from "classnames";
import { Button } from "../Button/ButtonComponent";
import styles from "./RestaurantTabs.module.scss";
export const RestaurantTabs = ({
  restaurants,
  onIndexSelect,
  className,
  activeTabIndex,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      {restaurants.map((restaurant, index) => (
        <Button
          key={restaurant.id}
          isActive={index === activeTabIndex}
          onClick={() => onIndexSelect(index)}
          size="m"
        >
          {restaurant.name}
        </Button>
      ))}
    </div>
  );
};
