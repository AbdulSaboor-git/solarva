"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  RiHeadphoneFill,
  RiSearchLine,
  RiShoppingBag4Line,
} from "react-icons/ri";
import NavbarButton from "./navbar_button";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

export default function Header({ className, showCurrentPageHighlight }) {
  const [activeSection, setActiveSection] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({ opacity: 0 });
  const [activeStyle, setActiveStyle] = useState({ opacity: 0 });
  const logo = `/logo.png`;
  const logo2 = "/logo2.png";

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "services",
      "case-studies",
      "team",
      "blog",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60% 0px", // Trigger when top is 40% from top of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const scrollTo = (id) => {
    if (typeof window === "undefined") return;
    let offset = 0;
    if (id != "home" && !isSidebarOpen) {
      offset = 60;
    }
    const el = document.getElementById(id);
    setIsSidebarOpen(false);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const buttons = [
    {
      name: "Home",
      onClick: () => showCurrentPageHighlight && scrollTo("home"),
    },
    {
      name: "About",
      onClick: () => showCurrentPageHighlight && scrollTo("about"),
    },
    {
      name: "Services",
      onClick: () => showCurrentPageHighlight && scrollTo("services"),
    },
    {
      name: "Case Studies",
      onClick: () => showCurrentPageHighlight && scrollTo("case-studies"),
    },
    {
      name: "Team",
      onClick: () => showCurrentPageHighlight && scrollTo("team"),
    },
    {
      name: "Blog",
      onClick: () => showCurrentPageHighlight && scrollTo("blog"),
    },
  ];

  const CartItems = [1, 4, 2];

  const containerRef = useRef(null);
  const btnRefs = useRef([]);

  const handleHover = (index) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const itemRect = btnRefs.current[index].getBoundingClientRect();
    const left = itemRect.left - containerRect.left;
    const width = itemRect.width;

    setHoverStyle({
      left,
      width,
      opacity: 0.75,
    });
  };

  const clearHover = () => {
    setHoverStyle({ opacity: 0 });
  };

  useEffect(() => {
    const index = buttons.findIndex(
      (btn) => btn.name.toLowerCase().replace(" ", "-") === activeSection
    );
    if (index !== -1 && btnRefs.current[index]) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const itemRect = btnRefs.current[index].getBoundingClientRect();
      const left = itemRect.left - containerRect.left;
      const width = itemRect.width;

      setActiveStyle({
        left,
        width,
        opacity: 1,
      });
    }
  }, [activeSection]);

  return (
    <div
      className={`${className} z-50 w-full sm:w-auto flex flex-row sm:grid sm:grid-cols-[0.7fr_3fr_0.7fr] p-4 sm:py-0 sm:px-8 
      items-center justify-between gap-6 sm:text-white bg-white sm:bg-[var(--dark-blue-2)] sm:rounded-lg`}
    >
      <img
        src={logo2}
        alt="logo"
        className="block sm:hidden aspect-auto h-12"
      />
      <BiMenu
        size={30}
        className={`block sm:hidden ${
          isSidebarOpen && "-rotate-180 scale-0"
        } transition-all duration-500`}
        onClick={() => setIsSidebarOpen(true)}
      />
      <img
        src={logo}
        alt="logo"
        className="hidden sm:block h-9 cursor-pointer"
      />

      {/* Navigation Buttons + Underline */}
      <div
        className="hidden h-full sm:flex flex-row gap-1.5 items-center px-4 justify-center relative"
        ref={containerRef}
        onMouseLeave={clearHover}
      >
        {buttons.map((btn, i) => (
          <NavbarButton
            key={i}
            className={""}
            name={btn.name}
            ref={(el) => (btnRefs.current[i] = el)}
            onHover={() => handleHover(i)}
            onClick={btn.onClick}
            activeSection={activeSection}
          />
        ))}
        {/* ACTIVE underline */}
        <div
          className="hidden sm:block absolute pointer-events-none bottom-0 h-1 bg-[var(--primary-color)] transition-all duration-500 ease-in-out"
          style={{
            boxShadow: "0 4px 20px 2px rgba(0, 255, 0, 0.3)",
            width: activeStyle.width,
            left: activeStyle.left,
            opacity: activeStyle.opacity,
            zIndex: 0,
          }}
        />

        {/* HOVER underline */}
        <div
          className="hidden sm:block absolute pointer-events-none bottom-0 h-1 bg-[var(--primary-color)] transition-all duration-300 ease-in-out"
          style={{
            boxShadow: "0 0 12px rgba(0,255,0,0.4)",
            width: hoverStyle.width,
            left: hoverStyle.left,
            opacity: hoverStyle.opacity,
            zIndex: 1,
          }}
        />
      </div>

      {/* Right side icons */}
      <div className="hidden sm:flex flex-row items-center">
        <div className="h-full p-6 border-l border-gray-500/40 group cursor-pointer">
          <div className="border border-gray-500/40 p-2 rounded-full">
            <RiHeadphoneFill size={24} className="group-hover-shake" />
          </div>
        </div>
        <div className="h-full p-4 px-6 border-l hover:text-[var(--primary-color)] transition-all duration-500 border-gray-500/40 cursor-pointer">
          <RiSearchLine size={24} />
        </div>
        <div className="h-full p-2 pl-6 relative border-l group border-gray-500/40 cursor-pointer">
          <RiShoppingBag4Line size={22} className="group-hover-shake" />
          <div className="absolute right-0 bottom-0 bg-[var(--primary-color)] p-0.5 text-center w-4 h-4 rounded-full text-[8px]">
            {CartItems.length}
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden fixed left-0 top-0 bg-white w-screen h-screen z-50 p-7 py-10 flex flex-col gap-9
         -translate-x-full ${
           isSidebarOpen && "translate-x-0"
         } transition-all duration-500
          `}
      >
        <MdClose
          className={`absolute top-5 right-4 text-3xl ${
            !isSidebarOpen && "-rotate-180 scale-0"
          } transition-all duration-500`}
          onClick={() => setIsSidebarOpen(false)}
        />
        <img src={logo2} alt="logo" className="w-40" />
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none rounded-lg text-gray-700 border border-gray-400/40 focus:border-[var(--primary-color)] px-5 py-3 pr-14"
          />
          <div className="absolute flex items-center justify-center top-0 right-0 rounded-lg h-full text-white bg-[var(--primary-color)]  aspect-square text-xl">
            <RiSearchLine className="" />
          </div>
        </div>
        <div className="flex flex-col">
          {buttons.map((btn, i) => (
            <div
              key={i}
              onClick={btn.onClick}
              className="w-full text-gray-900 font-semibold hover:text-[var(--primary-color)] py-3 border-b border-gray-400/40 transition-all duration-300"
            >
              {btn.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
