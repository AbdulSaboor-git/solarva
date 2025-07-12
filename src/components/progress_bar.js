import React from "react";

export default function ProgressBar({ value, title }) {
  if (value > 100) value = 100;
  else if (value < 0) value = 0;
  return (
    <div className="flex flex-col text-[var(--dark-blue-1)] font-medium gap-1">
      <div
        className="flex gap-4 items-center min-w-fit max-w-[100%] justify-between"
        style={{ width: `${value}%` }}
      >
        <div className="w-full min-w-fit line-clamp-1">{title}</div>
        <div>{value}%</div>
      </div>
      <div className="w-full relative rounded-full overflow-hidden bg-gray-200 h-1.5">
        <div
          className="absolute inset-0 h-full left-0 bg-[var(--dark-blue-1)] rounded-full"
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}
