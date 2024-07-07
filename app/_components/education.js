import React from "react";
import { AnimatedFadeIn } from "./ui/animatedFadeIn";

const education = [
  {
    title: "HTX",
    location: "ZBC Slagelse",
    date: "September 2017 - June 2020",
  },
  {
    title: "Multimedia Design",
    location: "Zealand Slagelse",
    date: "September 2021 - June 2023",
  },
  {
    title: "Webdevelopment",
    location: "Zealand Roskilde",
    date: "September 2023 - January 2025",
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
        <ul className="space-y-8">
          {education.map((education, index) => (
            <li key={index}>
              <div className="md:flex justify-between items-center border-b border-gray-100/25 pb-10">
                <div className="space-y-4">
                  <h1 className="font-semibold text-4xl">{education.title}</h1>
                  <p className="text-gray-500">{education.location}</p>
                </div>
                <div>
                  <p className="text-gray-500 inline-block">{education.date}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
