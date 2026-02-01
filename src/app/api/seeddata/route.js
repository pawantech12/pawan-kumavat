import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Skill from "@/app/models/Skill";

const skills = [
  { name: "Express.js", icon: "Server", color: "bg-gray-100 text-gray-800" },
  { name: "MongoDB", icon: "Database", color: "bg-green-100 text-green-800" },
  { name: "MySQL", icon: "Database", color: "bg-blue-100 text-blue-800" },
  { name: "Cloudinary", icon: "Cloud", color: "bg-orange-100 text-orange-800" },
  { name: "Firebase", icon: "Cloud", color: "bg-blue-100 text-blue-800" },
  { name: "Docker", icon: "Layers", color: "bg-blue-100 text-blue-800" },
  { name: "Vercel", icon: "Globe", color: "bg-gray-100 text-gray-800" },
  { name: "Netlify", icon: "Globe", color: "bg-teal-100 text-teal-800" },
  { name: "Git", icon: "GitBranch", color: "bg-red-100 text-red-800" },
  { name: "GitHub", icon: "GitBranch", color: "bg-gray-100 text-gray-800" },
  { name: "VS Code", icon: "Code", color: "bg-blue-100 text-blue-800" },
  { name: "Figma", icon: "Figma", color: "bg-purple-100 text-purple-800" },
  { name: "Postman", icon: "Tool", color: "bg-orange-100 text-orange-800" },
  { name: "Webpack", icon: "Settings", color: "bg-blue-100 text-blue-800" },
  { name: "Vite", icon: "Zap", color: "bg-purple-100 text-purple-800" },
  { name: "GraphQL", icon: "Zap", color: "bg-pink-100 text-pink-800" },
  { name: "REST APIs", icon: "Server", color: "bg-green-100 text-green-800" },
  { name: "Clerk", icon: "Shield", color: "bg-indigo-100 text-indigo-800" },
  { name: "ShadCN UI", icon: "Workflow", color: "bg-rose-100 text-rose-800" },
  {
    name: "Bootstrap",
    icon: "Smartphone",
    color: "bg-purple-100 text-purple-800",
  },
  { name: "PHP", icon: "FileCode", color: "bg-indigo-100 text-indigo-800" },
];

export async function GET() {
  try {
    await dbConnect();

    const insertedSkills = await Skill.insertMany(skills);

    return NextResponse.json(
      {
        message: "✅ Skills seeded successfully",
        count: insertedSkills.length,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Skill seeding error:", error);
    return NextResponse.json(
      { error: "Failed to seed skills" },
      { status: 500 }
    );
  }
}
