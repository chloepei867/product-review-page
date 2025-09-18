import StarRating from "../StarRating";

export default function ReviewItem() {
  return (
    <div className="flex flex-col gap-4 self-stretch">
      {/* avatar details */}
      <div className="flex items-center gap-4 self-stretch">
        {/* avatar */}
        <div className="flex w-12 h-12 rounded-full overflow-hidden">
          <img
            className="object-cover"
            src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/user-avatars/kimberly-mastrangelo.jpg"
            alt=""
          />
        </div>
        {/* details */}
        <div className="flex flex-col gap-1 grow">
          {/* title */}
          <div className="flex items-center justify-between self-stretch">
            <h3 className="w-[160px] tex-wrap font-semibold text-base text-neutral-900">
              Kimberly Mastrangelo
            </h3>
            <span className="flex w-[90px] font-normal text-xs text-neutral-600">
              March 10, 2024
            </span>
          </div>
          <div className="flex items-start">
            <StarRating value={5} max={5} />
          </div>
        </div>
      </div>
      {/* review content */}
      <p className="font-normal text-base text-neutral-600">
        Absolutely a must-have for anyone who enjoys outdoor activities. Keeps
        me warm and looks great!
      </p>
    </div>
  );
}
