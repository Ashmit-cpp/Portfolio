"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectDetails } from "@/lib/const";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

function ProjectDetails() {
  const params = useParams<{ myprojects: string }>();
  const router = useRouter();
  const project = projectDetails[params.myprojects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 md:p-6">
        <Card className="border-0 shadow-lg w-full max-w-md">
          <CardContent className="p-6 md:p-12 text-center">
            <h1 className="text-xl md:text-2xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              {
                "The project you're looking for doesn't exist or has been moved."
              }
            </p>
            <Button onClick={() => router.push("/projects")} size="sm" className="w-full md:w-auto">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <ScrollArea className="body-font h-[100dvh] md:h-[100vh]">
      {/* Header Section */}
      <div className="py-4 md:py-8 px-4 md:px-6 border-b border-border/20">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/projects")}
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </div>

          {/* Project Title & Meta */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
              <span className="inline-flex items-center gap-1 px-2 md:px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                <Tag className="w-3 h-3 md:w-4 md:h-4" />
                Project Details
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                <span>Project Showcase</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-4 md:py-6 px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-12">
          <div className="bg-gradient-to-br from-card/50 to-muted/20 backdrop-blur-sm rounded-xl md:rounded-2xl border border-border/20 p-4 md:p-8 lg:p-12 shadow-xl">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-2 text-left">
              About This Project
            </h2>

            <div className="flex flex-col gap-4 md:gap-6 items-center">
              {/* Project Description */}
              <div className="prose prose-sm md:prose-lg max-w-none w-full">
                {project.desc.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed mb-4 md:mb-6 last:mb-0 text-sm md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Project Image */}
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                  src={project.image}
                  fill
                  alt={`${project.title} screenshot`}
                  className="object-contain hover:scale-105 transition-transform duration-500 rounded-lg md:rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Technical Details and Project Links Combined */}
          <div className="bg-gradient-to-r from-primary/5 via-card/50 to-primary/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-primary/20 p-4 md:p-8 lg:p-12 shadow-xl">
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Technical Details */}
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 lg:mb-8">Technical Details</h3>
                {project.body ? (
                  <div className="prose prose-sm md:prose-lg max-w-none text-muted-foreground">
                    {project.body}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
                    {
                      "Explore the source code to see the technical implementation and architecture of this project."
                    }
                  </p>
                )}
              </div>

              {/* Project Links */}
              <div className="pt-4 md:pt-6 border-t border-border/20">
                <div className="flex flex-col gap-3 md:gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full justify-center h-12 md:h-14 text-base md:text-lg font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <Github className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3" />
                    </Button>
                  </Link>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full h-12 md:h-14 text-base md:text-lg font-semibold rounded-lg md:rounded-xl border-2 hover:bg-accent/50 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                      Live Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

export default ProjectDetails;
