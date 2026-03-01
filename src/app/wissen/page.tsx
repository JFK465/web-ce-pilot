import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Wissen – CE-Kennzeichnung und BauPVO 2024 | CE-Pilot",
  description:
    "Alles zur CE-Kennzeichnung: Bauproduktenverordnung CPR, BauPVO 2024, Leistungserklärung (DoP), EN 1090, WPK-Zertifikat und Marktüberwachung für Hersteller.",
  alternates: { canonical: `${siteConfig.url}/wissen` },
  openGraph: {
    title: "Wissen – CE-Kennzeichnung und BauPVO 2024 | CE-Pilot",
    description:
      "CE-Kennzeichnung erklärt: CPR, BauPVO 2024, DoP, EN 1090, WPK-Zertifikat und Marktüberwachung — für Bauprodukt-Hersteller.",
    url: `${siteConfig.url}/wissen`,
  },
};

const wissenThemen = [
  {
    href: "/wissen/bauproduktenverordnung-cpr",
    title: "Bauproduktenverordnung (CPR 305/2011)",
    description:
      "Was ist die CPR? Welche Produkte sind CE-kennzeichnungspflichtig? Alle Grundlagen erklärt.",
    readTime: "8 Min.",
  },
  {
    href: "/wissen/baupvo-2024",
    title: "BauPVO 2024/3110 — Neue Regelungen seit Januar 2026",
    description:
      "Was ändert sich durch die neue BauPVO? Kombinierte Erklärung, GWP-Felder, Digitaler Produktpass.",
    readTime: "10 Min.",
  },
  {
    href: "/wissen/leistungserklaerung-dop",
    title: "Leistungserklärung (DoP) — Pflichtangaben nach CPR",
    description:
      "Alle Pflichtfelder nach CPR Anhang III. Wer muss eine DoP ausstellen? Wie wird sie erstellt?",
    readTime: "12 Min.",
  },
  {
    href: "/wissen/en-1090-ce-kennzeichnung",
    title: "EN 1090-1 CE-Kennzeichnung im Stahlbau",
    description:
      "Leistungserklärung für tragende Stahlbauteile: Ausführungsklassen, NoBo, WPK-Pflicht.",
    readTime: "10 Min.",
  },
  {
    href: "/wissen/wpk-fpc-zertifikat",
    title: "WPK / FPC-Zertifikat — Ablauf und Überwachung",
    description:
      "Was ist ein WPK-Zertifikat? Wann läuft es ab? Warum ist die Überwachung so wichtig?",
    readTime: "7 Min.",
  },
  {
    href: "/wissen/marktueberwachung-bauprodukte",
    title: "Marktüberwachung Bauprodukte Deutschland",
    description:
      "Wie prüfen Marktüberwachungsbehörden? Welche Konsequenzen drohen bei fehlender CE?",
    readTime: "8 Min.",
  },
  {
    href: "/wissen/digitaler-produktpass",
    title: "Digitaler Produktpass für Bauprodukte 2026",
    description:
      "Was ist der DPP? Wann wird er Pflicht? Was müssen Hersteller schon jetzt vorbereiten?",
    readTime: "8 Min.",
  },
];

export default function WissenPage() {
  return (
    <>
      <WebPageSchema
        title="Wissen & Ratgeber CE-Kennzeichnung"
        description="Alle Infos zur CE-Kennzeichnung von Bauprodukten"
        url="/wissen"
      />
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Wissen", href: "/wissen" }]} />

          <div className="max-w-2xl mb-12">
            <h1 className="heading-hero mb-4">Wissen & Ratgeber</h1>
            <p className="text-lg text-muted-foreground">
              Alles zur CE-Kennzeichnung und Leistungserklärung für Bauprodukte
              — erklärt für Hersteller im DACH-Raum. Aktuell mit allen
              Änderungen der BauPVO 2024/3110.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {wissenThemen.map((thema) => (
              <Link
                key={thema.href}
                href={thema.href}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <BookOpen className="h-3.5 w-3.5" />
                  {thema.readTime} Lesezeit
                </div>
                <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {thema.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {thema.description}
                </p>
                <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
                  Lesen
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center p-10 bg-muted/30 rounded-2xl border border-border">
            <h2 className="text-xl font-bold mb-2">
              CE-Kennzeichnung automatisieren
            </h2>
            <p className="text-muted-foreground mb-4">
              Jetzt CE-Pilot kostenlos testen — DoP-Generator, WPK-Tracking und
              CE-Label-Export.
            </p>
            <Link
              href="/ce-kennzeichnung-software#beta-anmeldung"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Beta-Zugang sichern
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
