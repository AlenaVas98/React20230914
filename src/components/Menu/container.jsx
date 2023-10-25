import { Menu } from "./Menu";
import { useGetDishsQuery } from "../../redux/services/api";

export const MenuContainer = ({ restaurantId, ...props }) => {
  const { data, isFetching } = useGetDishsQuery(restaurantId);
  return (
    <>{isFetching ? <div>Loading...</div> : <Menu {...props} data={data} />}</>
  );
};
