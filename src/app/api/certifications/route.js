import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import dbConnect from "@/lib/dbConnect";
import Certification from "@/app/models/Certification";

export async function GET() {
  await dbConnect();
  const certs = await Certification.find().sort({ createdAt: -1 });
  return NextResponse.json(certs);
}

export async function POST(req) {
  await dbConnect();
  const formData = await req.formData();

  const file = formData.get("pdf");
  let pdfPath = null;

  if (file && file.name) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public/certificate-files");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, file.name);
    fs.writeFileSync(filePath, buffer);

    pdfPath = `/certificate-files/${file.name}`;
  }

  const cert = await Certification.create({
    name: formData.get("name"),
    issuer: formData.get("issuer"),
    date: formData.get("date"),
    icon: formData.get("icon"),
    color: formData.get("color"),
    pdfLink: pdfPath,
  });

  return NextResponse.json(cert, { status: 201 });
}
