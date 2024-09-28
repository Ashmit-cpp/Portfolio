"use client";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import ProjectPreview from "./project-preview";
import { projects } from "@/lib/const";

function ProjectList() {
  return (
    <ScrollArea className="text-muted-foreground body-font h-[80vh] md:h-[100vh]">
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



export default ProjectList;
