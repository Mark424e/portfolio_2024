import React from "react";
import { FlipWords } from "./ui/flip-words";

export const Ibuild = () => {
  const words = ["optimized", "elegant", "outstanding", "beautiful", "modern"];

  return (
    <div className="container mx-auto py-14 px-4 md:px-0">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I build
        <FlipWords words={words} />
        websites
      </div>
    </div>
  );
};
