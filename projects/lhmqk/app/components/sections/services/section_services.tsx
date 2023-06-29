"use client";
import "./section_services.scss";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
export default function Section_Services() {
  const [isWeb, setIsWeb] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  return (
    <div
      id="section_services"
      className="snap-center p-8 h-[100vh] text-zinc-200 overflow-y-hidden"
    >
      <div className="h-[2rem] "></div>
      <hr />
      <div
        className={`${
          isWeb
            ? "lg:h-[calc(100%-4rem)] h-[calc(100%-8rem)]"
            : "h-0 overflow-hidden opacity-0"
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
          <button className="relative two">
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
          <button className="relative two">
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
          <button className="relative two">
            <span className="font-semibold underline sm:text-base text-[10px]">
              Don't miss this view!
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
        <div>
          <div className="flex items-center p-4">
            <p className="text-lg">
              <b className="text-xl">Stunning User Experience: </b>We create
              seamless interfaces using latest web frameworks and languages:
              ReactJS, NextJS, and Angular. From sleek landing pages to
              e-commerce platforms, we bring your vision to life.
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="reactjs logo"
              className="h-[6rem] filter grayscale-[50%] opacity-75 ml-4"
            />
            <img
              src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
              alt="reactjs logo"
              className="h-[6rem] filter grayscale-[50%] opacity-75 ml-4"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
              alt="reactjs logo"
              className="h-[6rem] filter grayscale-[50%] opacity-75 ml-4"
            />
          </div>
          <div className="flex items-center p-4 flex-row-reverse">
            <p className="text-lg">
              <b className="text-xl">Performance-Driven Solutions: </b>With
              expertise in .NET Core, NodeJS, and ExpressJS, we build
              high-performance websites for a smooth browsing experience.
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png"
              alt="reactjs logo"
              className="h-[6rem] filter grayscale-[50%] opacity-75 mr-4"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
              alt="reactjs logo"
              className="h-[6rem] filter grayscale-[50%] opacity-75 mr-4"
            />
          </div>
          <div className="flex items-center p-4">
            <p className="text-lg">
              <b className="text-xl">Database Integration: </b>Seamless
              integration of MongoDB and Firestore ensures efficient data
              management and scalability as your business grows.
            </p>
            <img
              src="https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png"
              alt="reactjs logo"
              className="h-[6rem] filter grayscale-[50%] opacity-75 ml-4"
            />
            <img
              src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_firestore_icon_130604.png"
              alt="reactjs logo"
              className="h-[6rem] filter grayscale-[50%] opacity-75 ml-4"
            />
          </div>
          <div className="flex items-center p-4 flex-row-reverse">
            <p className="text-lg">
              <b className="text-xl">Flask and Django Expertise: </b>
              Python-based web application? We have a strong command of Flask
              and Django, offering robust and scalable development.
            </p>
            <img
              src="https://www.pngfind.com/pngs/m/128-1286693_flask-framework-logo-svg-hd-png-download.png"
              alt="reactjs logo"
              className="h-[6rem] filter grayscale-[50%] opacity-75 mr-4 invert"
            />
            <img
              src="https://cdn-images.threadless.com/threadless-media/artist_shops/shops/django/products/220963/original-1582297809-33f3e434bab7633744d99012eec6986d.jpg?v=3&d=eyJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMGM0YjMzIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV0sICJmb3JjZSI6IGZhbHNlLCAib25seV9tZXRhIjogZmFsc2V9"
              alt="reactjs logo"
              className="h-[6rem] filter grayscale-[50%] opacity-75 mr-4"
            />
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
