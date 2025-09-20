import StarRating from "../StarRating";
import Avatar from "react-avatar";

export default function ReviewItem({ review, key }) {
  const formatted = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short", // full month name
      day: "numeric",
    });
  };

  return (
    <div key={key} className="flex flex-col gap-4 self-stretch">
      {/* avatar details */}
      <div className="flex items-center gap-4 self-stretch">
        {/* avatar */}
        <div className="flex w-12 h-12 rounded-full overflow-hidden">
          {review.userAvatar !== null ? (
            <img
              className="flex w-full h-full object-cover"
              src={review.userAvatar}
              alt={review.userName}
            />
          ) : (
            <Avatar
              name={review.userName}
              size={48}
              color="#e5e7eb"
              fgColor="#525252"
            />
          )}
        </div>
        {/* details */}
        <div className="flex flex-col gap-1 grow">
          {/* title */}
          <div className="flex items-center justify-between self-stretch">
            <h3 className="w-[160px] tex-wrap font-semibold text-base text-neutral-900">
              {review.userName}
            </h3>
            <span className="flex justify-end w-[90px] font-normal text-xs text-neutral-600">
              {formatted(review.created_at)}
            </span>
          </div>
          <div className="flex items-start">
            <StarRating value={review.rating} max={5} />
          </div>
        </div>
      </div>
      {/* review content */}
      <p className="font-normal text-base text-neutral-600">{review.content}</p>
    </div>
  );
}
