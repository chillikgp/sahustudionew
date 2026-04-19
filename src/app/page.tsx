import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { PhotoShowcase } from "@/components/photo-showcase";
import { SiteFooter } from "@/components/site-footer";
import { StoriesSection } from "@/components/stories-section";
import { VideoShowcase } from "@/components/video-showcase";
import { siteConfig } from "@/data/site";

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  foundingDate: "1982",
  image: `${siteConfig.url}/images/hero/hero-poster.jpg`,
  url: siteConfig.url,
  email: siteConfig.email,
  slogan: siteConfig.tagline,
  areaServed: siteConfig.serviceAreas,
  knowsAbout: [
    "Wedding Photography",
    "Wedding Cinematography",
    "Editorial Portraiture",
    "Wedding Storytelling",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData),
        }}
      />
      <h1 className="sr-only">
        Sahu Studio luxury wedding photography and cinematography in Delhi NCR
      </h1>
      <HeroSection />
      <main className="bg-[var(--canvas)]">
        <AboutSection />
        <PhotoShowcase />
        <StoriesSection />
        <VideoShowcase />
      </main>
      <SiteFooter />
    </>
  );
}
