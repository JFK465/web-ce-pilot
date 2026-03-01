import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "EN 1090-1 CE-Kennzeichnung Stahlbau – Leistungserklärung | CE-Pilot",
  description:
    "EN 1090-1 CE-Kennzeichnung für Stahlbauteile: Ausführungsklassen EXC1-4, Notifizierte Stelle (NoBo), WPK-Pflicht, AVCP-System 2+ — alles für Stahlbaubetriebe.",
  alternates: {
    canonical: `${siteConfig.url}/wissen/en-1090-ce-kennzeichnung`,
  },
  openGraph: {
    title:
      "EN 1090-1 CE-Kennzeichnung Stahlbau – Leistungserklärung | CE-Pilot",
    description:
      "Ausführungsklassen EXC1-4, Notifizierte Stelle, WPK-Pflicht und DoP-Pflichtangaben nach EN 1090-1 — für Stahlbaubetriebe erklärt.",
    url: `${siteConfig.url}/wissen/en-1090-ce-kennzeichnung`,
  },
};

export default function EN1090Page() {
  return (
    <>
      <WebPageSchema
        title="EN 1090-1 CE-Kennzeichnung Stahlbau"
        description="Leistungserklärung für tragende Stahlbauteile"
        url="/wissen/en-1090-ce-kennzeichnung"
      />
      <div className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Wissen", href: "/wissen" },
              {
                label: "EN 1090 CE-Kennzeichnung",
                href: "/wissen/en-1090-ce-kennzeichnung",
              },
            ]}
          />
          <div className="mb-4 text-xs text-muted-foreground">
            Letzte Aktualisierung: Februar 2026 • 10 Min. Lesezeit
          </div>
          <h1 className="heading-hero mb-4">
            EN 1090-1 CE-Kennzeichnung — Leistungserklärung für Stahlbau
          </h1>
          <div className="prose prose-stone max-w-none">
            <p>
              EN 1090-1 ist die harmonisierte Norm für die Ausführung von
              Stahltragwerken. Für alle CE-kennzeichnungspflichtigen tragenden
              Stahlbauteile müssen Hersteller eine Leistungserklärung nach EN
              1090-1 in Verbindung mit CPR Anhang III ausstellen.
            </p>
            <h2>Ausführungsklassen EXC1 bis EXC4</h2>
            <p>
              Die Ausführungsklasse (EXC) wird vom Bauherrn oder Planer
              festgelegt und bestimmt den Prüf- und Dokumentationsaufwand. EXC1
              gilt für einfache Strukturen (z.B. nicht tragende Elemente), EXC4
              für extreme Anwendungen (z.B. Kernkraftwerke). Die häufigste
              Klasse im Wohnungsbau ist EXC2.
            </p>
            <h2>WPK-Pflicht für Stahlbaubetriebe</h2>
            <p>
              Für EN 1090-1 gilt AVCP-System 2+ für EXC2-4 und System 4 für
              EXC1. Bei System 2+ muss die Werkseigene Produktionskontrolle
              (WPK) von einer Notifizierten Stelle zertifiziert werden. Dieses
              FPC-Zertifikat muss regelmäßig erneuert werden.
            </p>
            <h2>Notifizierte Stelle und NoBo-Nummer</h2>
            <p>
              Die Notifizierte Stelle führt die WPK-Erstinspektion durch und
              stellt das FPC-Zertifikat aus. Ihre Identifikationsnummer
              (NoBo-Nummer) muss in der Leistungserklärung und auf dem CE-Label
              angegeben werden.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: "/stahlbau-metallbau", label: "CE-Pilot für Stahlbau" },
              { href: "/wissen/wpk-fpc-zertifikat", label: "WPK-Zertifikat" },
              { href: "/tools/dop-pflichtcheck", label: "DoP-Pflichtcheck" },
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
