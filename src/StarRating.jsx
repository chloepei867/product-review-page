import { useState } from "react";

function Star({ filled }) {
  // return <i className="fa-solid fa-star text-yellow-400"></i>;
  return (
    <i
      className={[
        "fa-solid",
        "fa-star",
        filled ? "text-yellow-400" : "text-gray-200",
      ].join(" ")}
    ></i>
  );
}

export default function StarRating({ value, max }) {
  // const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex justify-center items-center gap-2">
      {Array.from({ length: max }).map((_, index) => (
        <span
          key={index}
          tabIndex={0}
          // onClick={() => onChange(index + 1)}
        >
          <Star filled={index < value} />
        </span>
      ))}
    </div>
  );
}
