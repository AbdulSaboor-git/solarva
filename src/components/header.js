"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  RiFacebookFill,
  RiHeadphoneFill,
  RiInstagramFill,
  RiMailLine,
  RiSearchLine,
  RiShoppingBag4Line,
  RiSkypeFill,
  RiTwitterXFill,
  RiWhatsappFill,
} from "react-icons/ri";
import NavbarButton from "./navbar_button";
import { BiMenu } from "react-icons/bi";
import { MdClose, MdPhone } from "react-icons/md";
import SocialButton from "./social_button";
import { useRouter } from "next/navigation";

export default function Header({ className, homePage = false, theme }) {
  const [activeSection, setActiveSection] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({ opacity: 0 });
  const [activeStyle, setActiveStyle] = useState({ opacity: 0 });
  const logo = "/logo.png";
  const logo_alt = "/logo_alt.png";
  const router = useRouter();

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

  const gotoHome = (sect) => {
    if (sect == "home") router.push(`/home`);
    else router.push(`/home#${sect}`);
  };

  const scrollTo = (id) => {
    if (typeof window === "undefined") return;
    let offset = 80;
    if (id == "home") {
      offset = 0;
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
      onClick: () => (homePage ? scrollTo("home") : gotoHome("home")),
    },
    {
      name: "About",
      onClick: () => (homePage ? scrollTo("about") : gotoHome("about")),
    },
    {
      name: "Plans",
      onClick: () => (homePage ? scrollTo("plans") : gotoHome("plans")),
    },
    {
      name: "Products",
      onClick: () => router.push("/products"),
      // onClick: () => (homePage ? scrollTo("products") : gotoHome("products")),
    },
    {
      name: "Services",
      onClick: () => (homePage ? scrollTo("services") : gotoHome("services")),
    },
    {
      name: "Contact Us",
      onClick: () => router.push("/contact-us"),
    },
    // {
    //   name: "Case Studies",
    //   onClick: () =>
    //     homePage ? scrollTo("case-studies") : gotoHome("case-studies"),
    // },
    // {
    //   name: "Blog",
    //   onClick: () => (homePage ? scrollTo("blog") : gotoHome("blog")),
    // },
  ];

  const CartItems = [1, 4, 2];

  const containerRef = useRef(null);
  const btnRefs = useRef([]);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "plans",
      "services",
      "case-studies",
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

  const socials = [
    { name: "Facebook", icon: RiFacebookFill },
    { name: "Instagram", icon: RiInstagramFill },
    { name: "X(Twitter)", icon: RiTwitterXFill },
    { name: "Skype", icon: RiSkypeFill },
    { name: "Whatsapp", icon: RiWhatsappFill },
  ];

  const email = "info@3psolutions.com.pk";
  const contact = "+92 321 417 6685";

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
      className={`${className} top-0 md:-top-14 md:left-0 sticky md:-mb-[184px] z-50 w-full flex flex-col gap-5 md:pt-5 md:px-5 ${
        theme == "light" ? "text-[var(--dark-blue-2)]" : "text-white"
      }`}
    >
      <div
        className={`hidden md:flex flex-row w-full items-center justify-end gap-10`}
      >
        <div className="flex flex-row w-full items-center justify-start gap-6">
          <div className="flex flex-row items-center gap-4 group cursor-pointer">
            <div className="bg-[var(--primary-color)] p-2 rounded-full">
              <RiMailLine className="group-hover-flicker text-white" />
            </div>
            <p className="group-hover:text-[var(--primary-color)] line-clamp-1 tracking-wide transition-all duration-500 text-lg pr-6 border-r border-gray-500">
              {email}
            </p>
          </div>
          <div className="flex flex-row items-center gap-4 group  cursor-pointer">
            <div className="bg-[var(--primary-color)] p-2 rounded-full ">
              <MdPhone className="group-hover-flicker text-white" />
            </div>
            <p className="group-hover:text-[var(--primary-color)] tracking-wide transition-all duration-500 line-clamp-1 text-lg">
              {contact}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-around gap-2">
          {socials.map((social, i) => (
            <SocialButton
              key={i}
              Icon={social.icon}
              Name={social.name}
              theme={theme}
            />
          ))}
        </div>
      </div>
      {/* android header */}
      <div
        className={`w-full flex flex-row md:grid md:grid-cols-[5fr_1fr] lg:grid-cols-[0.7fr_3fr_0.4fr] xl:grid-cols-[0.7fr_3fr_0.7fr] p-4 md:py-0 lg:px-8 max-w-7xl place-self-center
      items-center justify-between gap-3 lg:gap-6 md:text-white bg-white md:bg-[var(--dark-blue-2)] md:rounded-lg`}
      >
        <img
          src={logo_alt}
          alt="logo"
          className="block md:hidden aspect-auto w-full max-w-44 cursor-pointer"
        />
        <div className="flex  md:hidden items-center gap-4 sm:gap-5 text-[var(--dark-blue-2)]">
          <div className="h-full p-2 pl-6 relative border-l group border-gray-500/40 cursor-pointer">
            <RiShoppingBag4Line size={22} className="group-hover-shake " />
            <div className="absolute right-0 bottom-0 bg-[var(--primary-color)] text-white p-0.5 text-center w-4 h-4 rounded-full text-[8px]">
              {CartItems.length}
            </div>
          </div>
          <BiMenu
            size={30}
            className={` ${
              isSidebarOpen && "-rotate-180 scale-0"
            } transition-all duration-500`}
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>

        {/* desktop header */}
        <img
          src={logo}
          alt="logo"
          className="hidden lg:block w-full max-w-44 cursor-pointer aspect-auto"
        />

        {/* Navigation Buttons + Underline */}
        <div
          className="hidden w-ful h-full md:flex flex-row gap-1.5 items-center px-4 justify-center relative"
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
            className="hidden md:block absolute pointer-events-none bottom-0 h-1 bg-[var(--primary-color)] transition-all duration-500 ease-in-out"
            style={{
              boxShadow: "0 4px 20px 1px var(--primary-color-fade)",
              width: activeStyle.width,
              left: activeStyle.left,
              opacity: activeStyle.opacity,
              zIndex: 0,
            }}
          />

          {/* HOVER underline */}
          <div
            className="hidden md:block absolute pointer-events-none bottom-0 h-1 bg-[var(--primary-color)] transition-all duration-300 ease-in-out"
            style={{
              boxShadow: "0 0 12px var(--primary-color)",
              width: hoverStyle.width,
              left: hoverStyle.left,
              opacity: hoverStyle.opacity,
              zIndex: 1,
            }}
          />
        </div>

        {/* Right side icons */}
        <div className="hidden md:flex flex-row items-center ">
          <div className="hidden xl:block h-full p-6 border-l border-gray-500/40 group cursor-pointer">
            <div
              className="border border-gray-500/40 p-2 group rounded-full"
              onClick={() => router.push("/contact-us")}
            >
              <RiHeadphoneFill
                size={25}
                className="p-[1px] shake group-hover:text-[var(--primary-color)] transition-all duration-300"
              />
            </div>
          </div>
          <div
            onClick={() => setIsDesktopSearchOpen((o) => !o)}
            className="h-full p-4 px-6 border-l hover:text-[var(--primary-color)] transition-all duration-500 border-gray-500/40 cursor-pointer"
          >
            <RiSearchLine size={24} />
          </div>
          {isDesktopSearchOpen && (
            <div className="absolute top-full mt-2 right-5 w-80 bg-white rounded-lg shadow-lg z-50 overflow-hidden">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full outline-none rounded-lg text-[var(--text-1)] border border-[var(--primary-color)] px-5 py-3 pr-12"
                />
                <div className="cursor-pointer group absolute flex items-center  justify-center top-0 right-0  h-full text-[var(--primary-color)] aspect-square text-xl">
                  <RiSearchLine className="group-hover-flicker" />
                </div>
              </div>
            </div>
          )}
          <div className="h-full p-2 pl-6 relative border-l group border-gray-500/40 cursor-pointer">
            <RiShoppingBag4Line size={22} className="group-hover-shake" />
            <div className="absolute right-0 bottom-0 bg-[var(--primary-color)] p-0.5 text-center w-4 h-4 rounded-full text-[8px]">
              {CartItems.length}
            </div>
          </div>
        </div>
        {/* side bar */}
        <div
          className={`md:hidden fixed left-0 top-0 bg-white w-screen h-screen z-50 p-7 py-10 flex flex-col gap-9
         -translate-x-full ${
           isSidebarOpen && "translate-x-0"
         } transition-all duration-500
          `}
        >
          <MdClose
            className={`text-[var(--dark-blue-2)] absolute top-5 right-4 text-3xl ${
              !isSidebarOpen && "rotate-180 scale-0"
            } transition-all duration-700`}
            onClick={() => setIsSidebarOpen(false)}
          />
          <img src={logo_alt} alt="logo" className="w-52" />
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none rounded-lg text-[var(--text-1)]  border border-gray-400/40 focus:border-[var(--primary-color)] px-5 py-3 pr-14"
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
    </div>
  );
}
