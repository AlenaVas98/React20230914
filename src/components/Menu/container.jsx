import { Menu } from "./Menu";
import { getDishes } from "../../redux/entities/dish/thunks/get-dishes";
import { REQUEST_STATUS } from "../../constans/statuses";
import { useRequest } from "../../hooks/use-request";

export const MenuContainer = ({ restaurantId, ...props }) => {
  const menuLoadingStatus = useRequest(getDishes, restaurantId);

  return (
    <>
      {menuLoadingStatus === REQUEST_STATUS.pending ? (
        <div>Loading...</div>
      ) : (
        <Menu {...props} />
      )}
    </>
  );
};
