import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  FAQSchema,
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { AlertTriangle, ArrowRight, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "DoP Betonfertigteile Software – CE nach EN 13369 | CE-Pilot",
  description:
    "CE-Pilot für Betonfertigteilhersteller: DoP-Generator nach EN 13369, WPK-Tracking, CE-Label-Export. BauPVO 2024 konform. Kostenlos testen.",
  alternates: { canonical: `${siteConfig.url}/betonfertigteile` },
  openGraph: {
    title: "DoP Betonfertigteile Software – CE nach EN 13369 | CE-Pilot",
    description:
      "DoP-Generator nach EN 13369, WPK-Tracking, CE-Label-Export für Betonfertigteilhersteller. BauPVO 2024/3110 bereits integriert.",
    url: `${siteConfig.url}/betonfertigteile`,
  },
};

const faqItems = [
  {
    question:
      "Welche Norm gilt für die CE-Kennzeichnung von Betonfertigteilen?",
    answer:
      "Für allgemeine Betonfertigteile gilt EN 13369 als harmonisierte Norm. Spezifische Produkte wie Betonpflaster (EN 1338), Dachziegel (EN 1168) oder Leitplanken (EN 1317) haben eigene hENs. CE-Pilot führt Sie durch die korrekte Norm-Auswahl.",
  },
  {
    question: "Welches AVCP-System gilt für Betonfertigteile?",
    answer:
      "Je nach Verwendungszweck gilt für Betonfertigteile AVCP-System 2+ (tragende Elemente) oder System 4 (nicht tragende Anwendungen). Das AVCP-System bestimmt, welche Aufgaben der Hersteller selbst und welche eine Notifizierte Stelle übernimmt.",
  },
  {
    question:
      "Wie oft muss das WPK-Zertifikat bei Betonfertigteilen erneuert werden?",
    answer:
      "Das WPK-Zertifikat (System 2+) wird in der Regel jährlich durch eine Notifizierte Stelle auditiert. CE-Pilot überwacht das Ablaufdatum und sendet Erinnerungen 30, 60 und 90 Tage vor Ablauf, damit keine CE-Kennzeichnung ausläuft.",
  },
  {
    question: "Was ändert sich durch die BauPVO 2024 für Betonhersteller?",
    answer:
      "Die neue BauPVO 2024/3110 führt kombinierte Leistungs- und Konformitätserklärungen ein sowie neue Umweltangaben (GWP-Werte, Recyclinganteil). CE-Pilot hat alle neuen Felder bereits integriert. Ein Update-Assistent zeigt, welche bestehenden DoPs angepasst werden müssen.",
  },
];

export default function BetonfertigteliePage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <WebPageSchema
        title="DoP Betonfertigteile Software"
        description="CE-Kennzeichnung nach EN 13369 mit CE-Pilot automatisieren"
        url="/betonfertigteile"
      />
      <BreadcrumbSchema
        items={[{ label: "Betonfertigteile", href: "/betonfertigteile" }]}
      />
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs
            items={[{ label: "Betonfertigteile", href: "/betonfertigteile" }]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
                <AlertTriangle className="h-4 w-4" />
                BauPVO 2024/3110 seit Januar 2026 gültig
              </div>
              <h1 className="heading-hero mb-4">
                DoP Betonfertigteile — CE-Kennzeichnung nach EN 13369
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                CE-Pilot unterstützt Betonfertigteilhersteller bei der
                automatischen Erstellung normkonformer Leistungserklärungen nach
                EN 13369 und der Verwaltung von WPK-Zertifikaten.
              </p>
              <Link
                href="/ce-kennzeichnung-software#beta-anmeldung"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Beta-Zugang sichern
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h2 className="font-semibold text-lg mb-4">
                Herausforderungen für Betonhersteller
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Viele Produktvarianten",
                    text: "Wände, Decken, Treppen, Stützen — jede Variante braucht eine eigene DoP nach EN 13369.",
                  },
                  {
                    title: "Jährliche WPK-Audits",
                    text: "System-2+-Zertifikate müssen jährlich erneuert werden. Ein abgelaufenes Zertifikat setzt die gesamte Produktion aus.",
                  },
                  {
                    title: "BauPVO 2024 GWP-Felder",
                    text: "Neue Umweltangaben (GWP, CO₂) sind jetzt Pflichtfelder in der kombinierten Leistungserklärung.",
                  },
                ].map((c) => (
                  <div key={c.title} className="flex gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/10 flex-shrink-0 mt-0.5">
                      <span className="text-destructive text-xs font-bold">
                        !
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">{c.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {c.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="heading-sub text-center mb-8">
              FAQ: CE-Kennzeichnung Betonfertigteile
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="border border-border rounded-lg group"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-5 font-medium hover:bg-muted/50 transition-colors">
                    {item.question}
                    <ChevronDown className="h-4 w-4 flex-shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/ce-kennzeichnung-software#beta-anmeldung"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Kostenlos Beta-Zugang sichern
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
