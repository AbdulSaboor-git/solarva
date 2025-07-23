"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SubPagesTopSection from "@/components/sub_pages_top_section";
import React, { useEffect, useRef, useState } from "react";
import { BiChevronRight, BiPhone, BiPhoneCall } from "react-icons/bi";
import { FaSolarPanel } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { MdAdd, MdSolarPower } from "react-icons/md";
import { SiGreenhouse, SiSunrise } from "react-icons/si";
import ServiceTitle from "./components/service_title";
import { useRouter } from "next/navigation";
import { RiCheckFill } from "react-icons/ri";
import ScrollToTop from "@/app/home/components/scroll_to_top";
import FAQ from "./components/faq";

export default function Service({ params }) {
  const [service, setService] = useState(null);
  const { service_id } = React.use(params);
  const stickyRef = useRef(null);
  const rightRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const router = useRouter();

  const services = [
    {
      id: 1,
      title: "Solar Power System",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills to a great  extent",
      logo: GiElectric,
      img: "service1.webp",
      link: "solar-power-system",
    },
    {
      id: 2,
      title: "Solar Panel Installation",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: SiSunrise,
      img: "service2.webp",
      link: "solar-panel-installation",
    },
    {
      id: 3,
      title: "Household Solar Panel",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: SiGreenhouse,
      img: "service3.webp",
      link: "household-solar-panel",
    },
    {
      id: 4,
      title: "Solar Panel Cleaning",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: FaSolarPanel,
      img: "service4.webp",
      link: "solar-panel-cleaning",
    },
    {
      id: 5,
      title: "Solar Panel Maintenance",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: MdSolarPower,
      img: "service5.webp",
      link: "solar-panel-maintenance",
    },
    {
      id: 6,
      title: "Solar Panel Production",
      description:
        "By generatiing your own solar energy, you can reduce your electricity bills",
      logo: MdSolarPower,
      img: "service3.webp",
      link: "solar-panel-production",
    },
  ];

  const freqAskedQuestions = [
    {
      question: "What papers needed for solar installation?",
      answer:
        "We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system. Because Powering Progress means providing more",
    },
    {
      question: "How do you evaluate the cost of solar repair?",
      answer:
        "We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system. Because Powering Progress means providing more",
    },
    {
      question: "What is the per square-feet cost of panel installation?",
      answer:
        "We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system. Because Powering Progress means providing more",
    },
    {
      question: "When should we check the battery connections?",
      answer:
        "We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system. Because Powering Progress means providing more",
    },
  ];

  const service_options = [
    {
      title: "Documentation List",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus similique veniam quos voluptatum suscipit. ",
    },
    {
      title: "Application submission",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus similique veniam quos voluptatum suscipit. ",
    },
    {
      title: "Inspection",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus similique veniam quos voluptatum suscipit. ",
    },
    {
      title: "Documentation List",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus similique veniam quos voluptatum suscipit. ",
    },
    {
      title: "Panel Installation",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus similique veniam quos voluptatum suscipit. ",
    },
    {
      title: "Grid connection",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus similique veniam quos voluptatum suscipit. ",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const stickyBox = stickyRef.current;
      const rightBox = rightRef.current;

      if (!stickyBox || !rightBox) return;

      const stickyBottom = stickyBox.getBoundingClientRect().bottom;
      const rightBottom = rightBox.getBoundingClientRect().bottom;

      if (isFixed && rightBottom <= stickyBottom + 20) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (service_id) {
      let service = services.find((s) => s.id == service_id);
      setService(service);
    }
  }, [service_id]);

  function serviceClick(id) {
    router.push(`/service/${id}`);
  }

  return (
    <div className="w-full flex flex-col items-center bg-gray-50">
      <ScrollToTop />
      <Header theme={"light"} />
      <div className="w-full flex flex-col gap-20 md:gap-32 items-center justify-start">
        <SubPagesTopSection mainTitle={"Our Services"} title={service?.title} />
        <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row w-full px-5">
          <div className="relative min-w-[33%]">
            <div
              ref={stickyRef}
              className={`flex flex-col w-full gap-14 md:gap-8 ${
                isFixed ? "md:sticky top-28" : "md:relative"
              } transition-all duration-200`}
            >
              <div className="flex w-full flex-col gap-2">
                {services.map((s) => (
                  <div key={s.id} onClick={() => serviceClick(s.id)}>
                    <ServiceTitle s={s} isActive={s.id == service_id} />
                  </div>
                ))}
              </div>
              <div className="rounded-xl flex flex-col items-center justify-end relative overflow-hidden w-full h-[500px] md:h-[600px] bg-cover bg-center bg-[url('/user6.webp')] ">
                <svg
                  className="w-full h-[400px] absolute bottom-0 left-0"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                >
                  {/* Outer curve (dark) */}
                  <path
                    d="M0,75 C230,10 490,130 580,-85 L500,150 L0,150 Z"
                    className="fill-[var(--primary-color)]"
                  />

                  {/* Inner curve (primary color) */}
                  <path
                    d="M-10,90 C230,15 400,85 500,20 L500,150 L0,150 Z"
                    className="fill-[var(--dark-2)]"
                  />
                </svg>
                <div className="relative w-full pl-8 md:pl-8 flex flex-col items-center justify-center gap-6 z-10 text-white px-4 md:px-8 pb-8">
                  <h1 className="text-3xl font-semibold">Solar Solutions</h1>
                  <div className="bg-[var(--primary-color)] rounded-lg pr-1.5">
                    <div className="flec flex-col w-full gap-3 rounded-lg text-[var(--dark-2)] bg-white py-6 px-8 pl-12 md:pl-14 relative">
                      <div className="text-center text-sm md:text-base">
                        Need Help? Call Us Now
                      </div>
                      <div className="text-center text-xl md:text-2xl font-semibold tracking-wider">
                        +92-900-786-01
                      </div>
                      <div className="bg-green-400/40 p-1 rounded-full absolute w-fit h-fit top-1/2 -translate-y-1/2 -left-7">
                        <div className="bg-[var(--primary-color)] p-3  text-white text-3xl w-fit rounded-full">
                          <BiPhoneCall className="shake" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={rightRef}
            className="flex flex-col gap-12 text-lg md:text-xl text-[var(--dark-2)] tracking-wide items-start md:pl-14"
          >
            <div className="flex flex-col gap-8">
              <div className="text-4xl md:text-5xl font-semibold ">
                {service?.title}
              </div>
              <div className="text-[var(--text-1)]">
                We guide our clients through difficult issues, bringing insight
                and judgment to each situation. Our innovatve approaches create
                original solutions to our clients’ most complex domestic & multi
                juristictional deal sid disputes. By thinking on behalf of our
                clients every day, we anticipate what they want, ineed and build
                lasting relationships.
              </div>
              <div className="text-[var(--primary-color)] font-semibold md:text-[22px]">
                Over the last 31 Years we made an impact, we have long way to
                go.
              </div>
              <div className="text-[var(--text-1)]">
                These are the concepts that shape our distinctive culture &
                differentiate us from others. They true the unique spirit of our
                Firm guide the behaviors that enable us to deliver the promises
                we make to our clients and our people.
              </div>
              <div className="text-3xl font-semibold ">Service Process</div>
              <div className="flex flex-col w-full gap-4 md:gap-6">
                <div className="text-lg md:text-xl font-semibold">
                  At Solarva our culture comes to life through three core
                  values:
                </div>
                <div className="flex flex-col text-lg md:text-xl text-[var(--text-1)] gap-4 md:pl-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-[var(--primary-color)] rounded-full p-0.5 w-fit text-white">
                      <RiCheckFill className="text-sm" />
                    </div>
                    We seize opportunities to innovate and grow
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[var(--primary-color)] rounded-full p-0.5 w-fit text-white">
                      <RiCheckFill className="text-sm" />
                    </div>
                    We are one firm with a shared sense of purpose
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[var(--primary-color)] rounded-full p-0.5 w-fit text-white">
                      <RiCheckFill className="text-sm" />
                    </div>
                    We care about each other and the world around us
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:py-4 w-full md:h-[250px] overflow-hidden grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <img
                src="/service1.webp"
                alt=""
                className="h-full aspect-auto object-cover"
              />
              <img
                src="/service2.webp"
                alt=""
                className="h-full aspect-auto object-cover"
              />
            </div>
            <div className="flex flex-col text-base w-full gap-4">
              {freqAskedQuestions.map((item, i) => (
                <div key={i}>
                  <FAQ item={item} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-8 w-full py-10">
              <div className="text-3xl font-semibold ">Service Options</div>
              <img
                src="/img7.webp"
                alt="abc"
                className="w-full h-[320px] object-cover aspect-auto"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 md:pt-6">
                {service_options.map((s, i) => (
                  <div key={i} className="w-full">
                    <div className="flex gap-6 md:gap-8 w-full items-start">
                      <div className=" p-1 shadow-lg shadow-black/20 text-xl font-semibold text-[var(--primary-color)] rounded-full">
                        <div className="rounded-full flex items-center justify-center aspect-square w-8 text-center">
                          {i + 1}
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 md:gap-4 items-start">
                        <h1 className="font-semibold text-xl md:text-2xl">
                          {s.title}
                        </h1>
                        <p className="text-lg text-[var(--text-1)]">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
