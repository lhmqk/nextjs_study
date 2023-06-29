"use client";
import React from "react";
import Header from "../../header/header";
import "./section_introduction.scss";
import { useInView } from "react-intersection-observer";

export default function Section_Introduction() {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  return (
    <div
      id="section_introduction"
      className="snap-center p-8 h-[100vh] bg-zinc-900 text-zinc-200 overflow-hidden"
    >
      <Header></Header>
      <hr />
      <div className="h-[calc(100%-4rem)] flex lg:flex-row flex-col">
        <div className="flex flex-col lg:h-full h-auto justify-between">
          <div>
            <div ref={ref} className={` ${inView ? "fade-in-up visible" : ""}`}>
              <p className="lg:py-8 md:py-16 py-4 mt-0">
                Enactment of your remedy
              </p>
            </div>

            <p
              ref={ref}
              className={` ${
                inView ? "fade-in-up visible" : ""
              } font-bold md:text-5xl text-3xl max-w-[45rem]`}
            >
              Technology's dance, crafting your dreams,
              <br />
              Enchanting solutions, in digital streams.
            </p>
          </div>
          <p
            ref={ref}
            className={` ${
              inView ? "fade-in-up visible" : ""
            } lg:py-8 md:py-16 py-4 max-w-[25rem]`}
          >
            Dream weaver, code sculptor, their skills entwined,
            <br />A Fullstack Web Developer, seeking worlds to find.
            <br />
            With artistry in code, they craft digital symphony,
            <br />
            Seeking job opportunities, where their talents shall be.
          </p>
        </div>
        <div className="lg:w-[calc(100%-45rem)] md:w-[calc(100%-25rem)] w-[calc(100%-10em)] flex flex-col justify-end lg:ml-0 ml-auto">
          <div
            ref={ref}
            className={` ${inView ? "fade-in-right visible" : ""} m-[0]`}
            id="container"
          >
            <div id="circle" className="relative w-full overflow-hidden">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 300 300"
                enableBackground="new 0 0 300 300"
                xmlSpace="preserve"
                className="w-full"
              >
                <defs>
                  <path
                    id="circlePath"
                    d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <circle cx="150" cy="100" r="75" fill="none" />
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text
                    fill="#ffffff"
                    className="uppercase text-[1em] font-bold"
                  >
                    <textPath xlinkHref="#circlePath">
                      Enchanting solutions in digital stream.
                    </textPath>
                  </text>
                </g>
                <svg
                  x="120"
                  y="120"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clipRule="evenodd"
                  />
                </svg>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
