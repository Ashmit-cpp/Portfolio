import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectData {
  date: string;
  title: string;
  description: string;
  link: string;
}

function ProjectPreview({ projectData }: { projectData: ProjectData }) {
  const router = useRouter();

  return (
    <Card 
      className="mb-4 hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
      onClick={() => router.push(`/projects/${projectData.link}`, { scroll: false })}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-medium">{projectData.title}</CardTitle>
        <span className="text-muted-foreground text-sm">{projectData.date}</span>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed text-muted-foreground">{projectData.description}</p>
      </CardContent>
      <CardFooter>
        <button
          className="text-primary inline-flex items-center font-semibold cursor-pointer hover:text-primary/80 group-hover:text-primary/90 transition-colors relative"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/projects/${projectData.link}`, { scroll: false });
          }}
        >
          Learn More
          <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary hover:w-full group-hover:w-full"></span>
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
        </button>
      </CardFooter>
    </Card>
  );
}

export default ProjectPreview;
