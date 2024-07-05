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
      <div className="w-fit group relative">
        <div className="resume-card_alt absolute">
          <div class="translate-x-16 group-hover:translate-x-14 group-hover:translate-y-4 transition duration-300 scale-95 group-hover:scale-90 md:translate-x-28 md:translate-y-4 md:group-hover:translate-x-20 md:group-hover:translate-y-8 bg-gray-800 rounded-2xl shadow-lg w-56 md:w-80 text-gray-700">
            <Image
              class="object-cover rounded-2xl h-[310px] md:h-[500px]"
              src="/codesnippet.webp"
              width={500}
              height={500}
              alt="Code Snippet"
            />
          </div>
        </div>
        <div className="resume-card relative">
          <div className="translate transition duration-300 group-hover:rotate-1 group-hover:scale-95 group-hover:-translate-y-5 relative bg-white rounded-2xl shadow-lg p-6 text-base w-56 md:w-80 text-gray-700">
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
        <div className="absolute top-0 translate-y-28 h-full w-full -z-50">
          <div className="relative w-full h-full">
            <div className="absolute top-0 h-28 w-28 md:h-80 md:w-80 -left-1/3 shadow-primary shadow-3xl blur-3xl bg-primary rounded-full"></div>
            <div className="absolute top-0 h-28 w-28 md:h-80 md:w-80 -right-1/3 shadow-secondary shadow-3xl blur-3xl bg-secondary rounded-full"></div>
            <div className="absolute top-0 h-28 w-28 md:h-80 md:w-80 left-0 right-0 translate-y-1/2 shadow-accent shadow-3xl blur-3xl bg-accent rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="grid justify-center mt-14 md:mt-28">
        <a href="https://drive.google.com/file/d/1W3R0WUfp__Ghl8Oi7qt--B2ZSdrFb2kY/view" target="_blank" class="group relative inline-block h-[60px] w-[200px] overflow-hidden rounded-full text-lg text-background">
          <div class="h-[inherit] w-[inherit] overflow-hidden rounded-full bg-primary [transition:_transform_1.5s_cubic-bezier(.19,1,.22,1)] group-hover:scale-[.94]">
            <span class="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-accent [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_200ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_270ms]" />
            <span class="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-primary [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_300ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_470ms]" />
            <span class="absolute bottom-0 left-1/2 z-20 block h-[200%] w-[120%] -translate-x-0 translate-y-[100%] bg-secondary [border-radius:999px_999px_0_0] [translate:-50%] group-hover:translate-y-[10px] group-hover:[border-radius:60%_60%_0_0] group-hover:[transition:_transform_1s_cubic-bezier(.19,1,.22,1)_380ms,_border-radius_.2s_cubic-bezier(.19,1,.22,1)_670ms]" />
          </div>

          <span class="absolute inset-0 z-10 m-auto flex w-4/5 items-center justify-center font-semibold group-hover:-translate-y-1/3 group-hover:opacity-0 group-hover:[transition:_transform_1s_cubic-bezier(.32,.99,.49,.99),_opacity_.4s]">
            View Resume
          </span>
          <span class="absolute inset-0 z-10 m-auto flex w-4/5 translate-y-1/3 items-center justify-center font-semibold opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:[transition:_1s_all_cubic-bezier(.32,.99,.49,.99)] text-text">
            View Resume
          </span>
        </a>
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
