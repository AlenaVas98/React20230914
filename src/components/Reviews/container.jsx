import { Reviews } from "./ReviewsComponent";
import { getReviews } from "../../redux/entities/review/thunks/get-reviews";
import { REQUEST_STATUS } from "../../constans/statuses";
import { getUsers } from "../../redux/entities/user/thunks/get-users";
import { useRequest } from "../../hooks/use-request";

export const ReviewsContainer = ({ restaurantId, ...props }) => {
  const reviewLoadingStatus = useRequest(getReviews, restaurantId);
  const userLoadingStatus = useRequest(getUsers);
  return (
    <>
      {userLoadingStatus === REQUEST_STATUS.pending ||
      reviewLoadingStatus === REQUEST_STATUS.pending ? (
        <div>Loading...</div>
      ) : (
        <Reviews {...props} />
      )}
    </>
  );
};
