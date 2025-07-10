import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useSwiperSlide } from "swiper/react";

export default function SlideContent({ proj }) {
  const { isActive } = useSwiperSlide();

  return (
    <div className="overflow-hidden flex flex-col sm:relative">
      <img
        src={proj.img}
        alt={proj.title}
        className="w-full  sm:h-[90vh] object-cover aspect-video"
      />

      <div
        className={`
          sm:absolute sm:bottom-12 sm:left-10 transition-all duration-1000
          ${isActive ? "opacity-100" : "sm:opacity-0 sm:pointer-events-none"}
        bg-white
        `}
      >
        <div className="hidden sm:block absolute h-full w-full top-2 z-0 left-2 bg-white/50" />
        <div className="bg-white p-10 relative z-10 px-6 sm:px-12 flex flex-col gap-6">
          <div className="flex flex-row flex-wrap sm:flex-nowrap relative gap-1 sm:overflow-auto">
            {proj.categories?.map((categ, i) => (
              <div
                key={i}
                className="tracking-wide bg-green-100 px-3 py-1 rounded-md 
              text-green-600 hover:text-gray-600 transition-all duration-300"
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
            <div className="flex flex-col items-start gap-3 text-gray-500">
              <p>
                <span className="font-semibold text-blue-950/80">Client: </span>
                {proj.client}
              </p>
              <p>
                <span className="font-semibold text-blue-950/80">
                  Finish Day:{" "}
                </span>
                {proj.date}
              </p>
              <p>
                <span className="font-semibold text-blue-950/80">
                  Total Value:{" "}
                </span>
                {proj.value}
              </p>
            </div>
            <button
              className="relative flex p-3 sm:p-4 items-center hover:bg-blue-950 justify-center
             bg-green-600 text-2xl sm:text-4xl text-white aspect-square transition-all duration-500"
            >
              <BsArrowRight className="-rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
