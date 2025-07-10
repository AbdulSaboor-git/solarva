"use client";
import React, { useRef } from "react";
import { FaSolarPanel } from "react-icons/fa";
import { MdSolarPower } from "react-icons/md";

import { SiGreenhouse, SiSunrise } from "react-icons/si";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/slider.css";
import { GiElectric } from "react-icons/gi";
import ServiceSlide from "./components/service_slide";

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
      <div className="flex flex-col pt-150 sm:pt-0 relative bg-[url('/bg.png')] bg-top sm:bg-left-top w-full">
        <div className="absolute w-full h-full top-0 left-0 bg-blue-950/80" />
        <div className="absolute hidden sm:block left-0 top-0 bg-gradient-to-br from-blue-950 via-100% to-green-900 h-full w-[60%]" />
        <div
          className="flex flex-col bg-gradient-to-br from-blue-950 via-100% to-green-900 sm:bg-transparent gap-5 sm:gap-6 
          pb-95 sm:pb-120 text-white items-start justify-center p-6 py-20 sm:py-36 z-10 relative sm:max-w-[840px]"
        >
          <div className="bg-green-600 font-semibold tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
            OUR SERVICES
          </div>
          <div className="text-4xl sm:text-5xl font-semibold max-w-xl">
            Complete solar solution with repair services
          </div>
          <div className="flex justify-between gap-12">
            <div className="tracking-wide font-medium">
              We’re finding ways to bring energy to more people in more ways
              every day, so that us can be part of the changing energy system.
              Because Powering Progress.
            </div>
            <div className="hidden sm:flex text-blue-950 mt-1 ">
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
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <ServiceSlide service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-full h-28" />
    </div>
  );
}
