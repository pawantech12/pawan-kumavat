import { generateMetadata } from "@/lib/seo";
import TestimonialsClientPage from "./TestimonialsClientPage";

export const metadata = generateMetadata({
  title: "Testimonials | Pawan Kumavat - Full Stack Developer",
  description:
    "Read what clients and colleagues say about working with John Doe, a skilled full-stack developer.",
  url: "https://pawan-kumavat.vercel.app/testimonials",
});

export default function TestimonialsPage() {
  return <TestimonialsClientPage />;
}
