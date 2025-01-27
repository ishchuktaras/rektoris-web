
import React, { use } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
 } from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  BarChart2,
  BookOpen,
  Bus,
  ChevronRight,
  DollarSign,
  GraduationCap,
  KeySquare,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  Users,
} from "lucide-react";
import Logo from "@/components/logo";
import UserMenu from "./user-menu";

const data = {};

export default function AppSidebar() {
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
          title: "Učitelé",
          url: "/dashboard/users/teachers",
        },
        {
          title: "Jednatel",
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
          title: "Třídy a Streamy",
          url: "/dashboard/academics/classes",
        },
        {
          title: "Předměty",
          url: "/dashboard/academics/subjects",
        },
        {
          title: "Oddělení",
          url: "/dashboard/academics/departments",
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
            <UserMenu />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
