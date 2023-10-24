import { REQUEST_STATUS } from "../../constans/statuses";
import { useMakeRequest } from "../../hooks/use-make-request";
import { createReview } from "../../redux/entities/review/thunks/create-review";
import { ReviewForm } from "./ReviewForm";

export const ReviewFormContainer = ({ restaurantId, ...props }) => {
  const [addReviewstatus, addReview] = useMakeRequest(createReview);
  return (
    <>
      {addReviewstatus === REQUEST_STATUS.loading ? (
        <div>Loading...</div>
      ) : (
        <ReviewForm
          onSubmit={(form) => {
            addReview({
              restaurantId,
              newReview: form,
              userId: "1547335a-ea18-4547-a73d-32bd6e9f651c",
            });
          }}
          {...props}
        />
      )}
    </>
  );
};
