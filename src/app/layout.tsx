import type { Metadata } from "next";
import "./globals.css";

const title = "Sahu Studio | Luxury Wedding Photography & Cinematography in Delhi NCR";
const description =
  "Sahu Studio crafts royal, editorial wedding photography and cinematic films for Delhi NCR celebrations, shaping memories with trust and polish since 1982.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sahustudio.in"),
  title: {
    default: title,
    template: "%s | Sahu Studio",
  },
  description,
  applicationName: "Sahu Studio",
  keywords: [
    "Sahu Studio",
    "Delhi NCR wedding photographer",
    "Delhi wedding cinematography",
    "luxury wedding photography",
    "editorial wedding films",
    "wedding stories Delhi NCR",
  ],
  alternates: {
    canonical: "https://sahustudio.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sahustudio.in",
    title,
    description,
    siteName: "Sahu Studio",
    images: [
      {
        url: "/images/hero/hero-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Cinematic wedding ambience by Sahu Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero/hero-poster.jpg"],
  },
  category: "wedding photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
