"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer } from "./3d-card";
import { AuroraBackground } from "./aurora-background";

const skills = [
  {
    title: "HTML/CSS",
    description:
      "Mastery in HTML and CSS, fundamental for building the structure and styling of web pages. Crucial for creating responsive web designs and dynamic user experiences.",
    imageSrc: "/skillhtmlcss.svg",
  },
  {
    title: "JavaScript",
    description:
      "Proficient in core JavaScript, including DOM manipulation, event handling, and asynchronous programming with promises and async/await. Essential for adding interactivity and enhancing user experiences.",
    imageSrc: "/skilljs.svg",
  },
  {
    title: "ReactJS",
    description:
      "Experienced in developing single-page applications using React. Proficient with React Hooks, Context API, and React Router for efficient state management and navigation.",
    imageSrc: "/skillreactjs.svg",
  },
  {
    title: "NextJS",
    description:
      "Skilled in utilizing Next.js for server-side rendering, static site generation, and optimizing web applications with built-in SEO enhancements.",
    imageSrc: "/skillnextjs.svg",
  },
  {
    title: "web Design",
    description:
      "Proficient in design tools like Figma and Adobe XD for wireframing, UI/UX design, and creating interactive prototypes. Adept at translating design concepts into functional web interfaces.",
    imageSrc: "/logo5.svg",
  },
  {
    title: "SEO",
    description:
      "Experienced in optimizing websites for search engines. Knowledgeable in technical SEO, on-page optimization, and utilizing analytics tools to devise effective SEO strategies.",
    imageSrc: "/skillseo.svg",
  },
];

export const Skills = () => {
  return (
    <AuroraBackground>
        <div className="container mx-auto py-14 space-y-8">
          <h1 className="text-text text-5xl text-center md:text-start font-semibold leading-tight fade-title">
            My
            <br />
            <span className="bg-gradient-to-t from-primary to-text inline-block text-transparent bg-clip-text">
              Skillset
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
            {skills.map((skill) => (
              <CardContainer className="flex bg-gradient-to-r from-gray-950/50 via-gray-950/50 backdrop-blur-xl to-black/80 shadow-xl p-6 rounded-xl flex-col flex-grow">
                  <CardBody className="flex flex-col justify-center items-center gap-4 flex-grow text-center">
                      <div>
                        <Image
                          className="min-h-full object-cover"
                          src={skill.imageSrc}
                          width={50}
                          height={50}
                          alt={`${skill.title} Image`}
                        />
                      </div>
                      <div className="space-y-4">
                        <h1 className="text-xl font-semibold">{skill.title}</h1>
                        <p className="text-sm">{skill.description}</p>
                      </div>
                  </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
    </AuroraBackground>
  );
};
