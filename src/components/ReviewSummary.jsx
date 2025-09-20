import StarRating from "./StarRating";
import ProgressBar from "./reviewBreakdown/ProgressBar";
import BreakdownItem from "./reviewBreakdown/BreakdownItem";
import ReviewBreakdown from "./reviewBreakdown/ReviewBreakdown";

export default function ReviewSummary() {
  return (
    <div className="flex flex-col items-center self-stretch px-6 gap-6">
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
      <button className="w-[153px] flex justify-center items-center gap-1.5 bg-white px-5 py-3 rounded border-[0.5px] border-solid border-neutral-200 shadow-[0px_1px_2px_0_rgb(0_0_0/0.06),_0px_1px_3px_0_rgb(0_0_0/0.10)]">
        Write a Review
      </button>
    </div>
  );
}
