import ReviewListContainer from "./ReviewListContainer";
import ReviewListFooter from "./ReviewListFooter";

export default function ReviewList() {
  return (
    <div className="flex flex-col items-center gap-6 self-stretch">
      {/* review list container */}
      <ReviewListContainer />
      {/* footer */}
      <ReviewListFooter />
    </div>
  );
}
