import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "DoP Vorhangfassade Software – CE nach EN 13830 | CE-Pilot",
  description:
    "CE-Pilot für Fassadenbauer: DoP-Generator nach EN 13830, WPK-Tracking, CE-Label-Export. Vorhangfassaden normkonform kennzeichnen. BauPVO 2024 konform.",
  alternates: { canonical: `${siteConfig.url}/fassadenbau` },
  openGraph: {
    title: "DoP Vorhangfassade Software – CE nach EN 13830 | CE-Pilot",
    description:
      "DoP-Generator nach EN 13830, CE-Label-Export für Vorhangfassaden. BauPVO 2024/3110 mit GWP-Feldern bereits integriert.",
    url: `${siteConfig.url}/fassadenbau`,
  },
};

export default function FassadenbauPage() {
  return (
    <>
      <WebPageSchema
        title="DoP Vorhangfassade Software"
        description="CE-Kennzeichnung nach EN 13830 mit CE-Pilot automatisieren"
        url="/fassadenbau"
      />
      <BreadcrumbSchema
        items={[{ label: "Fassadenbau", href: "/fassadenbau" }]}
      />
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs
            items={[{ label: "Fassadenbau", href: "/fassadenbau" }]}
          />
          <h1 className="heading-hero mb-4">
            DoP Vorhangfassade — CE nach EN 13830
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            CE-Pilot unterstützt Fassadenbauhersteller bei der normenkonformen
            Erstellung von Leistungserklärungen nach EN 13830 (Vorhangfassaden)
            und BauPVO 2024/3110.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "EN 13830 Vorlage",
                text: "Alle Pflichtleistungsmerkmale für Vorhangfassaden: Luftdurchlässigkeit, Widerstand gegen Windlast, Wasserdichtheit, Wärmedurchgangskoeffizient.",
              },
              {
                title: "BauPVO 2024 GWP-Felder",
                text: "Neue Umweltangaben für Vorhangfassaden gemäß BauPVO 2024/3110 bereits in CE-Pilot integriert.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h2 className="font-semibold mb-2">{f.title}</h2>
                <p className="text-sm text-muted-foreground">{f.text}</p>
              </div>
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
