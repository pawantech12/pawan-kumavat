"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Bell, ExternalLink, LogOut, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function AdminHeader({ onMenuClick }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/admin/logout");
      toast.success("Logout Successfully");
      router.replace("/login");
    } catch (error) {
      console.log("Error while logout: ", error);
    }
  };
  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      {/* Accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />

      <div className="flex items-center justify-between px-6 py-4">
        {/* Left */}
        <div className="flex items-center gap-2">
          {/* MOBILE MENU BUTTON */}
          <Button
            variant="outline"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <h1 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Dashboard
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* View site */}
          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-full border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button
            variant="destructive"
            className="rounded-full"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
          </Button>

          {/* User avatar */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
              PK
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
