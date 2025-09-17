import StarRating from "./StarRating";
import ProgressBar from "./ProgressBar";
import BreakdownItem from "./BreakdownItem";
import ReviewBreakdown from "./ReviewBreakdown";

export default function ReviewSummary() {
  return (
    <div className="flex flex-col self-stretch px-6 gap-6">
      {/* heading */}
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-xl text-neutral-900">
          Overall Rating
        </h2>
        {/* review rating */}
        <div className="flex justify-between gap-2 py-4 self-stretch">
          <span className="font-semibold text-base text-neutral-900">4.1</span>
          <StarRating value={4} max={5} />
          <span className="font-normal text-sm text-neutral-600">
            based on 10 reviews
          </span>
        </div>
      </div>
      {/* rating values */}
      <ReviewBreakdown />
      {/* write a review button */}
      <button>Write a Review</button>
    </div>
  );
}
