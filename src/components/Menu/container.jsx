import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./Menu";
import { useEffect } from "react";
import { getDishes } from "../../redux/entities/dish/thunks/get-dishes";
import { selectDishLoadingStatus } from "../../redux/entities/dish/selectors";
import { REQUEST_STATUS } from "../../constans/statuses";

export const MenuContainer = ({ restaurantId, ...props }) => {
  const loadingStatus = useSelector(selectDishLoadingStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [restaurantId]);

  return (
    <>
      {loadingStatus === REQUEST_STATUS.pending ? (
        <div>Loading...</div>
      ) : (
        <Menu {...props} />
      )}
    </>
  );
};
