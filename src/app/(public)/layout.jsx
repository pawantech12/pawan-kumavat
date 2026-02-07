import "../globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "b1a61aee86074d59a23b3d051cdf2d3d"}'
      ></script>
    </div>
  );
}
