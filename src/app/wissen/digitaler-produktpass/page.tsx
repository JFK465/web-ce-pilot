import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Digitaler Produktpass Bauprodukte 2026 | CE-Pilot",
  description:
    "Digitaler Produktpass (DPP) für Bauprodukte: Wann wird er Pflicht? Was müssen Hersteller jetzt vorbereiten? Zusammenhang mit BauPVO 2024 und GWP erklärt.",
  alternates: { canonical: `${siteConfig.url}/wissen/digitaler-produktpass` },
  openGraph: {
    title: "Digitaler Produktpass Bauprodukte 2026 | CE-Pilot",
    description:
      "DPP für Bauprodukte: Wann Pflicht? Was Hersteller vorbereiten müssen und wie BauPVO 2024 und GWP damit zusammenhängen.",
    url: `${siteConfig.url}/wissen/digitaler-produktpass`,
  },
};

export default function DigitalerProduktpassPage() {
  return (
    <>
      <WebPageSchema
        title="Digitaler Produktpass Bauprodukte"
        description="Was der DPP für Bauprodukt-Hersteller bedeutet"
        url="/wissen/digitaler-produktpass"
      />
      <div className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Wissen", href: "/wissen" },
              {
                label: "Digitaler Produktpass",
                href: "/wissen/digitaler-produktpass",
              },
            ]}
          />
          <div className="mb-4 text-xs text-muted-foreground">
            Letzte Aktualisierung: Februar 2026 • 8 Min. Lesezeit
          </div>
          <h1 className="heading-hero mb-4">
            Digitaler Produktpass (DPP) für Bauprodukte
          </h1>
          <div className="prose prose-stone max-w-none">
            <p>
              Der Digitale Produktpass (DPP) ist ein zentrales Element der
              EU-Kreislaufwirtschaftsstrategie. Er soll Informationen über
              Produkte digital verfügbar machen — von der Herstellung bis zum
              Recycling. Die BauPVO 2024/3110 schafft den rechtlichen Rahmen für
              den DPP bei Bauprodukten.
            </p>
            <h2>Wann wird der DPP für Bauprodukte Pflicht?</h2>
            <p>
              Der genaue Zeitplan hängt von delegierten Rechtsakten ab, die die
              EU-Kommission bis 2027 erlassen muss. Experten rechnen mit einer
              schrittweisen Einführung ab 2027 für bestimmte Produktgruppen.
              Hersteller, die jetzt ihre Daten digitalisieren, sind gut
              vorbereitet.
            </p>
            <h2>Was enthält ein Digitaler Produktpass?</h2>
            <p>
              Der DPP enthält strukturierte Informationen zu:
              Materialzusammensetzung und Recyclinganteil, GWP-Wert
              (CO₂-Fußabdruck), technische Leistungsmerkmale (aus der DoP),
              Sicherheitsinformationen und Reparatur-/Wartungsanleitungen sowie
              Informationen zur Entsorgung am Ende der Lebensdauer.
            </p>
            <h2>Wie CE-Pilot auf den DPP vorbereitet</h2>
            <p>
              CE-Pilot speichert Produktdaten strukturiert und ESPR-kompatibel.
              GWP-Felder und Recyclinganteil sind bereits in der DoP-Erstellung
              integriert. Ein DPP-Export wird im Rahmen der weiteren Entwicklung
              hinzugefügt.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/wissen/baupvo-2024", label: "BauPVO 2024 Änderungen" },
              {
                href: "/ce-kennzeichnung-software",
                label: "Jetzt CE-Pilot testen",
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
