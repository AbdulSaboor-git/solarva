"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Header_Top from "@/components/header_top";
import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaSolarPanel } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { MdSolarPower } from "react-icons/md";
import { SiGreenhouse, SiSunrise } from "react-icons/si";

export default function Service({ params }) {
  const [service, setService] = useState(null);
  const { service_id } = React.use(params);
  const services = [
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
  const [showHeader, setShowHeader] = useState(false);
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 30);
    };
    const handleScroll2 = () => {
      const scrollY = window.scrollY;
      const limitedOffset = Math.min(scrollY, 400);
      setOffsetX(limitedOffset / 7);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (service_id) {
      let service = services.find((s) => s.id == service_id);
      setService(service);
    }
  }, [service_id]);

  return (
    <div>
      <div className="w-full container">
        <div className="w-full bg-blue-100">
          <div className="flex flex-col pt-5 gap-5 items-start justify-center w-full h-full">
            <div className="w-full px-5 text-[var(--dark-blue-2)]">
              <Header_Top className={"hidden sm:flex"} />
            </div>
            <div
              className={`z-50 w-full px-5 transition-all duration-300 ${
                showHeader
                  ? "fixed translate-y-3 top-2"
                  : "block translate-y-0 transition-none"
              } `}
            >
              <Header
                className={`hidden sm:grid sm:mx-0 sm:w-full ${
                  showHeader && "mx-5"
                }`}
              />
            </div>
            <div
              className={`
              ${showHeader ? "sm:p-[44px]" : "hidden"}`}
            ></div>
          </div>
          <div className="w-full px-5 flex items-center overflow-hidden justify-start relative h-[27rem]">
            <div className="absolute right-0 -bottom-4 overflow-hidden">
              <img
                src="/img10.webp"
                alt="img10"
                className="w-full aspect-auto object-cover transition-all duration-[1s] ease-linear"
                style={{
                  transform: `translateX(${offsetX}px)`,
                }}
              />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-6xl font-bold text-[var(--dark-3)]">
                Our Services
              </h1>
              <div className="flex flow-row gap-5 text-xl items-center">
                <span
                  className="text-[var(--text-1)] cursor-pointer"
                  // onClick={gotoHome}
                >
                  HOME
                </span>
                <BsChevronRight className="text-base" />
                <span className="text-[var(--primary-color)] uppercase">
                  {service?.title}
                </span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="h-[20rem] w-full"></div>
      </div>
      <Footer />
    </div>
  );
}
