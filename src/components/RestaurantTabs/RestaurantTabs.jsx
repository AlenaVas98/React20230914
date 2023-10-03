import { Button } from "../Button/ButtonComponent";

export const RestaurantTabs = ({ restaurants, onIndexSelect }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Button
          key={restaurant.id}
          text={restaurant.name}
          onClick={() => onIndexSelect(index)}
        />
      ))}
    </div>
  );
};
