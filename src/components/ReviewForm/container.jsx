import { useCreateReviewMutation } from "../../redux/services/api";
import { ReviewForm } from "./ReviewForm";

export const ReviewFormContainer = ({ restaurantId, ...props }) => {
  const [createReview, { isLoading }] = useCreateReviewMutation();
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ReviewForm
          onSubmit={(form) => {
            createReview({
              restaurantId,
              newReview: {
                ...form,
                userId: "1547335a-ea18-4547-a73d-32bd6e9f651c",
              },
            });
          }}
          {...props}
        />
      )}
    </>
  );
};
