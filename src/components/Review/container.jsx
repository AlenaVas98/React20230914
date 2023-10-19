import { useSelector } from "react-redux";
import { Review } from "./Review";
import { selectReviewById } from "../../redux/entities/review/selectors";

export const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!review) {
    return null;
  }
  return <Review review={review} />;
};
