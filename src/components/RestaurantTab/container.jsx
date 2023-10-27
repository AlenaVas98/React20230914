import { Button } from "../Button/ButtonComponent";

export const RestaurantTabContainer = ({ restauranName, ...props }) => {
  return <Button {...props}>{restauranName}</Button>;
};
