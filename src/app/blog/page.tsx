import type { Metadata } from "next";
import { getBlogPosts, getCategories } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Blog – CE-Kennzeichnung und BauPVO 2024 Ratgeber | CE-Pilot",
  description:
    "Aktuelle Artikel zu CE-Kennzeichnung, BauPVO 2024, Leistungserklärung (DoP), WPK-Zertifikaten und Marktüberwachung — für Bauprodukt-Hersteller im DACH-Raum.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Blog – CE-Kennzeichnung und BauPVO 2024 Ratgeber | CE-Pilot",
    description:
      "Praxiswissen zu CE-Kennzeichnung, BauPVO 2024, DoP, WPK-Zertifikaten und Marktüberwachung für Bauprodukt-Hersteller im DACH-Raum.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const categories = getCategories();

  return (
    <div className="py-16 md:py-24">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

        <div className="max-w-2xl mb-12">
          <h1 className="heading-hero mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Praxiswissen zu CE-Kennzeichnung, BauPVO 2024/3110,
            Leistungserklärungen und Marktüberwachung — für
            Bauprodukt-Hersteller im DACH-Raum.
          </p>
        </div>

        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1.5 text-sm bg-muted text-muted-foreground rounded-lg cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {posts.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            Keine Artikel gefunden.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
