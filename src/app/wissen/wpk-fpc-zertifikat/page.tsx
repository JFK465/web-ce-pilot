import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "WPK / FPC-Zertifikat – Ablauf und Überwachung | CE-Pilot",
  description:
    "Was ist ein WPK-Zertifikat? Wann läuft es ab? Warum droht bei Ablauf sofortiges Inverkehrbringungsverbot? Automatische Überwachung mit CE-Pilot erklärt.",
  alternates: { canonical: `${siteConfig.url}/wissen/wpk-fpc-zertifikat` },
  openGraph: {
    title: "WPK / FPC-Zertifikat – Ablauf und Überwachung | CE-Pilot",
    description:
      "WPK-Zertifikat: Wann läuft es ab? Konsequenzen und automatische Überwachung für Bauprodukt-Hersteller erklärt.",
    url: `${siteConfig.url}/wissen/wpk-fpc-zertifikat`,
  },
};

export default function WPKPage() {
  return (
    <>
      <WebPageSchema
        title="WPK / FPC-Zertifikat Ablauf und Überwachung"
        description="Alles zum WPK-Zertifikat für CE-kennzeichnungspflichtige Bauprodukte"
        url="/wissen/wpk-fpc-zertifikat"
      />
      <div className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Wissen", href: "/wissen" },
              {
                label: "WPK / FPC-Zertifikat",
                href: "/wissen/wpk-fpc-zertifikat",
              },
            ]}
          />
          <div className="mb-4 text-xs text-muted-foreground">
            Letzte Aktualisierung: Februar 2026 • 7 Min. Lesezeit
          </div>
          <h1 className="heading-hero mb-4">
            WPK / FPC-Zertifikat — Ablauf, Überwachung und Risiken
          </h1>
          <div className="prose prose-stone max-w-none">
            <p>
              Das WPK-Zertifikat (Werkseigene Produktionskontrolle) bzw.
              FPC-Zertifikat (Factory Production Control) wird von einer
              Notifizierten Stelle ausgestellt und bestätigt, dass das
              Qualitätssicherungssystem des Herstellers den Anforderungen der
              harmonisierten Norm entspricht.
            </p>
            <h2>Wann ist ein WPK-Zertifikat Pflicht?</h2>
            <p>
              Das WPK-Zertifikat ist für alle Bauprodukte mit AVCP-System 1+, 1,
              2+ oder 2 Pflicht. Dazu gehören tragende Stahlbauteile (EN 1090-1,
              System 2+), tragende Betonfertigteile (EN 13369, System 2+) und
              viele weitere Produkte mit sicherheitsrelevanter Funktion.
            </p>
            <h2>Ablaufdatum und Konsequenzen</h2>
            <p>
              Das WPK-Zertifikat hat ein Ablaufdatum. Bei System 2+ erfolgen in
              der Regel jährliche Überwachungsaudits. Läuft das Zertifikat ab,
              verliert der Hersteller sofort das Recht zur CE-Kennzeichnung —
              alle betroffenen Produkte dürfen nicht mehr in Verkehr gebracht
              werden.
            </p>
            <h2>Automatische Überwachung mit CE-Pilot</h2>
            <p>
              CE-Pilot überwacht das Ablaufdatum Ihres WPK-Zertifikats und
              sendet automatische E-Mail-Erinnerungen 30, 60 und 90 Tage vor
              Ablauf. So können Sie rechtzeitig die Verlängerung bei Ihrer
              Notifizierten Stelle beantragen.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: "/tools/wpk-countdown", label: "WPK-Countdown Tool" },
              {
                href: "/wissen/en-1090-ce-kennzeichnung",
                label: "EN 1090 CE-Kennzeichnung",
              },
              {
                href: "/ce-kennzeichnung-software",
                label: "WPK-Tracking mit CE-Pilot",
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
