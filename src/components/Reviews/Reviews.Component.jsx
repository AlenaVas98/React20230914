export const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((reviews) => (
        <div key={reviews.id}>
          <ul>
            <li>
              {reviews.user}: {reviews.text}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
