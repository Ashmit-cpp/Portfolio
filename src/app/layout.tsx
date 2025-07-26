import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import RootLayout from "@/components/RootLayout";
import { BackgroundBeams } from "@/components/ui/app-background";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const Interfont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Ashmit's Portfolio`,
  description: "FullStack Developer specializing in modern web applications",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(Interfont.className, "antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="min-h-screen flex flex-col">
              {/* Main Layout Container */}
              <div className="flex flex-col md:flex-row flex-1 lg:flex-0">
              {/* Sidebar/Navigation */}
                <RootLayout />
                
                {/* Main Content Area */}
                <main className="flex-1 relative overflow-x-hidden">
                  <BackgroundBeams>
                    <div className="relative z-10">
                      {children}
                    </div>
                  </BackgroundBeams>
                </main>
              </div>
            </div>
            <Analytics />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
