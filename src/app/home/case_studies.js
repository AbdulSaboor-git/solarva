"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import SlideContent from "./components/caseStudies_slide_content";

export default function CaseStudiesSection() {
  const projects = [
    {
      id: 0,
      title: "Renewable Energy",
      for: "EcoSmart City",
      client: "GW Industries",
      categories: ["Insallation", "Maintenance", "Power Grid"],
      date: "25/03/2024",
      value: "25 Million USD",
      img: "img8.webp",
      link: "",
    },
    {
      id: 1,
      title: "Energy Efficiency",
      for: "Communities",
      client: "GW Industries",
      categories: ["Insallation", "Maintenance", "Power Grid"],
      date: "02/06/2025",
      value: "4 Billion USD",
      img: "img9.webp",
      link: "",
    },
    {
      id: 2,
      title: "Energy Efficiency",
      for: "Communities",
      client: "GW Industries",
      categories: ["Insallation", "Maintenance", "Power Grid"],
      date: "02/06/2025",
      value: "4 Billion USD",
      img: "img7.webp",
      link: "",
    },
    {
      id: 3,
      title: "Energy Efficiency",
      for: "Communities",
      client: "GW Industries",
      categories: ["Insallation", "Maintenance", "Power Grid"],
      date: "02/06/2025",
      value: "4 Billion USD",
      img: "img6.webp",
      link: "",
    },
    {
      id: 4,
      title: "Energy Efficiency",
      for: "Communities",
      client: "GW Industries",
      categories: ["Insallation", "Maintenance", "Power Grid"],
      date: "02/06/2025",
      value: "4 Billion USD",
      img: "img7.webp",
      link: "",
    },
    {
      id: 5,
      title: "Energy Efficiency",
      for: "Communities",
      client: "GW Industries",
      categories: ["Insallation", "Maintenance", "Power Grid"],
      date: "02/06/2025",
      value: "4 Billion USD",
      img: "img4.webp",
      link: "",
    },
  ];

  const Projects =
    projects.length < 5
      ? [...projects, ...projects, ...projects].slice(0, 6)
      : projects;

  const swiperRef = useRef(null);
  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();
  return (
    <div
      id="case-studies"
      className="flex w-full flex-col items-center gap-12 bg-[var(--dark-blue-3)] p-4 sm:p-6 py-24 sm:py-12 sm:pt-30"
    >
      <div className="flex flex-col gap-3 sm:gap-5 items-center justify-center tracking-wide p-0 sm:p-6 max-w-3xl">
        <div className="bg-[var(--primary-color)] font-semibold sm:tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
          OUR CASE STUDIES
        </div>
        <div className="text-4xl w-full sm:text-5xl text-white font-semibold text-center">
          Review our case studies to get a better idea
        </div>
      </div>
      <div className="sm:px-6 relative group z-20 w-full text-[var(--dark-blue-2)]">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          centeredSlides={true}
          spaceBetween={28}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.25,
            },
          }}
        >
          {Projects?.map((proj, index) => (
            <SwiperSlide key={index}>
              <SlideContent proj={proj} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={goPrev}
          className="hidden sm:block absolute z-30 left-10 opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 top-1/2 -translate-y-1/2 p-5
           bg-gray-100 text-[var(--dark-blue-1)] border border-gray-500/40 hover:bg-[var(--dark-blue-1)] 
           hover: hover:text-gray-100 transition-all duration-500"
        >
          <SlArrowLeft />
        </button>
        <button
          onClick={goNext}
          className="hidden sm:block absolute z-30 right-10 opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 top-1/2 -translate-y-1/2 p-5
           bg-gray-100 text-[var(--dark-blue-1)] border border-gray-500/40 
           hover:bg-[var(--dark-blue-1)] hover: hover:text-gray-100 transition-all duration-500"
        >
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
}
