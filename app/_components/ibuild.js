"use client";

import React, { useRef } from "react";
import { FlipWords } from "./ui/flip-words";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Ibuild = () => {
  const topTextRef = useRef(null);
  const middleTextRef = useRef(null);
  const bottomTextRef = useRef(null);
  useGSAP(() => {
    const topTextElement = topTextRef.current;
    const middleTextElement = middleTextRef.current;
    const bottomTextElement = bottomTextRef.current;

    // MatchMedia for different breakpoints
    const mm = gsap.matchMedia();

    mm.add("(max-width: 639px)", () => {
      // Mobile
      gsap.to(topTextElement, {
        translateX: 30,
        opacity: 1,
        scrollTrigger: {
          trigger: middleTextElement,
          start: "top 600",
          end: "+=200",
          scrub: 2,
        },
      });
      gsap.to(bottomTextElement, {
        translateX: -30,
        opacity: 1,
        scrollTrigger: {
          trigger: middleTextElement,
          start: "top 600",
          end: "+=200",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 640px) and (max-width: 767px)", () => {
      // Mobile
      gsap.to(topTextElement, {
        translateX: 100,
        opacity: 1,
        scrollTrigger: {
          trigger: middleTextElement,
          start: "top 600",
          end: "+=200",
          scrub: 2,
        },
      });
      gsap.to(bottomTextElement, {
        translateX: -100,
        opacity: 1,
        scrollTrigger: {
          trigger: middleTextElement,
          start: "top 600",
          end: "+=200",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      // Tablet sm
      gsap.to(topTextElement, {
        translateX: 150,
        opacity: 1,
        scrollTrigger: {
          trigger: middleTextElement,
          start: "top 600",
          end: "+=200",
          scrub: 2,
        },
      });
      gsap.to(bottomTextElement, {
        translateX: -150,
        opacity: 1,
        scrollTrigger: {
          trigger: middleTextElement,
          start: "top 600",
          end: "+=200",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1024px) and (max-width: 1279px)", () => {
      // Tablet lg
      gsap.to(topTextElement, {
        translateX: 250,
        opacity: 1,
        scrollTrigger: {
          trigger: middleTextElement,
          start: "top 600",
          end: "+=200",
          scrub: 2,
        },
      });
      gsap.to(bottomTextElement, {
        translateX: -250,
        opacity: 1,
        scrollTrigger: {
          trigger: middleTextElement,
          start: "top 600",
          end: "+=200",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1280px)", () => {
      // Laptop
      gsap.to(topTextElement, {
        translateX: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: middleTextElement,
          start: "top 600",
          end: "+=200",
          scrub: 2,
        },
      });
      gsap.to(bottomTextElement, {
        translateX: -400,
        opacity: 1,
        scrollTrigger: {
          trigger: middleTextElement,
          start: "top 600",
          end: "+=200",
          scrub: 2,
        },
      });
    });

    mm.add("(min-width: 1536px)", () => {
      // Desktop
      gsap.to(topTextElement, {
        translateX: 400,
        opacity: 1,
        scrollTrigger: {
          trigger: middleTextElement,
          start: "top 600",
          end: "+=200",
          scrub: 2,
        },
      });
      gsap.to(bottomTextElement, {
        translateX: -400,
        opacity: 1,
        scrollTrigger: {
          trigger: middleTextElement,
          start: "top 600",
          end: "+=200",
          scrub: 2,
        },
      });
    });

    // Clean up matchMedia listeners on unmount
    return () => mm.revert();
  }, []);

  const words = ["optimized", "polished", "outstanding", "beautiful", "modern"];

  return (
    <div className="container mx-auto py-14 md:py-40 lg:py-64 px-4 md:px-0 cursor-default">
      <div className="relative">
        <div className="flex justify-start text-lg leading-8 text-gray-500">
          <p className="w-full sm:w-1/2 xl:w-1/3">
            I&apos;m passionate about designing and building websites that are clean, modern and enjoyable to use. With a background in UI design and front-end development, I love turning ideas into beautiful and functional experiences. I also enjoy working closely with others to bring a vision to life and make the process creative and fun.
          </p>
        </div>
        <div className="py-8">
          <p
            ref={topTextRef}
            className="opacity-0 text-start text-4xl md:text-6xl lg:text-7xl mx-auto font-semibold text-text"
          >
            I deliver
          </p>
          <div className="block lg:hidden text-center text-6xl md:text-8xl lg:text-9xl mx-auto font-bold italic">
            <p className="z-10 inline-block bg-gradient-to-t from-primary to-text text-transparent bg-clip-text text-nowrap p-4">
              POLISHED
            </p>
          </div>
          <div
            ref={middleTextRef}
            className="hidden lg:block text-center text-6xl md:text-8xl lg:text-9xl mx-auto font-bold italic"
          >
            <FlipWords words={words} />
          </div>
          <p
            ref={bottomTextRef}
            className="opacity-0 text-end text-4xl md:text-6xl lg:text-7xl mx-auto font-semibold text-text"
          >
            Websites
          </p>
        </div>
        <div className="flex justify-end text-lg leading-8 text-gray-500">
          <p className="w-full sm:w-1/2 xl:w-1/3">
            I live in Denmark and spend a lot of my free time with friends, whether that&apos;s gaming together online or meeting up in person. Music is a big part of my life too. I&apos;m always exploring new genres, finding hidden gems and creating some of my own tracks.
          </p>
        </div>
        <div className="absolute top-0 h-full w-full -z-50">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-0 right-0 mx-auto -translate-y-1/2 h-28 w-28 md:h-64 md:w-96 shadow-white/10 shadow-3xl blur-3xl bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
