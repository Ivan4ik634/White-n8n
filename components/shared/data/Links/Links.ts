import {
  BarChart3,
  FileText,
  LayoutTemplate,
  Settings,
  Share2,
  UserRound,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { PAGES } from "../../Sidebar/configs/PAGES";

export type SidebarLink = {
  icon: LucideIcon;
  href: string;
  name: string;
};

export const Links: SidebarLink[] = [
  { icon: Zap, href: `#${PAGES.AUTOMATIONS}`, name: "Автоматизации" },
  { icon: Share2, href: `#${PAGES.SOCIALS}`, name: "Соцсети" },
  { icon: FileText, href: `#${PAGES.CONTENT}`, name: "Контент" },
  { icon: BarChart3, href: `#${PAGES.ANALYTICS}`, name: "Аналитика" },
  { icon: LayoutTemplate, href: `#${PAGES.TEMPLATES}`, name: "Шаблоны" },
  { icon: UserRound, href: `#${PAGES.PROFILE}`, name: "Профиль" },
  { icon: Settings, href: `#${PAGES.SETTINGS}`, name: "Настройки" },
];
