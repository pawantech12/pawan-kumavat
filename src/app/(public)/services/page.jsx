import { generateMetadata } from "@/lib/seo";
import ServicesClientPage from "./ServicesClientPage";

export const metadata = generateMetadata({
  title: "Services | Pawan Kumavat - Full Stack Developer",
  description:
    "Comprehensive web development services including frontend, backend, mobile apps, and cloud solutions by John Doe.",
  url: "https://pawan-kumavat.vercel.app/services",
});

export default function ServicesPage() {
  return <ServicesClientPage />;
}
