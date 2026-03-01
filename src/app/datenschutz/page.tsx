import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – CE-Pilot",
  description: "Datenschutzerklärung von CE-Pilot gemäß DSGVO.",
  alternates: { canonical: `${siteConfig.url}/datenschutz` },
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-custom max-w-3xl">
        <Breadcrumbs items={[{ label: "Datenschutz", href: "/datenschutz" }]} />
        <h1 className="heading-section mb-8">Datenschutzerklärung</h1>
        <div className="prose prose-stone max-w-none">
          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlicher für die Verarbeitung personenbezogener Daten auf dieser Website ist:<br />
            JFK Compliance Solutions UG (haftungsbeschränkt)<br />
            [Adresse]<br />
            E-Mail: datenschutz@ce-pilot.de
          </p>
          <h2>2. Erhobene Daten</h2>
          <p>
            Beim Besuch dieser Website werden folgende Daten automatisch erfasst: IP-Adresse,
            Datum und Uhrzeit der Anfrage, Browsertyp und -version, Betriebssystem, Referrer-URL.
            Diese Daten werden ausschließlich zur Sicherstellung des technischen Betriebs verarbeitet.
          </p>
          <h2>3. Kontaktformular</h2>
          <p>
            Daten, die Sie über unser Kontaktformular eingeben, werden zur Bearbeitung Ihrer Anfrage
            verwendet und nach Abschluss der Kommunikation gelöscht, sofern keine gesetzliche
            Aufbewahrungspflicht besteht.
          </p>
          <h2>4. Beta-Registrierung</h2>
          <p>
            Mit der Beta-Registrierung geben Sie Ihre Firma, Ihren Namen und Ihre E-Mail-Adresse an.
            Diese Daten werden ausschließlich zur Verwaltung des Beta-Zugangs und zur Kommunikation
            über das Produkt verwendet.
          </p>
          <h2>5. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung
            und Datenübertragbarkeit. Wenden Sie sich hierfür an datenschutz@ce-pilot.de.
          </p>
          <h2>6. Hosting</h2>
          <p>
            Diese Website wird bei Vercel gehostet. Alle Daten werden in europäischen Rechenzentren
            (Frankfurt) verarbeitet. Vercel ist nach ISO 27001 zertifiziert.
          </p>
          <p className="text-sm text-muted-foreground mt-8">Stand: Februar 2026</p>
        </div>
      </div>
    </div>
  );
}
