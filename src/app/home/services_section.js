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
    <div id="services" className="flex flex-col w-full">
      <div className="flex flex-col pt-150 sm:pt-0 relative bg-[url('/bg.png')] bg-top sm:bg-left-top w-full">
        <div className="absolute w-full h-full top-0 left-0 bg-[var(--dark-blue-3-beta)]" />
        <div
          className="flex flex-col gap-5 sm:gap-6 
          pb-[380px] sm:pb-[480px] text-white items-start justify-center p-5 sm:p-6 py-20 sm:py-36 z-10 relative sm:max-w-[60%]"
        >
          <div className="absolute -z-20 top-0 left-0 w-full h-full overflow-hidden bg-[var(--dark-blue-3)] ">
            <div className="w-full h-full bg-radial absolute top-10 left-1/2 z-10 to-transparent via-transparent scale-[200%] from-[var(--primary-color)] opacity-40"></div>
          </div>
          <div className="bg-[var(--primary-color)] font-semibold tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
            OUR SERVICES
          </div>
          <div className="text-4xl sm:text-5xl font-semibold max-w-xl">
            Complete solar solution with repair services
          </div>
          <div className="tracking-wide font-medium max-w-xl">
            We’re finding ways to bring energy to more people in more ways every
            day, so that us can be part of the changing energy system. Because
            Powering Progress.
          </div>
          <div className="hidden sm:flex text-[var(--dark-blue-2)] mt-1 absolute -right-[58px] top-1/3 ">
            <button
              onClick={goPrev}
              className="p-5 bg-white border border-gray-500/40 hover:bg-[var(--primary-color)] hover: hover:text-white transition-all duration-500"
            >
              <SlArrowLeft />
            </button>
            <button
              onClick={goNext}
              className="p-5 bg-white border border-gray-500/40 hover:bg-[var(--primary-color)] hover: hover:text-white transition-all duration-500"
            >
              <SlArrowRight />
            </button>
          </div>
        </div>
        <div className="absolute z-30 -bottom-28 w-full left-0">
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
            {services.map((service) => (
              <SwiperSlide key={service.id} className="px-4">
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
