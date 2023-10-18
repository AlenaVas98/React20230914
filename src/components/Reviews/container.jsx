import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./ReviewsComponent";
import { useEffect } from "react";
import { getReviews } from "../../redux/entities/review/thunks/get-reviews";
import { selectReviewLoadingStatus } from "../../redux/entities/review/selectors";
import { REQUEST_STATUS } from "../../constans/statuses";
import { getUsers } from "../../redux/entities/user/thunks/get-users";

export const ReviewsContainer = ({ restaurantId, ...props }) => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectReviewLoadingStatus);
  useEffect(() => {
    dispatch(getReviews(restaurantId));
    dispatch(getUsers());
  }, [restaurantId]);
  return (
    <>
      {loadingStatus === REQUEST_STATUS.pending ? (
        <div>Loading...</div>
      ) : (
        <Reviews {...props} />
      )}
    </>
  );
};
