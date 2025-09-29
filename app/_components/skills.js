"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer } from "./ui/3d-card";
import { AuroraBackground } from "./ui/aurora-background";
import { AnimatedFadeIn } from "./ui/animatedFadeIn";

const skills = [
  {
    title: "UI/UX Design",
    description:
      "Expert in crafting intuitive, user-centered interfaces with a strong focus on usability and aesthetics. Skilled in creating wireframes, prototypes, and full visual designs.",
    imageSrc: "/skilluiux.svg",
  },
  {
    title: "Web Design",
    description:
      "Proficient in Figma and Adobe XD to design modern, responsive, and accessible websites. Experienced in turning creative concepts into visually engaging digital experiences.",
    imageSrc: "/skillwebdesign.svg",
  },
  {
    title: "Branding & Visual Identity",
    description:
      "Capable of developing cohesive branding systems including color palettes, typography, and style guides to ensure consistency across digital platforms.",
    imageSrc: "/skillbranding.svg",
  },
  {
    title: "Creative Frontend Development",
    description:
      "Combining design with frontend coding. Skilled in HTML, CSS, and JavaScript to bring static designs to life with animations, interactions, and responsiveness.",
    imageSrc: "/skillfrontend.svg",
  },
  {
    title: "React & Next.js",
    description:
      "Able to implement pixel-perfect designs into React and Next.js with focus on performance, accessibility, and SEO best practices.",
    imageSrc: "/skillreactnext.svg",
  },
  {
    title: "SEO & Accessibility",
    description:
      "Experienced in making websites not only visually appealing but also discoverable and usable for all audiences. Knowledgeable in on-page SEO, semantic HTML, and WCAG guidelines.",
    imageSrc: "/skillseo.svg",
  },
];

export const Skills = () => {
  return (
    <div className="relative">
      <div className="block z-10 absolute top-0 w-full h-12 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
      <div className="block z-10 absolute bottom-0 w-full h-12 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
      <div className="container mx-auto py-14 md:py-40 lg:py-64 space-y-8">
        <AnimatedFadeIn>
          <h1 className="text-5xl lg:text-7xl text-center md:text-start font-semibold leading-tight fade-title">
            My
            <br />
            <span className="bg-gradient-to-t from-primary to-text inline-block text-transparent bg-clip-text pb-2">
              Skillset
            </span>
          </h1>
        </AnimatedFadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
          {skills.map((skill, index) => (
            <CardContainer
              key={index}
              className="flex bg-gradient-to-r from-gray-950/50 via-gray-950/50 backdrop-blur-xl to-black/80 shadow-xl p-6 rounded-xl flex-col flex-grow"
            >
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
    </div>
  );
};
