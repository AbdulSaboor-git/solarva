import React from "react";
import { BiSend, BiSolidSend } from "react-icons/bi";
import { BsPostage } from "react-icons/bs";
import { FaFacebook, FaFacebookF } from "react-icons/fa";
import {
  MdEmail,
  MdLocationPin,
  MdOutlinePhone,
  MdPhone,
} from "react-icons/md";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <div className="flex flex-col gap-16 sm:gap-20 w-full bg-[var(--secondary-color)]">
      <div className="grid grid-cols-1 px-4 sm:px-0 text-white sm:grid-cols-3 w-full text-center sm:text-left sm:border-b sm:border-r sm:border-l sm:border-gray-500/40">
        {/*  */}
        <div className="relative px-10 py-10 sm:py-12 border-b sm:border-r sm:border-b-0 border-gray-500/40 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="bg-[var(--primary-color)] cursor-pointer text-3xl p-4 rounded-full">
            <MdPhone className="shake" />
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-[var(--text-4)]">Call For Services</p>
            <p className="text-lg font-semibold hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">
              (+92) 900-786-01
            </p>
          </div>
          <div className="absolute hidden sm:block -right-1.5 -bottom-1.5 w-2.5 aspect-square bg-[var(--primary-color)] animate-[spin_4s_linear_infinite]" />
        </div>
        <div className="relative px-10 py-10  sm:py-12  border-b sm:border-r sm:border-b-0 border-gray-500/40 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="bg-[var(--primary-color)] cursor-pointer text-3xl p-4 rounded-full">
            <MdEmail className="shake" />
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-[var(--text-4)]">Send Us Email</p>
            <p className="text-lg font-semibold hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">
              solarvacare@gmail.com
            </p>
          </div>
          <div className="absolute hidden sm:block -right-1.5 -bottom-1.5 w-2.5 aspect-square bg-[var(--primary-color)] animate-[spin_4s_linear_infinite]" />
        </div>
        <div className="relative px-10 py-10 sm:py-12  border-b sm:border-r sm:border-b-0 border-gray-500/40 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="bg-[var(--primary-color)]  cursor-pointer  text-3xl p-4 rounded-full">
            <MdLocationPin className="shake" />
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-[var(--text-4)]">Visit Our Location</p>
            <p className="text-lg font-semibold hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">
              Lahore, Pakistan
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 sm:pb-10 grid gap-12 text-[17px] text-[var(--text-2)] grid-cols-1 sm:grid-cols-[1.6fr_1fr_1fr_1fr_1.6fr]">
        <div className="flex flex-col items-start justify-start gap-8">
          <img src="logo.png" alt="logo" className="w-40 aspect-auto" />
          <div className="flex text-xl text-white items-center gap-[2px]">
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
            About Solarva
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Our History
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Solarva Team
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
            About Solarva
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Our History
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Solarva Team
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
            About Solarva
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Our History
          </p>
          <p className="cursor-pointer hover:text-[var(--primary-color)] transition-all duration-300">
            Solarva Team
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
      <div className="w-full px-4 sm:px-6">
        <div className="border-t border-gray-500/40 text-center w-full text-sm font-medium text-white p-8 sm:p-12">
          © Copyright 2025{" "}
          <span className="text-[var(--primary-color)]">Solarva</span>. All
          rights reserved.
        </div>
      </div>
    </div>
  );
}
