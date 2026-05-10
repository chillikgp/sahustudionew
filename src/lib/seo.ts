import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type SeoMetadataInput = {
  title: string;
  description: string;
  path?: `/${string}` | "";
  keywords?: string[];
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  type?: "website" | "article";
};

const defaultImage = {
  src: "/images/hero/hero-poster.jpg",
  alt: "Cinematic wedding photography and films by Sahu Studio",
  width: 1920,
  height: 1080,
};

export const siteOrigin = siteConfig.url.replace(/\/$/, "");

export function absoluteUrl(path = "") {
  if (path.startsWith("http")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteOrigin}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function canonicalUrl(path: SeoMetadataInput["path"] = "") {
  return absoluteUrl(path);
}

export function withBrand(title: string) {
  return title.includes("| Sahu Studio") ||
    title.startsWith(`${siteConfig.name} |`) ||
    title === siteConfig.name
    ? title
    : `${title} | ${siteConfig.name}`;
}

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = defaultImage,
  type = "website",
}: SeoMetadataInput): Metadata {
  const brandedTitle = withBrand(title);
  const url = canonicalUrl(path);
  const imageUrl = absoluteUrl(image.src);

  return {
    title: {
      absolute: brandedTitle,
    },
    description,
    keywords: [
      siteConfig.name,
      "Delhi NCR wedding photographer",
      "luxury wedding photography Delhi",
      "candid wedding photography",
      "cinematic wedding films",
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: "en_IN",
      url,
      title: brandedTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: image.width ?? defaultImage.width,
          height: image.height ?? defaultImage.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "wedding photography",
  };
}
