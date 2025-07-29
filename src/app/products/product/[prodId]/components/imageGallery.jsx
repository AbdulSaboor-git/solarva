"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ImageGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const errorPic = "https://i.sstatic.net/5ykYD.png";

  const handleImageError = (e) => {
    e.target.src = errorPic;
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleThumbnailClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Main Swiper Image */}
      <Swiper
        onSlideChange={handleSlideChange}
        spaceBetween={10}
        slidesPerView={1}
        className="w-full aspect-square rounded-xl overflow-hidden"
        ref={swiperRef}
      >
        {product.images?.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Product ${index}`}
              onError={handleImageError}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Thumbnails */}
      <div className="flex gap-2 overflow-x-auto hidden_scroll_bar mt-1">
        {product.images?.map((img, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-[80px] md:w-[100px] aspect-square rounded-xl overflow-hidden border-2 ${
              index === activeIndex
                ? "border-[var(--primary-color)]"
                : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt={`Thumb ${index}`}
              onError={handleImageError}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
