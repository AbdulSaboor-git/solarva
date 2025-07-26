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
    router.push(`/products`);
  }

  const products = [
    {
      id: 1,
      type: "domestic",
      kw: "3",
      units: "300-350",
      savings: "87600",
      payback_period: "4",
      items: [
        { key: "Fans", value: 3 },
        { key: "Lights", value: 6 },
        { key: "AC or Iron (one at a time)", value: 1 },
        { key: "Refrigerator", value: 1 },
        { key: "Water Pump", value: 0 },
        { key: "LED TV", value: 1 },
        { key: "Washing Machine", value: 1 },
      ],
      onClick: () => console.log("Product 1 clicked"),
    },
    {
      id: 2,
      type: "domestic",
      kw: "5",
      units: "450-500",
      savings: "102000",
      payback_period: "3.5",
      items: [
        { key: "Fans", value: 5 },
        { key: "Lights", value: 10 },
        { key: "AC or Iron (one at a time)", value: 1 },
        { key: "Refrigerator", value: 1 },
        { key: "Water Pump", value: 1 },
        { key: "LED TV", value: 2 },
        { key: "Washing Machine", value: 1 },
      ],
      onClick: () => console.log("Product 2 clicked"),
    },
    {
      id: 3,
      type: "commercial",
      kw: "10",
      units: "1000-1200",
      savings: "245000",
      payback_period: "3",
      items: [
        { key: "Fans", value: 10 },
        { key: "Lights", value: 20 },
        { key: "AC or Iron (one at a time)", value: 2 },
        { key: "Refrigerator", value: 2 },
        { key: "Water Pump", value: 1 },
        { key: "LED TV", value: 0 },
        { key: "Washing Machine", value: 0 },
      ],
      onClick: () => console.log("Product 3 clicked"),
    },
    {
      id: 4,
      type: "domestic",
      kw: "2",
      units: "250-300",
      savings: "76000",
      payback_period: "4.2",
      items: [
        { key: "Fans", value: 2 },
        { key: "Lights", value: 5 },
        { key: "AC or Iron (one at a time)", value: 0 },
        { key: "Refrigerator", value: 1 },
        { key: "Water Pump", value: 0 },
        { key: "LED TV", value: 1 },
        { key: "Washing Machine", value: 1 },
      ],
      onClick: () => console.log("Product 4 clicked"),
    },
    {
      id: 5,
      type: "commercial",
      kw: "8",
      units: "850-1000",
      savings: "200000",
      payback_period: "3.2",
      items: [
        { key: "Fans", value: 8 },
        { key: "Lights", value: 16 },
        { key: "AC or Iron (one at a time)", value: 2 },
        { key: "Refrigerator", value: 1 },
        { key: "Water Pump", value: 1 },
        { key: "LED TV", value: 1 },
        { key: "Washing Machine", value: 1 },
      ],
      onClick: () => console.log("Product 5 clicked"),
    },
    {
      id: 6,
      type: "domestic",
      kw: "4",
      units: "380-420",
      savings: "93000",
      payback_period: "3.8",
      items: [
        { key: "Fans", value: 4 },
        { key: "Lights", value: 9 },
        { key: "AC or Iron (one at a time)", value: 1 },
        { key: "Refrigerator", value: 1 },
        { key: "Water Pump", value: 1 },
        { key: "LED TV", value: 1 },
        { key: "Washing Machine", value: 1 },
      ],
      onClick: () => console.log("Product 6 clicked"),
    },
    {
      id: 7,
      type: "commercial",
      kw: "12",
      units: "1200-1400",
      savings: "260000",
      payback_period: "2.8",
      items: [
        { key: "Fans", value: 12 },
        { key: "Lights", value: 24 },
        { key: "AC or Iron (one at a time)", value: 3 },
        { key: "Refrigerator", value: 2 },
        { key: "Water Pump", value: 2 },
        { key: "LED TV", value: 0 },
        { key: "Washing Machine", value: 0 },
      ],
      onClick: () => console.log("Product 7 clicked"),
    },
    {
      id: 8,
      type: "commercial",
      kw: "6",
      units: "600-750",
      savings: "145000",
      payback_period: "3.6",
      items: [
        { key: "Fans", value: 6 },
        { key: "Lights", value: 12 },
        { key: "AC or Iron (one at a time)", value: 1 },
        { key: "Refrigerator", value: 2 },
        { key: "Water Pump", value: 1 },
        { key: "LED TV", value: 1 },
        { key: "Washing Machine", value: 1 },
      ],
      onClick: () => console.log("Product 8 clicked"),
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
          <Button1 text={"View More"} onClick={handleProductClick} />
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
                <ProductSlide product={product} onClick={handleProductClick} />
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
