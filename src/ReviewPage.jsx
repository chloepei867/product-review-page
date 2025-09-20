import ReviewList from "./components/reviewList/ReviewList";
import ReviewSummary from "./components/ReviewSummary";
import reviews from "./data/mergedReviews.json";

export default function ReviewPage() {
  return (
    <div className="flex flex-col justify-center self-stretch grow py-16 rounded bg-neutral-600">
      <div className="flex flex-col justify-center items-center self-stretch grow bg-white rounded-lg">
        <div className="flex flex-col justify-center items-end gap-4 self-stretch p-6">
          <button className="w-6 h-6">
            <i className="fa-solid fa-xmark text-neutral-900 text-lg"></i>
          </button>
        </div>
        <div className="flex flex-col items-center gap-10 self-stretch max-h-[70vh] overflow-y-auto">
          <ReviewSummary />
          <ReviewList reviews={reviews} />
        </div>
      </div>
    </div>
  );
}
