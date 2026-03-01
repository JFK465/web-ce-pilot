import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebPageSchema } from "@/components/seo/StructuredData";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "BauPVO 2024 – Was ändert sich für Bauprodukt-Hersteller?",
  description:
    "BauPVO 2024/3110 gilt seit 8. Januar 2026: Kombinierte Erklärung, GWP-Felder, Digitaler Produktpass. Alle Änderungen für Bauprodukt-Hersteller konkret erklärt.",
  alternates: { canonical: `${siteConfig.url}/wissen/baupvo-2024` },
  openGraph: {
    title: "BauPVO 2024 – Was ändert sich für Bauprodukt-Hersteller?",
    description:
      "Seit 8. Januar 2026: Kombinierte Erklärung, GWP-Felder, Digitaler Produktpass. Alle BauPVO-2024-Änderungen erklärt.",
    url: `${siteConfig.url}/wissen/baupvo-2024`,
  },
};

export default function BauPVO2024Page() {
  return (
    <>
      <WebPageSchema
        title="BauPVO 2024 — Änderungen für Bauprodukt-Hersteller"
        description="Alle wesentlichen Neuerungen der Verordnung (EU) 2024/3110 erklärt"
        url="/wissen/baupvo-2024"
      />
      <div className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Wissen", href: "/wissen" },
              { label: "BauPVO 2024", href: "/wissen/baupvo-2024" },
            ]}
          />

          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
              <span>Letzte Aktualisierung: Februar 2026</span>
              <span>•</span>
              <span>10 Min. Lesezeit</span>
            </div>
            <h1 className="heading-hero mb-4">
              BauPVO 2024 (EU) 2024/3110 — Was ändert sich ab Januar 2026?
            </h1>
            <p className="text-lg text-muted-foreground">
              Die neue Bauproduktenverordnung (EU) 2024/3110 gilt seit 8. Januar
              2026 und bringt wesentliche Änderungen für alle
              Bauprodukt-Hersteller im EU-Binnenmarkt.
            </p>
          </div>

          <div className="prose prose-stone max-w-none">
            <h2>Was ist die BauPVO 2024?</h2>
            <p>
              Die Verordnung (EU) 2024/3110 (Bauproduktenverordnung 2024, kurz
              BauPVO 2024) ist die überarbeitete Fassung der bisherigen
              Bauproduktenverordnung CPR 305/2011. Sie gilt ab dem 8. Januar
              2026 und löst die bisherige CPR schrittweise ab. Für Hersteller
              bedeutet dies: Wer CE-Kennzeichnungen nach alter Vorlage
              ausstellt, riskiert Bußgelder bis 100.000 EUR und
              Inverkehrbringungsverbote.
            </p>

            <h2>Die wichtigsten Neuerungen im Überblick</h2>
            <h3>1. Kombinierte Leistungs- und Konformitätserklärung</h3>
            <p>
              Die bisherige separate Konformitätserklärung entfällt. Stattdessen
              gibt es jetzt eine einzige kombinierte Leistungs- und
              Konformitätserklärung (engl. Combined Declaration of Performance
              and Conformity). Dies vereinfacht die Dokumentation, erfordert
              aber neue Vorlagen und angepasste Systeme.
            </p>

            <h3>2. Neue Umweltangaben (GWP und Recyclinganteil)</h3>
            <p>
              Die BauPVO 2024 führt Umweltanforderungen als Pflichtfeld ein:
              Hersteller müssen den globalen Erwärmungspotenzial-Wert (GWP,
              Global Warming Potential) ihres Produkts in der Leistungserklärung
              angeben. Zusätzlich werden Angaben zum Recyclinganteil gefordert.
              Diese Werte stammen in der Regel aus einer Ökobilanzdatenbank
              (EPD).
            </p>

            <h3>3. Digitaler Produktpass (DPP) — Vorbereitung</h3>
            <p>
              Die BauPVO 2024 schafft den rechtlichen Rahmen für den Digitalen
              Produktpass (DPP) für Bauprodukte. Dieser wird schrittweise ab
              2027 verpflichtend eingeführt. Hersteller, die jetzt ihre
              Produktdaten strukturiert digitalisieren, sind gut vorbereitet.
            </p>

            <h3>4. Übergangsfristen</h3>
            <p>
              Für bestehende Produkte gelten Übergangsfristen: DoPs nach
              bisherigem Muster (CPR 305/2011) können in der Regel noch bis Ende
              2026 verwendet werden, danach gilt ausschließlich das neue Format.
              CE-Pilot zeigt Ihnen mit dem Update-Assistenten, welche Ihrer DoPs
              angepasst werden müssen.
            </p>

            <h2>Was muss ich als Hersteller jetzt tun?</h2>
            <p>
              Prüfen Sie, welche Ihrer Produkte CE-kennzeichnungspflichtig sind
              und erstellen Sie einen Aktionsplan zur Anpassung Ihrer
              Leistungserklärungen. Wichtige Schritte:
            </p>
            <ul>
              <li>Bestandsaufnahme aller bestehenden DoPs</li>
              <li>
                Identifikation der neuen Pflichtfelder (GWP, kombinierte
                Erklärung)
              </li>
              <li>Update des WPK-Systems und der Notifizierten Stelle</li>
              <li>
                Vorbereitung der Produktdaten für den Digitalen Produktpass
              </li>
            </ul>

            <h2>Wie CE-Pilot hilft</h2>
            <p>
              CE-Pilot hat alle neuen Pflichtfelder der BauPVO 2024/3110 bereits
              integriert. Der Update-Assistent zeigt Ihnen, welche bestehenden
              DoPs angepasst werden müssen — und führt Sie Schritt für Schritt
              durch die Änderungen. GWP-Felder und kombinierte Erklärung sind
              standardmäßig in allen DoP-Vorlagen enthalten.
            </p>
          </div>

          {/* Related Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-semibold mb-4">Verwandte Themen</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  href: "/wissen/leistungserklaerung-dop",
                  label: "Leistungserklärung (DoP)",
                },
                {
                  href: "/wissen/bauproduktenverordnung-cpr",
                  label: "Bauproduktenverordnung CPR",
                },
                {
                  href: "/wissen/digitaler-produktpass",
                  label: "Digitaler Produktpass",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 p-3 border border-border rounded-lg text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold mb-2">
              BauPVO 2024 automatisch umsetzen
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              CE-Pilot hat alle neuen Anforderungen bereits integriert.
              Kostenlos testen während der Beta-Phase.
            </p>
            <Link
              href="/ce-kennzeichnung-software#beta-anmeldung"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Beta-Zugang sichern <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
