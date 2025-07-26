import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../../lib/mode-toggle";
import { Home, List, Inbox, Code } from "lucide-react";

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

function DesktopSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-border/20">
      <SidebarHeader className="border-b border-border/20 p-3">
        <div className={`flex items-center transition-all duration-200 ${open ? 'gap-3' : 'justify-center'}`}>
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
            AS
          </div>
          {open && (
            <div className="flex flex-col min-w-0">
              <span className="font-semibold text-base truncate">Ashmit Sharma</span>
              <span className="text-xs text-muted-foreground truncate">FullStack Developer</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => {
                const isActive = item.path === "/" 
                  ? pathname === "/" 
                  : pathname.startsWith(item.path);
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`cursor-pointer h-10 rounded-md transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      <div
                        className={`flex items-center ${open ? 'gap-3 px-3' : 'justify-center'}`}
                        onClick={() => router.push(item.path, { scroll: false })}
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                        {open && (
                          <span className="font-medium text-sm truncate">{item.title}</span>
                        )}
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/20 p-4">
        <div className={`flex items-center ${open ? 'justify-between' : 'justify-center gap-2'}`}>
          <ModeToggle />
          <SidebarTrigger />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default DesktopSidebar;
