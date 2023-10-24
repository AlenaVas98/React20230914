import { Button } from "../Button/ButtonComponent";
import { useReducer } from "react";
import { StarRating } from "../StarRating/StarRating";
import classNames from "classnames";
import styles from "./ReviewForm.module.scss";
import { createReview } from "../../redux/entities/review/thunks/create-review";
import { useMakeRequest } from "../../hooks/use-make-request";
import { REQUEST_STATUS } from "../../constans/statuses";

const DEFAULT_VALUE = {
  name: "",
  text: "",
  rating: "",
};

const reducer = (state, action) => {
  switch (action?.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setReview":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    case "reset":
      return { ...DEFAULT_VALUE };

    default:
      return state;
  }
};

export const ReviewForm = ({ className, onClose, restaurantId }) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);
  const [addReviewstatus, addReview] = useMakeRequest(createReview);
  return (
    <>
      {addReviewstatus === REQUEST_STATUS.loading ? (
        <div>Loading...</div>
      ) : (
        <div className={classNames(styles.root, className)}>
          <h3>Add your review</h3>
          <input
            type="text"
            value={formValue.name}
            className={styles.input}
            placeholder="Name:"
            onChange={(event) => {
              dispatch({ type: "setName", payload: event.target.value });
            }}
          />
          <input
            type="text"
            value={formValue.text}
            className={styles.input}
            placeholder="Review:"
            onChange={(event) => {
              dispatch({ type: "setReview", payload: event.target.value });
            }}
          />

          <StarRating />
          <div className={styles.buttons}>
            <Button onClick={onClose}>Close</Button>
            <Button
              onClick={() => {
                addReview({
                  restaurantId,
                  newReview: {
                    id: restaurantId,
                    userId: "1547335a-ea18-4547-a73d-32bd6e9f651c",
                    text: formValue.text,
                    rating: formValue.rating,
                  },
                });
                dispatch({ type: "reset" });
                onClose();
              }}
            >
              Add Review
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
