"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Plus,
  Pencil,
  Trash2,
  FileText,
  Smartphone,
  Wind,
  Server,
  Send,
  Brain,
  Leaf,
  Coffee,
} from "lucide-react";

import {
  Award,
  BookOpen,
  Code2,
  Cloud,
  Database,
  ShieldCheck,
  Cpu,
  Globe,
  Layout,
  Terminal,
  GraduationCap,
  Layers,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import Loader from "@/components/loader";

export const certificationIcons = {
  // Core / Achievement
  award: Award,
  learning: BookOpen,
  graduation: GraduationCap,

  // Frontend
  frontend: Layout,
  responsive: Smartphone,
  web: Globe,
  ui: Wind,

  // Backend
  backend: Server,
  database: Database,
  api: Send,

  // Full Stack / Architecture
  fullstack: Layers,
  programming: Code2,
  terminal: Terminal,
  cpu: Cpu,

  // Cloud & DevOps
  cloud: Cloud,

  // AI / Prompt / Thinking
  ai: Brain,

  // Tools & Ecosystem
  mongodb: Leaf,
  java: Coffee,

  // Security
  security: ShieldCheck,
};

export default function CertificationsAdmin() {
  const [certifications, setCertifications] = useState([]);
  const [editingCert, setEditingCert] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCerts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/certifications");
        setCertifications(res.data);
      } catch (error) {
        console.log("Error fetching certifications: ", error);
      } finally {
        setLoading(false);
      }
    };
    loadCerts();
  }, []);

  const handleAdd = (data) => {
    setCertifications((prev) => [data, ...prev]);
  };

  const handleUpdate = (data) => {
    setCertifications((prev) =>
      prev.map((c) => (c._id === data._id ? data : c))
    );
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/certifications/${id}`);
    setCertifications((prev) => prev.filter((c) => c._id !== id));
    toast.success("Certification Deleted");
  };

  if (loading) return <Loader text="Loading Certifications..." />;

  return (
    <Card className="p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Certifications
          </h2>
          <p className="text-sm text-slate-500">
            Manage professional credentials & achievements
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Plus className="h-4 w-4 mr-1" />
              Add Certification
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>Add Certification</DialogTitle>
            </DialogHeader>

            <CertificationForm onAdd={handleAdd} />
          </DialogContent>
        </Dialog>
      </div>

      {/* CERTIFICATION GRID */}
      {certifications.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = LucideIcons[cert.icon] || LucideIcons.Award;
            return (
              <div
                key={index}
                className={`group relative rounded-xl border ${cert.color}  p-6 transition-all hover:shadow-xl`}
              >
                {/* ACTIONS */}
                <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => setEditingCert(cert)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-xl">
                      <DialogHeader>
                        <DialogTitle>Edit Certification</DialogTitle>
                      </DialogHeader>

                      <CertificationForm
                        certification={editingCert}
                        onUpdate={handleUpdate}
                      />
                    </DialogContent>
                  </Dialog>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        size="icon"
                        variant="destructive"
                        className="h-8 w-8"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Delete this certification?
                        </AlertDialogTitle>
                      </AlertDialogHeader>

                      <p className="text-sm text-slate-500">
                        This action cannot be undone.
                      </p>

                      <div className="flex justify-end gap-2 mt-4">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-600"
                          onClick={() => handleDelete(cert._id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </div>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>

                {/* ICON */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-8 w-8 opacity-80" />
                  <Award className="h-5 w-5 opacity-60" />
                </div>

                {/* TITLE */}
                <h3 className="font-semibold leading-tight mb-1">
                  {cert.name}
                </h3>

                {/* META */}
                <p className="text-sm opacity-80">{cert.issuer}</p>
                <p className="text-xs opacity-60 mb-4">{cert.date}</p>

                {/* PDF */}
                <a
                  href={cert.pdfLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                >
                  <FileText className="h-4 w-4" />
                  View Certificate
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>No Certifications Added yet</p>
        </div>
      )}
    </Card>
  );
}

/* -------------------------------- */
/* FORM */

function CertificationForm({ certification, onAdd, onUpdate }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: certification || {},
  });

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("issuer", data.issuer);
    formData.append("date", data.date);
    formData.append("icon", data.icon);
    formData.append("color", data.color);

    if (data.pdf && data.pdf.length > 0) {
      formData.append("pdf", data.pdf[0]);
    }

    try {
      if (certification?._id) {
        const res = await axios.put(
          `/api/certifications/${certification._id}`,
          formData
        );
        onUpdate?.(res.data);
        toast.success("Certification Updated");
      } else {
        const res = await axios.post("/api/certifications", formData);
        onAdd?.(res.data);
        toast.success("Certification Added");
        reset();
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Certification Name</label>
        <Input
          defaultValue={certification?.name}
          {...register("name")}
          placeholder="e.g. Responsive Web Design"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Issuer</label>
        <Input
          defaultValue={certification?.issuer}
          {...register("issuer")}
          placeholder="freeCodeCamp, AWS..."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Completion Date</label>
          <Input
            defaultValue={certification?.date}
            {...register("date")}
            placeholder="Apr 2024"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Certification Icon</label>

          <Select
            defaultValue={certification?.icon}
            onValueChange={(v) => setValue("icon", v)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an icon" />
            </SelectTrigger>

            <SelectContent>
              {Object.entries(certificationIcons).map(([key, Icon]) => {
                const lucideName = Icon.displayName || Icon.name || key;

                return (
                  <SelectItem
                    key={key}
                    value={lucideName} // ✅ send Lucide icon name
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      <span className="capitalize">{key}</span>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Certificate PDF</label>
        <Input type="file" accept="application/pdf" {...register("pdf")} />
      </div>

      <div>
        <label className="text-sm font-medium">Color Classes</label>
        <Input
          defaultValue={certification?.color}
          {...register("color")}
          placeholder="bg-yellow-100 text-yellow-800 border-yellow-200"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        {isSubmitting
          ? certification
            ? "Updating..."
            : "Saving..."
          : certification
          ? "Update Certification"
          : "Save Certification"}
      </Button>
    </form>
  );
}
