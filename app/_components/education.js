import React from "react";
import { AnimatedFadeIn } from "./ui/animatedFadeIn";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    title: "HTX",
    location: "ZBC Slagelse",
    date: "2017 - 2020",
  },
  {
    title: "Multimedia Design",
    location: "Zealand Slagelse",
    date: "2021 - 2023",
  },
  {
    title: "Webdevelopment",
    location: "Zealand Roskilde",
    date: "2023 - 2025",
  },
];

export const Education = () => {
  return (
    <div className="container mx-auto py-14 md:py-40 lg:py-64 px-4 md:px-0">
      <div className="space-y-8">
        <AnimatedFadeIn>
          <h1 className="text-5xl lg:text-7xl text-center md:text-start font-semibold leading-tight fade-title">
            Education
            <br />
            <span className="bg-gradient-to-t from-primary to-text inline-block text-transparent bg-clip-text pb-2">
              History
            </span>
          </h1>
        </AnimatedFadeIn>
        <ul>
          {education.map((education, index) => (
            <li key={index}>
              <div className="md:grid grid-cols-3 items-start border-b border-gray-100/25 py-10 relative">
                <span className="spanPham absolute w-full h-full bg-primary text-[#0d0d0d] clip-path-[polygon(0_50%,_100%_50%,_100%_50%,_0_50%)] origin-center transition-all ease-[cubic-bezier(0.1,0.5,0.5,1)] duration-400 flex flex-col justify-center">
                  <div className="md:grid grid-cols-3 items-start border-b border-gray-100/25 py-10 relative">
                    <div className="lg:order-2 lg:text-end">
                      <p className="text-4xl lg:text-5xl xl:text-6xl inline-block">
                        {education.date}
                      </p>
                    </div>
                    <div className="lg:order1 space-y-2 col-span-2">
                      <h1 className="text-4xl lg:text-5xl xl:text-6xl">
                        {education.title}
                      </h1>
                      <p>{education.location}</p>
                    </div>
                  </div>
                </span>
                <div className="lg:order-2 lg:text-end">
                  <p className="text-4xl lg:text-5xl xl:text-6xl inline-block">
                    {education.date}
                  </p>
                </div>
                <div className="lg:order1 space-y-2 col-span-2">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl">
                    {education.title}
                  </h1>
                  <p className="text-gray-500">{education.location}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
