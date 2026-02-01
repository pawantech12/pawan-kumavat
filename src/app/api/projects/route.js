import { NextResponse } from "next/server";

import fs from "fs";
import path from "path";
import dbConnect from "@/lib/dbConnect";
import Project from "@/app/models/Project";

export async function GET() {
  await dbConnect();
  const projects = await Project.find().sort({ createdAt: -1 });
  return NextResponse.json(projects);
}

export async function POST(req) {
  await dbConnect();
  const formData = await req.formData();

  const file = formData.get("image");
  console.log("File: ", file.name);

  let imagePath = null;

  if (file && file.name) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public/project-images");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, file.name);
    fs.writeFileSync(filePath, buffer);

    imagePath = `/project-images/${file.name}`;
  }

  const project = await Project.create({
    title: formData.get("title"),
    description: formData.get("description"),
    github: formData.get("github"),
    demo: formData.get("demo"),
    image: imagePath,
  });

  return NextResponse.json(project, { status: 201 });
}
