"use client";

import Image from "next/image";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Resume = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#resume",
      start: "top top",
      end: "bottom 150px",
      pin: "#resume-content",
    });
  }, []);
  return (
    <div
      id="resume"
      class="relative container mx-auto flex items-center justify-center group w-fit"
    >
      <div class="translate transition duration-300 -rotate-3 group-hover:-rotate-2 group-hover:scale-95 group-hover:-translate-y-5 relative bg-white rounded-2xl shadow-lg p-6 w-96 text-gray-700">
        <div class="absolute -right-10 top-14 transform transition duration-300 group-hover:-translate-y-4">
          <Image
            class="h-20 w-20 rounded-full border-2 border-white"
            src="/profile.webp"
            width={1000}
            height={1000}
            alt="Picture of the author"
          />
        </div>
        <div class="space-y-8 pb-16">
          <div>
            <h1 class="text-secondary text-2xl font-bold">MARK P. THOMASSEN</h1>
            <h2 class="text-lg font-semibold">Frontend Developer</h2>
          </div>
          <p>
            I am Mark, a frontend developer with three years of experience
            specializing in creating user-friendly websites using ReactJS and
            NextJS. I have a keen eye for detail, excel at optimizing website
            performance, and am adept at implementing responsive design. I am
            passionate about learning new technologies and continuously strive
            to enhance my skills.
          </p>
          <div>
            <a href="mailto:markphillip1800@gmail.com" class="underline block">
              markphillip1800@gmail.com
            </a>
            <p>Slagelse, DK</p>
          </div>
        </div>
      </div>
      <div class="absolute translate-x-40 translate-y-16 transition duration-300 rotate-6 group-hover:scale-95 group-hover:translate-x-36 group-hover:translate-y-20 bg-gray-800 rounded-2xl shadow-lg w-96 text-gray-700 z-[-9999]">
        <Image
          class="object-cover rounded-2xl h-[500px]"
          src="/codesnippet.webp"
          width={500}
          height={500}
          alt="Code Snippet"
        />
      </div>
    </div>
  );
};
