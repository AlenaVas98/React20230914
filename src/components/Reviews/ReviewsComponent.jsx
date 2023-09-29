import { Review } from "../Review/Review";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((reviews) => (
        <ul key={reviews.id}>
          <li>
            <Review reviews={reviews} />
          </li>
        </ul>
      ))}
    </div>
  );
};
