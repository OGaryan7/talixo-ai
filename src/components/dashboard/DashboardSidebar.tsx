import { Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Github,
  MapPin,
  Bookmark,
  MessageSquareText,
  Zap,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", to: "/dashboard" as const, icon: LayoutDashboard, exact: true },
  { title: "GitHub Leads", to: "/dashboard/github" as const, icon: Github },
  { title: "Maps Leads", to: "/dashboard/maps" as const, icon: MapPin },
  { title: "Saved Leads", to: "/dashboard/leads" as const, icon: Bookmark },
  { title: "AI Outreach", to: "/dashboard/outreach" as const, icon: MessageSquareText },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg gradient-neon">
          <Zap className="h-4 w-4 text-neon-foreground" />
        </div>
        {!collapsed && (
          <span className="text-base font-bold tracking-tight text-sidebar-foreground">
            Talixo
          </span>
        )}
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/40 text-[10px] uppercase tracking-widest">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.to}
                      activeOptions={item.exact ? { exact: true } : undefined}
                      className="flex items-center gap-3 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                      activeProps={{
                        className:
                          "flex items-center gap-3 text-primary font-medium bg-sidebar-accent",
                      }}
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-md px-2 py-2 text-sm text-sidebar-foreground/50 transition-colors hover:text-sidebar-foreground"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && <span>Back to Site</span>}
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
