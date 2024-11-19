import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../../lib/mode-toggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";

function MobileHeader() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="bg-secondary/20 top-0 w-full">
      <div className="container flex p-2 flex-row items-center align-middle justify-between">
        <div
          className="mt-1 flex title-font font-medium items-center text-primary mb-4 md:mb-0"
          onClick={() => router.push("/")}
        >
          <div className="font-medium text-pretty text-xl bg-primary p-2 rounded-full text-foreground">
            AS
          </div>
          <span className="ml-3 mt-1 text-2xl">Ashmit Sharma</span>
        </div>

        <div className="flex gap-x-8">
          <ModeToggle />
          <Drawer>
            <DrawerTrigger>
              <Menu />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Explore</DrawerTitle>
                {/* <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription> */}
              </DrawerHeader>
              <DrawerClose>
                <nav className="flex flex-col items-start justify-center">
                  <h1
                    className={`  cursor-pointer mr-5 hover:text-primary text-lg m-6 group relative w-max ${
                      pathname === "/"
                        ? "text-foreground font-bold"
                        : "text-foreground/80 font-semibold"
                    }`}
                    onClick={() => {
                      router.push("/", { scroll: false });
                    }}
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                  </h1>
                  <h1
                    className={` cursor-pointer mr-5 hover:text-primary text-lg m-6 group relative w-max ${
                      pathname.startsWith("/projects")
                        ? "text-foreground font-bold"
                        : "text-foreground/80 font-semibold"
                    }`}
                    onClick={() => {
                      router.push("/projects", { scroll: false });
                    }}
                  >
                    My Projects
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                  </h1>
                  <h1
                    className={`cursor-pointer mr-5 hover:text-primary text-lg m-6 group relative w-max ${
                      pathname === "/contact"
                        ? "text-foreground font-bold"
                        : "text-foreground/80 font-semibold"
                    }`}
                    onClick={() => {
                      router.push("/code-blocks", { scroll: false });
                    }}
                  >
                    Code Blocks
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                  </h1>
                  <h1
                    className={`cursor-pointer mr-5 hover:text-primary text-lg m-6 group relative w-max ${
                      pathname === "/contact"
                        ? "text-foreground font-bold"
                        : "text-foreground/80 font-semibold"
                    }`}
                    onClick={() => {
                      router.push("/contact", { scroll: false });
                    }}
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                  </h1>
                </nav>
              </DrawerClose>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
