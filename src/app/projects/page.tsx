"use client";
import ProjectList from "@/components/project-list";
import React from "react";
import { motion } from "framer-motion";

function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0.0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.2,
        ease: "linear",
      }}
      className="h-fit"
    >
      <ProjectList />
    </motion.div>
  );
}

export default ProjectsPage;
