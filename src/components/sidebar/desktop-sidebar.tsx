import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../../lib/mode-toggle";
import { Home, List, Inbox, Settings, Code } from "lucide-react";

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
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col justify-start">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    key={item.title}
                    className={`cursor-pointer hover:text-primary h-12 text-base group relative ${
                      item.path === "/"
                        ? pathname === "/"
                          ? "bg-sidebar-accent text-primary"
                          : "text-foreground/80 font-normal"
                        : pathname.startsWith(item.path)
                        ? "bg-sidebar-accent text-primary"
                        : "text-foreground/80 font-normal"
                    }`}
                  >
                    <div
                      className="flex items-center"
                      onClick={() => router.push(item.path, { scroll: false })}
                    >
                      <item.icon className="mr-2" />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="flex gap-x-8">
        <ModeToggle />
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
}

export default DesktopSidebar;
