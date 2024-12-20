"use client";

import React from "react";
import Image from "next/image";
import { Clock } from "./ui/clock";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const Footer = () => {
  const handleScrollTo = (target) => {
    gsap.to(window, { duration: 1, scrollTo: {y: target, offsetY: -200}, ease: "power2.inOut" });
  };

  return (
    <div className="bg-gray-950/50 pt-64 pb-28 border-t border-gray-100/25 px-4 md:px-0">
      <div className="container mx-auto space-y-28">
        <div className="space-y-10">
          <div>
            <h1 className="text-7xl md:text-5xl xl:text-7xl font-bold leading-none">
              Let&apos;s
            </h1>
            <h1 className="text-7xl md:text-5xl xl:text-7xl font-bold leading-none bg-gradient-to-t from-primary to-text inline-block text-transparent bg-clip-text">
              Connect.
            </h1>
          </div>
          <div>
            <a
              className="text-gray-500 nav-link hover:text-text"
              href="mailto:markphillip1800@gmail.com"
            >
              markphillip1800@gmail.com
            </a>
          </div>
          <div>
            <ul className="flex gap-6">
              <li className="transition hover:scale-125">
                <a
                  href="https://www.linkedin.com/in/markphillip1800/"
                  target="_blank"
                >
                  <Image
                    src="/linkedin.svg"
                    width={25}
                    height={25}
                    alt="Social Media Icon"
                  />
                </a>
              </li>
              <li className="transition hover:scale-125">
                <a href="https://github.com/Mark424e" target="_blank">
                  <Image
                    src="/github.svg"
                    width={25}
                    height={25}
                    alt="Social Media Icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <nav>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <li>
                <button onClick={() => handleScrollTo("#skills")} className="text-left grid space-y-4">
                  <span className="text-xl">Skills</span>
                  <span className="hidden md:block text-gray-500">
                    Check out the things I&apos;m good at, from building websites to
                    design and more.
                  </span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("#work")} className="text-left grid space-y-4">
                  <span className="text-xl">Experience</span>
                  <span className="hidden md:block text-gray-500">
                    Check out the things I&apos;m good at, from building websites to
                    design and more.
                  </span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("#resume")} className="text-left grid space-y-4">
                  <span className="text-xl">Resume</span>
                  <span className="hidden md:block text-gray-500">
                    See my work history and what I&apos;ve achieved in a quick and
                    easy resume.
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="py-8 flex justify-center items-center">
            <div className="flex gap-2 items-center w-full">
              <div className="h-[1px] w-full bg-white me-4"></div>
              <button onClick={() => handleScrollTo("#home")}>
                <Image
                  src="/webdevmark.svg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </button>
              <div className="h-[1px] w-full bg-white ms-4"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="text-xs text-white/50 text-center space-y-2">
              <p>&copy; 2024 Mark Thomassen</p>
              <p>Powered by Vercel, Next.js, and Github.</p>
              <Clock timeZone="Europe/Copenhagen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
