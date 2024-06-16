import React from "react";
import PropTypes from "prop-types"; // Import PropTypes if using plain JavaScript
import { useRouter } from "next/navigation";

interface ProjectData {
  date: string;
  title: string;
  description: string;
  link: string;
}

function ProjectPreview({ projectData }: { projectData: ProjectData }) {
  const router = useRouter();

  return (
    <div>
      <div className="p-4 border-t-2 border-secondary-foreground/30 flex flex-wrap bg-muted-foreground/10 mb-4 rounded-3xl">
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium title-font">
            {projectData.title}
          </h2>
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="text-gray-500 text-sm">{projectData.date}</span>
          </div>
          <p className="leading-relaxed mt-3">{projectData.description}</p>
          <h1
            className="text-primary mt-4 inline-flex items-center font-semibold cursor-pointer hover:text-primary group relative w-max"
            onClick={() => {
              router.push(`/projects/${projectData.link}`, { scroll: false });
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
  );
}

export default ProjectPreview;
