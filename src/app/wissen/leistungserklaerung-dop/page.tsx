import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungserklärung (DoP) – Pflichtangaben CPR Anhang III | CE-Pilot",
  description:
    "Alle Pflichtangaben der Leistungserklärung (DoP) nach CPR Anhang III und BauPVO 2024/3110: Wer muss ausstellen? GWP-Felder, kombinierte Erklärung erklärt.",
  alternates: { canonical: `${siteConfig.url}/wissen/leistungserklaerung-dop` },
  openGraph: {
    title:
      "Leistungserklärung (DoP) – Pflichtangaben CPR Anhang III | CE-Pilot",
    description:
      "Alle Pflichtangaben der DoP nach CPR Anhang III und BauPVO 2024: Wer muss ausstellen? GWP-Felder, kombinierte Erklärung, AVCP erklärt.",
    url: `${siteConfig.url}/wissen/leistungserklärung-dop`,
  },
};

export default function LeistungserklärungPage() {
  return (
    <>
      <WebPageSchema
        title="Leistungserklärung (DoP) Pflichtangaben"
        description="Pflichtangaben nach CPR Anhang III und BauPVO 2024"
        url="/wissen/leistungserklärung-dop"
      />
      <div className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Wissen", href: "/wissen" },
              {
                label: "Leistungserklärung DoP",
                href: "/wissen/leistungserklärung-dop",
              },
            ]}
          />
          <div className="mb-4 text-xs text-muted-foreground">
            Letzte Aktualisierung: Februar 2026 • 12 Min. Lesezeit
          </div>
          <h1 className="heading-hero mb-4">
            Leistungserklärung (DoP) — Pflichtangaben nach CPR Anhang III
          </h1>
          <div className="prose prose-stone max-w-none">
            <p>
              Die Leistungserklärung (Declaration of Performance, DoP) ist das
              zentrale Dokument für die CE-Kennzeichnung von Bauprodukten. Sie
              wird vom Hersteller ausgestellt und erklärt, welche
              Leistungsmerkmale das Produkt erfüllt.
            </p>
            <h2>Pflichtangaben nach CPR Anhang III (und BauPVO 2024)</h2>
            <ul>
              <li>Eindeutige Kennnummer des Produkttyps</li>
              <li>Vorgesehene Verwendung(en) gemäß hEN</li>
              <li>
                Name, eingetragener Handelsname oder eingetragene Handelsmarke
                und Kontaktanschrift des Herstellers
              </li>
              <li>
                System zur Bewertung und Überprüfung der Leistungsbeständigkeit
                (AVCP)
              </li>
              <li>Harmonisierte Norm oder ETB/ETAG</li>
              <li>
                Notifizierte Stelle und Zertifikatsnummer (wenn AVCP-System 1,
                1+, 2, 2+)
              </li>
              <li>Erklärte Leistung(en) für alle wesentlichen Merkmale</li>
              <li>Datum und Unterzeichnung des Herstellers</li>
            </ul>
            <h2>Neue Pflichtangaben durch BauPVO 2024/3110</h2>
            <p>
              Die neue BauPVO 2024/3110 (gilt seit 8. Januar 2026) ergänzt die
              Pflichtangaben um:
            </p>
            <ul>
              <li>GWP-Wert (Global Warming Potential) des Produkts</li>
              <li>Recyclinganteil des Produkts</li>
              <li>
                Kombinierte Leistungs- und Konformitätserklärung (ersetzt
                separate Konformitätserklärung)
              </li>
            </ul>
            <h2>Wer muss eine DoP ausstellen?</h2>
            <p>
              Jeder Hersteller, der ein Bauprodukt in Verkehr bringt, das unter
              eine harmonisierte technische Norm (hEN) fällt, muss eine DoP
              ausstellen. Dies gilt auch für Importeure, wenn der Hersteller
              außerhalb der EU sitzt.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                href: "/tools/dop-pflichtcheck",
                label: "DoP-Pflichtcheck starten",
              },
              { href: "/wissen/baupvo-2024", label: "BauPVO 2024 Änderungen" },
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
