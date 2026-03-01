import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen – CE-Pilot",
  description: "AGB von CE-Pilot für die Nutzung der CE-Kennzeichnung Software.",
  alternates: { canonical: `${siteConfig.url}/agb` },
  robots: { index: false, follow: false },
};

export default function AGBPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-custom max-w-3xl">
        <Breadcrumbs items={[{ label: "AGB", href: "/agb" }]} />
        <h1 className="heading-section mb-8">Allgemeine Geschäftsbedingungen</h1>
        <div className="prose prose-stone max-w-none">
          <h2>§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der
            JFK Compliance Solutions UG (CE-Pilot) und ihren Kunden über die Nutzung der
            CE-Pilot Software-as-a-Service Plattform.
          </p>
          <h2>§ 2 Leistungsbeschreibung</h2>
          <p>
            CE-Pilot stellt eine webbasierte Software zur Erstellung von Leistungserklärungen
            (DoPs) nach Bauproduktenverordnung (CPR 305/2011, BauPVO 2024/3110) und zur
            Verwaltung von WPK-Zertifikaten zur Verfügung.
          </p>
          <h2>§ 3 Beta-Phase</h2>
          <p>
            Während der Beta-Phase ist die Nutzung kostenlos. CE-Pilot behält sich vor,
            Funktionalitäten zu ändern oder zu ergänzen. Beta-Nutzer werden 30 Tage vor
            Beginn der kostenpflichtigen Phase informiert.
          </p>
          <h2>§ 4 Datenschutz</h2>
          <p>
            Die Verarbeitung personenbezogener Daten erfolgt gemäß der DSGVO und unserer
            Datenschutzerklärung unter ce-pilot.de/datenschutz.
          </p>
          <h2>§ 5 Haftungsbeschränkung</h2>
          <p>
            CE-Pilot unterstützt die Erstellung normkonformer Dokumente, ersetzt jedoch nicht
            die rechtliche Beratung durch qualifizierte Sachverständige. Die Verantwortung
            für die CE-Kennzeichnung liegt beim Hersteller.
          </p>
          <h2>§ 6 Anwendbares Recht</h2>
          <p>Es gilt deutsches Recht.</p>
          <p className="text-sm text-muted-foreground mt-8">Stand: Februar 2026</p>
        </div>
      </div>
    </div>
  );
}
