import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bauproduktenverordnung CPR 305/2011 – Grundlagen | CE-Pilot",
  description:
    "Was ist die CPR 305/2011? CE-Kennzeichnungspflicht, AVCP-Systeme, harmonisierte Normen und Leistungserklärung — alle Grundlagen für Bauprodukt-Hersteller erklärt.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/bauproduktenverordnung-cpr`,
  },
  openGraph: {
    title: "Bauproduktenverordnung CPR 305/2011 – Grundlagen | CE-Pilot",
    description:
      "CE-Kennzeichnungspflicht, AVCP-Systeme, harmonisierte Normen und Leistungserklärung nach CPR — alle Grundlagen für Hersteller.",
    url: `${siteConfig.url}/wissen/bauproduktenverordnung-cpr`,
  },
};

export default function BauproduktenverordnungPage() {
  return (
    <>
      <WebPageSchema
        title="Bauproduktenverordnung CPR 305/2011"
        description="Grundlagen der CE-Kennzeichnungspflicht für Bauprodukte"
        url="/wissen/bauproduktenverordnung-cpr"
      />
      <div className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Wissen", href: "/wissen" },
              {
                label: "Bauproduktenverordnung CPR",
                href: "/wissen/bauproduktenverordnung-cpr",
              },
            ]}
          />
          <div className="mb-4 text-xs text-muted-foreground">
            Letzte Aktualisierung: Februar 2026 • 8 Min. Lesezeit
          </div>
          <h1 className="heading-hero mb-4">
            Bauproduktenverordnung (CPR 305/2011) — Grundlagen für Hersteller
          </h1>
          <div className="prose prose-stone max-w-none">
            <p>
              Die Bauproduktenverordnung (CPR, Construction Products Regulation)
              305/2011 gilt seit 2013 für alle Mitgliedsstaaten der EU. Sie
              regelt, unter welchen Bedingungen Bauprodukte das CE-Zeichen
              tragen dürfen und in den Europäischen Binnenmarkt gebracht werden
              dürfen.
            </p>
            <h2>Welche Produkte sind CE-kennzeichnungspflichtig?</h2>
            <p>
              Ein Bauprodukt muss CE-gekennzeichnet werden, wenn für es eine
              harmonisierte technische Norm (hEN) existiert, es dauerhaft in ein
              Bauwerk eingebaut wird und es in Verkehr gebracht wird (Handel,
              Vertrieb, Export innerhalb der EU). Die CE-Kennzeichnung ist keine
              Qualitäts-Auszeichnung, sondern eine gesetzliche Pflicht.
            </p>
            <h2>Was sind AVCP-Systeme?</h2>
            <p>
              AVCP steht für Assessment and Verification of Constancy of
              Performance — das System zur Beurteilung und Überprüfung der
              Leistungsbeständigkeit. Es gibt 5 Systeme (1+, 1, 2+, 3, 4), die
              festlegen, welche Aufgaben der Hersteller selbst und welche eine
              Notifizierte Stelle übernimmt. Je höher das System, desto mehr ist
              die Notifizierte Stelle eingebunden.
            </p>
            <h2>Die Leistungserklärung (DoP)</h2>
            <p>
              Mit der Leistungserklärung erklärt der Hersteller, welche
              Leistungsmerkmale sein Produkt erfüllt. Sie ist die Grundlage für
              das CE-Zeichen und muss alle Pflichtangaben aus CPR Anhang III
              enthalten. CE-Pilot automatisiert die DoP-Erstellung mit
              vorausgefüllten Feldern für alle gängigen harmonisierten Normen.
            </p>
            <h2>Bußgelder bei fehlender oder falscher CE-Kennzeichnung</h2>
            <p>
              Fehlende oder fehlerhafte CE-Kennzeichnungen führen zum
              Inverkehrbringungsverbot und Bußgeldern bis 100.000 EUR.
              Marktüberwachungsbehörden der Bundesländer kontrollieren zunehmend
              systematisch.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: "/wissen/baupvo-2024", label: "BauPVO 2024 Änderungen" },
              {
                href: "/wissen/leistungserklaerung-dop",
                label: "Leistungserklärung (DoP)",
              },
              {
                href: "/ce-kennzeichnung-software",
                label: "CE-Kennzeichnung Software",
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
