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

    gsap.to(".resume-card", {
      rotation: -3,
      scale: 1.05,
      scrollTrigger: {
        trigger: ".resume-card",
        start: "top +=700",
        end: "+=500",
        scrub: 2,
      },
    });

    gsap.to(".resume-card_alt", {
      rotation: 6,
      scale: 1.05,
      scrollTrigger: {
        trigger: ".resume-card",
        start: "top +=700",
        end: "+=500",
        scrub: 2,
      },
    });
  }, []);
  return (
    <div id="resume" class="container mx-auto grid py-14 justify-center">
      <div className="w-fit group">
        <div className="resume-card_alt absolute">
          <div class="translate-x-20 transition duration-300 scale-95 group-hover:scale-90 group-hover:translate-x-16 group-hover:translate-y-4 bg-gray-800 rounded-2xl shadow-lg w-56 md:w-96 text-gray-700">
            <Image
              class="object-cover rounded-2xl h-[310px] md:h-[500px]"
              src="/codesnippet.webp"
              width={500}
              height={500}
              alt="Code Snippet"
            />
          </div>
        </div>
        <div className="resume-card">
          <div className="translate transition duration-300 group-hover:rotate-1 group-hover:scale-95 group-hover:-translate-y-5 relative bg-white rounded-2xl shadow-lg p-6 text-base w-56 md:w-96 text-gray-700">
            <div className="absolute -right-10 top-8 transform transition duration-300 group-hover:-translate-y-2">
              <Image
                className="h-20 w-20 rounded-full border-2 border-white"
                src="/profile.webp"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div className="space-y-4 pb-4">
              <div>
                <h1 className="text-accent text-base md:text-2xl font-bold inline-block">
                  MARK THOMASSEN
                </h1>
                <h2 className="text-md md:text-lg font-semibold">
                  Frontend Developer
                </h2>
              </div>
              <div className="relative">
                <p className="relative z-10">
                  I am Mark, a frontend developer with three years of
                  experience, specializing in creating user-friendly websites
                  using ReactJS and recently NextJS.
                  <br />
                  <span className="hidden md:block">
                    I have a keen eye for detail, excel at optimizing website
                    performance, and am adept at implementing responsive design.
                    I am passionate about learning new technologies and
                    continuously strive to enhance my skills.
                  </span>
                </p>
                <div className="block md:hidden z-10 absolute bottom-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
              </div>
              <div className="hidden md:block">
                <a
                  href="mailto:markphillip1800@gmail.com"
                  className="underline"
                >
                  markphillip1800@gmail.com
                </a>
                <p>Slagelse, DK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid justify-center mt-14 md:mt-28">
        <button className="bg-primary transition hover:bg-secondary hover:scale-105 hover:text-text rounded-full w-fit py-4 px-8 text-background">
          View Resume
        </button>
      </div>
      <div className="grid justify-center mt-8">
        <div className="text-gray-500">
          <ul className="flex gap-6">
            <li>
              <a
                className="nav-link hover:text-text"
                href="https://www.linkedin.com/in/markphillip1800/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="nav-link hover:text-text"
                href="https://github.com/Mark424e"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
