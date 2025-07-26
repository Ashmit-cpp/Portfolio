"use client";
import React from "react";
import MobileHeader from "@/components/sidebar/mobile-sidebar";
import DesktopSidebar from "@/components/sidebar/desktop-sidebar";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/app/hooks/use-media-query";

export default function RootLayout() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      {isDesktop ? (
        <>
          <DesktopSidebar />
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0.0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0,
            duration: 0.3,
            ease: "anticipate",
          }}
        >
          <MobileHeader />
        </motion.div>
      )}
    </div>
  );
}
