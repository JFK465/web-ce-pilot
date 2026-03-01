import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "CE-Pilot Preise – Transparente Kosten für DoP-Software",
  description:
    "CE-Pilot Preise: Starter ab 49 EUR/Monat, Professional ab 99 EUR/Monat. Jetzt Beta-Phase: kostenlos testen, keine Kreditkarte, DSGVO-konform, Made in Germany.",
  alternates: { canonical: `${siteConfig.url}/preise` },
  openGraph: {
    title: "CE-Pilot Preise – Transparente Kosten für DoP-Software",
    description:
      "CE-Pilot Preise: Starter ab 49 EUR/Monat, Professional ab 99 EUR/Monat. Beta-Phase kostenlos — kein Kreditkarte erforderlich.",
    url: `${siteConfig.url}/preise`,
  },
};

const tiers = [
  {
    name: "Starter",
    monthlyPrice: 49,
    description: "Für kleine Betriebe mit wenigen Bauprodukten",
    features: [
      "Bis zu 10 Produkte / DoPs",
      "DoP-Generator (CPR Anhang III + BauPVO 2024)",
      "CE-Label-PDF-Export",
      "WPK-Zertifikat-Tracking (1 Zertifikat)",
      "DoP-Vollständigkeitscheck",
      "E-Mail-Support (2 Werktage)",
      "5 GB Speicher für Dokumente",
    ],
    cta: "Beta-Zugang sichern",
    highlighted: false,
  },
  {
    name: "Professional",
    monthlyPrice: 99,
    description: "Für Hersteller mit wachsendem Produktportfolio",
    features: [
      "Unbegrenzte Produkte / DoPs",
      "DoP-Vorlagen & Kopier-Funktion",
      "Versionierung & Änderungs-Log",
      "WPK-Tracking (unbegrenzte Zertifikate)",
      "WPK-Dashboard mit Frühwarnung",
      "BauPVO 2024 Update-Assistent",
      "Prioritäts-Support (1 Werktag)",
      "25 GB Speicher",
    ],
    cta: "Beta-Zugang sichern",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 199,
    description: "Für Konzerne, Systemhersteller und Verbände",
    features: [
      "Alles aus Professional",
      "Mehrere Standorte / Werke",
      "Benutzerverwaltung & Rollen",
      "API-Zugang",
      "Dedizierter Account Manager",
      "SLA-Garantie 99,9 % Uptime",
      "100 GB Speicher",
      "On-Premise-Option auf Anfrage",
    ],
    cta: "Beta-Zugang sichern",
    highlighted: false,
  },
];

const faq = [
  {
    q: "Wie lange läuft die Beta-Phase?",
    a: "Die Beta-Phase ist auf mehrere Monate ausgelegt. Alle Beta-Nutzer werden rechtzeitig informiert, bevor kostenpflichtige Pläne aktiv werden. Beta-Nutzer erhalten einen dauerhaften Rabatt.",
  },
  {
    q: "Brauche ich eine Kreditkarte für die Beta?",
    a: "Nein. Die Registrierung für die Beta ist vollständig kostenlos und ohne Kreditkarte. Zahlungsdaten werden erst nach der Beta-Phase benötigt.",
  },
  {
    q: "Kann ich CE-Pilot nach der Beta kündigen?",
    a: "Ja, CE-Pilot kann jederzeit monatlich gekündigt werden. Es gibt keine Mindestvertragslaufzeit. Ihre Daten können Sie jederzeit exportieren.",
  },
  {
    q: "Gibt es Rabatte für Verbände oder Kammern?",
    a: "Ja, für Fachverbände, Handwerkskammern und IHKs bieten wir spezielle Konditionen. Bitte nehmen Sie Kontakt auf.",
  },
];

export default function PreisePage() {
  return (
    <>
      <WebPageSchema
        title="CE-Pilot Preise"
        description="Transparente Preise für CE-Kennzeichnung Software"
        url="/preise"
      />
      <BreadcrumbSchema items={[{ label: "Preise", href: "/preise" }]} />
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: "Preise", href: "/preise" }]} />

          <div className="text-center max-w-2xl mx-auto mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-primary" />
              </span>
              BETA-PHASE — Aktuell kostenlos
            </div>
            <h1 className="heading-section mb-4">
              Transparente Preise für jeden Betrieb
            </h1>
            <p className="text-muted-foreground text-lg">
              Während der Beta erhalten alle Nutzer kostenlosen Zugang zu allen
              Funktionen. Keine Kreditkarte, keine versteckten Kosten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-card rounded-xl border p-8 flex flex-col ${
                  tier.highlighted
                    ? "border-primary shadow-lg shadow-primary/10 scale-105"
                    : "border-border"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Beliebt
                    </span>
                  </div>
                )}

                <div className="inline-flex self-start items-center px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded mb-4">
                  BETA: Jetzt 0 EUR
                </div>

                <h2 className="text-xl font-bold mb-1">{tier.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {tier.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">0 €</span>
                    <span className="text-muted-foreground text-sm">
                      /Monat
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="line-through">
                      {tier.monthlyPrice} €/Monat
                    </span>{" "}
                    nach Beta-Ende
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/ce-kennzeichnung-software#beta-anmeldung"
                  className={`flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border hover:bg-muted"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Häufige Fragen zu Preisen
            </h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <div
                  key={item.q}
                  className="border border-border rounded-lg p-5"
                >
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
