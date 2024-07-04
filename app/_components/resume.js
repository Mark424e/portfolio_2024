"use client";

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
    <div id="resume" className="container mx-auto md:h-[100vh]">
      <div id="resume-content">
        Resume
      </div>
    </div>
  );
};
