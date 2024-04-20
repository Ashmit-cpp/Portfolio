"use client";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { useMediaQuery } from "./hooks/use-media-query";
import MobileSidebar from "@/components/side-bar/MobileSidebar";
import DesktopSidebar from "@/components/side-bar/DesktopSidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const Mulishfont = Mulish({ subsets: ["latin"] });

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
          <body className={Mulishfont.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <AuroraBackground>
                <motion.div
                  initial={{ opacity: 0.0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1,
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <div>
                    <ResizablePanelGroup direction="horizontal">
                      <ResizablePanel
                        className="min-w-48 max-w-96"
                        defaultSize={16}
                      >
                        <DesktopSidebar />
                      </ResizablePanel>
                      <ResizableHandle />
                      <ResizablePanel defaultSize={80}>
                        {children}
                      </ResizablePanel>
                    </ResizablePanelGroup>
                  </div>
                </motion.div>
              </AuroraBackground>
            </ThemeProvider>
          </body>
        </html>
      ) : (
        <html lang="en">
          <body className={Mulishfont.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <AuroraBackground>
                <motion.div
                  initial={{ opacity: 0.0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1,
                    duration: 0.6,
                    ease: "easeInOut",
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
