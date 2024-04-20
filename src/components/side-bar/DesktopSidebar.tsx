"use client";
import React from "react";
import { ModeToggle } from "../../lib/mode-toggle";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function DesktopSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex bg-background/40 backdrop-blur-xl sticky">
      <header className="text-foreground body-font">
        <div className="container flex p-5 flex-col items-center h-screen justify-between">
          <a className="flex title-font font-medium items-center text-primary mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-primary rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Ashmit Sharma</span>
          </a>
          <nav className="flex flex-col gap-10 items-center justify-center">
            <h1
              className={`  cursor-pointer mr-5 hover:text-primary text-lg m-6 group relative w-max ${
                pathname === "/"
                  ? "text-foreground font-bold"
                  : "text-foreground/80 font-semibold"
              }`}
              onClick={() => {
                router.push("/", { scroll: false });
              }}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
            </h1>
            <h1
              className={` cursor-pointer mr-5 hover:text-primary text-lg m-6 group relative w-max ${
                pathname.startsWith("/projects")
                  ? "text-foreground font-bold"
                  : "text-foreground/80 font-semibold"
              }`}
              onClick={() => {
                router.push("/projects", { scroll: false });
              }}
            >
              My Projects
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
            </h1>
            <h1
              className={`cursor-pointer mr-5 hover:text-primary text-lg m-6 group relative w-max ${
                pathname === "/contact"
                  ? "text-foreground font-bold"
                  : "text-foreground/80 font-semibold"
              }`}
              onClick={() => {
                router.push("/contact", { scroll: false });
              }}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
            </h1>
          </nav>
          <div className="flex gap-x-8">
            <ModeToggle />
            <Button className="">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default DesktopSidebar;
