import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { FeaturedServicesSection } from "@/components/featured-services-section";
import { HeroSection } from "@/components/hero-section";
import { JsonLd } from "@/components/json-ld";
import { PhotoShowcase } from "@/components/photo-showcase";
import { StoriesSection } from "@/components/stories-section";
import { VideoShowcase } from "@/components/video-showcase";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Sahu Studio | Luxury Wedding Photography & Cinematography in Delhi NCR",
  description:
    "Luxury wedding photography and cinematic films in Delhi NCR, crafted by Sahu Studio with editorial portraits, candid emotion, and a family studio legacy since 1982.",
  path: "",
  keywords: [
    "Sahu Studio wedding photography",
    "luxury wedding photographer Delhi NCR",
    "wedding cinematography Delhi",
    "editorial Indian wedding photographer",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "" }])} />
      <h1 className="sr-only">
        Sahu Studio luxury wedding photography and cinematography in Delhi NCR
      </h1>
      <HeroSection />
      <main className="bg-[var(--canvas)]">
        <AboutSection />
        <PhotoShowcase />
        <StoriesSection />
        <FeaturedServicesSection />
        <VideoShowcase />
      </main>
    </>
  );
}
