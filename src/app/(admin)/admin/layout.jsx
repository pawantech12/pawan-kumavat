"use client";

import { Sidebar } from "@/components/admin/sidebar";
import { AdminHeader } from "@/components/admin/header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        await axios.get("/api/admin/session");
      } catch {
        await axios.post("/api/admin/logout");
        router.replace("/login");
      }
    };

    checkSession();
  }, [router]);
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* MOBILE OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed z-50 inset-y-0 left-0 w-64 transform bg-white dark:bg-slate-900
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:static lg:translate-x-0`}
      >
        <Sidebar onMenuClick={() => setOpen(false)} />
      </div>

      <div className="flex-1">
        <AdminHeader onMenuClick={() => setOpen(true)} />
        <main className="p-6 h-[85vh] overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
