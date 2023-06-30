"use client";
import "./section_projects.scss";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Project from "../../project/project";

export default function Section_Projects() {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  const data = [
    {
      imgSrc: "/images/projects/1.jpg",
      title: "Temp & Humi Monitor",
      category: "AIoT",
    },
    {
      imgSrc: "/images/projects/2.jpg",
      title: "CRUD Blog",
      category: "Web & Database",
    },
    {
      imgSrc: "/images/projects/3.jpg",
      title: "Seles's News",
      category: "Web & Server",
    },
    {
      imgSrc: "/images/projects/4.jpg",
      title: "Seles's Chat",
      category: "Web & Server & Database",
    },
    {
      imgSrc: "/images/projects/5.jpg",
      title: "lhmqk",
      category: "Web",
    },
  ];
  const [slidesPerView, setSlidesPerView] = useState(3.5);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3.5);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2.5);
      } else {
        setSlidesPerView(1.5);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      id="section_projects"
      className="snap-center p-8 h-[100vh] text-zinc-200 overflow-hidden"
    >
      <div className="h-[2rem] "></div>
      <hr />
      <div
        className={`${"h-[calc(100%-4rem)]"} transition-all duration-1000 ease-in-out`}
      >
        {" "}
        <p
          ref={ref}
          className={` ${
            inView ? "fade-in-up visible" : ""
          } lg:py-8 md:py-16 py-4 mt-0`}
        >
          Projects
        </p>
        <div className="flex justify-between items-end">
          <p
            ref={ref}
            className={` ${
              inView ? "fade-in-left visible" : ""
            } py-4 font-bold sm:text-4xl text-xl sm:max-w-xl max-w-[14rem]`}
          >
            A collection of proud endeavors gracefully unveiled.
          </p>
          <div
            ref={ref}
            className={` ${
              inView ? "fade-in-right visible" : ""
            } p-2 ml-2 font-bold hover:text-zinc-200`}
          >
            <a className="relative two underline">
              <span>See more</span>
              <span className="absolute -bottom-0.5 left-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
              <span className="absolute -bottom-0.5 right-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
            </a>
          </div>
        </div>
        <div ref={ref} className={` ${inView ? "fade-in-up visible" : ""}`}>
          <Swiper
            spaceBetween={30}
            slidesPerView={slidesPerView}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3.5,
              },
            }}
          >
            {data.map((project, index) => (
              <SwiperSlide key={project.title}>
                <Project
                  imgSrc={project.imgSrc}
                  title={project.title}
                  category={project.category}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <hr />
    </div>
  );
}
