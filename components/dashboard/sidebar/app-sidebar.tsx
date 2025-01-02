import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  ArrowRight,
  AudioWaveform,
  BadgeCheck,
  BarChart2,
  Bell,
  BookOpen,
  Bot,
  Bus,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  DollarSign,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  GraduationCap,
  KeySquare,
  LayoutDashboard,
  LogOut,
  Map,
  MessageSquare,
  MoreHorizontal,
  Package,
  PieChart,
  Plus,
  Settings,
  Settings2,
  ShoppingCart,
  Sparkles,
  SquareTerminal,
  Trash2,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/logo";

const data = {};

export default function AppSidebar() {
  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "avatars/shadcn.jpg",
  };
  const sidebarLinks = [
    {
      title: "Řídicí panel",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Přehled",
          url: "/dashboard/overview",
        },
      ],
    },
    {
      title: "Studentský management",
      url: "/students",
      icon: GraduationCap,
      items: [
        {
          title: "Seznam studentů",
          url: "/dashboard/students",
        },
        {
          title: "Poplatky",
          url: "/dashboard/students/fees",
        },
        {
          title: "ID studentů",
          url: "/dashboard/students/ids",
        },
        {
          title: "Prospěch",
          url: "/dashboard/students/attendance",
        },
      ],
    },
    {
      title: "Uživatelé",
      url: "/dashboard/users",
      icon: Users,
      items: [
        {
          title: "Rodiče",
          url: "/dashboard/users/parents",
        },
        {
          title: "Secretary",
          url: "/dashboard/users/secretary",
        },
      ],
    },
    {
      title: "Akademici",
      url: "/dashboard/academics",
      icon: BookOpen,
      items: [
        {
          title: "Třídy",
          url: "/dashboard/academics/classes",
        },
        {
          title: "streams/sections",
          url: "/dashboard/academics/streams",
        },
        {
          title: "Úkoly",
          url: "/dashboard/academics/assignments",
        },
        {
          title: "Vysvědčení",
          url: "/dashboard/academics/reports",
        },
      ],
    },
    {
      title: "Personální management",
      url: "/staff",
      icon: Users,
      items: [
        {
          title: "Adresář zaměstnanců",
          url: "/staff/directory",
        },
        {
          title: "Účast",
          url: "/staff/attendance",
        },
        {
          title: "Opusťte vedení",
          url: "/staff/leave",
        },
        {
          title: "Výkon",
          url: "/staff/performance",
        },
      ],
    },
    {
      title: "Komunikace",
      url: "/communication",
      icon: MessageSquare,
      items: [
        {
          title: "Zprávy",
          url: "/communication/messages",
        },
        {
          title: "Oznámení",
          url: "/communication/announcements",
        },
        {
          title: "Nástěnka",
          url: "/communication/bulletin",
        },
        {
          title: "Nouzová upozornění",
          url: "/communication/emergency",
        },
      ],
    },
    {
      title: "Finance",
      url: "/finance",
      icon: DollarSign,
      items: [
        {
          title: "Správa poplatků",
          url: "/finance/fees",
        },
        {
          title: "Platby",
          url: "/finance/payments",
        },
        {
          title: "Stipendia",
          url: "/finance/scholarships",
        },
        {
          title: "Zprávy",
          url: "/finance/reports",
        },
      ],
    },
    {
      title: "Doprava",
      url: "/transport",
      icon: Bus,
      items: [
        {
          title: "Trasy",
          url: "/transport/routes",
        },
        {
          title: "Sledování",
          url: "/transport/tracking",
        },
        {
          title: "Ovladače",
          url: "/transport/drivers",
        },
        {
          title: "Údržba",
          url: "/transport/maintenance",
        },
      ],
    },
    {
      title: "Zdroje",
      url: "/resources",
      icon: Package,
      items: [
        {
          title: "Knihovna",
          url: "/resources/library",
        },
        {
          title: "Inventář",
          url: "/resources/inventory",
        },
        {
          title: "Vybavení",
          url: "/resources/equipment",
        },
        {
          title: "Majetek",
          url: "/resources/assets",
        },
      ],
    },
    {
      title: "Přehledy a analýzy",
      url: "/reports",
      icon: BarChart2,
      items: [
        {
          title: "Akademické zprávy",
          url: "/reports/academic",
        },
        {
          title: "Finanční zprávy",
          url: "/reports/financial",
        },
        {
          title: "Vlastní sestavy",
          url: "/reports/custom",
        },
        {
          title: "Panel Analytics",
          url: "/reports/analytics",
        },
      ],
    },
    {
      title: "Nastavení",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "Profil školy",
          url: "/settings/school-profile",
        },
        {
          title: "Správa uživatelů",
          url: "/settings/user-management",
        },
        {
          title: "Nastavení systému",
          url: "/settings/system",
        },
        {
          title: "Zálohování a zabezpečení",
          url: "/settings/backup-security",
        },
      ],
    },
    {
      title: "Admin Only",
      url: "dashboard/admin",
      icon: KeySquare,
      items: [
        {
          title: "Kontakty",
          url: "/dashboard/admin/contacts",
        },
      ],
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Logo />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarLinks.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {user.name}
                      </span>
                      <span className="truncate text-xs">{user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Sparkles />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
