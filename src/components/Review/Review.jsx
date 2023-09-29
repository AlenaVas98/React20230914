export const Review = ({ reviews }) => {
  return (
    <div>
      {reviews.user}: {reviews.text}
    </div>
  );
};
