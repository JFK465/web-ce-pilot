import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  FAQSchema,
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import {
  AlertTriangle,
  FileText,
  Bell,
  Download,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CE-Kennzeichnung Stahlbau Software – DoP nach EN 1090-1",
  description:
    "CE-Pilot für Stahlbau und Metallbau: DoP-Generator nach EN 1090-1, WPK-Verknüpfung, CE-Label mit NoBo-Nummer. Für EN-1090-zertifizierte Betriebe. BauPVO 2024 konform.",
  alternates: { canonical: `${siteConfig.url}/stahlbau-metallbau` },
  openGraph: {
    title: "CE-Kennzeichnung Stahlbau Software – DoP nach EN 1090-1",
    description:
      "DoP-Generator nach EN 1090-1, WPK-Tracking, CE-Label-Export für Stahlbau- und Metallbaubetriebe. BauPVO 2024/3110 bereits integriert.",
    url: `${siteConfig.url}/stahlbau-metallbau`,
  },
};

const faqItems = [
  {
    question:
      "Muss jedes tragende Stahlbauteil eine eigene Leistungserklärung haben?",
    answer:
      "Ja. Nach EN 1090-1 in Verbindung mit CPR 305/2011 muss für jeden CE-kennzeichnungspflichtigen Produkttyp eine eigene DoP ausgestellt werden. CE-Pilot erlaubt es, Vorlagen zu erstellen und per Klick für neue Produktvarianten zu kopieren und anzupassen.",
  },
  {
    question: "Was passiert wenn mein WPK-Zertifikat abläuft?",
    answer:
      "Ein abgelaufenes FPC-Zertifikat bedeutet das sofortige Ende der Berechtigung zur CE-Kennzeichnung. Produkte dürfen nicht mehr in Verkehr gebracht werden, bis die Rezertifizierung abgeschlossen ist. CE-Pilot überwacht Ablaufdaten und warnt rechtzeitig.",
  },
  {
    question: "Welche Ausführungsklasse muss ich in der DoP angeben?",
    answer:
      "Die Ausführungsklasse (EXC1–EXC4) wird vom Bauherrn oder Planer vorgegeben und bestimmt den Prüfumfang. In CE-Pilot wählen Sie die EXC-Klasse im DoP-Assistenten — die relevanten Felder passen sich automatisch an.",
  },
  {
    question: "Wie ändert sich meine DoP durch die BauPVO 2024?",
    answer:
      "Die neue BauPVO 2024/3110 führt die kombinierte Leistungs- und Konformitätserklärung ein und fordert neue Felder (GWP, Recyclinganteil). CE-Pilot hat diese Felder bereits integriert. Ein Update-Assistent zeigt Ihnen, welche bestehenden DoPs angepasst werden müssen.",
  },
  {
    question:
      "Ist CE-Pilot auch für Aluminiumkonstruktionen nach EN 1090-3 geeignet?",
    answer:
      "Die aktuelle Version fokussiert auf EN 1090-1 (Stahl) und deckt die häufigsten Anwendungsfälle ab. Aluminiumkonstruktionen nach EN 1090-3 sind als Erweiterung geplant — tragen Sie sich in die Beta-Liste ein, um als Erster informiert zu werden.",
  },
];

export default function StahlbauMetallbauPage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <WebPageSchema
        title="CE-Kennzeichnung Stahlbau Software"
        description="DoP nach EN 1090-1 automatisch erstellen — mit CE-Pilot"
        url="/stahlbau-metallbau"
      />
      <BreadcrumbSchema
        items={[{ label: "Stahlbau & Metallbau", href: "/stahlbau-metallbau" }]}
      />
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: "Stahlbau & Metallbau", href: "/stahlbau-metallbau" },
            ]}
          />

          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
                <AlertTriangle className="h-4 w-4" />
                BauPVO 2024/3110 gilt seit Januar 2026
              </div>
              <h1 className="heading-hero mb-4">
                CE-Kennzeichnung im Stahlbau — DoP nach EN 1090-1 ohne Chaos
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Für EN-1090-zertifizierte Metallbau-, Stahlbau- und
                Treppenbaubetriebe: Erstellen Sie normkonforme
                Leistungserklärungen in Minuten statt Stunden — mit
                automatischer WPK-Verknüpfung und Ablaufwarnungen.
              </p>
              <Link
                href="/ce-kennzeichnung-software#beta-anmeldung"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Beta-Zugang für EN-1090-Betriebe sichern
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Challenges Box */}
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h2 className="font-semibold text-lg mb-4">
                Die 3 größten Herausforderungen im Stahlbau
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Jedes tragende Bauteil braucht eine eigene DoP",
                    text: "Treppenläufe, Geländer, Stützen, Träger: Bei 50 Produktvarianten wird die Word-Vorlage zum Fehlerchaos.",
                  },
                  {
                    title: "WPK-Zertifikat läuft ab — ohne Warnung",
                    text: "Ein abgelaufenes FPC-Zertifikat bedeutet sofortiges Inverkehrbringungsverbot für alle CE-Produkte.",
                  },
                  {
                    title: "Neue BauPVO 2024 — was muss sich ändern?",
                    text: "Kombinierte Erklärung, GWP-Angaben, neue Pflichtfelder. Die meisten EN-1090-Betriebe sind noch nicht angepasst.",
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

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="heading-sub text-center mb-8">
              So hilft CE-Pilot EN-1090-Betrieben
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: FileText,
                  title: "EN-1090-1-Vorlage vorinstalliert",
                  text: "Alle Pflichtfelder aus Anhang III CPR vorbelegt: Produkttyp-Nummer, Ausführungsklasse (EXC1-4), NoBo-Nummer, Unterzeichnung.",
                },
                {
                  icon: Bell,
                  title: "WPK-Verknüpfung und Ablauf-Warnungen",
                  text: "Tragen Sie Ihr FPC-Zertifikat einmalig ein. CE-Pilot erinnert Sie 30, 60 und 90 Tage vor Ablauf automatisch.",
                },
                {
                  icon: Download,
                  title: "BauPVO 2024 ready",
                  text: "Neue Pflichtfelder (GWP, kombinierte Erklärung) bereits im System hinterlegt. Kein Norm-Lesen erforderlich.",
                },
                {
                  icon: FileText,
                  title: "CE-Label-PDF-Export",
                  text: "Fertige CE-Kennzeichnungs-PDFs mit allen Pflichtangaben nach Anhang IV CPR — direkt druckbereit.",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <b.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2 text-sm">{b.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="heading-sub text-center mb-8">
              FAQ: CE-Kennzeichnung im Stahlbau
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

          {/* CTA */}
          <div className="text-center p-10 bg-primary text-primary-foreground rounded-2xl">
            <h2 className="text-2xl font-bold mb-3">
              Beta-Zugang für EN-1090-Betriebe sichern
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Kostenlos und unverbindlich während der gesamten Beta-Phase.
            </p>
            <Link
              href="/ce-kennzeichnung-software#beta-anmeldung"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Kostenlos registrieren
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
