import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

import { SidebarProvider } from "@/components/ui/sidebar";
import RootLayout from "@/components/RootLayout";
const Interfont = Inter({ subsets: ["latin"] });
import type { Metadata } from "next";
import { BackgroundBeams } from "@/components/ui/app-background";

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
              <BackgroundBeams />
              <div className="flex flex-col md:flex-row">
                <RootLayout />
                {children}
              </div>
            </SidebarProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
