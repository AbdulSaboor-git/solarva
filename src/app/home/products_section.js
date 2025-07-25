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
import ProductSlide from "./components/product_slide";
import Button1 from "@/components/button1";

export default function ProductsSection() {
  const router = useRouter();
  const swiperRef = useRef(null);
  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();

  function handleProductClick(id) {
    router.push(`/product/${id}`);
  }

  let products = [
    {
      id: 1,
      title: "Solar Power System",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills to a great  extent",
      logo: GiElectric,
      img: "product1.webp",
      link: "solar-power-system",
    },
    {
      id: 2,
      title: "Solar Panel Installation",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: SiSunrise,
      img: "product2.webp",
      link: "solar-panel-installation",
    },
    {
      id: 3,
      title: "Household Solar Panel",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: SiGreenhouse,
      img: "product3.webp",
      link: "household-solar-panel",
    },
    {
      id: 4,
      title: "Solar Panel Cleaning",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: FaSolarPanel,
      img: "product4.webp",
      link: "solar-panel-cleaning",
    },
    {
      id: 5,
      title: "Solar Panel Maintenance",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: MdSolarPower,
      img: "product5.webp",
      link: "solar-panel-maintenance",
    },
    {
      id: 6,
      title: "Solar Panel Production",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: MdSolarPower,
      img: "product3.webp",
      link: "solar-panel-production",
    },
  ];

  return (
    <div id="products" className="flex flex-col relative w-full">
      <div className="flex flex-col relative bg-[var(--dark-blue-3)] bg-top md:bg-left-top w-full">
        <div className="flex flex-col gap-5 md:gap-6 h-full text-white items-center text-center justify-center px-5 md:px-6 pb-28 pt-20 md:pt-28 z-10 relative">
          <div className="bg-[var(--primary-color)] font-semibold tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
            OUR PRODUCTS
          </div>
          <div className="text-4xl md:text-5xl font-semibold max-w-3xl">
            High-Quality Solar Products for Every Need
          </div>
          <div className="tracking-wide font-medium max-w-3xl">
            Explore our complete range of solar panels, inverters, batteries,
            and other accessories — specially designed for reliable performance
            and long-term energy savings.
          </div>
          <Button1 text={"View More"} />
          <div className="hidden md:flex text-[var(--dark-blue-2)] mt-1 place-self-end pr-6">
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
            {products.map((product) => (
              <SwiperSlide key={product.id} className="sm:px-16 md:px-4 px-4">
                <ProductSlide
                  product={product}
                  onClick={() => handleProductClick(product.id)}
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
