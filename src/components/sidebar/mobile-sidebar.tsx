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
import { Button } from "@/components/ui/button";
import { Menu, Home, List, Code, Inbox, X } from "lucide-react";

const menuItems = [
  {
    title: "Home",
    path: "/",
    icon: Home,
  },
  {
    title: "My Projects",
    path: "/projects",
    icon: List,
  },
  {
    title: "Code Blocks",
    path: "/code-blocks",
    icon: Code,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: Inbox,
  },
];

function MobileHeader() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="bg-card/90 backdrop-blur-sm border-b border-border/20 sticky top-0 z-50">
      <div className="container flex p-4 flex-row items-center justify-between">
        {/* Brand */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            AS
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base">Ashmit Sharma</span>
            <span className="text-xs text-muted-foreground">FullStack Developer</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Menu className="w-5 h-5" />
              </Button>
            </DrawerTrigger>
            
            <DrawerContent className="h-[70vh]">
              <DrawerHeader className="border-b border-border/20 pb-4">
                <div className="flex items-center justify-between">
                  <DrawerTitle className="text-xl font-semibold">
                    Navigation
                  </DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="w-4 h-4" />
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              
              <div className="flex-1 p-4">
                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const isActive = item.path === "/" 
                      ? pathname === "/" 
                      : pathname.startsWith(item.path);
                    
                    return (
                      <DrawerClose key={item.title} asChild>
                        <Button
                          variant="ghost"
                          className={`w-full justify-start h-12 rounded-md transition-colors ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-accent hover:text-accent-foreground"
                          }`}
                          onClick={() => router.push(item.path, { scroll: false })}
                        >
                          <item.icon className="w-5 h-5 mr-3" />
                          <span className="font-medium">{item.title}</span>
                        </Button>
                      </DrawerClose>
                    );
                  })}
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
