import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt – CE-Pilot | Fragen zu CE-Kennzeichnung Software",
  description:
    "Fragen zu CE-Pilot oder zur BauPVO 2024? Kontaktieren Sie uns per Formular oder E-Mail. Beratung für Bauprodukt-Hersteller im DACH-Raum. Antwort in 2 Werktagen.",
  alternates: { canonical: `${siteConfig.url}/kontakt` },
  openGraph: {
    title: "Kontakt – CE-Pilot | Fragen zu CE-Kennzeichnung Software",
    description:
      "Fragen zu CE-Pilot? Kontaktieren Sie uns per Formular oder E-Mail. Beratung für Bauprodukt-Hersteller im DACH-Raum.",
    url: `${siteConfig.url}/kontakt`,
  },
};

export default function KontaktPage() {
  return (
    <>
      <WebPageSchema
        title="Kontakt – CE-Pilot"
        description="Kontakt für Fragen zur CE-Kennzeichnung Software"
        url="/kontakt"
      />
      <BreadcrumbSchema items={[{ label: "Kontakt", href: "/kontakt" }]} />
      <div className="py-16 md:py-24">
        <div className="container-custom max-w-5xl">
          <Breadcrumbs items={[{ label: "Kontakt", href: "/kontakt" }]} />

          <h1 className="heading-section mb-4">Wir helfen Ihnen weiter</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl">
            Fragen zu CE-Pilot, zur BauPVO 2024 oder zur CE-Kennzeichnung? Wir
            antworten innerhalb von 2 Werktagen.
          </p>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
