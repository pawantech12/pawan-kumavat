"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Code2,
  Github,
  Linkedin,
  Mail,
  LayoutDashboard,
} from "lucide-react";
import axios from "axios";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await axios.get("/api/admin/session");
        if (res.data.authenticated) setIsAdmin(true);
      } catch {
        setIsAdmin(false);
      }
    };

    checkSession();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3 select-none">
            {/* Terminal Icon */}
            <div
              className="relative flex h-10 w-10 items-center justify-center rounded-lg
    bg-gradient-to-br from-blue-600 to-indigo-600
    shadow-lg ring-1 ring-blue-500/30
    group-hover:scale-105 transition-transform"
            >
              <Code2 className="h-5 w-5 text-white" />

              {/* Blinking cursor dot */}
              <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            </div>

            {/* Terminal Text */}
            <div className="flex items-center font-mono text-xl font-semibold">
              <span className="text-gray-700">&gt;</span>
              <span className="ml-1 text-gray-800">
                pawan
                <span className="text-blue-600">.dev</span>
              </span>
              <span className="ml-1 h-5 w-[2px] bg-blue-600 animate-pulse" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="max-[956px]:hidden flex items-center gap-2
  rounded-full border border-neutral-200/70
  bg-white/60 backdrop-blur-md
  px-4 py-2
  font-mono text-base shadow-sm"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center gap-1.5
          rounded-full px-3 py-1.5
          transition-all duration-300
          ${
            active
              ? "bg-gradient-to-r from-blue-600/10 to-indigo-600/10 text-blue-600 shadow-inner"
              : "text-neutral-600 hover:text-blue-600 hover:bg-blue-500/5"
          }
        `}
                >
                  {/* CLI Cursor */}
                  <span
                    className={`text-blue-500 font-bold transition-all duration-300
            ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
                  >
                    $
                  </span>

                  {/* Command Text */}
                  <span className="relative font-semibold tracking-tight">
                    {item.name}
                  </span>

                  {/* Active underline pulse */}
                  <span
                    className={`pointer-events-none absolute left-2 right-2 -bottom-[3px]
            h-[2px] rounded-full
            bg-gradient-to-r from-blue-600 to-indigo-600
            transition-transform duration-300 origin-left
            ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
          `}
                  />

                  {/* Glow dot */}
                  {active && (
                    <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-blue-500 animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="max-[956px]:hidden flex items-center gap-3">
            {/* GitHub */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="group rounded-xl border border-transparent
               hover:border-gray-200 hover:bg-gray-100
               transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link
                href="https://github.com/pawantech12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub Profile"
              >
                <Github className="h-4 w-4 text-gray-700 group-hover:text-black" />
              </Link>
            </Button>

            {/* LinkedIn */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="group rounded-xl border border-transparent
               hover:border-blue-200 hover:bg-blue-50
               transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link
                href="https://www.linkedin.com/in/pawan-kumavat-11b105297/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4 text-gray-700 group-hover:text-blue-600" />
              </Link>
            </Button>

            {/* Email */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="group rounded-xl border border-transparent
               hover:border-purple-200 hover:bg-purple-50
               transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link
                href="mailto:pawankumavat042@gmail.com"
                aria-label="Send an email to Pawan Kumavat"
              >
                <Mail className="h-4 w-4 text-gray-700 group-hover:text-purple-600" />
              </Link>
            </Button>

            {/* Admin Dashboard */}
            {isAdmin && (
              <Button
                size="sm"
                className="ml-2 gap-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600
                 text-white shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <Link href="/admin">
                  <LayoutDashboard className="h-4 w-4" />
                  Admin
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="min-[956px]:hidden">
              <Button variant="ghost" size="sm" aria-label="Open mobile menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] sm:w-[400px]
      bg-white/90 backdrop-blur-xl
      border-l border-neutral-200"
            >
              {/* Header / Brand */}
              <div className="flex items-center gap-3 mb-10">
                <div
                  className="relative flex h-10 w-10 items-center justify-center rounded-lg
        bg-gradient-to-br from-blue-600 to-indigo-600
        shadow-lg ring-1 ring-blue-500/30"
                >
                  <Code2 className="h-5 w-5 text-white" />
                  <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                </div>

                <div className="flex items-center font-mono text-lg font-semibold">
                  <span className="text-gray-600">&gt;</span>
                  <span className="ml-1 text-gray-800">
                    pawan<span className="text-blue-600">.dev</span>
                  </span>
                  <span className="ml-1 h-4 w-[2px] bg-blue-600 animate-pulse" />
                </div>
              </div>

              {/* Navigation */}
              <nav
                className="flex flex-col gap-3 font-mono"
                aria-label="Mobile navigation"
              >
                {navigation.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group relative flex items-center gap-3
              rounded-xl px-4 py-3
              transition-all duration-300
              ${
                active
                  ? "bg-gradient-to-r from-blue-600/10 to-indigo-600/10 text-blue-600 shadow-inner"
                  : "text-gray-700 hover:bg-blue-500/5 hover:text-blue-600"
              }
            `}
                    >
                      {/* CLI Cursor */}
                      <span
                        className={`font-bold text-blue-500 transition-opacity
                ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
              `}
                      >
                        $
                      </span>

                      {/* Command */}
                      <span className="font-semibold tracking-tight">
                        {item.name}
                      </span>

                      {/* Active underline */}
                      <span
                        className={`absolute left-4 right-4 bottom-1 h-[2px] rounded-full
                bg-gradient-to-r from-blue-600 to-indigo-600
                transition-transform duration-300 origin-left
                ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
              `}
                      />

                      {/* Active glow dot */}
                      {active && (
                        <span
                          className="absolute right-3 top-1/2 -translate-y-1/2
                h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Footer Actions */}
              <div className="mt-10 pt-6 border-t flex items-center gap-3">
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://github.com/pawantech12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>

                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/pawan-kumavat-11b105297/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>

                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:pawankumavat042@gmail.com">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>

                {isAdmin && (
                  <Button
                    size="sm"
                    className="ml-auto gap-1 rounded-xl
            bg-gradient-to-r from-blue-600 to-indigo-600
            text-white shadow-md"
                    asChild
                  >
                    <Link href="/admin">
                      <LayoutDashboard className="h-4 w-4" />
                      Admin
                    </Link>
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
