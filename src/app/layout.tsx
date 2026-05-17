import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { InstagramTeaser } from "@/components/instagram-teaser";
import { SiteFooter } from "@/components/site-footer";
import { GoogleAnalytics } from "@/components/google-analytics";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://sahustudio.in"),
  title: {
    default: "Sahu Studio | Luxury Wedding Photography & Cinematography in Delhi NCR",
    template: "%s | Sahu Studio",
  },
  description:
    "Sahu Studio crafts royal, editorial wedding photography and cinematic films for Delhi NCR celebrations, shaping memories with trust and polish since 1982.",
  applicationName: "Sahu Studio",
  keywords: [
    "Sahu Studio",
    "Delhi NCR wedding photographer",
    "Delhi wedding cinematography",
    "luxury wedding photography",
    "editorial wedding films",
    "wedding stories Delhi NCR",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sahustudio.in",
    title: "Sahu Studio | Luxury Wedding Photography & Cinematography in Delhi NCR",
    description:
      "Sahu Studio crafts royal, editorial wedding photography and cinematic films for Delhi NCR celebrations, shaping memories with trust and polish since 1982.",
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
    title: "Sahu Studio | Luxury Wedding Photography & Cinematography in Delhi NCR",
    description:
      "Sahu Studio crafts royal, editorial wedding photography and cinematic films for Delhi NCR celebrations, shaping memories with trust and polish since 1982.",
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
      <head>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <div className="flex-grow">{children}</div>
        <InstagramTeaser />
        <SiteFooter />
      </body>
    </html>
  );
}
