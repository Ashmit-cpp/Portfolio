"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import ProjectPreview from "./project-preview";
import { projects } from "@/lib/const";
import { Folder, ArrowUpRight } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { useRouter } from "next/navigation";

function ProjectList() {
  const router = useRouter();
  return (
    <ScrollArea className="text-muted-foreground body-font h-[100dvh] md:h-[100vh]">
      {/* Hero Section */}
      <div className="py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-4">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Folder className="w-4 h-4" />
                Portfolio
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
              My Projects
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-2 max-w-3xl leading-relaxed">
              Explore my collection of web applications, UI components, and
              creative projects.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid Section */}
      <div className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ProjectPreview key={index} projectData={project} />
            ))}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm ">
              <CardContent className="p-6">
                <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-center">
                  Like What You See?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {
                    "I'm always excited to work on new projects and collaborate with amazing people. Let's build something incredible together!"
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8" onClick={() => router.push("/contact")}>
                    Start a Project
                    <ArrowUpRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="px-8" onClick={() => router.push("/code-blocks")}>
                    View Code Blocks
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

export default ProjectList;
