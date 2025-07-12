"use client";
import React from "react";
import { BsPlus } from "react-icons/bs";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";

export default function TeamSection() {
  const team = [
    {
      id: 0,
      name: "John Doe",
      role: "CEO",
      institute: "Solarva",
      img: "user4.webp",
      link: "",
    },
    {
      id: 1,
      name: "Olivia Peterson",
      role: "COO",
      institute: "Solarva",
      img: "user5.webp",
      link: "",
    },
    {
      id: 2,
      name: "Will Smith",
      role: "CMO",
      institute: "Solarva",
      img: "user6.webp",
      link: "",
    },
  ];

  return (
    <div className="flex w-full flex-col items-center gap-12 p-6 bg-gradient-to-b from-transparent via-[var(--light-green-2)] to-[var(--light-green-2)] pt-24 sm:pb-24">
      <div className="flex flex-col gap-4 sm:gap-5 items-center justify-center tracking-wide p-0 sm:p-6 max-w-3xl">
        <div className="bg-[var(--primary-color)] font-semibold sm:tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
          OUR TEAM MEMBERS
        </div>
        <div className="text-4xl w-full sm:text-5xl text-[var(--dark-blue-2)] font-semibold text-center">
          Meet our <br className="block sm:hidden" /> amazing team of solar
          energy experts
        </div>
      </div>
      <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-3">
        {team?.map((member, i) => (
          <div
            key={i}
            className="relative rounded-lg flex flex-col gap-3 justify-start overflow-hidden bg-white"
          >
            <div className="relative group">
              <div className="rounded-bl-[120px] cursor-pointer overflow-hidden">
                <img
                  src={member.img}
                  alt={member.role}
                  className="aspect-auto group-hover:scale-104 group-hover:rotate-1 transition-all duration-500"
                />
                <div
                  className="absolute opacity-0 scale-x-0 translate-y-12 group-hover:scale-x-100 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 
                flex flex-col gap-3 text-[28px] p-4.5 pt-6 pb-8 rounded-t-full bg-[var(--primary-color)] text-white right-12 bottom-0"
                >
                  <div className="-rotate-90 cursor-pointer hover:text-[var(--dark-blue-1)] transition-all duration-300">
                    <RiLinkedinFill />
                  </div>
                  <div className="-rotate-90 cursor-pointer hover:text-[var(--dark-blue-1)] transition-all duration-300">
                    <RiInstagramLine />
                  </div>
                  <div className="-rotate-90 cursor-pointer hover:text-[var(--dark-blue-1)] transition-all duration-300">
                    <RiTwitterXFill />
                  </div>
                  <div className="-rotate-90 cursor-pointer hover:text-[var(--dark-blue-1)] transition-all duration-300">
                    <RiFacebookFill />
                  </div>
                </div>
              </div>
              <div
                className="absolute cursor-pointer right-12 group-hover:translate-y-3 group-hover:opacity-100 transition-all duration-500
             -bottom-8 rounded-full bg-white p-1"
              >
                <div className="bg-[var(--primary-color)] p-1 text-5xl group-hover:bg-[var(--dark-blue-2)]/50 transition-all duration-500 text-white rounded-full">
                  <BsPlus className="group-hover:rotate-45  transition-all duration-500" />
                </div>
              </div>
            </div>
            <div className="p-6 px-10 tracking-wide flex flex-col gap-1">
              <h1 className="text-2xl text-[var(--dark-blue-1)] font-semibold cursor-pointer w-fit hover:text-[var(--primary-color)] transition-all duration-300">
                {member.name}
              </h1>
              <p className="text-xl text-[var(--text-1)] ">
                {member.role}, {member.institute}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
