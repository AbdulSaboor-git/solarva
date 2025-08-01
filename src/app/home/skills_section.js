"use client";
import ProgressBar from "@/components/progress_bar";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SkillsSection() {
  return (
    <div
      id="skills"
      className="w-full max-w-7xl self-center grid grid-cols-1 gap-14 md:gap-0 md:grid-cols-2 pb-24 md:pb-0"
    >
      <div className="relative w-full h-full">
        <div className="h-full w-full absolute top-0 left-0 lg:block overflow-hidden aspect-auto lg:max-w-[60%]">
          <img
            src="bg.png"
            alt="bg"
            className="w-full h-full opacity-55 scale-150 aspect-auto"
          />
        </div>
        <div className="flex p-6 lg:p-0 items-center justify-center lg:absolute w-full h-[600px] right-0 top-20 z-10 aspect-auto">
          <img
            src="img6.webp"
            alt="img6"
            className="absolute hidden lg:block w-[500px] right-0 bottom-0"
          />
          <div className="flex flex-col gap-8 p-7 py-12 lg:p-12 lg:py-14 z-10 h-fit bg-[var(--primary-color)] max-w-[380px] lg:absolute left-[25%] bottom-0 overflow-hidden">
            <div className="h-full">
              <Swiper slidesPerView={1} loop={true} spaceBetween={30}>
                <SwiperSlide>
                  <div className="text-white text-xl tracking-wide line-clamp-6 min-h-[8.4rem]">
                    We’re finding ways to bring energy to more people in more
                    ways every day, so that all of us can be part of the
                    changing energy system.
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-white text-xl tracking-wide line-clamp-6 min-h-[8.4rem]">
                    We’re finding ways to bring energy to more people in more
                    ways every day, so that all of us can be part of the
                    changing energy system.
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <hr className="text-gray-300/70" />
            <div className="flex gap-3 items-center justify-between">
              <div className="flex items-center justify-start">
                <div className="bg-[url('/user1.jpg')] bg-center rounded-full h-[52px] bg-cover aspect-square border-2 border-white " />
                <div className="bg-[url('/user2.jpg')] -ml-7 bg-center rounded-full h-[52px] bg-cover aspect-square border-2 border-white " />
                <div className="bg-[url('/user3.jpg')] -ml-7 bg-center rounded-full h-[52px] bg-cover aspect-square border-2 border-white " />
                <div className="bg-[var(--yellow)] flex items-center justify-center text-gray-800 font-medium -ml-7 rounded-full h-[52px] bg-cover aspect-square border-2 border-white ">
                  17K+
                </div>
              </div>
              <div className="font-semibold text-white">
                Solar Users in Pakistan
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 items-start justify-center p-6 lg:pl-12 lg:mt-44">
        <div className="bg-[var(--primary-color)] font-semibold tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
          COMPANY SKILLS
        </div>
        <div className="text-4xl text-[var(--dark-blue-2)] lg:text-5xl font-semibold">
          Trusted Solar services since beginning
        </div>
        <div className="text-[var(--text-1)] text-lg">
          We’re finding ways to bring energy to more people in more ways every
          day, so that all of us can be part of the changing energy system.
        </div>
        <div className="flex flex-col gap-6 w-full max-w-md lg:pb-32">
          <ProgressBar value={92} title={"Solar Installation"} />
          <ProgressBar value={99} title={"Solar Cleaning"} />
          <ProgressBar value={96} title={"Connecting Grids"} />
        </div>
      </div>
    </div>
  );
}
