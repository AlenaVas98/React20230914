import { useSelector } from "react-redux";
import { Button } from "../Button/ButtonComponent";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }
  return <Button {...props}>{restaurant.name}</Button>;
};
