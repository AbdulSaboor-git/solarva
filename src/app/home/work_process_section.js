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
    <div className="flex flex-col w-full gap-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-0 w-full sm:pt-12 p-6">
        <div className="sm:col-span-2 flex flex-col gap-5 sm:gap-7 items-start justify-center text-[var(--dark-blue-2)] max-w-2xl">
          <div className="bg-[var(--primary-color)] font-semibold tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
            OUR WORK PROCESS
          </div>
          <div className="text-4xl sm:text-5xl font-semibold">
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
          classname={"hidden sm:block row-span-2 pt-16"}
        />
        <StepsDiv step={steps[0]} classname={"sm:pt-20"} />
        <StepsDiv step={steps[1]} classname={""} />
        <StepsDiv step={steps[2]} classname={"block sm:hidden"} />
      </div>

      <div className="w-full flex flex-col">
        <div className="w-full px-4 -mb-80 sm:-mb-24">
          <div className="p-3 relative rounded-2xl bg-[var(--primary-color)]">
            <div
              className="border-2 border-dotted border-white rounded-2xl pt-10 pb-2 px-4 sm:pt-14 sm:pb-14 sm:px-20 
            w-full gap-56 sm:gap-4 flex flex-col sm:flex-row items-center justify-between"
            >
              <h1 className="text-3xl sm:text-4xl font-semibold text-white sm:max-w-md ">
                Solarva believes in sustainable energy practices
              </h1>
              <div className="bg-[var(--dark-blue-1)] sm:mr-6 relative z-20 tracking-wide p-3 pr-8 rounded-full text-white flex gap-2 items-center">
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
            <div className="h-full w-full sm:w-md absolute right-0 sm:right-1/6 bottom-0 ">
              <div className="h-full w-full">
                <img
                  src="user7.png"
                  alt="abc"
                  className="absolute h-[304px] left-1/2 -translate-x-1/2 sm:-translate-x-0 sm:h-96 bottom-0 sm:left-5 z-10 aspect-auto"
                />
                <div className="hidden sm:block absolute h-full right-2 bottom-0">
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
        <div className="bg-[var(--dark-blue-3)] px-4 w-full flex flex-col gap-14 items-center py-24 pt-104 sm:pt-48">
          <div className="flex flex-col gap-4 sm:gap-5 items-center justify-center tracking-wide p-0 sm:p-6 max-w-3xl">
            <div className="bg-[var(--primary-color)] font-semibold sm:tracking-wider text-white px-3 py-1 rounded-[5px] text-xs">
              CLIENT TESTIMONAL
            </div>
            <div className="text-4xl w-full text-white sm:text-5xl font-semibold text-center">
              What our clients reviews
            </div>
            <div className="text-[var(--text-3)] text-center text-xl mt-2">
              We’re finding ways to bring energy to more people in more ways
              every day, so that all of us can be part of the changing energy
              system.
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-full">
            <div className="hidden sm:block">
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
                <SwiperSlide key={i} className="sm:px-4 text-white">
                  <div className="bg-black/20 rounded-2xl flex flex-col gap-6 p-10 sm:p-12 px-8 sm:px-14">
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
            <div className="hidden sm:block">
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
      <div className="px-6 py-20 font-medium text-[var(--dark-blue-1)] w-full flex flex-col items-center gap-10 text-center text-xl">
        <p className="">
          We’ve worked on over 200 projects
          <span className="text-[var(--primary-color)]">
            {" "}
            with 150+ clients
          </span>
        </p>
        <marquee className="overflow-hidden w-full">
          <div className="flex flex-row items-center justify-evenly gap-4 ">
            {Clients.map((c, index) => (
              <span key={index} className="inline-block mx-4 text-6xl">
                <c.logo />
              </span>
            ))}
          </div>
        </marquee>
      </div>
    </div>
  );
}
