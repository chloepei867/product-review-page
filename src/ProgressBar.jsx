export default function ProgressBar({ percentage, bgColor }) {
  return (
    <div className="flex w-[117px] h-2 rounded-lg bg-gray-200 overflow-hidden">
      <div
        className="h-2 rounded-lg bg-green-600"
        style={{ width: `${percentage}%`, backgroundColor: `${bgColor}` }}
      ></div>
    </div>
  );
}
