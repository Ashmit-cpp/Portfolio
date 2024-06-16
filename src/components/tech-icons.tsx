import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@/app/hooks/use-media-query";

function TechIcons() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex -space-x-4">
      <div className="group">
        <div className="duration-250 transform rotate-6 flex flex-col items-center justify-between rounded-xl p-1 transition-all group-hover:rotate-0 group-hover:scale-110 group-hover:shadow-fullscreen border w-32 h-32 bg-background/70">
          <div className="h-4"></div>
          <Image
            src={"/react.svg"}
            height={60}
            width={60}
            alt="react"
            className="transition-transform duration-200 group-hover:-rotate-90 "
          />
          <div className="w-full p-2">
            <div className="text-xs font-medium text-[#171717] dark:text-[#D9D9D9] dark:group-hover:text-white">
              React
            </div>
          </div>
          <div className="absolute top-24 h-10 w-full bg-transparent md:top-36"></div>
        </div>
      </div>
      <div className="group">
        <div className="duration-250 transform rotate-12 flex flex-col items-center justify-between rounded-xl p-1 transition-all group-hover:rotate-0 group-hover:scale-110 group-hover:shadow-fullscreen border w-32 h-32 bg-background/70">
          <div className="h-4"></div>
          <Image
            src={"/tailwind-css.svg"}
            height={60}
            width={60}
            alt="tailwind"
            className="transition-transform duration-200 group-hover:scale-115 "
          />
          <div className="w-full self-end p-2">
            <div className="text-xs font-medium text-[#171717] dark:text-[#D9D9D9] dark:group-hover:text-white">
              Tailwind
            </div>
          </div>
          <div className="absolute top-24 h-10 w-full bg-transparent md:top-36"></div>
        </div>
      </div>
      {isDesktop && (
        <div className="group">
          <div className="duration-250 transform -rotate-6 flex flex-col items-center justify-between rounded-xl p-1 transition-all group-hover:rotate-0 group-hover:scale-110 group-hover:shadow-fullscreen border w-32 h-32 bg-background/70">
            <div className="h-4"></div>
            <Image
              src={"/typescript.svg"}
              height={60}
              width={60}
              alt="typescript"
              className="transition-colors duration-200 group-hover:brightness-125 "
            />
            <div className="w-full self-end p-2">
              <div className="text-xs font-medium text-[#171717] dark:text-[#D9D9D9] dark:group-hover:text-white">
                TypeScript
              </div>
            </div>
            <div className="absolute top-24 h-10 w-full bg-transparent md:top-36"></div>
          </div>
        </div>
      )}
      <div className="group">
        <div className="duration-250 transform rotate-6 flex flex-col items-center justify-between rounded-xl p-1 transition-all group-hover:rotate-0 group-hover:scale-110 group-hover:shadow-fullscreen border w-32 h-32 bg-background/70">
          <div className="h-4"></div>
          {/* <Image
                    src={"/nextjs.svg"}
                    height={60}
                    width={60}
                    alt="typescript"
                    className="bg-muted-foreground rounded-full transition-colors duration-200 group-hover:bg-blue-400 "
                  /> */}
          <svg
            fill="none"
            height="60"
            viewBox="0 0 180 180"
            width="60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g mask="url(#mask0_292_290)">
              <circle
                cx="90"
                cy="90"
                fill="black"
                r="87"
                stroke="var( --next-icon-border)"
                strokeWidth="6"
              ></circle>
              <path
                d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                fill="url(#paint0_linear_292_290)"
              ></path>
              <rect
                fill="url(#paint1_linear_292_290)"
                height="72"
                width="12"
                x="115"
                y="54"
              ></rect>
            </g>
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_292_290"
                x1="109"
                x2="144.5"
                y1="116.5"
                y2="160.5"
              >
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint1_linear_292_290"
                x1="121"
                x2="120.799"
                y1="54"
                y2="106.875"
              >
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="w-full self-end p-2">
            <div className="text-xs font-medium text-[#171717] dark:text-[#D9D9D9] dark:group-hover:text-white">
              NextJs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechIcons;
