import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Impressum – CE-Pilot",
  description: "Impressum von CE-Pilot gemäß § 5 TMG.",
  alternates: { canonical: `${siteConfig.url}/impressum` },
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-custom max-w-3xl">
        <Breadcrumbs items={[{ label: "Impressum", href: "/impressum" }]} />
        <h1 className="heading-section mb-8">Impressum</h1>
        <div className="prose prose-stone max-w-none">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            JFK Compliance Solutions UG (haftungsbeschränkt)<br />
            [Straße und Hausnummer]<br />
            [PLZ Ort]<br />
            Deutschland
          </p>
          <p>
            Registergericht: Amtsgericht [Ort]<br />
            Registernummer: HRB [Nummer]<br />
            Umsatzsteuer-ID: DE [Nummer]
          </p>
          <h2>Vertreten durch</h2>
          <p>Jonas Kruger, Geschäftsführer</p>
          <h2>Kontakt</h2>
          <p>
            E-Mail: hallo@ce-pilot.de<br />
            Website: ce-pilot.de
          </p>
          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Informationen auf dieser Website dienen
            ausschließlich der allgemeinen Information und stellen keine Rechts- oder Steuerberatung dar.
          </p>
          <p className="text-sm text-muted-foreground mt-8">Stand: Februar 2026</p>
        </div>
      </div>
    </div>
  );
}
