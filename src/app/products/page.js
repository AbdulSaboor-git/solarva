"use client";
import React, { useState } from "react";
import ScrollToTop from "../home/components/scroll_to_top";
import Header from "@/components/header";
import SubPagesTopSection from "@/components/sub_pages_top_section";
import Footer from "@/components/footer";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  function handleCategorySelect(category) {
    setSelectedCategory(category.toLowerCase());
  }

  function handleProductClick(id) {
    window.location.href = `products/product/${id}`;
  }

  const categories = [
    "Categ 1",
    "Categ 2",
    "Categ 3",
    "Categ 4",
    "Categ 5",
    "Categ 6",
  ];
  const products = [
    {
      id: 1,
      title: "prod 1",
      price: 2500,
      img: "img6.webp",
    },
    {
      id: 2,
      title: "prod 2",
      price: 2500,
      img: "img6.webp",
    },
    {
      id: 3,
      title: "prod 3",
      price: 2500,
      img: "img6.webp",
    },
    {
      id: 4,
      title: "prod 4",
      price: 2500,
      img: "img6.webp",
    },
    {
      id: 5,
      title: "prod 5",
      price: 2500,
      img: "img6.webp",
    },
    {
      id: 6,
      title: "prod 6",
      price: 2500,
      img: "img6.webp",
    },
    {
      id: 7,
      title: "prod 7",
      price: 2500,
      img: "img6.webp",
    },
    {
      id: 8,
      title: "prod 8",
      price: 2500,
      img: "img6.webp",
    },
    {
      id: 9,
      title: "prod 9",
      price: 2500,
      img: "img6.webp",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[var(--light-green-3)]">
      <ScrollToTop />
      <Header theme={"light"} />
      <div className="w-full flex flex-col gap-10 md:gap-14 items-center justify-start">
        <SubPagesTopSection mainTitle={"Products"} title={"Products"} />
        <div className="flex w-full flex-col text-[var(--dark-2)] items-center justify-center px-3 sm:px-5 z-10 relative">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_4fr] gap-6 w-full max-w-7xl">
            {/* Left Sidebar - Categories */}
            <div className="flex flex-col lg:items-start lg:gap-4 lg:w-full">
              <div className="text-xl font-semibold text-[var(--dark-2)] mb-2 lg:mb-0 hidden lg:block">
                Categories
              </div>

              <div className="flex flex-row flex-wrap lg:flex-col  lg:w-full gap-2 sm:gap-3 pb-2 scrollbar-hide">
                <button
                  onClick={() => handleCategorySelect("all")}
                  className={` px-4 lg:w-full text-start py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === "all"
                      ? "bg-[var(--primary-color)] text-white"
                      : "bg-white lg:bg-transparent lg:hover:bg-white text-[var(--dark-2)]"
                  }`}
                >
                  All
                </button>
                {categories.map((categ, i) => (
                  <button
                    key={i}
                    onClick={() => handleCategorySelect(categ)}
                    className={`px-4 lg:w-full text-start  py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === categ.toLowerCase()
                        ? "bg-[var(--primary-color)] text-white"
                        : "bg-white lg:bg-transparent lg:hover:bg-white text-[var(--dark-2)]"
                    }`}
                  >
                    {categ}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Section - Search + Products */}
            <div className="flex flex-col gap-6">
              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-all duration-200 text-sm"
                />

                {/* Sort Dropdown Placeholder */}
                <select className="px-3 py-2 border bg-white border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]">
                  <option>Sort by</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>

              {/* Product Grid */}
              <div className="grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                {products.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => handleProductClick(prod.id)}
                    className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-white md:shadow-sm hover:shadow-md transition-all duration-300 md:border md:border-gray-200 md:hover:border-gray-300"
                  >
                    <div className="relative">
                      <img
                        src={prod.img}
                        alt={prod.id}
                        className="aspect-[5/4] object-cover w-full"
                      />
                    </div>
                    <div className="flex flex-col md:gap-1 p-2 px-3 md:p-4">
                      <div className="uppercase font-medium text-sm text-gray-700 line-clamp-1">
                        {prod.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        Rs.{" "}
                        <span className="text-base font-semibold text-[var(--primary-color)]">
                          {prod.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
