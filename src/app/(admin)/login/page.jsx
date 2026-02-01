"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Lock, Mail, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

export default function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    const checkSession = async () => {
      try {
        await axios.get("/api/admin/session");
        router.replace("/admin");
      } catch {
        router.replace("/login");
      }
    };

    checkSession();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/admin/login", form);
      if (res.data.success) {
        toast.success(res.data.message);
        router.push("/admin");
      }
      setForm({ email: "", password: "" });
    } catch (error) {
      console.log("errror: ", error);

      toast.error(
        error.response.data.message || "Something went wrong try again later"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* GRADIENT BLOBS */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      {/* CARD */}
      <Card className="relative w-full max-w-md p-8 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border shadow-xl">
        {/* HEADER */}
        <div className="mb-4 text-center">
          <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
            <ShieldCheck className="h-7 w-7" />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight">
            Admin Panel Login
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Secure access to your portfolio dashboard
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <Label>Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="email"
                placeholder="admin@example.com"
                className="pl-10 h-11"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="space-y-1">
            <Label>Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />

              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 pr-10 h-11"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />

              {/* SHOW / HIDE BUTTON */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* SUBMIT */}
          <Button
            type="submit"
            disabled={loading}
            className="mt-3 w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:opacity-90 transition"
          >
            {loading ? "Signing in..." : "Sign In"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </form>

        {/* FOOTER */}
        <div className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Pawan Kumavat · Portfolio Admin
        </div>
      </Card>
    </div>
  );
}
