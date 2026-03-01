import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Marktüberwachung Bauprodukte – Was prüfen Behörden? | CE-Pilot",
  description:
    "Wie kontrollieren Marktüberwachungsbehörden CE-Kennzeichnungen? Konsequenzen bis 100.000 EUR Bußgeld. Was Kontrolleure prüfen — für Bauprodukt-Hersteller erklärt.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/marktueberwachung-bauprodukte`,
  },
  openGraph: {
    title: "Marktüberwachung Bauprodukte – Was prüfen Behörden? | CE-Pilot",
    description:
      "Wie Marktüberwachungsbehörden CE-Kennzeichnungen prüfen — Konsequenzen bis 100.000 EUR Bußgeld und Inverkehrbringungsverbote.",
    url: `${siteConfig.url}/wissen/marktueberwachung-bauprodukte`,
  },
};

export default function MarktueberwachungPage() {
  return (
    <>
      <WebPageSchema
        title="Marktüberwachung Bauprodukte"
        description="Wie Behörden CE-Kennzeichnungen von Bauprodukten kontrollieren"
        url="/wissen/marktueberwachung-bauprodukte"
      />
      <div className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Wissen", href: "/wissen" },
              {
                label: "Marktüberwachung",
                href: "/wissen/marktueberwachung-bauprodukte",
              },
            ]}
          />
          <div className="mb-4 text-xs text-muted-foreground">
            Letzte Aktualisierung: Februar 2026 • 8 Min. Lesezeit
          </div>
          <h1 className="heading-hero mb-4">
            Marktüberwachung Bauprodukte — Was prüfen Behörden?
          </h1>
          <div className="prose prose-stone max-w-none">
            <p>
              Die Marktüberwachung für Bauprodukte ist in Deutschland
              Ländersache. Jedes Bundesland hat eigene Marktüberwachungsbehörden
              (MÜB), die CE-gekennzeichnete Bauprodukte kontrollieren. Mit der
              BauPVO 2024 wurden die Meldepflichten und Sanktionsmöglichkeiten
              verschärft.
            </p>
            <h2>Was prüfen Marktüberwachungsbehörden?</h2>
            <p>
              Bei einer Kontrolle prüfen Behörden typischerweise: Vorhandensein
              und Vollständigkeit der Leistungserklärung (DoP), korrekte
              CE-Kennzeichnung mit allen Pflichtangaben nach Anhang IV CPR,
              Gültigkeit des WPK-Zertifikats der Notifizierten Stelle sowie
              Übereinstimmung der DoP-Angaben mit dem tatsächlichen Produkt.
            </p>
            <h2>Konsequenzen bei fehlender oder falscher CE</h2>
            <p>
              Die Konsequenzen reichen von einfachen Nachbesserungsauflagen bis
              zum sofortigen Inverkehrbringungsverbot. Bußgelder betragen je
              nach Bundesland bis zu 100.000 EUR. Schwerwiegende Fälle werden
              auf dem EU-Schnellwarnsystem RAPEX gemeldet — mit erheblichem
              Reputationsschaden.
            </p>
            <h2>Wie CE-Pilot hilft</h2>
            <p>
              CE-Pilot stellt sicher, dass Ihre DoPs immer alle Pflichtangaben
              enthalten (DoP-Vollständigkeitscheck) und Ihr WPK-Zertifikat nicht
              abläuft (automatische Erinnerungen). So sind Sie für
              Marktüberwachungskontrollen optimal vorbereitet.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                href: "/tools/dop-pflichtcheck",
                label: "DoP-Pflichtcheck starten",
              },
              { href: "/wissen/wpk-fpc-zertifikat", label: "WPK-Zertifikat" },
              {
                href: "/blog/marktueberwachung-kontrolle",
                label: "Blog: Marktüberwachung",
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
