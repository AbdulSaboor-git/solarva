import React from "react";

export default function ServiceSlide({ service, onClick }) {
  return (
    <div
      className="bg-white cursor-pointer tracking-wide group rounded-3xl flex flex-col overflow-hidden"
      onClick={onClick}
    >
      <div className="p-6 pt-10 sm:pt-12 sm:p-12 flex flex-col items-start gap-5">
        <div className="text-[22px] sm:text-2xl text-[var(--link-color)] font-semibold line-clamp-1">
          {service.title}
        </div>
        <hr className="text-gray-300 w-full mt-1" />
        <div className="min-h-[4.5em] text-[var(--text-1)] group-hover:text-[var(--link-color)] transition-all duration-300 line-clamp-3">
          {service.description}
        </div>
        <button className="w-fit text-[var(--link-color)] relative overflow-hidden pb-3">
          Read More
          <div className="absolute top-[1.5em]  h-[1.5px] w-full bg-[var(--link-color)] block group-hover:hidden"></div>
          <div className="absolute top-[1.5em]  h-[1.5px] -translate-x-full w-full bg-[var(--link-color)] group-hover:translate-x-[1%] transition-all duration-1000"></div>
          <div className="absolute top-[1.5em]  h-[1.5px] translate-x-full w-full bg-[var(--link-color)] group-hover:-translate-x-[1%] transition-all duration-1000"></div>
        </button>
      </div>
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src={service.img}
            alt={service.title}
            className="bg-cover group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
          />
          <div
            className={`absolute text-white text-6xl -top-14 right-7 sm:right-10 ${
              service.id % 2
                ? " bg-[var(--dark-blue-1)] "
                : " bg-[var(--primary-color)] "
            }p-4 rounded-xl`}
          >
            <service.logo />
          </div>
        </div>
      </div>
    </div>
  );
}
