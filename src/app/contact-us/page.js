"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SubPagesTopSection from "@/components/sub_pages_top_section";
import React, { useEffect, useRef, useState } from "react";

import ScrollToTop from "@/app/home/components/scroll_to_top";
import { MdCall, MdLocationPin, MdMail } from "react-icons/md";
import Button1 from "@/components/button1";

export default function ContactUs({ params }) {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50 text-[var(--dark-2)]">
      <ScrollToTop />
      <Header theme={"light"} />
      <div className="w-full flex flex-col gap-20 sm:gap-32 items-center justify-start">
        <SubPagesTopSection mainTitle={"Contact Us"} title={"Contact us"} />
        <div className="w-full px-5">
          <div className="flex flex-col sm:flex-row pb-10 sm:pb-0 gap-16 sm:gap-8 w-full rounded-3xl overflow-hidden">
            <div className="sm:flex-[1.2] sm:h-[700px] grid grid-cols-1 sm:grid-cols-[1fr_1.25fr] bg-[var(--dark-2)]">
              <img
                src="/bg.png"
                alt="img"
                className="h-[350px] sm:h-full w-full aspect-auto object-cover object-left"
              />
              <div className="py-16 sm:py-0 flex flex-col gap-12 sm:gap-0 items-start justify-evenly sm:-ml-[70px] text-white text-lg sm:text-2xl">
                <div className="flex  flex-row gap-6 sm:gap-10 items-center justify-center px-4">
                  <div className="bg-[var(--primary-color)] text-5xl sm:text-6xl p-4 sm:p-6 rounded-xl aspect-square">
                    <MdLocationPin />
                  </div>
                  <div className="flex w-full flex-col items-start justify-center gap-1 sm:gap-2">
                    <h1 className="font-semibold">Visit Our Office</h1>
                    <div className="text-base sm:text-xl hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">
                      231 Salt Lake City, Utah City Centre, USA
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-6 sm:gap-10 items-center justify-center px-4">
                  <div className="bg-[var(--primary-color)] text-5xl sm:text-6xl p-4 sm:p-6 rounded-xl aspect-square">
                    <MdCall />
                  </div>
                  <div className="flex w-full flex-col items-start justify-center gap-1 sm:gap-2">
                    <h1 className="font-semibold">Visit Our Office</h1>
                    <div className="text-base sm:text-xl">
                      <div className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">
                        Phone: +99 1234561
                      </div>
                      <div className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">
                        Fax: 1-800-222-0021
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex  flex-row gap-6 sm:gap-10 items-center justify-center px-4">
                  <div className="bg-[var(--primary-color)] text-5xl sm:text-6xl p-4 sm:p-6 rounded-xl aspect-square">
                    <MdMail />
                  </div>
                  <div className="flex w-full flex-col items-start justify-center gap-1 sm:gap-2">
                    <h1 className="font-semibold">Visit Our Office</h1>
                    <div className="text-base sm:text-xl">
                      <div className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">
                        solarva.care@email.com
                      </div>
                      <div className="hover:text-[var(--primary-color)] cursor-pointer transition-all duration-300">
                        info.solarva@email.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-6 items-start">
              <div className="flex flex-row items-center justify-start gap-2.5 text-[var(--primary-color)] ">
                <div className="flex items-center">
                  <div className="h-[1px] w-10 bg-[var(--primary-color)]" />
                  <div className="w-2.5 animate-[spin_4s_linear_infinite] aspect-square bg-[var(--primary-color)]" />
                </div>
                <p className="tracking-wider uppercase font-[600] text-sm">
                  Send us email
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold">
                Let’s discuss a project
              </h1>
              <div className="grid gap-8 w-full grid-cols-1 sm:grid-cols-2 py-4 pb-6 tracking-wide">
                <div className="flex flex-col w-full gap-1.5">
                  <div className="font-semibold">Name</div>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="border text-[var(--text-1)] placeholder:text-[var(--text-1)] border-gray-400/40 rounded-md outline-none p-3 px-6 focus:border-[var(--primary-color)]"
                  />
                </div>
                <div className="flex flex-col w-full gap-1.5">
                  <div className="font-semibold">Email</div>
                  <input
                    type="email"
                    placeholder="someone@example.com"
                    className="border text-[var(--text-1)] placeholder:text-[var(--text-1)] border-gray-400/40 rounded-md outline-none p-3 px-6 focus:border-[var(--primary-color)]"
                  />
                </div>
                <div className="flex flex-col w-full gap-1.5">
                  <div className="font-semibold">Phone No</div>
                  <input
                    type="text"
                    placeholder="+92-123-456-7890"
                    className="border text-[var(--text-1)] placeholder:text-[var(--text-1)] border-gray-400/40 rounded-md outline-none p-3 px-6 focus:border-[var(--primary-color)]"
                  />
                </div>
                <div className="flex flex-col w-full gap-1.5">
                  <div className="font-semibold">Service</div>
                  <select
                    defaultValue={"0"}
                    className="border bg-white text-[var(--text-1)] border-gray-400/40 rounded-md outline-none p-3 px-6 focus:border-[var(--primary-color)]"
                  >
                    <option value="0" disabled hidden>
                      Choose Service
                    </option>
                    <option value="consultation">Consultation</option>
                    <option value="installation">Solar Installation</option>
                    <option value="battery-storage">Battery Storage</option>
                  </select>
                </div>
                <div className="flex flex-col w-full gap-1.5 sm:col-span-2">
                  <div className="font-semibold">Message</div>
                  <textarea
                    type="text"
                    placeholder="Text here..."
                    className=" resize-y h-32 max-h-52 border text-[var(--text-1)] placeholder:text-[var(--text-1)] border-gray-400/40 rounded-md outline-none p-3 px-6 focus:border-[var(--primary-color)]"
                  />
                </div>
              </div>
              <Button1
                text={"Send Us Mail"}
                bg="var(--primary-color)"
                textColor="#ffffff"
                hoverBg="var(--dark-2)"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
