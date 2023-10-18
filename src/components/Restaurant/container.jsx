import { useSelector } from "react-redux";
import { Restaurant } from "./Restaurant";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }
  return <Restaurant restaurant={restaurant} />;
};
