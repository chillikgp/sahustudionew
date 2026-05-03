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

import { SiteFooter } from "@/components/site-footer";
import { InstagramTeaser } from "@/components/instagram-teaser";
import { Testimonials } from "@/components/testimonials";
import { GoogleAnalytics } from "@/components/google-analytics";
import { siteConfig } from "@/data/site";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": `${siteConfig.url}/images/hero/hero-poster.jpg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Karkardooma",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi NCR",
      "postalCode": "110092",
      "addressCountry": "IN"
    },
    "url": siteConfig.url,
    "telephone": siteConfig.phone,
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6487,
      "longitude": 77.3001
    }
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <div className="flex-grow">{children}</div>
        <Testimonials />
        <InstagramTeaser />
        <SiteFooter />
      </body>
    </html>
  );
}
