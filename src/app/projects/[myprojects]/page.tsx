"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectDetails } from "@/lib/const";
import { ScrollArea } from "@/components/ui/scroll-area";

function ProjectDetails() {
  const params = useParams<{ myprojects: string }>();
  const project = projectDetails[params.myprojects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ScrollArea className="p-4 h-[85vh] md:h-[100vh] w-full text-muted-foreground">
      <div className="mb-4 lg:mb-6">
        <h1 className="mb-1 text-3xl font-extrabold leading-tight lg:mb-2 lg:text-4xl text-primary">
          {project.title}
        </h1>
        <div>
          {project.desc.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Image
          src={project.image}
          width={500}
          height={500}
          alt="Picture of the project"
        />
      </div>
      <div className="py-4 lg:py-8">{project.body}</div>

      {`Checkout source code and deployed project on `}
      <Link className="underline whitespace-nowrap" href={project.link}>
        GitHub
      </Link>
    </ScrollArea>
  );
}

export default ProjectDetails;
