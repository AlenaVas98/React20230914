import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../Button/ButtonComponent";
import { ReviewFormContainer } from "../ReviewForm/container";

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
          <ReviewFormContainer
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
