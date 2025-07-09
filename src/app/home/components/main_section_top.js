import SocialButton from "@/components/social_button";
import React from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiMailLine,
  RiMapPinLine,
  RiSkypeFill,
  RiTwitterXFill,
  RiWhatsappFill,
} from "react-icons/ri";

const email = "solarva@gmail.com";
const address = "213 Madison street, London";

export default function MainSection_Top({ className }) {
  const socials = [
    { name: "Facebook", icon: RiFacebookFill },
    { name: "Instagram", icon: RiInstagramFill },
    { name: "X(Twitter)", icon: RiTwitterXFill },
    { name: "Skype", icon: RiSkypeFill },
    { name: "Whatsapp", icon: RiWhatsappFill },
  ];
  return (
    <div
      className={`${className} flex flex-row w-full items-center justify-end gap-10`}
    >
      <div className="flex flex-row w-full items-center justify-start gap-6">
        <div className="flex flex-row items-center gap-4 group cursor-pointer">
          <div className="bg-green-600 p-2 rounded-full">
            <RiMailLine className="group-hover-flicker" />
          </div>
          <p className="group-hover:text-green-600 tracking-wide transition-all duration-500 text-lg pr-6 border-r border-gray-500">
            {email}
          </p>
        </div>
        <div className="flex flex-row items-center gap-4 group  cursor-pointer">
          <div className="bg-green-600 p-2 rounded-full ">
            <RiMapPinLine className="group-hover-flicker" />
          </div>
          <p className="group-hover:text-green-600 tracking-wide transition-all duration-500 text-lg">
            {address}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around gap-2">
        {socials.map((social, i) => (
          <SocialButton key={i} Icon={social.icon} Name={social.name} />
        ))}
      </div>
    </div>
  );
}
