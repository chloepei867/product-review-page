import StarRating from "../StarRating";
import ReviewItem from "./ReviewItem";

export default function ReviewListContainer() {
  return (
    <div className="flex flex-col justify-center items-end gap-6 self-stretch px-4">
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </div>
  );
}
