"use client";
import React, { useRef } from "react";
import StepsDiv from "./components/work_process_step_div";
import { SiGreenhouse, SiPubg, SiRoblox, SiSunrise } from "react-icons/si";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/slider.css";
import { BsChatQuote, BsQuote } from "react-icons/bs";
import { FaRegStar, FaStar } from "react-icons/fa";
import { BiHeadphone } from "react-icons/bi";
import { TbBrandFortnite, TbBrandMinecraft } from "react-icons/tb";

export default function WorkProcessSection() {
  const swiperRef = useRef(null);
  const goNext = () => swiperRef.current?.slideNext();
  const goPrev = () => swiperRef.current?.slidePrev();

  const Clients = [
    {
      logo: TbBrandMinecraft,
    },
    {
      logo: SiRoblox,
    },
    {
      logo: TbBrandFortnite,
    },
    {
      logo: SiPubg,
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Solar Designing",
      desc: "We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system.",
      img: "img4.webp",
    },
    {
      id: 2,
      title: "Solar Installation",
      desc: "We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system.",
      img: "img5.webp",
    },
    {
      id: 3,
      title: "Household Use",
      desc: "We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system.",
      img: "img6.webp",
    },
  ];
  const reviews = [
    {
      name: "Harry Brook",
      img: "user1.jpg",
      location: "London, England",
      rating: 5,
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ab, odit, assumenda sint vitae ullam nesciunt dolore ipsa nemo corrupti facere vero odio natus ex! Saepe, nostrum? Ipsum, officiis eaque? ",
    },
    {
      name: "Harry Brook 2",
      img: "user2.jpg",
      location: "London, England",
      rating: 5,
      text: " Lorem ipsum dolor sit amet, officiis eaque? ",
    },
    {
      name: "Harry Brook 3",
      img: "user3.jpg",
      location: "London, England",
      rating: 4,
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ab, odit, assumenda sint vitae ullam nesciunt dolore ipsa nemo corrupti facere vero odio natus ex! Saepe, nostrum? Ipsum, officiis eaque? ",
    },
    {
      name: "Harry Brook 4",
      img: "user4.webp",
      location: "London, England",
      rating: 5,
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ab, odit, assumenda sint vitae ullam nesciunt dolore ipsa nemo corrupti facere vero odio natus ex! Saepe, nostrum? Ipsum, officiis eaque? ",
    },
    {
      name: "Harry Brook 5",
      img: "user5.webp",
      location: "London, England",
      rating: 4,
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ab, odit, assumenda sint vitae ullam nesciunt dolore ipsa nemo corrupti facere vero odio natus ex! Saepe, nostrum? Ipsum, officiis eaque? ",
    },
  ];
  return (
    <div id="work-process" className="flex flex-col w-full  gap-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 w-full max-w-7xl self-center md:pt-12 p-6">
        <div className="md:col-span-2 flex flex-col gap-5 md:gap-7 items-start justify-center text-[var(--dark-blue-2)] max-w-2xl">
          <div className="bg-[var(--primary-color)] font-semibold tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
            OUR WORK PROCESS
          </div>
          <div className="text-4xl md:text-5xl font-semibold">
            We always follow the best solar ways
          </div>
          <div className="text-[var(--text-1)]">
            We’re finding ways to bring energy to more people in more ways every
            day, so that all of us can be part of the changing energy system.
            Because Powering Progress means providing more & cleaner energy
            across the country.
          </div>
        </div>
        <StepsDiv
          step={steps[2]}
          classname={"hidden md:block row-span-2 pt-16"}
        />
        <StepsDiv step={steps[0]} classname={"md:pt-20"} />
        <StepsDiv step={steps[1]} classname={""} />
        <StepsDiv step={steps[2]} classname={"block md:hidden"} />
      </div>

      <div className="w-full flex flex-col">
        <div className="w-full px-4 -mb-80 md:-mb-24">
          <div className="p-3 relative rounded-2xl bg-[var(--primary-color)]">
            <div
              className="border-2 border-dotted border-white rounded-2xl pt-10 pb-2 px-4 md:pt-14 md:pb-14 md:px-20 
            w-full gap-56 md:gap-4 flex flex-col md:flex-row items-center justify-between"
            >
              <h1 className="text-3xl md:text-4xl font-semibold text-white md:max-w-md ">
                Solarva believes in sustainable energy practices
              </h1>
              <div className="bg-[var(--dark-blue-1)] md:mr-6 relative z-20 tracking-wide p-3 pr-8 rounded-full text-white flex gap-2 items-center">
                <div className="p-2 border rounded-full border-gray-500/40 text-3xl">
                  <BiHeadphone />
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-semibold">8888-999-999</p>
                  <p className="text-[var(--text-3)] text-sm">
                    Call Us Anytime
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full w-full md:max-w-md absolute right-0 md:right-[16%] bottom-0 ">
              <div className="h-full w-full">
                <img
                  src="user7.png"
                  alt="abc"
                  className="absolute h-[304px] left-1/2 -translate-x-1/2 md:-translate-x-0 md:h-96 bottom-0 md:left-6 z-10 aspect-auto"
                />
                <div className="hidden md:block absolute h-full right-2 bottom-0">
                  <img
                    src="shape1.png"
                    alt="abcd"
                    className="h-full aspect-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[var(--dark-blue-3)] px-4 w-full flex flex-col gap-14 items-center py-24 pt-[400px] md:pt-48">
          <div className="flex flex-col gap-4 md:gap-5 items-center justify-center tracking-wide p-0 md:p-6 max-w-3xl">
            <div className="bg-[var(--primary-color)] font-semibold md:tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
              CLIENT TESTIMONAL
            </div>
            <div className="text-4xl w-full text-white md:text-5xl font-semibold text-center">
              What our clients reviews
            </div>
            <div className="text-[var(--text-3)] text-center text-xl mt-2">
              We’re finding ways to bring energy to more people in more ways
              every day, so that all of us can be part of the changing energy
              system.
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <div className="hidden md:block">
              <button
                onClick={goPrev}
                className="p-5 h-fit border border-[var(--light-blue-grey-1)] text-[var(--light-blue-grey-1)] 
              hover:bg-[var(--dark-blue-1)] hover: hover:text-[var(--light-blue-grey-1)] hover:border-[var(--dark-blue-1)] 
              transition-all duration-500"
              >
                <SlArrowLeft />
              </button>
            </div>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={0}
              loop={true}
              pagination={{ clickable: true }}
              centeredSlides={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {reviews.map((r, i) => (
                <SwiperSlide key={i} className="md:px-4 text-white">
                  <div className="bg-black/20 rounded-2xl flex flex-col gap-6 p-10 md:p-12 px-8 md:px-14">
                    <div className="flex flex-row gap-5 items-center justify-start">
                      <div className="relative h-16 rounded-full aspect-square border-2 border-[var(--text-1)]">
                        <img
                          src={r.img}
                          alt={i}
                          className="w-full h-full rounded-full"
                        />
                        <div className="absolute z-10 -bottom-5 text-[var(--primary-color)] text-3xl left-1/2 -translate-x-1/2 rotate-180">
                          <BsQuote />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <h1 className="text-xl font-semibold">{r.name}</h1>
                        <p className="text-[var(--text-4)]">{r.location}</p>
                      </div>
                    </div>
                    <div className="font-semibold flex flex-row items-center justify-start gap-3 pt-4">
                      <p>Rating</p>
                      <div className="flex flex-row text-yellow-400 items-center justify-start gap-1">
                        {[...Array(5)].map((_, index) =>
                          index < r.rating ? (
                            <FaStar key={index} />
                          ) : (
                            <FaRegStar key={index} />
                          )
                        )}
                      </div>
                    </div>
                    <div className="text-lg text-[var(--text-3)] line-clamp-5 min-h-[8em]">
                      &quot;{r.text}&quot;
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="hidden md:block">
              <button
                onClick={goNext}
                className="p-5 h-fit border border-[var(--light-blue-grey-1)] text-[var(--light-blue-grey-1)] 
              hover:bg-[var(--dark-blue-1)] hover: hover:text-[var(--light-blue-grey-1)] hover:border-[var(--dark-blue-1)] 
              transition-all duration-500"
              >
                <SlArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-6 md:py-7 font-semibold text-[var(--dark-blue-1)] w-full flex flex-col items-center gap-10 md:gap-12 text-center text-lg md:text-xl">
        <p className="px-4 md:px-0">
          We’ve worked on over 200 projects
          <span className="text-[var(--primary-color)]">
            {" "}
            with 150+ clients
          </span>
        </p>
        <div className="overflow-hidden group w-full">
          <div className="relative flex whitespace-nowrap">
            <div className="animate-marquee flex group-hover:[animation-play-state:paused]">
              {[...Clients, ...Clients].map((item, i) => (
                <div key={`1-${i}`} className="px-8 md:px-10 text-7xl">
                  <item.logo />
                </div>
              ))}
              {[...Clients, ...Clients].map((item, i) => (
                <div key={`2-${i}`} className="px-8 md:px-10 text-7xl">
                  <item.logo />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
