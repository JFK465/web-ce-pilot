import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  BreadcrumbSchema,
  WebPageSchema,
} from "@/components/seo/StructuredData";
import { WpkCountdownTool } from "@/components/tools/WpkCountdownTool";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "WPK-Countdown – Zertifikat-Ablauf prüfen | CE-Pilot",
  description:
    "Prüfen Sie kostenlos, wie viele Tage Ihr WPK-Zertifikat (FPC-Zertifikat) noch gültig ist — und ob Sie sofort handeln müssen. Sofortiges Ergebnis.",
  alternates: { canonical: `${siteConfig.url}/tools/wpk-countdown` },
  openGraph: {
    title: "WPK-Countdown – Zertifikat-Ablauf prüfen | CE-Pilot",
    description:
      "Kostenlos prüfen: Wie viele Tage ist Ihr WPK-Zertifikat noch gültig? Sofortiges Ergebnis mit Handlungsempfehlungen.",
    url: `${siteConfig.url}/tools/wpk-countdown`,
  },
};

export default function WPKCountdownPage() {
  return (
    <>
      <WebPageSchema
        title="WPK-Countdown – Zertifikat-Ablauf prüfen"
        description="Prüfen Sie das Ablaufdatum Ihres WPK-Zertifikats (FPC-Zertifikats) und erhalten Sie sofort eine Risikoeinschätzung"
        url="/tools/wpk-countdown"
      />
      <BreadcrumbSchema
        items={[
          { label: "Tools", href: "/tools/wpk-countdown" },
          { label: "WPK-Countdown", href: "/tools/wpk-countdown" },
        ]}
      />
      <div className="py-16 md:py-24">
        <div className="container-custom max-w-2xl">
          <Breadcrumbs
            items={[
              { label: "Tools", href: "/tools/wpk-countdown" },
              { label: "WPK-Countdown", href: "/tools/wpk-countdown" },
            ]}
          />
          <h1 className="heading-section mb-4">
            WPK-Countdown — Zertifikat-Ablauf prüfen
          </h1>
          <p className="text-muted-foreground mb-10">
            Prüfen Sie, wie viele Tage Ihr WPK-Zertifikat (FPC-Zertifikat) noch
            gültig ist — und ob Sie jetzt handeln müssen.
          </p>

          <WpkCountdownTool />

          <div className="mt-10 p-6 bg-muted/30 rounded-xl border border-border">
            <h2 className="font-semibold mb-3">
              Warum ist die WPK-Überwachung so wichtig?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ein abgelaufenes WPK-Zertifikat (FPC-Zertifikat) macht alle
              CE-Kennzeichnungen für die betroffenen Produkte sofort ungültig.
              Produkte dürfen dann nicht mehr in Verkehr gebracht werden, bis
              die Rezertifizierung durch die Notifizierte Stelle abgeschlossen
              ist. CE-Pilot überwacht das Ablaufdatum automatisch und sendet
              Erinnerungen 30, 60 und 90 Tage vor Ablauf.
            </p>
          </div>

          {/* Related Links */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                href: "/wissen/wpk-fpc-zertifikat",
                label: "WPK-Zertifikat erklärt",
              },
              {
                href: "/wissen/en-1090-ce-kennzeichnung",
                label: "EN 1090 CE-Kennzeichnung",
              },
              { href: "/tools/dop-pflichtcheck", label: "DoP-Pflichtcheck" },
              {
                href: "/ce-kennzeichnung-software",
                label: "WPK automatisch überwachen",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 p-3 border border-border rounded-lg text-sm hover:border-primary hover:text-primary transition-colors"
              >
                <ArrowRight className="h-3.5 w-3.5" />
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
