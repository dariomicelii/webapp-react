import ReviewItem from "./ReviewItem";

export default function ReviewsList({ reviews }) {
  return (
    <div className="row g-3 mb-5">
      <div className="col">
        {reviews.map((review) => (
          <ReviewItem review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}
