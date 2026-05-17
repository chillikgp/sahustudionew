import fs from "node:fs";
import path from "node:path";
import type { Testimonial } from "@/data/testimonials";

const servicesDirectory = path.join(process.cwd(), "content/services");

export type ServiceImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
};

export type ServiceLink = {
  label?: string;
  title?: string;
  description?: string;
  href: string;
  image?: string;
};

export type ServicePageContent = {
  slug: string;
  status: "published" | "draft";
  isFeatured?: boolean;
  serviceType: string;
  title: string;
  shortTitle: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    image: ServiceImage;
  };
  hero: {
    layout?: "editorial" | "product";
    eyebrow: string;
    title: string;
    dek: string;
    image: ServiceImage;
    thumbnails?: ServiceImage[];
    product?: {
      priceLabel?: string;
      note?: string;
      specs?: Array<{
        label: string;
        value: string;
      }>;
      options?: string[];
    };
    primaryCta: Required<Pick<ServiceLink, "label" | "href">>;
    secondaryCta?: Required<Pick<ServiceLink, "label" | "href">>;
  };
  location: {
    city: string;
    area: string;
    serviceAreas: string[];
  };
  business?: {
    phone?: string;
    priceRange?: string;
    latitude?: string | number;
    longitude?: string | number;
    sameAs?: string[];
  };
  editorial: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  gallery?: {
    eyebrow: string;
    heading: string;
    images: ServiceImage[];
  };
  included: {
    eyebrow: string;
    heading: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  process: {
    eyebrow: string;
    heading: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: ServiceLink[];
  relatedResources?: ServiceLink[];
  testimonials?: Testimonial[];
  cta: {
    eyebrow: string;
    heading: string;
    body: string;
    primaryCta: Required<Pick<ServiceLink, "label" | "href">>;
    secondaryCta?: Required<Pick<ServiceLink, "label" | "href">>;
  };
};

function assertString(value: unknown, field: string): asserts value is string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid service content: ${field} must be a non-empty string.`);
  }
}

function validateServicePageContent(content: ServicePageContent) {
  assertString(content.slug, "slug");
  assertString(content.title, "title");
  assertString(content.shortTitle, "shortTitle");
  assertString(content.serviceType, "serviceType");
  assertString(content.seo?.title, "seo.title");
  assertString(content.seo?.description, "seo.description");
  assertString(content.hero?.title, "hero.title");
  assertString(content.hero?.image?.src, "hero.image.src");

  if (!Array.isArray(content.editorial?.paragraphs) || content.editorial.paragraphs.length === 0) {
    throw new Error(`Invalid service content: ${content.slug} needs editorial paragraphs.`);
  }

  if (!Array.isArray(content.faqs) || content.faqs.length === 0) {
    throw new Error(`Invalid service content: ${content.slug} needs FAQs.`);
  }
}

export function getServiceSlugs() {
  if (!fs.existsSync(servicesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(servicesDirectory)
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(/\.json$/, ""));
}

export function getServicePage(slug: string) {
  const filePath = path.join(servicesDirectory, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = JSON.parse(fs.readFileSync(filePath, "utf8")) as ServicePageContent;
  validateServicePageContent(content);

  if (content.status !== "published") {
    return null;
  }

  return content;
}

export function getAllServicePages() {
  return getServiceSlugs()
    .map((slug) => getServicePage(slug))
    .filter((service): service is ServicePageContent => Boolean(service));
}

export function getFeaturedServicePages(limit = 6) {
  return getAllServicePages()
    .filter((service) => service.isFeatured)
    .slice(0, limit);
}
