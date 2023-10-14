import { useSelector } from "react-redux";
import classNames from "classnames";
import { Button } from "../Button/ButtonComponent";
import styles from "./RestaurantTabs.module.scss";
export const RestaurantTabs = ({
  onIndexSelect,
  className,
  activeTabIndex,
  restaurantId,
}) => {
  const restaurant = useSelector((state) => state.restaurant.entities);
  return (
    <div className={classNames(styles.root, className)}>
      {restaurantId.map((id) => (
        <Button
          key={id}
          isActive={id === activeTabIndex}
          onClick={() => onIndexSelect(id)}
          size="m"
        >
          {restaurant[id].name}
        </Button>
      ))}
    </div>
  );
};
