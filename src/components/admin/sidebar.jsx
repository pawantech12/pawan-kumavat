"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Folder,
  Star,
  Layers,
  Wrench,
  Briefcase,
  Award,
  GraduationCap,
  X,
} from "lucide-react";
import { Button } from "../ui/button";

const menu = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Projects", href: "/admin/projects", icon: Folder },
  { name: "Testimonials", href: "/admin/testimonials", icon: Star },
  { name: "Services", href: "/admin/services", icon: Layers },
  { name: "Skills", href: "/admin/skills", icon: Wrench },
  { name: "Experiences", href: "/admin/experiences", icon: Briefcase },
  { name: "Certifications", href: "/admin/certifications", icon: Award },
  { name: "Educations", href: "/admin/educations", icon: GraduationCap },
];

export function Sidebar({ onMenuClick }) {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-slate-900 border-r dark:border-slate-800 flex flex-col">
      {/* Brand */}
      <div className="px-6 py-6 border-b dark:border-slate-800 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
            PK
          </div>
          <div>
            <h2 className="text-sm font-semibold leading-tight">Admin Panel</h2>
            <p className="text-xs text-slate-500">Portfolio Manager</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-1">
        {menu.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onMenuClick}
              className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group
                ${
                  active
                    ? "bg-gradient-to-r from-blue-600/10 via-indigo-500/10 to-purple-600/10 text-blue-600 dark:text-blue-400"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }
              `}
            >
              {/* Active Indicator */}
              {active && (
                <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-gradient-to-b from-blue-600 to-purple-600" />
              )}

              {/* Icon */}
              <div
                className={`h-9 w-9 flex items-center justify-center rounded-lg transition-all
                  ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "bg-blue-50 dark:bg-slate-800 text-blue-600 group-hover:bg-blue-100"
                  }
                `}
              >
                <item.icon className="h-4 w-4" />
              </div>

              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t dark:border-slate-800 text-xs text-slate-500">
        © {new Date().getFullYear()} Pawan Kumavat
      </div>
    </aside>
  );
}
