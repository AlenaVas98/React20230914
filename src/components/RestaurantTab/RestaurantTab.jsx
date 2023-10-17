import { useSelector } from "react-redux";
import { Button } from "../Button/ButtonComponent";

export const RestaurantTab = ({ onClick, RestaurantTabId, isActive }) => {
  const restaurant = useSelector(
    (state) => state.restaurant.entities[RestaurantTabId]
  );
  return (
    <Button onClick={onClick} isActive={isActive}>
      {restaurant.name}
    </Button>
  );
};
