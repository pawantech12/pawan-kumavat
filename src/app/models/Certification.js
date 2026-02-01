import mongoose from "mongoose";

const CertificationSchema = new mongoose.Schema(
  {
    name: String,
    issuer: String,
    date: String,
    icon: String,
    color: String,
    pdfLink: String,
  },
  { timestamps: true }
);

export default mongoose.models.Certification ||
  mongoose.model("Certification", CertificationSchema);
