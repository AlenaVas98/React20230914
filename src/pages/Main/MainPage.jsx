import { useState } from "react";
import { Button } from "../../components/Button/ButtonComponent";
import { restaurants } from "../../constans/mock";
import { RestaurantActive } from "../../components/RestaurantActive/RestaurantActive";
export const MainPage = () => {
  const [restaurant, setRestaurant] = useState("Dishoom");

  return (
    <div>
      {restaurants.map((restaurants) => (
        <Button
          key={restaurants.id}
          text={restaurants.name}
          onClick={() => setRestaurant(restaurants.name)}
        />
      ))}
      <RestaurantActive name={restaurant} />
    </div>
  );
};
