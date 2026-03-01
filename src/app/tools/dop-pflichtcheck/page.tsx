import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  BreadcrumbSchema,
  WebPageSchema,
} from "@/components/seo/StructuredData";
import { DopPflichtcheckTool } from "@/components/tools/DopPflichtcheckTool";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "DoP-Pflichtcheck – Leistungserklärung prüfen | CE-Pilot",
  description:
    "Prüfen Sie kostenlos in 2 Minuten, ob Ihre Leistungserklärung alle Pflichtangaben nach CPR Anhang III und BauPVO 2024/3110 enthält. Sofortiger Risiko-Report.",
  alternates: { canonical: `${siteConfig.url}/tools/dop-pflichtcheck` },
  openGraph: {
    title: "DoP-Pflichtcheck – Leistungserklärung prüfen | CE-Pilot",
    description:
      "Kostenlos prüfen: Enthält Ihre Leistungserklärung alle Pflichtangaben nach BauPVO 2024? Sofortiger Risiko-Report in 2 Minuten.",
    url: `${siteConfig.url}/tools/dop-pflichtcheck`,
  },
};

export default function DopPflichtcheckPage() {
  return (
    <>
      <WebPageSchema
        title="DoP-Pflichtcheck – Leistungserklärung prüfen"
        description="Prüfen Sie die Vollständigkeit Ihrer Leistungserklärung nach CPR Anhang III und BauPVO 2024/3110"
        url="/tools/dop-pflichtcheck"
      />
      <BreadcrumbSchema
        items={[
          { label: "Tools", href: "/tools/dop-pflichtcheck" },
          { label: "DoP-Pflichtcheck", href: "/tools/dop-pflichtcheck" },
        ]}
      />
      <div className="py-16 md:py-24">
        <div className="container-custom max-w-2xl">
          <Breadcrumbs
            items={[
              { label: "Tools", href: "/tools/dop-pflichtcheck" },
              { label: "DoP-Pflichtcheck", href: "/tools/dop-pflichtcheck" },
            ]}
          />

          <h1 className="heading-section mb-4">DoP-Pflichtcheck</h1>
          <p className="text-muted-foreground mb-10">
            Prüfen Sie in 2 Minuten, ob Ihre Leistungserklärung alle
            Pflichtangaben nach CPR Anhang III und BauPVO 2024/3110 enthält —
            bevor die Marktüberwachung prüft.
          </p>

          <DopPflichtcheckTool />

          {/* Educational Section */}
          <div className="mt-10 p-6 bg-muted/30 rounded-xl border border-border">
            <h2 className="font-semibold mb-3">
              Was überprüft der DoP-Pflichtcheck?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Der Pflichtcheck prüft die Vollständigkeit Ihrer
              Leistungserklärung nach den Anforderungen von CPR Anhang III (CPR
              305/2011) und den neuen Anforderungen der BauPVO 2024/3110.
              Besonderes Augenmerk liegt auf den seit Januar 2026
              verpflichtenden GWP-Angaben und dem neuen Format der kombinierten
              Leistungs- und Konformitätserklärung. Dieser Check ist ein
              Orientierungswerkzeug und ersetzt keine rechtliche Beratung.
            </p>
          </div>

          {/* Related Links */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                href: "/wissen/leistungserklaerung-dop",
                label: "Pflichtangaben DoP erklärt",
              },
              { href: "/wissen/baupvo-2024", label: "BauPVO 2024 Änderungen" },
              { href: "/tools/wpk-countdown", label: "WPK-Countdown Tool" },
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
