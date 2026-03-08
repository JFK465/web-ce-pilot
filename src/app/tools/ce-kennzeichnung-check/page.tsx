import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  BreadcrumbSchema,
  WebPageSchema,
} from "@/components/seo/StructuredData";
import { CeKennzeichnungCheckTool } from "@/components/tools/CeKennzeichnungCheckTool";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CE-Kennzeichnungs-Check – Pflicht prüfen | CE-Pilot",
  description:
    "Prüfen Sie kostenlos in 3 Fragen, ob Ihr Bauprodukt CE-kennzeichnungspflichtig ist. Sofortiges Ergebnis mit Handlungsempfehlung für Bauprodukt-Hersteller.",
  alternates: { canonical: `${siteConfig.url}/tools/ce-kennzeichnung-check` },
  openGraph: {
    title: "CE-Kennzeichnungs-Check – Pflicht prüfen | CE-Pilot",
    description:
      "Ist Ihr Bauprodukt CE-kennzeichnungspflichtig? In 3 Fragen prüfen — kostenlos und sofort.",
    url: `${siteConfig.url}/tools/ce-kennzeichnung-check`,
  },
};

export default function CeKennzeichnungCheckPage() {
  return (
    <>
      <WebPageSchema
        title="CE-Kennzeichnungs-Check"
        description="Prüfen Sie, ob Ihr Bauprodukt CE-kennzeichnungspflichtig ist"
        url="/tools/ce-kennzeichnung-check"
      />
      <BreadcrumbSchema
        items={[
          { label: "Tools", href: "/tools/ce-kennzeichnung-check" },
          {
            label: "CE-Kennzeichnungs-Check",
            href: "/tools/ce-kennzeichnung-check",
          },
        ]}
      />
      <div className="py-16 md:py-24">
        <div className="container-custom max-w-2xl">
          <Breadcrumbs
            items={[
              { label: "Tools", href: "/tools/ce-kennzeichnung-check" },
              {
                label: "CE-Kennzeichnungs-Check",
                href: "/tools/ce-kennzeichnung-check",
              },
            ]}
          />
          <h1 className="heading-section mb-4">CE-Kennzeichnungs-Check</h1>
          <p className="text-muted-foreground mb-10">
            Prüfen Sie, ob Ihr Produkt CE-kennzeichnungspflichtig ist — in 3
            Fragen.
          </p>

          <CeKennzeichnungCheckTool />

          {/* Related Links */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                href: "/wissen/bauproduktenverordnung-cpr",
                label: "Bauproduktenverordnung erklärt",
              },
              {
                href: "/wissen/leistungserklärung-dop",
                label: "Leistungserklärung (DoP)",
              },
              { href: "/tools/dop-pflichtcheck", label: "DoP-Pflichtcheck" },
              {
                href: "/ce-kennzeichnung-software",
                label: "DoP automatisch erstellen",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 p-3 border border-border rounded-lg text-sm hover:border-primary hover:text-primary transition-colors"
              >
                <ArrowRight className="h-3.5 w-3.5" />
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
