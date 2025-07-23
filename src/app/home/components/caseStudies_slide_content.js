import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useSwiperSlide } from "swiper/react";

export default function SlideContent({ proj }) {
  const { isActive } = useSwiperSlide();

  return (
    <div className="overflow-hidden flex flex-col md:relative">
      <img
        src={proj.img}
        alt={proj.title}
        className="w-full  md:h-[90vh] max-h-[600px] object-cover aspect-video"
      />

      <div
        className={`
          md:absolute md:bottom-12 md:left-10 transition-all duration-1000
          ${isActive ? "opacity-100" : "md:opacity-0 md:pointer-events-none"}
        bg-white
        `}
      >
        <div className="hidden md:block absolute h-full w-full top-2 z-0 left-2 bg-white/50" />
        <div className="bg-white p-10 relative z-10 px-6 md:px-12 flex flex-col gap-6">
          <div className="flex flex-row flex-wrap md:flex-nowrap relative gap-1 md:overflow-auto">
            {proj.categories?.map((categ, i) => (
              <div
                key={i}
                className="tracking-wide bg-[var(--light-green-1)] px-3 py-1 rounded-md 
              text-[var(--primary-color)] hover:text-[var(--text-1)] cursor-pointer transition-all duration-300"
              >
                {categ}
              </div>
            ))}
          </div>
          <div className="text-xl font-semibold">
            <div className="line-clamp-1 cursor-pointer">{proj.title} for</div>
            <div className="line-clamp-1">{proj.for}</div>
          </div>
          <hr className="text-gray-400/60" />
          <div className="flex flex-row items-end justify-between gap-5">
            <div className="flex flex-col items-start gap-3 text-[var(--text-1)]">
              <p>
                <span className="font-semibold text-[var(--dark-blue-1)]">
                  Client:{" "}
                </span>
                {proj.client}
              </p>
              <p>
                <span className="font-semibold text-[var(--dark-blue-1)]">
                  Finish Day:{" "}
                </span>
                {proj.date}
              </p>
              <p>
                <span className="font-semibold text-[var(--dark-blue-1)]">
                  Total Value:{" "}
                </span>
                {proj.value}
              </p>
            </div>
            <button
              className="relative flex p-3 md:p-4 items-center hover:bg-[var(--dark-2)] justify-center
             bg-[var(--primary-color)] text-2xl md:text-4xl text-white aspect-square transition-all duration-500"
            >
              <BsArrowRight className="-rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
