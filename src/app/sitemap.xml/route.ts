import { siteConfig } from "@/lib/seo-config";
import { getBlogPosts } from "@/lib/blog";

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

function buildEntries(): SitemapEntry[] {
  const base = siteConfig.url;

  // Dynamische Blog-Posts aus MDX-Dateien
  const blogPosts = getBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastmod: post.date
      ? new Date(post.date).toISOString()
      : new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.6,
  }));

  return [
    // Core Pages
    {
      url: base,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/ce-kennzeichnung-software`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/funktionen`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/preise`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/kontakt`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.5,
    },
    // Branchen
    {
      url: `${base}/stahlbau-metallbau`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/betonfertigteile`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/fenster-tueren`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/fassadenbau`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/bauprodukte-allgemein`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    // Wissen
    {
      url: `${base}/wissen`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/wissen/bauproduktenverordnung-cpr`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/wissen/baupvo-2024`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/wissen/leistungserkl\u00e4rung-dop`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/wissen/en-1090-ce-kennzeichnung`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/wissen/wpk-fpc-zertifikat`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/wissen/markt\u00fcberwachung-bauprodukte`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/wissen/digitaler-produktpass`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    // Tools
    {
      url: `${base}/tools/dop-pflichtcheck`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/tools/ce-kennzeichnung-check`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/tools/wpk-countdown`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    // Blog
    {
      url: `${base}/blog`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    },
    ...blogPosts,
  ];
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
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
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
