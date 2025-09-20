import StarRating from "../StarRating";
import ReviewItem from "./ReviewItem";

export default function ReviewListContainer({ reviews }) {
  return (
    <div className="flex flex-col justify-center items-end gap-6 self-stretch px-4 md:gap-8 md:px-8">
      {reviews.map((review, index) => (
        <ReviewItem review={review} key={index} />
      ))}
    </div>
  );
}
