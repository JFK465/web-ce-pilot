import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import {
  FileText,
  Bell,
  Download,
  Layers,
  RefreshCw,
  Globe,
  Shield,
  Lock,
  Zap,
  Check,
  FileCheck,
  Search,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CE-Pilot Funktionen – DoP-Generator, WPK-Tracking, CE-Label",
  description:
    "Alle Funktionen von CE-Pilot: DoP-Generator nach CPR/BauPVO 2024, WPK-Zertifikat-Tracking mit Ablaufwarnungen, CE-Label-PDF-Export. Für Bauprodukt-Hersteller.",
  alternates: { canonical: `${siteConfig.url}/funktionen` },
  openGraph: {
    title: "CE-Pilot Funktionen – DoP-Generator, WPK-Tracking, CE-Label",
    description:
      "Alle Funktionen von CE-Pilot: DoP-Generator nach BauPVO 2024, WPK-Tracking, CE-Label-Export. Für Bauprodukt-Hersteller im DACH-Raum.",
    url: `${siteConfig.url}/funktionen`,
  },
};

const modules = [
  {
    icon: FileText,
    name: "DoP-Generator",
    description:
      "Erstellen Sie normkonforme Leistungserklärungen nach CPR Anhang III und BauPVO 2024/3110. Alle Pflichtfelder sind vorausgefüllt — inklusive GWP-Angaben, AVCP-System, NoBo-Nummer und kombinierter Erklärung.",
    features: [
      "CPR Anhang III vollständig",
      "BauPVO 2024/3110 konform",
      "GWP-Felder integriert",
      "Kombinierte Erklärung",
    ],
  },
  {
    icon: Bell,
    name: "WPK-Zertifikat-Tracking",
    description:
      "Tragen Sie Ihr FPC-Zertifikat einmalig ein. CE-Pilot überwacht das Ablaufdatum und sendet automatische E-Mail-Erinnerungen 30, 60 und 90 Tage vor Ablauf.",
    features: [
      "Ablauf-Warnungen",
      "30/60/90-Tage-Erinnerungen",
      "Mehrere Zertifikate",
      "Notifizierte Stelle hinterlegen",
    ],
  },
  {
    icon: Download,
    name: "CE-Label-PDF-Export",
    description:
      "Generieren Sie fertige CE-Kennzeichnungs-PDFs mit allen Pflichtangaben nach Anhang IV CPR — direkt druckbereit mit Produktnummer, NoBo-Nummer und Leistungsmerkmalen.",
    features: [
      "Anhang IV CPR konform",
      "Direkter PDF-Download",
      "Druckbereit",
      "Produktnummer vorausgefüllt",
    ],
  },
  {
    icon: Layers,
    name: "Produkt-Vorlagen",
    description:
      "Erstellen Sie DoP-Vorlagen für Ihre Produkttypen und kopieren Sie sie für neue Varianten. Alle Änderungen werden versioniert und lückenlos dokumentiert.",
    features: [
      "Vorlagen erstellen",
      "DoP duplizieren",
      "Versionsverwaltung",
      "Änderungs-Log",
    ],
  },
  {
    icon: Search,
    name: "DoP-Vollständigkeitscheck",
    description:
      "Prüfen Sie mit dem integrierten Check, ob Ihre Leistungserklärung alle Pflichtfelder nach CPR Anhang III und BauPVO 2024/3110 enthält — bevor die Marktüberwachung prüft.",
    features: [
      "Pflichtfeld-Prüfung",
      "BauPVO-2024-Check",
      "Sofortiger Bericht",
      "Handlungsempfehlungen",
    ],
  },
  {
    icon: ClipboardCheck,
    name: "Normen-Assistent",
    description:
      "Wählen Sie die harmonisierte Norm für Ihr Produkt — CE-Pilot passt die Eingabemaske automatisch an und zeigt nur die für Ihre Norm relevanten Leistungsmerkmale.",
    features: [
      "EN 1090-1 Stahlbau",
      "EN 13369 Beton",
      "EN 14351-1 Fenster",
      "EN 13830 Fassaden",
    ],
  },
  {
    icon: Globe,
    name: "Mehrsprachige DoPs",
    description:
      "Planen: Leistungserklärungen in alle EU-Amtssprachen übersetzen — ideal für Exporteure. Aktuell verfügbar: Deutsch. Weitere Sprachen folgen.",
    features: [
      "Deutsch verfügbar",
      "EU-Sprachen geplant",
      "Exportfreundlich",
      "ISO 639 konform",
    ],
  },
  {
    icon: FileCheck,
    name: "Digitaler Produktpass",
    description:
      "Vorbereitung auf die kommenden EU-Anforderungen: CE-Pilot strukturiert Produktdaten so, dass sie für den digitalen Produktpass (DPP) exportierbar sind.",
    features: [
      "DPP-Vorbereitung",
      "Daten-Export",
      "ESPR-konform",
      "Zukunftssicher",
    ],
  },
  {
    icon: RefreshCw,
    name: "BauPVO 2024 Update-Assistent",
    description:
      "Ein Assistent zeigt Ihnen, welche bestehenden DoPs nach der BauPVO 2024/3110 angepasst werden müssen — und führt Sie Schritt für Schritt durch die nötigen Änderungen.",
    features: [
      "Bestandsprüfung",
      "Update-Empfehlungen",
      "Schritt-für-Schritt",
      "Keine Norm-Lektüre nötig",
    ],
  },
];

export default function FunktionenPage() {
  return (
    <>
      <WebPageSchema
        title="CE-Pilot Funktionen"
        description="Alle Funktionen von CE-Pilot für normkonforme CE-Kennzeichnung"
        url="/funktionen"
      />
      <BreadcrumbSchema
        items={[{ label: "Funktionen", href: "/funktionen" }]}
      />
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Funktionen", href: "/funktionen" }]} />

          <div className="max-w-3xl mb-16">
            <h1 className="heading-hero mb-4">Alle Funktionen von CE-Pilot</h1>
            <p className="text-lg text-muted-foreground">
              Von der Leistungserklärung bis zum CE-Label: CE-Pilot
              automatisiert den gesamten CE-Kennzeichnungsprozess für
              Bauprodukt-Hersteller — normkonform nach BauPVO 2024/3110 und CPR
              305/2011.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="/ce-kennzeichnung-software#beta-anmeldung"
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Kostenlos testen
              </Link>
              <Link
                href="/preise"
                className="px-5 py-2.5 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Preise ansehen
              </Link>
            </div>
          </div>

          {/* Module Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod) => (
              <div
                key={mod.name}
                className="bg-card border border-border rounded-xl p-6"
              >
                <mod.icon className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-xl font-bold mb-2">{mod.name}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {mod.description}
                </p>
                <ul className="space-y-1.5">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Trust Bar */}
          <div className="mt-16 p-8 bg-muted/30 rounded-xl border border-border text-center">
            <h2 className="text-xl font-bold mb-2">
              CE-Pilot ist DSGVO-konform und Made in Germany
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Alle Daten werden in deutschen Rechenzentren verarbeitet. 256-Bit
              SSL-Verschlüsselung. Keine Datenweitergabe an Dritte. Jederzeit
              exportierbar und löschbar.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { icon: Shield, text: "DSGVO-konform" },
                { icon: Lock, text: "256-Bit SSL" },
                { icon: Zap, text: "Sofort einsatzbereit" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-sm"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/ce-kennzeichnung-software#beta-anmeldung"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Jetzt Beta-Zugang sichern — kostenlos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
