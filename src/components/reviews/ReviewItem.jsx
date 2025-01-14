export default function ReviewItem({ review }) {
  const generateStars = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const star = (
        <i className={`fa-${i < rating ? "solid" : "regular"} fa-star`}></i>
      );
      stars.push(star);
    }

    return stars;
  };

  return (
    <div className="col-12 d-flex gap-3 align-items-center">
      <div>
        <div className="avatar">{review.name[0].toUpperCase()}</div>
      </div>
      <div>{review.name}</div>
      <div>{generateStars(review.vote).map((star) => star)}</div>
      <div>{review.text}</div>
    </div>
  );
}
