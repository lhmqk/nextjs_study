"use client";
import "./section_about.scss";
import { useState } from "react";
export default function Section_About() {
  const [isDetails, setIsDetails] = useState(true);
  return (
    <div
      id="section_about"
      className="snap-center p-8 h-[100vh] text-zinc-200 overflow-y-hidden"
    >
      <div className="h-[2rem] "></div>
      <hr />
      <div
        className={`${
          isDetails ? "" : "h-[0] overflow-hidden opacity-0"
        } transition-all duration-1000 ease-in-out h-[calc(100%-4rem)] flex lg:flex-row flex-col`}
      >
        <div className="flex flex-col lg:h-full h-auto justify-between">
          <div>
            <p className="lg:py-8 md:py-16 py-4 lg:mt-0 md:mt-16 mt-0">
              About me
            </p>
            <p className="font-bold md:text-5xl text-xl md:max-w-[45rem] max-w-full">
              Hey, I'm John. I'm a Computer Engineering student at HCMUT
              <br />
              where my team develops Artificial Intelligence of Things systems.
            </p>
          </div>
          <p className="lg:py-8 md:py-16 py-4 max-w-[45rem]">
            I am a full-stack developer who has worked on a variety of AIoT
            projects, both leading and supporting other team members. I have
            experience in most aspects of web development, including front-end,
            back-end, and database development. I am also proficient in cloud
            computing and server administration. I am currently seeking a new
            opportunity to learn and grow in a challenging and rewarding
            environment.
          </p>
        </div>
        <div className="lg:w-[calc(100%-45rem)] w-full flex lg:flex-col justify-between items-end md:ml-0 ml-auto sm:mt-0 mt-auto">
          <img
            src="/images/avatar.jpg"
            alt="lhmqk avatar"
            className="lg:w-2/3 w-1/3 opacity-75 filter grayscale-[50%] rounded-full lg:mt-24 sm:mb-0 mb-8"
          />
          <button
            className="relative two max-w-fit mb-3 text-lg font-bold underline cursor-pointer"
            onClick={() => setIsDetails(!isDetails)}
          >
            <span>See details</span>
            <span className="absolute -bottom-3 left-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
            <span className="absolute -bottom-3 right-1/2 w-0 transition-all h-1 bg-zinc-200"></span>
          </button>
        </div>
      </div>
      <div
        className={`${
          isDetails ? "h-[0px] overflow-hidden opacity-0" : ""
        }  transition-all duration-500 ease-in-out h-[calc(100%-4rem)] flex lg:flex-row flex-col`}
      >
        <div className="leading-7 sm:max-h-none max-h-[42rem] sm:overflow-y-hidden overflow-y-scroll">
          <p className="text-lg font-bold pt-4">
            Hey, I'm John. Most folks know me as lhmqk online.
          </p>
          <p className="py-4">
            I am a{" "}
            <a href="/" className="underline font-bold">
              third-year Computer Engineering student
            </a>{" "}
            at <a>Ho Chi Minh City University of Technology (HCMUT)</a>, where I
            lead the Artificial Intelligence of Things (AIoT) team. I am
            responsible for developing and implementing manufacturable AIoT
            solutions for the Vietnamese market. My research interests include
            machine learning, deep learning, and embedded systems. I am
            passionate about using technology to solve real-world problems and
            make a positive impact on society.
          </p>
          <hr />
          <p className="pt-4">
            I am passionate about many creative pursuits, including music,
            photography, videography, poetry, and coding. I believe that
            creativity is essential for innovation, and I am constantly looking
            for new ways to use my skills to solve problems and create new
            experiences.
          </p>
          <p className="pt-4">
            I am responsible for the development and deployment of web
            applications, on-premise or cloud databases, and servers. I am
            proficient in a variety of technologies, including MERN, MEAN,
            Django, .NET, JAMStack, and Google Cloud. I am constantly learning
            new technologies and techniques, and I am always looking for ways to
            improve my skills.
          </p>
          <p className="pt-4">
            In addition to my work in artificial intelligence of things (AIoT),
            I am also the co-founder of a startup that is developing a mini
            complex of dining, entertainment, and shopping for young people. I
            also write poems and make music.
          </p>
        </div>
        <div className="lg:w-[calc(100%-45rem)] md:w-[calc(100%-25rem)] w-[calc(100%-10em)] flex flex-col justify-end items-end lg:ml-0 ml-auto">
          <button
            className="relative two max-w-fit mb-3 text-lg font-bold underline cursor-pointer"
            onClick={() => setIsDetails(!isDetails)}
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
