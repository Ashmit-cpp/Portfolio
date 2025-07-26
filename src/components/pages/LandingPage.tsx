"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import TechIcons from "@/components/tech-icons";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const words = [
  { text: "Web  " },
  { text: "Designer" },
  { text: " &" },
  { text: "FullStack" },
  { text: " Developer" },
];
const subwords = `Hey, I'm Ashmit Sharma`;

export default function LandingPage() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact", { scroll: false });
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/ashmit-sharma-4287ab197/", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/Ashmit-cpp", "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className=" h-[calc(100%-80px)] md:h-screen flex items-center justify-center p-4 lg:p-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-2 lg:space-y-6">
                <TextGenerateEffect words={subwords} />
                <TypewriterEffect words={words} />
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  I specialize in crafting stunning digital experiences through
                  thoughtful design and precise development. Explore my portfolio
                  to see how I blend creativity and expertise to bring ideas to
                  life.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="px-8 group"
                  onClick={() => router.push("/projects", { scroll: false })}
                >
                  Explore Projects
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8"
                  onClick={() => router.push("/code-blocks", { scroll: false })}
                >
                  Code Blocks
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <span className="text-sm text-muted-foreground">Connect with me:</span>
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleLinkedInClick}
                    className="hover:text-primary"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleGithubClick}
                    className="hover:text-primary"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleContactClick}
                    className="hover:text-primary"
                  >
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Tech Icons */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <TechIcons />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
