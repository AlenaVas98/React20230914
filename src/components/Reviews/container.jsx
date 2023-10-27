import { Reviews } from "./ReviewsComponent";
import { useGetReviewsQuery } from "../../redux/services/api";

export const ReviewsContainer = ({ restaurantId, ...props }) => {
  const { data, isFetching } = useGetReviewsQuery(restaurantId);
  return (
    <>
      {isFetching ? <div>Loading...</div> : <Reviews {...props} data={data} />}
    </>
  );
};
