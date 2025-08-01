"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ImageGallery from "./components/imageGallery";
import { FaShoppingCart } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

export default function ProductPage({ params }) {
  const product = {
    id: 1,
    title: "prod 1",
    price: 2500,
    category: "Batteries",
    description:
      "This is a sample product description with extra details to help the customer understand more about the product. It includes key benefits, usage instructions, and what makes it stand out.",
    images: ["/img3.webp", "/img4.webp", "/img5.webp"],
  };

  return (
    <div className="flex flex-col items-center gap-7 md:gap-10 text-[var(--dark-2)]">
      <Header theme="light" />
      <div className="w-full hidden md:block pt-[164px]" />

      {/* Product Section */}
      <div className="w-full max-w-7xl px-3 md:px-5 flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 bg-white ">
          {/* Gallery */}
          <div className="w-full md:w-2/5">
            <ImageGallery product={product} />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-3/5 flex flex-col justify-start gap-6 ">
            {/* Title, Price, Category */}
            <div className="flex flex-col gap-1 md:gap-4">
              <h1 className="text-xl md:text-3xl font-bold uppercase tracking-wide">
                {product.title}
              </h1>
              <div className="text-2xl md:text-4xl font-bold text-[var(--primary-color)] tracking-wide">
                Rs. {product.price}
              </div>
              <div className="flex flex-col gap-1 md:gap-2 text-lg font-medium mt-4">
                <p className="">
                  Category:{" "}
                  <span className="font-normal text-[var(--text-1)]">
                    {product.category}
                  </span>
                </p>
                <p className="">
                  Specs 1:{" "}
                  <span className="font-normal text-[var(--text-1)]">
                    specs
                  </span>
                </p>
                <p className="">
                  Specs 2:{" "}
                  <span className="font-normal text-[var(--text-1)]">
                    specs
                  </span>
                </p>
                <p className="">
                  Specs 3:{" "}
                  <span className="font-normal text-[var(--text-1)]">
                    specs
                  </span>
                </p>
                {/* other specs here */}
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row md:gap-4 mt-2">
              <button className="flex items-center group justify-center gap-2 px-6 md:px-10 py-3 text-white bg-[var(--primary-color)] rounded-xl text-sm md:text-base">
                <div className="flex items-center gap-2 group-hover-flicker">
                  <FaShoppingCart size={18} /> Add to Cart
                </div>
              </button>
              <button className="flex items-center group justify-center gap-2 px-6 md:px-10 py-3 text-[var(--primary-color)] border border-[var(--primary-color)] rounded-xl text-sm md:text-base">
                <div className="flex items-center gap-2 group-hover-flicker">
                  <BsLightningChargeFill size={18} /> Buy Now
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        {product.description && (
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200 text-gray-700">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Product Description
            </h2>
            <p className="text-sm md:text-base text-justify leading-relaxed">
              {product.description}
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
