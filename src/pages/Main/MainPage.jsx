import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { restaurants } from "../../constans/mock";

export const MainPage = () => {
  const [restaurantId, setRestaurantId] = useState(0);
  return (
    <div>
      <RestaurantTabs
        restaurants={restaurants}
        onIndexSelect={setRestaurantId}
      />
      <Restaurant restaurant={restaurants[restaurantId]} />
    </div>
  );
};
