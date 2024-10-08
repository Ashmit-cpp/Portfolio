"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { useMediaQuery } from "./hooks/use-media-query";
import MobileSidebar from "@/components/side-bar/mobile-sidebar";
import DesktopSidebar from "@/components/side-bar/desktop-sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const Interfont = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isDesktop ? (
        <html lang="en">
          <body className={Interfont.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <AuroraBackground>
                <ResizablePanelGroup direction="horizontal">
                  <ResizablePanel
                    className="min-w-48 max-w-96"
                    defaultSize={16}
                  >
                    <DesktopSidebar />
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={80}>{children}</ResizablePanel>
                </ResizablePanelGroup>
              </AuroraBackground>
            </ThemeProvider>
          </body>
        </html>
      ) : (
        <html lang="en">
          <body className={Interfont.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <AuroraBackground>
                <motion.div
                  initial={{ opacity: 0.0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0,
                    duration: 0.3,
                    ease: "anticipate",
                  }}
                >
                  <MobileSidebar />
                  {children}
                </motion.div>
              </AuroraBackground>
            </ThemeProvider>
          </body>
        </html>
      )}
    </>
  );
}
