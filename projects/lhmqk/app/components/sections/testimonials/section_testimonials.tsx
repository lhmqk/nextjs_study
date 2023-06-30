"use client";
import "./section_testimonials.scss";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Testimonial from "../../testimonial/testimonial";

export default function Section_Testimonials() {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  const data = [
    {
      name: "Sarah Thompson",
      role: "Software Engineer",
      imgSrc: "/images/testimonials/1.jpg",
      message:
        "Having worked closely with John on multiple AIoT projects, I am continually impressed by his strong grasp of both front-end and back-end development. His dedication and expertise make him an invaluable asset to any team.",
    },
    {
      name: "Michael Rodriguez",
      role: "Project Manager",
      imgSrc: "/images/testimonials/2.jpg",
      message:
        "John's ability to lead and support his team members in developing AIoT systems is truly commendable. His skills in full-stack development, combined with his solid understanding of cloud computing, make him a highly capable professional.",
    },
    {
      name: "Emily Johnson",
      role: "Database Administrator",
      imgSrc: "/images/testimonials/3.jpg",
      message:
        "As a database administrator working alongside John, I have witnessed his meticulous attention to detail in database development. His expertise in managing and optimizing data structures is exemplary.",
    },
    {
      name: "Daniel Lee",
      role: "Cloud Architect",
      imgSrc: "/images/testimonials/4.jpg",
      message:
        "John's proficiency in cloud computing and server administration is remarkable. His contributions to our AIoT projects have been instrumental in ensuring seamless deployment and scalability.",
    },
    {
      name: "Olivia Wilson",
      role: "Fellow Student",
      imgSrc: "/images/testimonials/5.jpg",
      message:
        "John's dedication to learning and growing in the field of Computer Engineering is inspiring. His eagerness to tackle new challenges and his exceptional problem-solving abilities make him a standout among his peers.",
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
        className={`${"h-[calc(100%-4rem)]"} transition-all duration-1000 ease-in-out sm:overflow-hidden overflow-y-scroll`}
      >
        {" "}
        <p
          ref={ref}
          className={` ${
            inView ? "fade-in-up visible" : ""
          } lg:py-8 md:py-16 py-4 mt-0`}
        >
          Testimonials
        </p>
        <div className="flex justify-between items-end">
          <p
            ref={ref}
            className={` ${
              inView ? "fade-in-left visible" : ""
            } py-4 font-bold sm:text-4xl text-xl sm:max-w-xl max-w-[14rem]`}
          >
            Through harmonious collaboration, marvels unfold.
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
            {data.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name}>
                <Testimonial
                  imgSrc={testimonial.imgSrc}
                  name={testimonial.name}
                  role={testimonial.role}
                  message={testimonial.message}
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
