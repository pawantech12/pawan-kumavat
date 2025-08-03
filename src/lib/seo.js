export function generateMetadata({
  title = "Pawan Kumavat - Full Stack Developer",
  description = "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  url = "https://pawan-kumavat.vercel.app/",
}) {
  return {
    title,
    description,
    keywords:
      "Full Stack Developer, React, Next.js, Node.js, JavaScript, Web Development, Pawan Kumavat",
    authors: [{ name: "Pawan Kumavat" }],
    creator: "Pawan Kumavat",
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: "Pawan Kumavat Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@pawantech12",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: new URL("https://pawan-kumavat.vercel.app"),
  };
}
