import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

import { SidebarProvider } from "@/components/ui/sidebar";
import RootLayout from "@/components/RootLayout";
const Interfont = Inter({ subsets: ["latin"] });
import type { Metadata } from "next";
import { BackgroundBeams } from "@/components/ui/app-background";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: `Ashmit's Portfolio`,
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body className={Interfont.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <div className="flex flex-col h-screen">
                <div className="flex flex-col md:flex-row flex-1 lg:flex-0">
                  <RootLayout />
                  <BackgroundBeams className="flex-1">
                    {children}
                    <Analytics />
                  </BackgroundBeams>
                </div>
              </div>
            </SidebarProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
