import { filmCollection, siteConfig } from "@/data/site";
import type { Story } from "@/data/stories";
import { absoluteUrl, canonicalUrl } from "@/lib/seo";

export type BreadcrumbItem = {
  name: string;
  path: `/${string}` | "";
};

export type FaqItem = {
  question: string;
  answer: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl("/images/hero/hero-poster.jpg"),
    logo: absoluteUrl("/images/brand-logo.png"),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$$",
    foundingDate: "1982",
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Karkardooma",
      addressLocality: "Delhi",
      addressRegion: "Delhi NCR",
      postalCode: "110092",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6487,
      longitude: 77.3001,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: [siteConfig.socials.instagram, siteConfig.socials.youtube],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    makesOffer: [
      "Wedding photography",
      "Candid wedding photography",
      "Pre-wedding photography",
      "Wedding cinematography",
      "Destination wedding coverage",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#business`,
    },
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(path: `/${string}`, faqs: FaqItem[]) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${canonicalUrl(path)}#service`,
      name: "Wedding Photography in Delhi NCR",
      serviceType: "Luxury wedding photography and cinematography",
      provider: {
        "@id": `${siteConfig.url}/#business`,
      },
      areaServed: siteConfig.serviceAreas,
      url: canonicalUrl(path),
      image: absoluteUrl("/images/showcase/showcase-01.jpg"),
      description:
        "Editorial wedding photography, candid coverage, portraits, pre-wedding shoots, and cinematic wedding storytelling across Delhi NCR.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Wedding photography services",
        itemListElement: [
          "Candid wedding photography",
          "Bridal and groom portraits",
          "Pre-wedding shoots",
          "Wedding films",
          "Family and ceremony coverage",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
          },
        })),
      },
    },
    faqSchema(faqs),
  ];
}

export function storyArticleSchema(story: Story) {
  const path = `/wedding-stories/${story.slug}` as const;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl(path)}#article`,
    headline: `${story.coupleNames} at ${story.venue}`,
    description: story.seoDescription,
    image: [absoluteUrl(story.coverImage.src)],
    author: {
      "@id": `${siteConfig.url}/#business`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#business`,
    },
    mainEntityOfPage: canonicalUrl(path),
    articleSection: story.category,
    keywords: story.tags.join(", "),
    about: [
      story.venue,
      story.city,
      story.category,
      ...story.functionsCovered,
    ],
    inLanguage: "en-IN",
  };
}

export function imageGallerySchema(story: Story) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${canonicalUrl(`/wedding-stories/${story.slug}`)}#gallery`,
    name: `${story.coupleNames} wedding photography gallery`,
    image: story.gallery.slice(0, 8).map((image) => ({
      "@type": "ImageObject",
      contentUrl: absoluteUrl(image.src),
      caption: image.caption,
      description: image.alt,
    })),
  };
}

export function storyListSchema(stories: Story[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: stories.map((story, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: canonicalUrl(`/wedding-stories/${story.slug}`),
      name: `${story.coupleNames} at ${story.venue}`,
    })),
  };
}

export function filmListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: filmCollection.map((film, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VideoObject",
        name: film.title,
        description: film.summary,
        thumbnailUrl: absoluteUrl(film.poster),
        uploadDate: "2024-01-01T08:00:00+05:30",
        embedUrl: `https://www.youtube-nocookie.com/embed/${film.youtubeId.split("?")[0]}`,
        contentUrl: `https://www.youtube.com/watch?v=${film.youtubeId}`,
        duration: film.duration,
      },
    })),
  };
}
