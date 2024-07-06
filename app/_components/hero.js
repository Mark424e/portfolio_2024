"use client";
import Image from "next/image";
import Skillsets from "./ui/skillsets";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const OPTIONS = { loop: true };

export const Hero = () => {
  const boxRef = useRef(null);
  useGSAP(() => {
    gsap.defaults({ ease: "none" });

    const tl = gsap.timeline({ repeat: 0, repeatDelay: 1, yoyo: false });
    tl.to(".description", {
      duration: 4,
      text: "I develop responsive, user-friendly websites with a focus on clean, modern web design.",
    });

    const element = boxRef.current;

    gsap.to(element, {
      rotation: 360,
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "+=2000",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div className="container mx-auto pt-56 pb-28 px-4 md:px-0">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative text-center md:text-start">
          <div className="space-y-4">
            <h1 className="text-7xl md:text-5xl xl:text-7xl font-bold leading-none">
              Hi, I&apos;m
              <span className="bg-gradient-to-t from-primary to-text inline-block text-transparent bg-clip-text">&nbsp;Mark</span>
            </h1>
            <div>
              <h1 className="text-6xl md:text-5xl xl:text-7xl font-bold leading-none">
                Creative Frontend Developer
              </h1>
            </div>
            <p className="description absolute text-xl"></p>
          </div>
          <div className="md:absolute mt-32 md:bottom-0">
            <Image
              className="flex mx-auto md:me-0 lg:me-16 lg:mb-6"
              src="/what_im_good_at_text.svg"
              width={200}
              height={200}
              alt="Picture of the author"
            />
            <Skillsets options={OPTIONS} />
          </div>
        </div>
        <div className="relative flex justify-center">
          <Image
            className="floatingImage h-full z-50"
            src="/hero-image.webp"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div
            ref={boxRef}
            className="absolute w-80 h-80 bg-accent left-0 right-0 mx-auto top-[50%] translate-y-[-50%]"
          ></div>
        </div>
      </div>
    </div>
  );
};
