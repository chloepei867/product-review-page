import ProgressBar from "./ProgressBar";

export default function BreakdownItem({ label, percentage, bgColor }) {
  return (
    <div className="flex items-center gap-2 self-stretch">
      <span className="flex w-[120px] font-medium text-base text-neutral-600">
        {label}
      </span>
      {/* progress bar */}
      <ProgressBar percentage={percentage} bgColor={bgColor} />
      <span className="w-[42px] flex justify-end font-normal text-base text-right text-neutral-600">
        {percentage}%
      </span>
    </div>
  );
}
