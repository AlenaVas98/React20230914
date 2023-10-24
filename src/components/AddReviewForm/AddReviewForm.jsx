import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../Button/ButtonComponent";
import { ReviewForm } from "../ReviewForm/ReviewForm";

export const AddReviewForm = ({ className, restaurantId }) => {
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
            restaurantId={restaurantId}
          />,
          document.getElementById("portalReview")
        )}
    </React.Fragment>
  );
};
