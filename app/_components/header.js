"use client";

import Link from "next/link";
import { Clock } from "./clock";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const Header = () => {
  const handleScrollTo = (target) => {
    gsap.to(window, { duration: 1, scrollTo: target, ease: "power2.inOut" });
  };

  return (
    <header className="hidden md:block">
      <div className="absolute left-0 right-0 h-auto">
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-56">
            <div className="text-xl font-bold">
              <Link href="/">Mark Thomassen</Link>
            </div>
            <ul className="flex space-x-8 items-center uppercase text-xs">
              <li>
                <Clock timeZone="Europe/Copenhagen" />
              </li>
              <li>
                <div className="border border-gray-100/25 py-2 px-3 rounded-full flex items-center gap-2">
                  <div className="relative">
                    <div className="rounded-full w-2 h-2 bg-green-500 animate-ping absolute "></div>
                    <div className="rounded-full w-2 h-2 bg-green-400"></div>
                  </div>
                  <p className="uppercase text-xs">Open to work</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed left-[50%] translate-x-[-50%] z-[1000] bottom-6">
        <div className="backdrop-blur-sm bg-gray-900/70 py-5 px-6 rounded-full border border-gray-100/25">
          <ul className="flex space-x-8 items-center text-sm">
            <li>
              <button
                onClick={() => handleScrollTo("#skills")}
                className="nav-link"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("#work")}
                className="nav-link"
              >
                Work
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("#resume")}
                className="nav-link"
              >
                Resume
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("#contact")}
                className="nav-link"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
