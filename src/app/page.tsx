"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import React from "react";
import { motion } from "framer-motion";
import TechIcons from "@/components/tech-icons";
import { AuroraBackground } from "@/components/ui/aurora-background";

const words = [
  {
    text: "Web  ",
  },
  {
    text: "Designer",
  },
  {
    text: " &",
  },
  {
    text: "FullStack",
  },
  {
    text: " Developer",
  },
];
const subwords = `Hey, I'm Ashmit Sharma`;

export default function HomePage() {
  return (
    <div className="flex px-2 h-full items-center">
      <div className="flex flex-col">
        <div className="flex justify-between gap-10 flex-col lg:flex-row items-center p-2">
          <div>
            <TextGenerateEffect words={subwords} />
            <TypewriterEffect words={words} />
            <div>
              <p className="text-lg md:text-xl my-4">
                I specialize in crafting stunning digital experiences through
                thoughtful design and precise development. Explore my portfolio
                to see how I blend creativity and expertise to bring ideas to
                life.
              </p>
            </div>
          </div>
          <TechIcons />
        </div>
      </div>
    </div>
  );
}
