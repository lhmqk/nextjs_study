"use client";
import "./section_about.scss";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
export default function Section_About() {
  const [isDetails, setIsDetails] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  return (
    <div
      id="section_about"
      className="snap-center p-8 h-[100vh] text-zinc-200 overflow-hidden"
    >
      <div className="h-[2rem] "></div>
      <hr />
      <div
        className={`${
          isDetails ? "" : "h-[0rem] overflow-hidden opacity-0"
        } transition-all duration-1000 ease-in-out h-[calc(100%-4rem)] flex lg:flex-row flex-col`}
      >
        <div className="flex flex-col lg:h-full h-auto justify-between">
          <div>
            <p
              ref={ref}
              className={` ${
                inView ? "fade-in-up visible" : ""
              } lg:py-8 md:py-16 py-4 mt-0`}
            >
              About me
            </p>
            <p
              ref={ref}
              className={` ${
                inView ? "fade-in-up visible" : ""
              } font-bold md:text-5xl text-xl md:max-w-[45rem] max-w-full`}
            >
              Hey, I'm John. I'm a Computer Engineering student at HCMUT
              <br />
              where my team develops Artificial Intelligence of Things systems.
            </p>
          </div>
          <p
            ref={ref}
            className={` ${
              inView ? "fade-in-up visible" : ""
            } md:py-8 py-4 max-w-[45rem]`}
          >
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
            ref={ref}
            className={` ${
              inView ? "fade-in-right visible" : ""
            } lg:w-2/3 w-1/3 opacity-75 filter grayscale-[50%] rounded-full lg:mt-24 sm:mb-0 mb-8`}
            src="/images/avatar.jpg"
            alt="lhmqk avatar"
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
      <hr />
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
            <a
              href="https://en.wikipedia.org/wiki/Computer_engineering"
              className="underline font-bold"
            >
              third-year Computer Engineering student
            </a>{" "}
            at{" "}
            <a
              href="https://en.wikipedia.org/wiki/Ho_Chi_Minh_City_University_of_Technology"
              className="underline font-bold"
            >
              Ho Chi Minh City University of Technology (HCMUT)
            </a>
            , where I lead the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Artificial_intelligence_of_things"
              className="underline font-bold"
            >
              Artificial Intelligence of Things
            </a>{" "}
            (AIoT) team. I am responsible for developing and implementing
            manufacturable AIoT solutions for the Vietnamese market. My research
            interests include{" "}
            <a
              href="https://en.wikipedia.org/wiki/Machine_learning"
              className="underline font-bold"
            >
              machine learning
            </a>
            ,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Deep_learning"
              className="underline font-bold"
            >
              deep learning
            </a>
            , and{" "}
            <a
              href="https://en.wikipedia.org/wiki/Embedded_system"
              className="underline font-bold"
            >
              embedded systems
            </a>
            . I am passionate about using technology to solve real-world
            problems and make a positive impact on society.
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
            I am responsible for the development and deployment of{" "}
            <a
              href="https://en.wikipedia.org/wiki/Web_application"
              className="underline font-bold"
            >
              web applications
            </a>
            , aon-premise or cloud{" "}
            <a
              href="https://en.wikipedia.org/wiki/Database"
              className="underline font-bold"
            >
              databases
            </a>
            , and{" "}
            <a
              href="https://en.wikipedia.org/wiki/Server_(computing)"
              className="underline font-bold"
            >
              servers
            </a>
            . I am proficient in a variety of technologies, including{" "}
            <a
              href="https://en.wikipedia.org/wiki/MERN_(solution_stack)"
              className="underline font-bold"
            >
              MERN
            </a>
            ,{" "}
            <a
              href="https://en.wikipedia.org/wiki/MEAN_(solution_stack)"
              className="underline font-bold"
            >
              MEAN
            </a>
            ,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Next.js"
              className="underline font-bold"
            >
              Nextjs
            </a>
            ,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Flask_(web_framework)"
              className="underline font-bold"
            >
              Flask
            </a>
            ,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Django_(web_framework)"
              className="underline font-bold"
            >
              Django
            </a>
            ,{" "}
            <a
              href="https://en.wikipedia.org/wiki/.NET"
              className="underline font-bold"
            >
              .NET
            </a>
            ,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Jamstack"
              className="underline font-bold"
            >
              JAMStack
            </a>
            , and{" "}
            <a
              href="https://en.wikipedia.org/wiki/Google_Cloud_Platform"
              className="underline font-bold"
            >
              Google Cloud Platform
            </a>
            . I am constantly learning new technologies and techniques, and I am
            always looking for ways to improve my skills.
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
