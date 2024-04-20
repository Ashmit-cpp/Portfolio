"use client";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { useRouter } from "next/navigation";

function ProjectList() {
  const router = useRouter();
  return (
    <ScrollArea className="bg-background/20 backdrop-blur-sm h-screen ">
      <div className="text-muted-foreground body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div className="-my-8 ">
            <div className="p-4 border-t-2  border-secondary-foreground/30 flex flex-wrap bg-muted-foreground/10 mb-4 rounded-3xl">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-foreground">
                  CATEGORY
                </span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium  title-font mb-2">
                  Bitters hashtag waistcoat fashion axe chia unicorn
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <h1
                  className="text-primary mt-4 inline-flex items-center font-semibold cursor-pointer hover:text-primary text-lg group relative w-max"
                  onClick={() => {
                    router.push("/projects/project2", { scroll: false });
                  }}
                >
                  Learn More
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </h1>{" "}
              </div>
            </div>
            <div className="p-4 border-t-2  border-secondary-foreground/30 flex flex-wrap bg-muted-foreground/10 mb-4 rounded-3xl">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-foreground">
                  CATEGORY
                </span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium  title-font mb-2">
                  Meditation bushwick direct trade taxidermy shaman
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a
                  className=""
                  onClick={() => {
                    router.push("/projects/project2", { scroll: false });
                  }}
                >
                  <h1
                    className="text-primary mt-4 inline-flex items-center font-semibold cursor-pointer hover:text-primary text-lg group relative w-max"
                    onClick={() => {
                      router.push("/projects/project2", { scroll: false });
                    }}
                  >
                    Learn More
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </h1>{" "}
                </a>
              </div>
            </div>
            <div className="p-4 border-t-2  border-secondary-foreground/30 flex flex-wrap bg-muted-foreground/10 mb-4 rounded-3xl">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-foreground">
                  CATEGORY
                </span>
                <span className="text-sm text-gray-500">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium  title-font mb-2">
                  Woke master cleanse drinking vinegar salvia
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <h1
                  className="text-primary mt-4 inline-flex items-center font-semibold cursor-pointer hover:text-primary text-lg group relative w-max"
                  onClick={() => {
                    router.push("/projects/project2", { scroll: false });
                  }}
                >
                  Learn More
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </h1>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

export default ProjectList;
