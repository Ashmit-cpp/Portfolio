"use client";
import { useMediaQuery } from "../../hooks/use-media-query";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProjectList from "@/components/project-list";
import { motion } from "framer-motion";

export default function MyProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      {isDesktop ? (
        <div>
          <ResizablePanelGroup className="" direction="horizontal">
            <ResizablePanel defaultSize={40} className="min-w-[26vw]">
              <ProjectList />
            </ResizablePanel>
            <ResizableHandle />

            <ResizablePanel>
              <motion.div
                initial={{ opacity: 0.0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0,
                  duration: 0.3,
                  ease: "anticipate",
                }}
              >
                {children}
              </motion.div>
            </ResizablePanel>
          </ResizablePanelGroup>{" "}
        </div>
      ) : (
        <div> {children}</div>
      )}
    </div>
  );
}
