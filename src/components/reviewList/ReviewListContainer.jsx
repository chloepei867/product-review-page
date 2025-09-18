import StarRating from "../StarRating";
import ReviewItem from "./ReviewItem";
import reviews from "../../data/mergedReviews.json";

export default function ReviewListContainer() {
  return (
    <div className="flex flex-col justify-center items-end gap-6 self-stretch px-4">
      {reviews.map((review, index) => (
        <ReviewItem review={review} />
      ))}
    </div>
  );
}
