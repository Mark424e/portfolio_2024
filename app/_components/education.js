import React from "react";
import { AnimatedFadeIn } from "./ui/animatedFadeIn";

export const Education = () => {
  return (
    <div className="container mx-auto py-14 md:py-40 lg:py-64 px-4 md:px-0">
      <div className="space-y-8">
        <AnimatedFadeIn>
          <h1 className="text-5xl text-center md:text-start font-semibold leading-tight fade-title">
            Education
            <br />
            <span className="bg-gradient-to-t from-primary to-text inline-block text-transparent bg-clip-text">
              History
            </span>
          </h1>
        </AnimatedFadeIn>
      </div>
    </div>
  );
};
