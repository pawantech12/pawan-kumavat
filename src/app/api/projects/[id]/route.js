import { NextResponse } from "next/server";

import fs from "fs";
import path from "path";
import dbConnect from "@/lib/dbConnect";
import Project from "@/app/models/Project";

export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = await params;
  const formData = await req.formData();

  const existingProject = await Project.findById(id);
  if (!existingProject) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  let updateData = {
    title: formData.get("title"),
    description: formData.get("description"),
    github: formData.get("github"),
    demo: formData.get("demo"),
  };

  const file = formData.get("image");

  if (file && file.name) {
    // 🔥 Delete old image if exists
    if (existingProject.image) {
      const oldImagePath = path.join(
        process.cwd(),
        "public",
        existingProject.image
      );

      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    // ✅ Save new image
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public/project-images");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

    const newFilePath = path.join(uploadDir, file.name);
    fs.writeFileSync(newFilePath, buffer);

    updateData.image = `/project-images/${file.name}`;
  }

  const updatedProject = await Project.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  return NextResponse.json(updatedProject);
}

export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } = await params;

  const project = await Project.findById(id);
  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  // 🔥 Delete image file
  if (project.image) {
    const imagePath = path.join(process.cwd(), "public", project.image);

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  }

  // ❌ Delete DB record
  await Project.findByIdAndDelete(id);

  return NextResponse.json({ success: true });
}
