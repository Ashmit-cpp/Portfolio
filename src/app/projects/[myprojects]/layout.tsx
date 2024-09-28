"use client";
import { useMediaQuery } from "../../hooks/use-media-query";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProjectList from "@/components/project-list";

export default function MyProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      {isDesktop ? (
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={40} className="min-w-[26vw]">
            <ProjectList />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>{children}</ResizablePanel>
        </ResizablePanelGroup>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}
