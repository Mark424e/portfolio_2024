"use client";

import { React } from "react";
import Image from "next/image";
import { AnimatedFadeIn } from "./ui/animatedFadeIn";
/*
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
*/
const projects = [
  {
    title: "Ice Cream Landingpage",
    description:
      "One of my early projects involved using pure HTML for structure, applying CSS for styling, and leveraging SASS to create more efficient and maintainable styles.",
    vercelLink: "https://gilleleje-isen.vercel.app/",
    githubLink: "https://github.com/Mark424e/Gilleleje-Isen",
    technologies: ["HTML", "CSS", "Sass"],
    imageSrc: "/project3.webp",
  },
  {
    title: "Lemonade Webshop",
    description:
      "A modern lemonade webshop developed with React, featuring dynamic product displays, real-time inventory management, and a sleek, fully responsive design.",
    vercelLink: "https://lemonadestand-mark.vercel.app/",
    githubLink: "https://github.com/Mark424e/lemonadestand",
    technologies: ["React", "JavaScript", "Axios", "TailWindCSS"],
    imageSrc: "/project2.webp",
  },
  {
    title: "E-Commerce Webshop",
    description:
      "An e-commerce webshop that offers login/register features with efficient product management, cart information, and a modern, responsive design.",
    // vercelLink: "NO LINK",
    githubLink: "https://github.com/Mark424e/webshop",
    technologies: ["PHP", "MySQL", "TailWindCSS"],
    imageSrc: "/project4.webp",
  },
  {
    title: "React Weather Application",
    description:
      "A weather application that provides real-time weather updates, forecasts, and a responsive design for an optimal viewing experience.",
    vercelLink: "https://weather-app-mark.vercel.app/",
    githubLink: "https://github.com/Mark424e/react-weather-app",
    technologies: ["React", "JavaScript", "Axios", "TailWindCSS"],
    imageSrc: "/project1.webp",
  },
  {
    title: "NextJS Weather Application",
    description:
      "A similar weather application to my previous project, this one is built using Next.js and TypeScript to deepen my expertise with these technologies.",
    vercelLink: "https://nextjs-weather-app-mark.vercel.app/",
    githubLink: "https://github.com/Mark424e/nextjs-weather-app",
    technologies: ["NextJS", "Typescript", "Axios", "TailWindCSS"],
    imageSrc: "/project6.webp",
  },
  {
    title: "Law Firm Website",
    description:
      "During my third semester, I completed a 10-week internship at MLaw, where I was tasked with building a brand-new website using WordPress",
    vercelLink: "https://mlaw.dk/",
    // githubLink: "",
    technologies: ["WordPress", "WampServer", "PHP", "SEO"],
    imageSrc: "/project5.webp",
  },
];

export const Projects = () => {
  /*
  useGSAP(() => {
    gsap.from(".fade-title", {
      scrollTrigger: {
        trigger: ".fade-title",
        start: "top bottom",
        end: "top center",
        toggleActions: "restart none none reset",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
    });

    projects.forEach((_, index) => {
      gsap.from(`.fade-object-${index}`, {
        scrollTrigger: {
          trigger: `.fade-object-${index}`,
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
  */

  return (
    <div className="container mx-auto py-14 md:py-40 lg:py-64 px-4 md:px-0">
      <div className="space-y-8">
        <AnimatedFadeIn>
          <h1 className="text-5xl lg:text-7xl text-center md:text-start font-semibold leading-tight fade-title">
            My
            <br />
            <span className="bg-gradient-to-t from-primary to-text inline-block text-transparent bg-clip-text pb-2">
              Projects
            </span>
          </h1>
        </AnimatedFadeIn>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <li key={index} className={`flex fade-object-${index}`}>
              <div className="bg-gray-950/50 border border-gray-100/25 transition hover:border-gray-200/50 p-4 rounded-xl flex flex-col flex-grow">
                <div className="grid xl:grid-cols-2 gap-4 flex-grow">
                  <div className="flex flex-col justify-between gap-8 flex-grow">
                    <div className="space-y-4">
                      <h1 className="text-xl font-semibold">{project.title}</h1>
                      <p className="text-sm">{project.description}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="text-xs">
                        {project.vercelLink && (
                          <>
                            <a
                              className="nav-link text-gray-500 hover:text-text"
                              href={project.vercelLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View site
                            </a>
                            <br />
                          </>
                        )}
                        {project.githubLink && (
                          <a
                            className="nav-link text-gray-500 hover:text-text"
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Github
                          </a>
                        )}
                      </div>
                      <div>
                        <ul className="flex flex-wrap gap-2 text-sm text-text">
                          {project.technologies.map((tech, idx) => (
                            <li
                              key={idx}
                              className="bg-accent px-2 rounded-full"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="transition md:hover:scale-95">
                    <a
                      href={project.vercelLink || project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="min-h-full object-cover rounded-xl"
                        src={project.imageSrc}
                        width={1920}
                        height={1080}
                        alt={`${project.title} Image`}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
