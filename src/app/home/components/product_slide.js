import React from "react";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
import { BiCross } from "react-icons/bi";
import { FaCross } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { HiXMark } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

export default function ProductSlide({ product, onClick }) {
  return (
    <div
      className="bg-white object-center border border-gray-500/40 cursor-pointer tracking-wide group rounded-3xl flex flex-col overflow-hidden"
      onClick={onClick}
    >
      <div className="p-6 pt-10 md:pt-12 md:p-12 flex flex-col items-start gap-5">
        <div className="flex flex-col gap-1">
          <div className="text-2xl md:text-4xl text-[var(--dark-2)] font-semibold line-clamp-1">
            {product.kw}KW
          </div>
          <div className="text-[var(--text-1)]">
            Electricity units {product.units}
          </div>
        </div>
        <hr className="bg-gray-400/40 border-none w-full h-[0.5px]" />
        <div className="flex flex-col gap-1 text-[var(--text-1)] ">
          <div>Savings: {product.savings} PKR</div>
          <div>Payback Period: {product.payback_period} years</div>
        </div>
        <div className="flex w-full flex-col gap-0 text-[var(--text-1)] text-sm">
          {product.items.map((item, index) => (
            <div
              key={index}
              className={`w-full flex items-center gap-2 rounded-md p-2 px-4 ${
                index % 2 === 0 ? "bg-[var(--light-green-3)]" : "bg-white"
              } `}
            >
              {item.value == 0 ? (
                <RiCloseFill className="text-red-400 text-lg" />
              ) : (
                <TiTick className="text-[var(--primary-color)]" />
              )}
              {item.key}: {item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
