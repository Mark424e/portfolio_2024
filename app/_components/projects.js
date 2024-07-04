import { React } from "react";
import Image from "next/image";

export const Projects = () => {
  return (
    <div id="projects" className="container mx-auto">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <li>
          <div className="bg-gray-950/50 border border-gray-100/25 transition hover:border-gray-200/50 p-4 rounded-xl">
            <div className="grid xl:grid-cols-2 gap-4">
              <div className="flex flex-col justify-between gap-8">
                <div className="space-y-4">
                  <h1 className="text-xl font-semibold">
                    React Weather Application
                  </h1>
                  <p className="text-sm">
                    A weather application that provides real-time weather
                    updates, forecasts, and a responsive design for an optimal
                    viewing experience.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="text-xs">
                    <a
                      className="nav-link text-gray-500 hover:text-text"
                      href="https://weather-app-mark.vercel.app/"
                      target="_blank"
                    >
                      View on Vercel
                    </a>
                    <br />
                    <a
                      className="nav-link text-gray-500 hover:text-text"
                      href="https://github.com/Mark424e/react-weather-app"
                      target="_blank"
                    >
                      View Github
                    </a>
                  </div>
                  <div>
                    <ul className="flex flex-wrap gap-2 text-sm text-text">
                      <li className="bg-accent px-2 rounded-full">React</li>
                      <li className="bg-accent px-2 rounded-full">Axios</li>
                      <li className="bg-accent px-2 rounded-full">
                        TailWindCSS
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="transition md:hover:scale-95">
                <a href="https://weather-app-mark.vercel.app/" target="_blank">
                  <Image
                    className="min-h-full object-cover rounded-xl"
                    src="/project1.webp"
                    width={1920}
                    height={1080}
                    alt="Project Image"
                  />
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="hidden lg:block"></li>
        <li className="hidden lg:block"></li>
        <li>
          <div className="bg-gray-950/50 border border-gray-100/25 transition hover:border-gray-200/50 p-4 rounded-xl">
            <div className="grid xl:grid-cols-2 gap-4">
              <div className="flex flex-col justify-between gap-8">
                <div className="space-y-4">
                  <h1 className="text-xl font-semibold">E-Commerce Webshop</h1>
                  <p className="text-sm">
                    A refreshing lemonade webshop built with React. Features
                    dynamic product displays, real-time inventory updates, and a
                    sleek, responsive design.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="text-xs">
                    <a
                      className="nav-link text-gray-500 hover:text-text"
                      href="https://lemonadestand-mark.vercel.app/"
                      target="_blank"
                    >
                      View on Vercel
                    </a>
                    <br />
                    <a
                      className="nav-link text-gray-500 hover:text-text"
                      href="https://github.com/Mark424e/lemonadestand"
                      target="_blank"
                    >
                      View Github
                    </a>
                  </div>
                  <div>
                    <ul className="flex flex-wrap gap-2 text-sm text-text">
                      <li className="bg-accent px-2 rounded-full">PHP</li>
                      <li className="bg-accent px-2 rounded-full">MySQL</li>
                      <li className="bg-accent px-2 rounded-full">
                        TailWindCSS
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="transition md:hover:scale-95">
                <a href="https://weather-app-mark.vercel.app/" target="_blank">
                  <Image
                    className="min-h-full object-cover  rounded-xl"
                    src="/project4.webp"
                    width={1920}
                    height={1080}
                    alt="Project Image"
                  />
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="bg-gray-950/50 border border-gray-100/25 transition hover:border-gray-200/50 p-4 rounded-xl">
            <div className="grid xl:grid-cols-2 gap-4">
              <div className="flex flex-col justify-between gap-8">
                <div className="space-y-4">
                  <h1 className="text-xl font-semibold">Lemonade Webshop</h1>
                  <p className="text-sm">
                    A refreshing lemonade webshop built with React. Features
                    dynamic product displays, real-time inventory updates, and a
                    sleek, responsive design.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="text-xs">
                    <a
                      className="nav-link text-gray-500 hover:text-text"
                      href="https://lemonadestand-mark.vercel.app/"
                      target="_blank"
                    >
                      View on Vercel
                    </a>
                    <br />
                    <a
                      className="nav-link text-gray-500 hover:text-text"
                      href="https://github.com/Mark424e/lemonadestand"
                      target="_blank"
                    >
                      View Github
                    </a>
                  </div>
                  <div>
                    <ul className="flex flex-wrap gap-2 text-sm text-text">
                      <li className="bg-accent px-2 rounded-full">React</li>
                      <li className="bg-accent px-2 rounded-full">Axios</li>
                      <li className="bg-accent px-2 rounded-full">
                        TailWindCSS
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="transition md:hover:scale-95">
                <a href="https://weather-app-mark.vercel.app/" target="_blank">
                  <Image
                    className="min-h-full object-cover rounded-xl"
                    src="/project2.webp"
                    width={1920}
                    height={1080}
                    alt="Project Image"
                  />
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="hidden lg:block"></li>
        <li className="hidden lg:block"></li>
        <li>
          <div className="bg-gray-950/50 border border-gray-100/25 transition hover:border-gray-200/50 p-4 rounded-xl">
            <div className="grid xl:grid-cols-2 gap-4">
              <div className="flex flex-col justify-between gap-8">
                <div className="space-y-4">
                  <h1 className="text-xl font-semibold">
                    Ice Cream Landingpage
                  </h1>
                  <p className="text-sm">
                    One of my very first projects made with pure markup, styling
                    the elements with CSS, and utilizing SASS for more efficient
                    and maintainable CSS
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="text-xs">
                    <a
                      className="nav-link text-gray-500 hover:text-text"
                      href="https://gilleleje-isen.vercel.app/"
                      target="_blank"
                    >
                      View on Vercel
                    </a>
                    <br />
                    <a
                      className="nav-link text-gray-500 hover:text-text"
                      href="https://github.com/Mark424e/Gilleleje-Isen"
                      target="_blank"
                    >
                      View Github
                    </a>
                  </div>
                  <div>
                    <ul className="flex flex-wrap gap-2 text-sm text-text">
                      <li className="bg-accent px-2 rounded-full">HTML</li>
                      <li className="bg-accent px-2 rounded-full">CSS</li>
                      <li className="bg-accent px-2 rounded-full">Sass</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="transition md:hover:scale-95">
                <a href="https://weather-app-mark.vercel.app/" target="_blank">
                  <Image
                    className="min-h-full object-cover rounded-xl"
                    src="/project1.webp"
                    width={1920}
                    height={1080}
                    alt="Project Image"
                  />
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
