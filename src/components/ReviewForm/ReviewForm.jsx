import { Button } from "../Button/ButtonComponent";
import { useReducer } from "react";
import { StarRating } from "../StarRating/StarRating";
import classNames from "classnames";
import styles from "./ReviewForm.module.scss";

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

export const ReviewForm = ({ className, onClose, onSubmit }) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);
  return (
    <>
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
              onSubmit(formValue);
              dispatch({ type: "reset" });
              onClose();
            }}
          >
            Add Review
          </Button>
        </div>
      </div>
    </>
  );
};
