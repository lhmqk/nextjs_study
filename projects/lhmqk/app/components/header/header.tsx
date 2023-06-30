"use client";
import "./header.scss";
import { useEffect, useState } from "react";
export default function Header() {
  const [isHeader, setIsHeader] = useState(true);
  const [viewportSize, setViewportSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setViewportSize("Mobile");
      } else if (width < 1024) {
        setViewportSize("Tablet");
      } else {
        setViewportSize("Desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleClick = () => {
    if (viewportSize === "Mobile") {
      setIsHeader(!isHeader);
    }
  };
  return (
    <div className="flex w-full justify-between">
      <div>
        <a className="font-[1000] text-2xl uppercase" href="/">
          lhmqk
        </a>
      </div>
      <div className="flex">
        <ul
          className={`flex text-zinc-400 sm:flex-row flex-col items-end sm:inline-flex ${
            isHeader
              ? " overflow-hidden sm:static absolute sm:w-fit w-full sm:bg-none sm:text-base text-[0px] sm:text-zinc-200 text-transparent"
              : "absolute h-[calc(100vh-4.5rem)]"
          } h-0 sm:right-6 w-full right-0 sm:top-6 top-[4.5rem] sm:pr-4 pr-6 sm:bg-transparent sm:h-auto  transition-all duration-1000 ease-in-out `}
        >
          <li className="p-2 ml-2 font-bold hover:text-zinc-200 uppercase ">
            <a
              onClick={handleClick}
              className="relative two"
              href="#section_introduction"
            >
              <span>Home</span>
              <span className="absolute -bottom-3 left-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
              <span className="absolute -bottom-3 right-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
            </a>
          </li>
          <li className="p-2 ml-2 font-bold hover:text-zinc-200 uppercase">
            <a
              onClick={handleClick}
              className="relative two"
              href="#section_about"
            >
              <span>About</span>
              <span className="absolute -bottom-3 left-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
              <span className="absolute -bottom-3 right-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
            </a>
          </li>
          <li className="p-2 ml-2 font-bold hover:text-zinc-200 uppercase">
            <a
              onClick={handleClick}
              className="relative two"
              href="#section_services"
            >
              <span>Services</span>
              <span className="absolute -bottom-3 left-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
              <span className="absolute -bottom-3 right-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
            </a>
          </li>
          <li className="p-2 ml-2 font-bold hover:text-zinc-200 uppercase">
            <a
              onClick={handleClick}
              className="relative two"
              href="#section_projects"
            >
              <span>Projects</span>
              <span className="absolute -bottom-3 left-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
              <span className="absolute -bottom-3 right-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
            </a>
          </li>
        </ul>
        <button
          className="p-2 text-gray-500 rounded-lg md:hidden"
          title="Toggle menu"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
