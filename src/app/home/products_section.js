import Button1 from "@/components/button1";
import ProductCard from "@/components/product_card";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProductsSection() {
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

  const router = useRouter();

  function handleProductClick(id) {
    router.push(`/products/product/${id}`);
  }

  function handleViewMore() {
    router.push("/products");
  }

  return (
    <div
      id="products"
      className="flex flex-col items-center gap-5 md:py-10 relative w-full"
    >
      <div className="w-full flex flex-col items-start gap-5 px-5">
        <div className="bg-[var(--primary-color)] w-fit font-semibold tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
          OUR PRODUCTS
        </div>
        <div className="text-4xl md:text-5xl font-semibold max-w-3xl">
          Innovative Solar Products
        </div>
        <p className="text-lg mb-6">
          Explore our range of innovative products designed to enhance your
          experience.
        </p>
      </div>
      <div className="w-full flex flex-row items-center justify-start gap-3 overflow-x-auto px-5 py-2 md:py-4 scrollbar-hide">
        {products.slice(0, 6).map((prod) => (
          <ProductCard
            className="min-w-[180px] md:min-w-[250px] md:hover:scale-[1.02] md:shadow-black/30 md:hover:shadow-black/30 shadow-black/20 shadow-sm md:hover:shadow-md transition-all duration-300 md:bg-[var(--light-green-4)]"
            key={prod.id}
            prod={prod}
            onClick={() => handleProductClick(prod.id)}
          />
        ))}
      </div>
      <Button1
        text={"View More"}
        className="w-fit place-self-center border border-[var(--primary-color)] mt-3"
        onClick={handleViewMore}
      />
    </div>
  );
}
