import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { SoftwareLandingPage } from "@/components/software/SoftwareLandingPage";
import {
  BreadcrumbSchema,
  SoftwareAppSchema,
  WebPageSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "CE-Kennzeichnung Software für Bauprodukte | CE-Pilot",
  description:
    "DoP-Generator nach BauPVO 2024, WPK-Tracking, CE-Label-Export. DSGVO-konform, Made in Germany. Jetzt kostenlos in der Beta-Phase testen — ohne Kreditkarte.",
  alternates: {
    canonical: `${siteConfig.url}/ce-kennzeichnung-software`,
  },
  openGraph: {
    title: "CE-Kennzeichnung Software für Bauprodukte | CE-Pilot",
    description:
      "DoP-Generator nach BauPVO 2024, WPK-Tracking, CE-Label-Export. DSGVO-konform, Made in Germany. Kostenlos testen.",
    url: `${siteConfig.url}/ce-kennzeichnung-software`,
  },
};

export default function CeKennzeichnungSoftwarePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            label: "CE-Kennzeichnung Software",
            href: "/ce-kennzeichnung-software",
          },
        ]}
      />
      <SoftwareAppSchema
        name="CE-Pilot – CE-Kennzeichnung Software"
        description="DoP-Generator, WPK-Tracking und CE-Label-Export für Bauprodukt-Hersteller nach BauPVO 2024/3110"
        url="/ce-kennzeichnung-software"
      />
      <WebPageSchema
        title="CE-Kennzeichnung Software für Bauprodukte"
        description="CE-Pilot: DoP-Generator nach BauPVO 2024, WPK-Zertifikat-Tracking und CE-Label-Export für Bauprodukt-Hersteller im DACH-Raum."
        url="/ce-kennzeichnung-software"
      />
      <SoftwareLandingPage />
    </>
  );
}
