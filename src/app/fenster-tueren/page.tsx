import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CE-Kennzeichnung Fenster & Türen – EN 14351-1 | CE-Pilot",
  description:
    "CE-Pilot für Fenster- und Türenhersteller: DoP-Generator nach EN 14351-1, WPK-Tracking und CE-Label-Export. BauPVO 2024 konform. Kostenlos testen.",
  alternates: { canonical: `${siteConfig.url}/fenster-tueren` },
  openGraph: {
    title: "CE-Kennzeichnung Fenster & Türen – EN 14351-1 | CE-Pilot",
    description:
      "DoP-Generator nach EN 14351-1, WPK-Tracking und CE-Label-Export für Fenster- und Türenhersteller. BauPVO 2024 konform.",
    url: `${siteConfig.url}/fenster-tueren`,
  },
};

export default function FensterTuerenPage() {
  return (
    <>
      <WebPageSchema
        title="CE-Kennzeichnung Fenster und Türen Software"
        description="DoP nach EN 14351-1 mit CE-Pilot automatisch erstellen"
        url="/fenster-tueren"
      />
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs
            items={[{ label: "Fenster & Türen", href: "/fenster-tueren" }]}
          />
          <h1 className="heading-hero mb-4">
            CE-Kennzeichnung Fenster & Türen — DoP nach EN 14351-1
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            CE-Pilot unterstützt Fenster- und Türenhersteller bei der
            normkonformen Erstellung von Leistungserklärungen nach EN 14351-1
            und BauPVO 2024/3110. DoP-Generator, WPK-Tracking und
            CE-Label-Export in einer Plattform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "EN 14351-1 Vorlage",
                text: "Alle Pflichtfelder für Fenster und Türen nach EN 14351-1 vorausgefüllt. AVCP-System 3 und 4 abgedeckt.",
              },
              {
                title: "WPK-Zertifikat-Tracking",
                text: "Notifizierte Stelle, Zertifikatsnummer und Ablaufdatum einmalig eintragen — CE-Pilot warnt rechtzeitig.",
              },
              {
                title: "Mehrsprachige DoPs (geplant)",
                text: "Leistungserklärungen für den europäischen Markt in mehreren EU-Sprachen — in der nächsten Version.",
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
