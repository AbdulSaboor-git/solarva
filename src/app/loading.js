import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[var(--dark-2)] flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-t-transparent border-b-transparent border-r-transparent border-[var(--primary-color)] rounded-full animate-spin"></div>
    </div>
  );
}
