"use client";
import "./section_services.scss";
import { useState } from "react";
export default function Section_Services() {
  const [isDetails, setIsDetails] = useState(true);
  return (
    <div
      id="section_services"
      className="snap-center p-8 h-[100vh] text-zinc-200 overflow-y-hidden"
    >
      <div className="h-[2rem] "></div>
      <hr />
      <div className={`h-[calc(100%-4rem)]`}>
        <p className="lg:py-8 md:py-16 py-4 lg:mt-0 md:mt-16 mt-0">Services</p>
      </div>
      <hr />
    </div>
  );
}
