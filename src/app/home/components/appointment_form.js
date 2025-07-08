import Button1 from "@/components/button1";
import React from "react";
import { BiUser } from "react-icons/bi";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

export default function AppointmentForm({ services }) {
  return (
    <div className="flex flex-col items-center gap-8 rounded-xl bg-slate-900 p-12 py-16 text-gray-100">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold">Make Appointment</h1>
        <p className="max-w-[250px] text-center">
          Solarva offers full range of solar energy services for renewable
          energy
        </p>
      </div>
      <div className="flex flex-col gap-6 min-w-sm w-full">
        <div className="relative w-full text-gray-500">
          <input
            className="p-4 px-6 w-full pr-14 bg-gray-100 placeholder-gray-500 rounded-lg outline-none"
            type="text"
            placeholder="Your Name"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-6 z-10 w-fit ">
            <BiUser size={22} />
          </div>
        </div>
        <div className="relative w-full text-gray-500">
          <input
            className="p-4 px-6 w-full pr-14 bg-gray-100 placeholder-gray-500 rounded-lg outline-none"
            type="text"
            placeholder="Email Address"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-6 z-10 w-fit ">
            <IoMailOpenOutline size={22} />
          </div>
        </div>
        <div className="relative w-full text-gray-500">
          <input
            className="p-4 px-6 w-full pr-14 bg-gray-100 placeholder-gray-500 rounded-lg outline-none"
            type="text"
            placeholder="Phone"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-6 z-10 w-fit ">
            <MdOutlinePhone size={22} />
          </div>
        </div>
        <div className="relative">
          <select
            id="dropdown"
            className="p-4 px-6 appearance-none w-full pr-14 bg-gray-100 text-gray-500 rounded-lg outline-none"
            defaultValue={0}
          >
            <option value="0" disabled hidden>
              Consultation
            </option>
            {services?.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-gray-500">
            <SlArrowDown size={14} />
          </div>
        </div>
        <Button1
          text={"Send Us Your Mail"}
          className="py-5 font-semibold tracking-wide"
          bg="#16A34A"
          textColor="#f3f4f6"
          hoverBg="#f3f4f6"
          hoverTextColor="#1d293d"
        />
      </div>
    </div>
  );
}
