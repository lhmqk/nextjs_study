"use client";
import "./section_services.scss";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
export default function Section_Services() {
  const [isWeb, setIsWeb] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  return (
    <div
      id="section_services"
      className="snap-center p-8 h-[100vh] text-zinc-200 overflow-hidden"
    >
      <div className="h-[2rem] "></div>
      <hr />
      <div
        className={`${
          isWeb ? "h-[calc(100%-4rem)]" : "h-0 overflow-hidden opacity-0"
        } transition-all duration-1000 ease-in-out`}
      >
        <p
          ref={ref}
          className={` ${
            inView ? "fade-in-up visible" : ""
          } lg:py-8 md:py-16 py-4 mt-0`}
        >
          Services
        </p>
        <div
          ref={ref}
          className={` ${
            inView ? "fade-in-left visible" : ""
          } flex items-end justify-between p-2`}
        >
          <p className="flip-animate sm:text-7xl text-3xl font-bold sm:w-[85%] w-[70%]">
            <span data-hover="Web" id="flipWeb">
              Web
            </span>{" "}
            Development
          </p>
          <button className="relative two" onClick={() => setIsWeb(!isWeb)}>
            <span className="font-semibold underline sm:text-base text-[10px]">
              Have a look!
            </span>
            <span className="absolute -bottom-0 left-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
            <span className="absolute -bottom-0 right-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
          </button>
        </div>
        <div
          ref={ref}
          className={` ${
            inView ? "fade-in-right visible" : ""
          } flex items-end justify-between p-2 text-zinc-400`}
        >
          <p className="flip-animate sm:text-7xl text-3xl font-bold sm:w-[85%] w-[70%]">
            <span data-hover="Server-side" id="flipServer">
              Server-side
            </span>{" "}
            Development
          </p>
          <button className="relative two" onClick={() => setIsWeb(!isWeb)}>
            <span className="font-semibold underline sm:text-base text-[10px]">
              Check it out!
            </span>
            <span className="absolute -bottom-0 left-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
            <span className="absolute -bottom-0 right-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
          </button>
        </div>
        <div
          ref={ref}
          className={` ${
            inView ? "fade-in-left visible" : ""
          } flex items-end justify-between p-2 text-zinc-500`}
        >
          <p className="flip-animate sm:text-7xl text-3xl font-bold lg:w-[85%] sm:w-[80%] w-[65%]">
            <span data-hover="Cloud" id="flipCloud">
              Cloud
            </span>{" "}
            Computing
          </p>
          <button className="relative two" onClick={() => setIsWeb(!isWeb)}>
            <span className="font-semibold underline sm:text-base text-[10px]">
              Come see this!
            </span>
            <span className="absolute -bottom-0 left-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
            <span className="absolute -bottom-0 right-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
          </button>
        </div>
        <div
          ref={ref}
          className={` ${
            inView ? "fade-in-right visible" : ""
          } flex items-end justify-between p-2 text-zinc-600`}
        >
          <p className="flip-animate sm:text-7xl text-3xl font-bold lg:w-[80%] sm:w-[75%] w-[65%]">
            <span data-hover="Database" id="flipDatabase">
              Database
            </span>{" "}
            Development
          </p>
          <button className="relative two" onClick={() => setIsWeb(!isWeb)}>
            <span className="font-semibold underline sm:text-base text-[10px]">
              Don&apos;t miss this view!
            </span>
            <span className="absolute -bottom-0 left-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
            <span className="absolute -bottom-0 right-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
          </button>
        </div>
      </div>
      <hr />
      {/* WEB DEVELOPMENT */}
      <div
        className={`${
          isWeb
            ? "h-0 overflow-hidden opacity-0"
            : "lg:h-[calc(100%-4rem)] h-[calc(100%-8rem)]"
        }  flex flex-col justify-between transition-all duration-1000 ease-in-out`}
      >
        <div className="sm:overflow-hidden overflow-y-scroll">
          <div className="sm:flex sm:flex-row sm:items-center flex-col p-4 ">
            <p className="text-lg sm:w-[calc(100%-22rem)] w-full">
              <b className="text-xl">Stunning User Experience: </b>We create
              seamless interfaces using latest web frameworks and languages:
              ReactJS, NextJS, and Angular. From sleek landing pages to
              e-commerce platforms, we bring your vision to life.
            </p>
            <div className="flex sm:w-[22rem] w-full sm:mt-0 mt-8">
              <Image
                width={2300}
                height={2000}
                src="/images/services/1.png"
                alt="reactjs logo"
                className="sm:h-[6rem] h-[5rem] filter grayscale-[50%] opacity-75 sm:ml-4 ml-0"
              />
              <Image
                width={629}
                height={629}
                src="/images/services/2.png"
                alt="reactjs logo"
                className="sm:h-[6rem] h-[5rem] filter grayscale-[50%] opacity-75 ml-4"
              />
              <Image
                width={2048}
                height={2048}
                src="/images/services/3.png"
                alt="reactjs logo"
                className="sm:h-[6rem] h-[5rem] filter grayscale-[50%] opacity-75 ml-4"
              />
            </div>
          </div>
          <div className="flex items-center p-4 sm:flex-row-reverse flex-col">
            <p className="text-lg">
              <b className="text-xl">Performance-Driven Solutions: </b>With
              expertise in .NET Core, NodeJS, and ExpressJS, we build
              high-performance websites for a smooth browsing experience.
            </p>
            <div className="flex sm:w-[26rem] w-fit sm:mt-0 mt-8">
              <Image
                width={512}
                height={512}
                src="/images/services/4.png"
                alt="reactjs logo"
                className="sm:h-[6rem] h-[5rem] sm:w-[6rem] w-[5rem] filter grayscale-[50%] opacity-75 mr-4"
              />
              <Image
                width={512}
                height={512}
                src="/images/services/5.png"
                alt="reactjs logo"
                className="sm:h-[6rem] h-[5rem] sm:w-[6rem] w-[5rem] filter grayscale-[50%] opacity-75 mr-4"
              />
            </div>
          </div>
          <div className="flex items-center p-4 sm:flex-row flex-col">
            <p className="text-lg">
              <b className="text-xl">Database Integration: </b>Seamless
              integration of MongoDB and Firestore ensures efficient data
              management and scalability as your business grows.
            </p>
            <div className="flex sm:w-[24rem] w-full sm:mt-0 mt-8 justify-center">
              <Image
                width={400}
                height={400}
                src="/images/services/6.png"
                alt="reactjs logo"
                className="sm:h-[6rem] h-[5rem] sm:w-[6rem] w-[5rem] filter grayscale-[50%] opacity-75 sm:ml-4 ml-0"
              />
              <Image
                width={512}
                height={512}
                src="/images/services/7.png"
                alt="reactjs logo"
                className="sm:h-[6rem] h-[5rem] sm:w-[6rem] w-[5rem] filter grayscale-[50%] opacity-75 ml-4"
              />
            </div>
          </div>
          <div className="flex items-center p-4 sm:flex-row-reverse flex-col">
            <p className="text-lg">
              <b className="text-xl">Flask and Django Expertise: </b>
              Python-based web application? We have a strong command of Flask
              and Django, offering robust and scalable development.
            </p>
            <div className="flex sm:w-[24rem] w-full sm:mt-0 mt-8 justify-center">
              <Image
                width={220}
                height={210}
                src="/images/services/8.png"
                alt="reactjs logo"
                className="sm:h-[6rem] h-[5rem] sm:w-[6rem] w-[5rem] filter grayscale-[50%] opacity-75 mr-4 invert"
              />
              <Image
                width={200}
                height={200}
                src="/images/services/9.jpg"
                alt="reactjs logo"
                className="sm:h-[6rem] h-[5rem] sm:w-[6rem] w-[5rem] filter grayscale-[50%] opacity-75 mr-4"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button
            className="relative two mb-3 font-bold text-lg underline"
            onClick={() => setIsWeb(!isWeb)}
          >
            <span>Close</span>
            <span className="absolute -bottom-3 left-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
            <span className="absolute -bottom-3 right-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
