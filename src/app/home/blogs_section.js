"use client";
import React, { useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/slider.css";
import Blog from "./components/blog";

export default function BlogSection({ id }) {
  const blogs = [
    {
      id: 0,
      title: "Solar Design Journey: Frim Concept to Completion",
      category: "Solar",
      date: "July 15, 2025",
      img: "img6.webp",
    },
    {
      id: 1,
      title: "Solar Design Journey: Frim Concept to Completion",
      category: "Solar",
      date: "July 15, 2025",
      img: "img6.webp",
    },
    {
      id: 2,
      title: "Solar Design Journey: Frim Concept to Completion",
      category: "Solar",
      date: "July 15, 2025",
      img: "img6.webp",
    },
    {
      id: 3,
      title: "Solar Design Journey: Frim Concept to Completion",
      category: "Solar",
      date: "July 15, 2025",
      img: "img6.webp",
    },
    {
      id: 4,
      title: "Solar Design Journey: Frim Concept to Completion",
      category: "Solar",
      date: "July 15, 2025",
      img: "img6.webp",
    },
    {
      id: 5,
      title: "Solar Design",
      category: "Solar",
      date: "July 15, 2025",
      img: "img6.webp",
    },
  ];
  const swiperRef = useRef(null);
  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();
  return (
    <div
      id="blog"
      className="flex flex-col gap-16 w-full max-w-7xl py-24 bg-gray-100/90"
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-5 md:items-end md:justify-between w-full px-6">
        <div className="flex flex-col gap-5 md:gap-7 items-start justify-center text-[var(--dark-blue-2)]">
          <div className="bg-[var(--primary-color)] font-semibold tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
            LATEST NEWS
          </div>
          <div className="text-4xl md:text-5xl font-semibold">
            Read our solar energy <br className="hidden md:block" /> Blogs &
            articles
          </div>
        </div>
        <div className="flex text-[var(--dark-blue-2)] ">
          <button
            onClick={goPrev}
            className="p-5 bg-white border border-gray-500/40 hover:border-[var(--dark-blue-1)] hover:bg-[var(--dark-blue-1)] hover: hover:text-white transition-all duration-500"
          >
            <SlArrowLeft />
          </button>
          <button
            onClick={goNext}
            className="p-5 bg-white border border-gray-500/40 hover:border-[var(--dark-blue-1)] hover:bg-[var(--dark-blue-1)] hover: hover:text-white transition-all duration-500"
          >
            <SlArrowRight />
          </button>
        </div>
      </div>
      <div className="w-full">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={0}
          loop={true}
          pagination={{ clickable: true }}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {blogs.map((b) => (
            <SwiperSlide key={b.id} className="px-6 md:px-8">
              <Blog b={b} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
