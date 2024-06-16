"use client";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import ProjectPreview from "./project-preview";

function ProjectList() {
  return (
    <ScrollArea className="bg-background/20 backdrop-blur-sm h-screen">
      <div className="text-muted-foreground body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div className="-my-8 ">
            <div>
              {projects.map((project, index) => (
                <ProjectPreview key={index} projectData={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

const projects = [
  {
    date: "22 Mar 2021",
    link: "Acme-EStore",
    title: "Acme EStore",
    description:
      "Utilized Vite and TailwindCSS for rapid development and streamlined styling. Implemented NestJS for a modular, scalable architecture, with high-performance caching and session management using Redis.",
  },
  {
    date: "15 Sep 2020",
    link: "LangBridge",
    title: "LangBridge",
    description:
      "Saas application built using Next.js for its responsive and efficient front-end, Supabase for data storage and management, and Stripe for secure and convenient payment processing.",
  },
  {
    date: "22 Mar 2021",
    link: "WebDev-IDE",
    title: "WebDev IDE",
    description:
      "A cross-platform IDE for web development using PyQt in Python, featuring a built-in browser window and support for syntax highlighting in HTML, CSS & Javascript.",
  },
  {
    date: "12 Jun 2019",
    link: "Flavorful-Finds",
    title: "Flavorful Finds",
    description:
      "A responsive recipe website using React, Firebase, and Firestore, allowing users to search for, view, and save their favorite recipes with detailed information provided by Spoonacular API",
  },
];

export default ProjectList;
