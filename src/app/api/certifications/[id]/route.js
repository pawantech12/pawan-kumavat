import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import dbConnect from "@/lib/dbConnect";
import Certification from "@/app/models/Certification";

/* ===========================
   UPDATE CERTIFICATION
=========================== */
export async function PUT(req, { params }) {
  await dbConnect();
  const { id } = params;

  const formData = await req.formData();

  const existingCert = await Certification.findById(id);
  if (!existingCert) {
    return NextResponse.json(
      { error: "Certification not found" },
      { status: 404 }
    );
  }

  let updateData = {
    name: formData.get("name"),
    issuer: formData.get("issuer"),
    date: formData.get("date"),
    icon: formData.get("icon"),
    color: formData.get("color"),
    pdfLink: existingCert.pdfLink,
  };

  const file = formData.get("pdf");

  if (file && file.name) {
    // 🔥 Delete old PDF if exists
    if (existingCert.pdfLink) {
      const oldPdfPath = path.join(
        process.cwd(),
        "public",
        existingCert.pdfLink
      );

      if (fs.existsSync(oldPdfPath)) {
        fs.unlinkSync(oldPdfPath);
      }
    }

    // ✅ Save new PDF
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public/certificate-files");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const newFilePath = path.join(uploadDir, file.name);
    fs.writeFileSync(newFilePath, buffer);

    updateData.pdfLink = `/certificate-files/${file.name}`;
  }

  const updatedCert = await Certification.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  return NextResponse.json(updatedCert);
}

/* ===========================
   DELETE CERTIFICATION
=========================== */
export async function DELETE(req, { params }) {
  await dbConnect();
  const { id } = params;

  const cert = await Certification.findById(id);
  if (!cert) {
    return NextResponse.json(
      { error: "Certification not found" },
      { status: 404 }
    );
  }

  // 🔥 Delete PDF file
  if (cert.pdfLink) {
    const pdfPath = path.join(process.cwd(), "public", cert.pdfLink);

    if (fs.existsSync(pdfPath)) {
      fs.unlinkSync(pdfPath);
    }
  }

  // ❌ Delete DB record
  await Certification.findByIdAndDelete(id);

  return NextResponse.json({ success: true });
}
