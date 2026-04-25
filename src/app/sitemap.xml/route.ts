import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getGitLastmod } from "@/lib/sitemap-lastmod";

// Build-time static generation: getGitLastmod nutzt git CLI, das nur
// im Build-Container verfuegbar ist, nicht in Vercel-Serverless-Runtime.
// Sitemap wird bei jedem Deploy regeneriert.
export const dynamic = "force-static";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function getBlogPosts() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR);
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(CONTENT_DIR, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: file.replace(/\.(md|mdx)$/, ""),
        date: data.date || null,
      };
    });
}

interface SitemapSource {
  url: string;
  source: string;
  changefreq: string;
  priority: number;
}

interface SitemapEntry extends SitemapSource {
  lastmod: string;
}

const STATIC_SOURCES: SitemapSource[] = [
  { url: "https://leistungserklaerung-software.de/ce-kennzeichnung-software", source: "src/app/ce-kennzeichnung-software/page.tsx", changefreq: "weekly", priority: 0.9 },
  { url: "https://leistungserklaerung-software.de/funktionen", source: "src/app/funktionen/page.tsx", changefreq: "monthly", priority: 0.8 },
  { url: "https://leistungserklaerung-software.de/preise", source: "src/app/preise/page.tsx", changefreq: "monthly", priority: 0.8 },
  { url: "https://leistungserklaerung-software.de/stahlbau-metallbau", source: "src/app/stahlbau-metallbau/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://leistungserklaerung-software.de/betonfertigteile", source: "src/app/betonfertigteile/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://leistungserklaerung-software.de/fenster-tueren", source: "src/app/fenster-tueren/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://leistungserklaerung-software.de/fassadenbau", source: "src/app/fassadenbau/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://leistungserklaerung-software.de/bauprodukte-allgemein", source: "src/app/bauprodukte-allgemein/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://leistungserklaerung-software.de/wissen", source: "src/app/wissen/page.tsx", changefreq: "weekly", priority: 0.7 },
  { url: "https://leistungserklaerung-software.de/wissen/bauproduktenverordnung-cpr", source: "src/app/wissen/bauproduktenverordnung-cpr/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://leistungserklaerung-software.de/wissen/baupvo-2024", source: "src/app/wissen/baupvo-2024/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://leistungserklaerung-software.de/wissen/en-1090-ce-kennzeichnung", source: "src/app/wissen/en-1090-ce-kennzeichnung/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://leistungserklaerung-software.de/wissen/wpk-fpc-zertifikat", source: "src/app/wissen/wpk-fpc-zertifikat/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://leistungserklaerung-software.de/wissen/digitaler-produktpass", source: "src/app/wissen/digitaler-produktpass/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://leistungserklaerung-software.de/tools/dop-pflichtcheck", source: "src/app/tools/dop-pflichtcheck/page.tsx", changefreq: "monthly", priority: 0.6 },
  { url: "https://leistungserklaerung-software.de/tools/ce-kennzeichnung-check", source: "src/app/tools/ce-kennzeichnung-check/page.tsx", changefreq: "monthly", priority: 0.6 },
  { url: "https://leistungserklaerung-software.de/tools/wpk-countdown", source: "src/app/tools/wpk-countdown/page.tsx", changefreq: "monthly", priority: 0.6 },
  { url: "https://leistungserklaerung-software.de/blog", source: "src/app/blog/page.tsx", changefreq: "weekly", priority: 0.7 },
];

function buildEntries(): SitemapEntry[] {
  const staticEntries = STATIC_SOURCES.map((s) => ({
    ...s,
    lastmod: getGitLastmod(s.source),
  }));

  const blogPosts = getBlogPosts();
  const blogEntries: SitemapEntry[] = blogPosts.map((post) => {
    const source = `content/blog/${post.slug}.md`;
    return {
      url: `https://leistungserklaerung-software.de/blog/${post.slug}`,
      source,
      lastmod: post.date ? new Date(post.date).toISOString() : getGitLastmod(source),
      changefreq: "monthly",
      priority: 0.7,
    };
  });

  return [...staticEntries, ...blogEntries];
}

function toXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function GET() {
  const entries = buildEntries();
  const xml = toXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
