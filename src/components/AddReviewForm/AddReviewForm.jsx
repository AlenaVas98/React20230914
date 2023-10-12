import React, { useState } from "react";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { createPortal } from "react-dom";
import { Button } from "../Button/ButtonComponent";

export const AddReviewForm = ({ className }) => {
  const [showReview, serShowReview] = useState(false);
  return (
    <React.Fragment>
      <Button
        onClick={() => {
          serShowReview(true);
        }}
        className={className}
      >
        Add Review
      </Button>
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
