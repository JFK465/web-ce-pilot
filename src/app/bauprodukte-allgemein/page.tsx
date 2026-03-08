import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CE-Kennzeichnung Bauprodukte – Software für alle Normen | CE-Pilot",
  description:
    "CE-Pilot für alle Bauprodukt-Hersteller: DoP-Generator nach CPR/BauPVO 2024, WPK-Tracking, CE-Label-Export. EN 1090, EN 13369, EN 14351 und mehr.",
  alternates: { canonical: `${siteConfig.url}/bauprodukte-allgemein` },
  openGraph: {
    title: "CE-Kennzeichnung Bauprodukte – Software für alle Normen | CE-Pilot",
    description:
      "DoP-Generator nach CPR/BauPVO 2024, WPK-Tracking, CE-Label-Export. Für alle harmonisierten Normen.",
    url: `${siteConfig.url}/bauprodukte-allgemein`,
  },
};

export default function BauprodukteAllgemeinPage() {
  return (
    <>
      <WebPageSchema
        title="CE-Kennzeichnung Bauprodukte Software"
        description="DoP für alle Bauprodukte nach CPR und BauPVO 2024 mit CE-Pilot erstellen"
        url="/bauprodukte-allgemein"
      />
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              {
                label: "Allgemeine Bauprodukte",
                href: "/bauprodukte-allgemein",
              },
            ]}
          />
          <h1 className="heading-hero mb-4">
            CE-Kennzeichnung für alle Bauprodukte
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            CE-Pilot unterstützt Hersteller aller Bauproduktgruppen bei der
            automatischen Erstellung normkonformer Leistungserklärungen nach CPR
            305/2011 und BauPVO 2024/3110.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                href: "/stahlbau-metallbau",
                name: "Stahlbau & Metallbau",
                norm: "EN 1090-1",
              },
              {
                href: "/betonfertigteile",
                name: "Betonfertigteile",
                norm: "EN 13369",
              },
              {
                href: "/fenster-tueren",
                name: "Fenster & Türen",
                norm: "EN 14351-1",
              },
              { href: "/fassadenbau", name: "Fassadenbau", norm: "EN 13830" },
              {
                href: "/wissen/leistungserklärung-dop",
                name: "Sonstige Bauprodukte",
                norm: "CPR Anhang III",
              },
            ].map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="block bg-card border border-border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="font-semibold mb-1">{b.name}</div>
                <div className="text-xs text-primary font-medium">{b.norm}</div>
              </Link>
            ))}
          </div>
          <Link
            href="/ce-kennzeichnung-software#beta-anmeldung"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Beta-Zugang sichern <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
