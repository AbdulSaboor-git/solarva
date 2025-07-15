import React from "react";

export default function Blog({ b }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full h-full rounded-3xl aspect-[5/4] cursor-pointer overflow-hidden">
        <img
          src={b.img}
          alt={b.id}
          className="w-full h-full aspect-auto object-cover hover:rotate-2 hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="flex items-center justify-start gap-4">
        <div
          className="tracking-wide bg-[var(--light-green-1)] px-3 py-1 rounded-md 
                                text-[var(--primary-color)] hover:text-[var(--text-1)] cursor-pointer transition-all duration-300"
        >
          {b.category}
        </div>
        <div className="text-[var(--text-1)] text-lg font-medium">
          {b.date}{" "}
        </div>
      </div>
      <div className="text-2xl min-h-[4rem] cursor-pointer line-clamp-2 font-bold hover:text-[var(--primary-color)] transition-colors duration-300">
        {b.title}
      </div>
      <button className="w-fit pt-10 tracking-wider text-[var(--link-color)] hover:text-[var(--primary-color)] transition-colors duration-700 group relative overflow-hidden pb-3">
        Read Article
        <div className="absolute top-[1.5em] mt-10 h-[1.5px] w-full bg-[var(--link-color)] group-hover:bg-[var(--primary-color)] block group-hover:hidden"></div>
        <div className="absolute top-[1.5em] mt-10 h-[1.5px] -translate-x-full w-full bg-[var(--link-color)] group-hover:bg-[var(--primary-color)] group-hover:translate-x-[1%] transition-all duration-700"></div>
        <div className="absolute top-[1.5em] mt-10 h-[1.5px] translate-x-full w-full bg-[var(--link-color)] group-hover:bg-[var(--primary-color)] group-hover:-translate-x-[1%] transition-all duration-700"></div>
      </button>
    </div>
  );
}
