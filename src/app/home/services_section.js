"use client";
import React, { useRef } from "react";
import { FaSolarPanel } from "react-icons/fa";
import { FcElectricity } from "react-icons/fc";
import { MdSolarPower } from "react-icons/md";

import { SiGreenhouse, SiSunrise } from "react-icons/si";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/slider.css";
import { GiElectric } from "react-icons/gi";

export default function ServicesSection() {
  const swiperRef = useRef(null);
  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();

  let services = [
    {
      id: 1,
      title: "Solar Power System",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills to a great  extent",
      logo: GiElectric,
      img: "service1.webp",
      link: "solar-power-system",
    },
    {
      id: 2,
      title: "Solar Panel Installation",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: SiSunrise,
      img: "service2.webp",
      link: "solar-panel-installation",
    },
    {
      id: 3,
      title: "Household Solar Panel",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: SiGreenhouse,
      img: "service3.webp",
      link: "household-solar-panel",
    },
    {
      id: 4,
      title: "Solar Panel Cleaning",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: FaSolarPanel,
      img: "service4.webp",
      link: "solar-panel-cleaning",
    },
    {
      id: 5,
      title: "Solar Panel Maintenance",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: MdSolarPower,
      img: "service5.webp",
      link: "solar-panel-maintenance",
    },
    {
      id: 6,
      title: "Solar Panel Production",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: MdSolarPower,
      img: "service3.webp",
      link: "solar-panel-production",
    },
  ];
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col relative bg-[url('/bg.png')] bg-left-top w-full">
        <div className="absolute w-full h-full bg-blue-950/80" />
        <div className="absolute left-0 top-0 bg-gradient-to-br from-blue-950 via-100% to-green-900 w-[60%] h-full" />
        <div className="flex flex-col gap-6 pb-120 text-gray-100 items-start justify-center p-6 py-36 z-10 relative max-w-[840px]">
          <div className="bg-green-600 font-semibold tracking-wider text-gray-100 px-3 py-1 rounded-[5px] text-xs">
            OUR SERVICES
          </div>
          <div className="text-5xl font-semibold max-w-xl">
            Complete solar solution with repair services
          </div>
          <div className="flex justify-between gap-12">
            <div className="tracking-wide font-medium">
              We’re finding ways to bring energy to more people in more ways
              every day, so that us can be part of the changing energy system.
              Because Powering Progress.
            </div>
            <div className="flex text-blue-950 mt-1 ">
              <button
                onClick={goPrev}
                className="p-5 bg-gray-100 border border-gray-500/40 hover:bg-green-600 hover: hover:text-gray-100 transition-all duration-500"
              >
                <SlArrowLeft />
              </button>
              <button
                onClick={goNext}
                className="p-5 bg-gray-100 border border-gray-500/40 hover:bg-green-600 hover: hover:text-gray-100 transition-all duration-500"
              >
                <SlArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="px-6 absolute z-30 -bottom-28 w-full left-0">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={24}
            slidesPerView={3}
            loop={true}
            pagination={{ clickable: true }}
            centeredSlides={true}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="bg-gray-100 text-gray-800 tracking-wide group rounded-3xl flex flex-col overflow-hidden">
                  <div className=" p-12 flex flex-col items-start gap-5">
                    <div className="text-2xl font-semibold line-clamp-1">
                      {service.title}
                    </div>
                    <hr className="text-gray-300 w-full mt-1" />
                    <div className="min-h-[4.5em] text-gray-500 line-clamp-3">
                      {service.description}
                    </div>
                    <button className="w-fit relative overflow-hidden pb-3">
                      Read More
                      <div className="absolute top-[1.5em]  h-[1.5px] w-full bg-gray-800 block group-hover:hidden"></div>
                      <div className="absolute top-[1.5em]  h-[1.5px] -translate-x-full w-full bg-gray-800 group-hover:translate-x-[1%] transition-all duration-1000"></div>
                      <div className="absolute top-[1.5em]  h-[1.5px] translate-x-full w-full bg-gray-800 group-hover:-translate-x-[1%] transition-all duration-1000"></div>
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
                        className={`absolute text-gray-100 text-6xl -top-14 right-10 ${
                          service.id % 2 ? " bg-blue-950 " : " bg-green-600 "
                        }p-4 rounded-xl`}
                      >
                        <service.logo />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-full h-28" />
    </div>
  );
}
