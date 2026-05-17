import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { GalleryGrid } from "@/components/gallery-grid";
import { PhilosophySection } from "@/components/philosophy-section";
import { ExploreMore } from "@/components/explore-more";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { UtilityServicesLinks } from "@/components/utility-services-links";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, type FaqItem } from "@/lib/schema";
import { Testimonials } from "@/components/testimonials";

const pagePath = "/wedding-photography-delhi-ncr";

const breadcrumbs = [
  { name: "Home", path: "" },
  { name: "Wedding Photography Delhi NCR", path: pagePath },
] as const;

const faqs: FaqItem[] = [
  {
    question: "Do you photograph weddings across Delhi NCR?",
    answer:
      "Yes. Sahu Studio photographs weddings across Delhi, Gurugram, Noida, Faridabad, Ghaziabad, and destination venues around North India.",
  },
  {
    question: "What is your photography style?",
    answer:
      "Our style blends candid wedding photography, editorial portraits, ceremony documentation, family storytelling, and cinematic direction for couples who want photographs that feel refined but emotionally true.",
  },
  {
    question: "Can you cover both photography and wedding films?",
    answer:
      "Yes. Our team covers still photography and cinematic wedding films together, so the visual language stays consistent across portraits, rituals, family moments, and the final film.",
  },
  {
    question: "Do you plan portrait and pre-wedding concepts?",
    answer:
      "We help with location, light, mood, pacing, and cinematic direction while keeping the couple's chemistry natural. The result is polished without feeling over-staged.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Wedding Photography in Delhi NCR",
  description:
    "Candid, editorial wedding photography in Delhi NCR by Sahu Studio, covering luxury weddings, pre-wedding shoots, ceremonies, portraits, and cinematic storytelling.",
  path: pagePath,
  keywords: [
    "wedding photography Delhi NCR",
    "wedding photographer in Delhi",
    "candid wedding photographer Delhi",
    "pre wedding shoot Delhi NCR",
    "luxury wedding photographer Gurugram",
  ],
  image: {
    src: "/images/showcase/showcase-01.jpg",
    alt: "Candid wedding photography in Delhi NCR by Sahu Studio",
    width: 1280,
    height: 853,
  },
});

export default function PhotosPage() {
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <JsonLd data={[breadcrumbSchema([...breadcrumbs]), ...serviceSchema(pagePath, faqs)]} />
      <SiteHeader overlay={false} />

      <main className="pt-32 pb-20">
        <Breadcrumbs items={[...breadcrumbs]} />
        {/* Header Section */}
        <header className="site-container mt-12 mb-12">
          <span className="eyebrow text-[11px] tracking-[0.3em] text-[var(--accent)] block mb-4 delayed-reveal">
            Photography
          </span>
          <h1 className="font-editorial text-5xl md:text-7xl leading-[1.1] text-[var(--ink)] mb-6 reveal-up">
            Wedding Photography in <br className="hidden md:block" />
            <span className="headline-emphasis">Delhi NCR</span>
          </h1>
          <div className="max-w-2xl delayed-reveal">
            <p className="text-lg md:text-xl text-[var(--ink-soft)] leading-relaxed mb-6">
              A curated collection of candid moments, timeless portraits, and cinematic wedding storytelling. 
              Captured with an editorial eye and a focus on authentic human emotions across the heart of Delhi NCR.
            </p>
            <p className="text-sm text-[var(--ink-muted)] leading-relaxed italic">
              Specializing in candid photography, pre-wedding storytelling, and royal wedding celebrations 
              that honor both tradition and contemporary elegance.
            </p>
          </div>
        </header>

        {/* Gallery Section */}
        <GalleryGrid />

        <section className="site-container py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
                Delhi NCR Wedding Coverage
              </p>
              <h2 className="font-editorial mt-5 text-4xl leading-tight text-[var(--ink)] md:text-5xl">
                A calm editorial eye for celebrations with scale, movement, and feeling
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
              <p>
                Wedding photography in Delhi NCR asks for more than beautiful portraits. A celebration can move from a quiet home ritual in East Delhi to a sunlit haldi in Gurugram, a hotel ballroom in Aerocity, or a late-night reception in Noida. We approach each event as a living story, watching the people, light, decor, music, and family rhythm before deciding how a frame should feel.
              </p>
              <p>
                Sahu Studio combines candid documentation with gentle cinematic direction. The ceremony is photographed with respect for rituals and cultural detail; portraits are shaped with refined composition; family moments are kept warm and unforced. The result is a body of work that feels luxurious without losing the honesty of the day.
              </p>
              <p>
                Couples come to us for bridal portraits, groom portraits, pre-wedding shoots, engagement coverage, mehendi, haldi, sagan, pheras, reception entries, and complete wedding films. Every deliverable is planned around memory first: photographs that hold emotion, albums that age gracefully, and films that bring back the atmosphere of the celebration.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy & Explore */}
        <PhilosophySection 
          eyebrow="The Studio Philosophy"
          title="Photography that feels honest, timeless, and deeply personal"
          body="As a leading wedding photographer in Delhi NCR, Sahu Studio focuses on capturing real emotions through candid photography. From intimate pre-wedding shoots to grand celebrations, every frame is crafted to preserve your story with authenticity and elegance."
        />

        <section className="site-container border-y border-[var(--line)] py-20">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow text-[10px] uppercase tracking-[0.35em] text-[var(--accent-deep)]">
                Questions
              </p>
              <h2 className="font-editorial mt-4 text-4xl text-[var(--ink)]">
                Planning your wedding photography
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.question} className="space-y-3">
                  <h3 className="font-editorial text-2xl leading-tight text-[var(--ink)]">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <UtilityServicesLinks />

        <ExploreMore 
          cards={[
            {
              eyebrow: "Real Weddings",
              title: "Wedding Stories",
              cta: "View Stories",
              href: "/wedding-stories",
              image: "/images/stories/story-01-cover.jpg"
            },
            {
              eyebrow: "Cinematography",
              title: "Wedding Films",
              cta: "Watch Films",
              href: "/wedding-films",
              image: "/images/video/feature-video.jpg"
            }
          ]}
        />
      </main>
    </div>
  );
}
