import React, { useState } from "react";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { createPortal } from "react-dom";
import { Button } from "../Button/ButtonComponent";
import styles from "./AddReviewForm.module.scss";

export const AddReviewForm = () => {
  const [showReview, serShowReview] = useState(false);
  return (
    <React.Fragment>
      <Button
        text={"Add Review"}
        onClick={() => {
          serShowReview(true);
        }}
        className={styles.button}
      />

      {showReview &&
        createPortal(
          <ReviewForm
            onClose={() => {
              serShowReview(false);
            }}
          />,
          document.getElementById("portalReview")
        )}
    </React.Fragment>
  );
};
