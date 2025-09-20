export default function ProgressBar({ percentage, bgColor }) {
  return (
    <div className="flex h-2 rounded-lg bg-gray-200 overflow-hidden grow">
      <div
        className="h-2 rounded-lg"
        style={{ width: `${percentage}%`, backgroundColor: `${bgColor}` }}
      ></div>
    </div>
  );
}
