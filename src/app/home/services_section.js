"use client";
import React, { useRef } from "react";
import { FaSolarPanel } from "react-icons/fa";
import { MdSolarPower } from "react-icons/md";
import { useRouter } from "next/navigation";
import { SiGreenhouse, SiSunrise } from "react-icons/si";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/slider.css";
import { GiElectric } from "react-icons/gi";
import ServiceSlide from "./components/service_slide";

export default function ServicesSection() {
  const router = useRouter();
  const swiperRef = useRef(null);
  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();

  function handleServiceClick(id) {
    router.push(`/service/${id}`);
  }

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
    <div id="services" className="flex flex-col relative w-full">
      <div className="flex flex-col relative bg-[url('/bg.png')] bg-top md:bg-left-top w-full">
        <div className="absolute w-full h-full top-0 left-0 bg-[var(--dark-blue-3-beta)]" />
        <div className="flex flex-col gap-5 md:gap-6 h-full text-white items-start justify-center xl:pl-20 px-5 md:px-6 pb-28 pt-20 md:pt-28 z-10 relative md:max-w-[60%]">
          <div className="absolute -z-20 top-0 left-0 w-full h-full  overflow-hidden bg-[var(--dark-blue-3)] ">
            <div className="w-full h-full bg-radial absolute top-10 left-1/2 z-10 to-transparent via-transparent scale-[200%] from-[var(--primary-color)] opacity-40"></div>
          </div>
          <div className="bg-[var(--primary-color)] font-semibold tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
            OUR SERVICES
          </div>
          <div className="text-4xl md:text-5xl font-semibold max-w-xl">
            Complete solar solution with repair services
          </div>
          <div className="tracking-wide font-medium max-w-xl">
            We’re finding ways to bring energy to more people in more ways every
            day, so that us can be part of the changing energy system. Because
            Powering Progress.
          </div>
          <div className="hidden md:flex text-[var(--dark-blue-2)] mt-1 absolute -right-[58px] top-1/3 ">
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
        <div className="w-full self-center max-w-7xl -mb-40 -mt-16 relative z-10">
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
              <SwiperSlide key={service.id} className="sm:px-16 md:px-4 px-4">
                <ServiceSlide
                  service={service}
                  onClick={() => handleServiceClick(service.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="bg-white h-40 w-full"></div>
      {/* <div className="w-full h-28" /> */}
    </div>
  );
}
