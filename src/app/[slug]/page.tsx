import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ServicePageTemplate } from "@/components/service-page/service-page-template";
import {
  getAllServicePages,
  getServicePage,
} from "@/lib/content/services";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  contentServiceSchema,
  serviceImageGallerySchema,
} from "@/lib/schema";

type ServiceRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllServicePages().map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/${service.slug}`,
    keywords: service.seo.keywords,
    image: service.seo.image,
  });
}

export default async function DynamicServicePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", path: "" as const },
    { name: service.shortTitle, path: `/${service.slug}` as const },
  ];
  const gallerySchema = serviceImageGallerySchema(service);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          ...contentServiceSchema(service),
          ...(gallerySchema ? [gallerySchema] : []),
        ]}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
