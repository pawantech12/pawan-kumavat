import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Skill from "@/app/models/Skill";

export async function GET() {
  await dbConnect();
  const skills = await Skill.find().sort({ createdAt: -1 });
  return NextResponse.json(skills);
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();

  const skill = await Skill.create(body);
  return NextResponse.json(skill, { status: 201 });
}
