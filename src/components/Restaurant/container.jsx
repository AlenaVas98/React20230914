import { Restaurant } from "./Restaurant";
import { useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantContainer = () => {
  const { restaurantId } = useParams();
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result?.data?.find(({ id }) => id === restaurantId),
      };
    },
  });
  return <Restaurant restaurant={restaurant} />;
};
