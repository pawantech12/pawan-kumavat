import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Skill from "@/app/models/Skill";

export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = await params;
  const body = await req.json();

  const updatedSkill = await Skill.findByIdAndUpdate(id, body, { new: true });

  return NextResponse.json(updatedSkill);
}

export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } = await params;
  await Skill.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
