import React from "react";

export default function SocialButton({ Icon, Name }) {
  return (
    <div className="bg-white/30 p-2 relative rounded-full border border-white/10 group cursor-pointer">
      <div className="absolute w-full h-full rounded-full z-0 top-0 left-0 bg-green-600 scale-0 group-hover:scale-100 transition-all duration-500" />
      <Icon className="group-hover:scale-110 group-hover:text-white z-10 transition-all duration-500" />
      <div className="absolute w-fit -bottom-7 right-0 bg-green-600/50 rounded-full p-1 px-3 object-center text-xs hidden group-hover:block">
        {Name}
      </div>
    </div>
  );
}
