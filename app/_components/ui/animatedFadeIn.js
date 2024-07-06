"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedFadeIn = ({ children, className = "" }) => {
  const elementsRef = useRef([]);

  useGSAP(() => {
    elementsRef.current.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "top center",
          toggleActions: "restart none none reset",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ref: (el) => (elementsRef.current[index] = el),
          className: `${className} ${child.props.className || ""}`,
        })
      )}
    </>
  );
};
