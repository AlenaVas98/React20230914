import { restaurants } from "../../constans/mock";
import { Menu } from "../Menu/MenuComponent";
import { Reviews } from "../Reviews/Reviews.Component";

export const RestaurantActive = ({ name }) => {
  const currentRestaurant = restaurants.filter(
    (restaurant) => restaurant.name === name
  );
  console.log(currentRestaurant);
  return (
    <div>
      <h1>{name}</h1>
      <Menu menu={currentRestaurant[0].menu} />
      <Reviews reviews={currentRestaurant[0].reviews} />
    </div>
  );
};
