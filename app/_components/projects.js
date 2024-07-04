import { React } from "react";
import Image from "next/image";

export const Projects = () => {
  return (
    <div id="projects" className="container mx-auto md:h-[100vh]">
      <ul className="space-y-8">
        <li>
          <div className="bg-gray-950/50 border border-gray-100/25 transition hover:border-gray-200/50 p-4 rounded-xl">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="transition md:hover:scale-105">
                <a href="https://weather-app-mark.vercel.app/" target="_blank">
                  <Image
                    className="object-fill w-full rounded-xl"
                    src="/project1.webp"
                    width={1920}
                    height={1080}
                    alt="Project Image"
                  />
                </a>
              </div>
              <div className="grid justify-between">
                <h1 className="text-xl font-semibold">
                  React Weather Application
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div>
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
                    <li className="bg-accent px-2 rounded-full">API</li>
                    <li className="bg-accent px-2 rounded-full">Axios</li>
                    <li className="bg-accent px-2 rounded-full">TailWindCSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="bg-gray-950/50 border border-gray-100/25 transition hover:border-gray-200/50 p-4 rounded-xl">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid justify-between">
                <h1 className="text-xl font-semibold">Lemonade Webshop</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div>
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
                    <li className="bg-accent px-2 rounded-full">API</li>
                    <li className="bg-accent px-2 rounded-full">Axios</li>
                    <li className="bg-accent px-2 rounded-full">TailWindCSS</li>
                  </ul>
                </div>
              </div>
              <div className="transition md:hover:scale-105">
                <a
                  href="https://lemonadestand-mark.vercel.app/"
                  target="_blank"
                >
                  <Image
                    className="object-fill w-full rounded-xl"
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
        <li>
          <div className="bg-gray-950/50 border border-gray-100/25 transition hover:border-gray-200/50 p-4 rounded-xl">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="transition md:hover:scale-105">
                <a
                  href="https://gilleleje-isen.vercel.app/"
                  target="_blank"
                >
                  <Image
                    className="object-fill w-full rounded-xl"
                    src="/project3.webp"
                    width={1920}
                    height={1080}
                    alt="Project Image"
                  />
                </a>
              </div>
              <div className="grid justify-between">
                <h1 className="text-xl font-semibold">
                  React Weather Application
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div>
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
                    <li className="bg-accent px-2 rounded-full">HTML</li>
                    <li className="bg-accent px-2 rounded-full">CSS</li>
                    <li className="bg-accent px-2 rounded-full">SASS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
