import React from "react";
import { BiSolidSend } from "react-icons/bi";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "react-icons/ri";

export default function Footer() {
  const logo = "/logo.png";
  return (
    <div className="flex flex-col gap-16 md:gap-20 w-full bg-[var(--dark-2)]">
      <div className="grid grid-cols-1 px-4 md:px-0 text-white md:grid-cols-3 w-full text-center md:text-left md:border-b md:border-r md:border-l md:border-gray-500/40">
        {/*  */}
        <div className="relative px-10 py-10 md:py-12 border-b md:border-r md:border-b-0 border-gray-500/40 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <div className="bg-[var(--primary-color)] cursor-pointer text-3xl p-4 rounded-full">
            <MdPhone className="shake" />
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-[var(--text-4)]">Call For Services</p>
            <p className="text-lg font-semibold hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">
              +92 321 417 6685
            </p>
          </div>
          <div className="absolute hidden md:block -right-1.5 -bottom-1.5 w-2.5 aspect-square bg-[var(--primary-color)] animate-[spin_4s_linear_infinite]" />
        </div>
        <div className="relative px-10 py-10  md:py-12  border-b md:border-r md:border-b-0 border-gray-500/40 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <div className="bg-[var(--primary-color)] cursor-pointer text-3xl p-4 rounded-full">
            <MdEmail className="shake" />
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-[var(--text-4)]">Send Us Email</p>
            <p className="text-lg font-semibold hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">
              care@3psolutions.com.pk
            </p>
          </div>
          <div className="absolute hidden md:block -right-1.5 -bottom-1.5 w-2.5 aspect-square bg-[var(--primary-color)] animate-[spin_4s_linear_infinite]" />
        </div>
        <div className="relative px-10 py-10 md:py-12  border-b md:border-r md:border-b-0 border-gray-500/40 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <div className="bg-[var(--primary-color)]  cursor-pointer  text-3xl p-4 rounded-full">
            <MdLocationPin className="shake" />
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-[var(--text-4)]">Visit Us</p>
            <p className="text-lg font-semibold hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">
              SF 10, DG Commercial Arcade, Divine Gardens, New Airport Road,
              Lahore Cantt. Lahore, Punjab - Pakistan
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl self-center px-6 md:pb-10 grid gap-12 text-[17px] text-[var(--text-2)] grid-cols-1 md:grid-cols-[1.6fr_1fr_1.6fr] lg:grid-cols-[1.7fr_1fr_1fr_1fr_1.6fr]">
        <div className="flex flex-col overflow-hidden items-start justify-start gap-6 md:row-span-2 lg:row-span-1">
          <img src={logo} alt="logo" className="w-full max-w-56 aspect-auto " />
          <div className="flex flex-row md:flex-wrap lg:flex-row text-xl text-white items-center gap-[2px]">
            <div className="bg-white/10 p-4 hover:bg-[var(--primary-color)] cursor-pointer transition-colors duration-300">
              <RiFacebookFill />
            </div>
            <div className="bg-white/10 p-4 hover:bg-[var(--primary-color)] cursor-pointer transition-colors duration-300">
              <RiTwitterXFill />
            </div>
            <div className="bg-white/10 p-4 hover:bg-[var(--primary-color)] cursor-pointer transition-colors duration-300">
              <RiInstagramLine />
            </div>
            <div className="bg-white/10 p-4 hover:bg-[var(--primary-color)] cursor-pointer transition-colors duration-300">
              <RiWhatsappFill />
            </div>
            <div className="bg-white/10 p-4 hover:bg-[var(--primary-color)] cursor-pointer transition-colors duration-300">
              <RiYoutubeFill />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start">
          <p className="font-semibold uppercase text-white pb-4">Quick Links</p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            About 3P Solar Solutions
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Our History
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            3P Solar Solutions Team
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Get a Quote
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Our Pricing
          </p>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start">
          <p className="font-semibold uppercase text-white pb-4">Other Links</p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            About 3P Solar Solutions
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Our History
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            3P Solar Solutions Team
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Get a Quote
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Our Pricing
          </p>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start">
          <p className="font-semibold uppercase text-white pb-4">
            Service List
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            About 3P Solar Solutions
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Our History
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            3P Solar Solutions Team
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Get a Quote
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Our Pricing
          </p>
        </div>
        <div className="flex flex-col gap-6 items-start justify-start">
          <p className="font-semibold uppercase text-white pb-4">
            Subscribe to Newsletter
          </p>
          <p className="text-[var(--text-4)]">
            Get exclusive news & offers through our solarva newsletter
          </p>
          <div className="relative w-full">
            <input
              className="text-sm text-[var(--text-3)] bg-transparent outline-none border 
            border-gray-400/50 focus:border-[var(--primary-color)] transition-all duration-300
            px-6 pr-14 py-4 w-full rounded-full"
              placeholder="Your email address"
            />
            <div className="absolute inset-y-0 top-0 right-0 rounded-full aspect-square h-full p-1">
              <div
                className="bg-[var(--primary-color)] flex items-center justify-center p-3 text-xl group
               text-white hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300
                w-full h-full rounded-full cursor-pointer"
              >
                <BiSolidSend className="-rotate-45 group-hover:rotate-0 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:px-6">
        <div className="border-t border-gray-500/40 text-center w-full text-sm font-medium text-white p-8 md:p-12">
          © Copyright 2025{" "}
          <span className="text-[var(--primary-color)]">
            3P Solar Solutions
          </span>
          . All rights reserved.
        </div>
      </div>
    </div>
  );
}
