import ReviewListContainer from "./ReviewListContainer";
import ReviewListFooter from "./ReviewListFooter";

import { useState } from "react";

export default function ReviewList({ reviews }) {
  const [visibleCount, setVisibleCount] = useState(10);
  const showMore = () => {
    setVisibleCount((prev) => prev + 10);
  };
  const visibleReviews = reviews.slice(0, visibleCount);

  return (
    <div className="flex flex-col items-center gap-6 self-stretch">
      {/* review list container */}
      <ReviewListContainer reviews={visibleReviews} />
      {/* footer */}
      <ReviewListFooter showMore={showMore} />
    </div>
  );
}
