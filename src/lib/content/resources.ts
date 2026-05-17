import fs from "node:fs";
import path from "node:path";

const resourcesDirectory = path.join(process.cwd(), "content/resources");

export type ResourceFrontmatter = {
  slug: string;
  title: string;
  description: string;
  relatedServices: string[];
  relatedResources: string[];
  cta?: {
    title: string;
    description: string;
    href: string;
    label: string;
  };
  body: string;
};

function parseFrontmatter(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---/);

  if (!match) {
    return {};
  }

  const frontmatter: Record<string, string | string[] | Record<string, string>> = {};
  const lines = match[1].split("\n");
  let currentArrayKey: string | null = null;
  let currentObjectKey: string | null = null;

  for (const line of lines) {
    const objectItem = line.match(/^\s{2}([A-Za-z0-9_-]+):\s*"?([^"]*)"?\s*$/);

    if (objectItem && currentObjectKey) {
      const value = frontmatter[currentObjectKey];
      frontmatter[currentObjectKey] = {
        ...(typeof value === "object" && !Array.isArray(value) ? value : {}),
        [objectItem[1]]: objectItem[2],
      };
      continue;
    }

    const arrayItem = line.match(/^\s+-\s+"?([^"]+)"?\s*$/);

    if (arrayItem && currentArrayKey) {
      const value = frontmatter[currentArrayKey];
      frontmatter[currentArrayKey] = Array.isArray(value)
        ? [...value, arrayItem[1]]
        : [arrayItem[1]];
      continue;
    }

    const arrayKey = line.match(/^([A-Za-z0-9_-]+):\s*$/);

    if (arrayKey) {
      const key = arrayKey[1];
      currentArrayKey = ["relatedServices", "relatedResources"].includes(key)
        ? key
        : null;
      currentObjectKey = currentArrayKey ? null : key;
      frontmatter[key] = currentArrayKey ? [] : {};
      continue;
    }

    const keyValue = line.match(/^([A-Za-z0-9_-]+):\s*"?([^"]*)"?\s*$/);

    if (keyValue) {
      currentArrayKey = null;
      currentObjectKey = null;
      frontmatter[keyValue[1]] = keyValue[2];
    }
  }

  return frontmatter;
}

export function getResourceSlugs() {
  if (!fs.existsSync(resourcesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(resourcesDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getResourceFrontmatter(slug: string): ResourceFrontmatter | null {
  const filePath = path.join(resourcesDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const parsed = parseFrontmatter(source);
  const body = source.replace(/^---\n[\s\S]*?\n---/, "").trim();
  const cta = typeof parsed.cta === "object" && !Array.isArray(parsed.cta)
    ? parsed.cta
    : null;

  return {
    slug: String(parsed.slug ?? slug),
    title: String(parsed.title ?? slug),
    description: String(parsed.description ?? ""),
    relatedServices: Array.isArray(parsed.relatedServices)
      ? parsed.relatedServices
      : [],
    relatedResources: Array.isArray(parsed.relatedResources)
      ? parsed.relatedResources
      : [],
    cta: cta && cta.title && cta.description && cta.href && cta.label
      ? {
          title: cta.title,
          description: cta.description,
          href: cta.href,
          label: cta.label,
        }
      : undefined,
    body,
  };
}

export function getAllResourceFrontmatter() {
  return getResourceSlugs()
    .map((slug) => getResourceFrontmatter(slug))
    .filter((resource): resource is ResourceFrontmatter => Boolean(resource));
}
