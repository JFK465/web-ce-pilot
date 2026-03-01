import type { Metadata } from "next";
import {
  HeroSection,
  SocialProofBar,
  PainPointsSection,
  HowItWorksSection,
  FeaturesGrid,
  PricingPreview,
  HomepageFAQ,
  SEOContentSection,
  CTASection,
} from "@/components/home";
import { FAQSchema } from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "CE-Pilot – CE-Kennzeichnung Software für Bauprodukte",
  description:
    "DoP-Generator, WPK-Tracking und CE-Label-Export für Bauprodukt-Hersteller. BauPVO 2024/3110 bereits integriert. Kostenlos in der Beta-Phase testen.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "CE-Pilot – CE-Kennzeichnung Software für Bauprodukte",
    description:
      "DoP-Generator, WPK-Tracking und CE-Label-Export für Bauprodukt-Hersteller. BauPVO 2024/3110 bereits integriert. Kostenlos testen.",
    url: siteConfig.url,
  },
};

const homepageFAQ = [
  {
    question: "Was ist eine Leistungserklärung (DoP) und wann ist sie Pflicht?",
    answer:
      "Eine Leistungserklärung (DoP) ist für alle CE-kennzeichnungspflichtigen Bauprodukte Pflicht — das ist jedes Produkt, für das eine harmonisierte Norm existiert und das in Verkehr gebracht wird.",
  },
  {
    question: "Was ändert sich durch die neue BauPVO 2024/3110 ab Januar 2026?",
    answer:
      "Die neue BauPVO 2024/3110 gilt seit 8. Januar 2026 und führt die kombinierte Leistungs- und Konformitätserklärung ein, neue GWP-Felder und einen Rahmen für den digitalen Produktpass.",
  },
  {
    question: "Was passiert wenn meine CE-Kennzeichnung fehlerhaft ist?",
    answer:
      "Fehlerhafte CE-Kennzeichnungen führen zum Inverkehrbringungsverbot und Bußgeldern bis 100.000 EUR. Marktüberwachungsbehörden können Produkte aus dem Handel nehmen.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema items={homepageFAQ} />
      <HeroSection />
      <SocialProofBar />
      <PainPointsSection />
      <HowItWorksSection />
      <FeaturesGrid />
      <PricingPreview />
      <HomepageFAQ />
      <SEOContentSection />
      <CTASection />
    </>
  );
}
