import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

import Project from "@/app/models/Project";
import Testimonial from "@/app/models/Testimonial";
import Service from "@/app/models/Service";
import Skill from "@/app/models/Skill";
import Certification from "@/app/models/Certification";
import Education from "@/app/models/Education";

export async function GET() {
  await dbConnect();

  const [projects, testimonials, services, skills, certifications, education] =
    await Promise.all([
      Project.countDocuments(),
      Testimonial.countDocuments(),
      Service.countDocuments(),
      Skill.countDocuments(),
      Certification.countDocuments(),
      Education.countDocuments(),
    ]);

  return NextResponse.json({
    projects,
    testimonials,
    services,
    skills,
    certifications,
    education,
  });
}
