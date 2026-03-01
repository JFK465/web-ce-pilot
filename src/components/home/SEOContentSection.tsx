import Link from "next/link";

export function SEOContentSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container-custom">
        <div className="prose prose-stone max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 not-prose">
            CE-Kennzeichnung für Bauprodukte: Warum normkonforme Leistungserklärungen heute wichtiger sind als je zuvor
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Seit der Verordnung (EU) 305/2011 (Bauproduktenverordnung, CPR) müssen Hersteller von Bauprodukten,
            die unter eine <Link href="/wissen/leistungserklaerung-dop" className="text-primary hover:underline">harmonisierte technische Norm (hEN) fallen</Link>,
            eine Leistungserklärung (DoP) ausstellen und das CE-Zeichen anbringen. Mit der neuen{" "}
            <Link href="/wissen/baupvo-2024" className="text-primary hover:underline">BauPVO 2024/3110 (EU) 2024/3110</Link>{" "}
            wurden die Anforderungen ab 8. Januar 2026 deutlich verschärft: Die kombinierte Leistungs- und
            Konformitätserklärung ist nun Pflicht, GWP-Angaben werden eingeführt und der Weg zum digitalen Produktpass ist geebnet.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Für <Link href="/stahlbau-metallbau" className="text-primary hover:underline">Stahlbau- und Metallbaubetriebe</Link> bedeutet dies: Jedes CE-kennzeichnungspflichtige
            Produkt — Stützen, Träger, Treppen, Geländer — braucht eine normkonforme DoP nach EN 1090-1 in Verbindung
            mit CPR Anhang III. <Link href="/betonfertigteile" className="text-primary hover:underline">Betonfertigteilhersteller</Link>{" "}
            müssen ihre DoPs nach EN 13369 ausrichten, und{" "}
            <Link href="/fenster-tueren" className="text-primary hover:underline">Fenster- und Türenhersteller</Link>{" "}
            nach EN 14351-1. Die manuelle Erstellung in Word oder Excel ist dabei fehleranfällig — fehlerhafte
            CE-Kennzeichnungen führen zu Bußgeldern bis 100.000 EUR und Inverkehrbringungsverboten.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            CE-Pilot löst dieses Problem mit einem automatisierten{" "}
            <Link href="/ce-kennzeichnung-software" className="text-primary hover:underline">DoP-Generator für Bauprodukte</Link>.
            Die Software kennt alle Pflichtfelder nach CPR Anhang III und BauPVO 2024/3110, überwacht automatisch
            die Ablaufdaten Ihrer <Link href="/wissen/wpk-fpc-zertifikat" className="text-primary hover:underline">WPK/FPC-Zertifikate</Link>{" "}
            und exportiert fertige CE-Label-PDFs — direkt druckbereit. Nutzen Sie unseren kostenlosen{" "}
            <Link href="/tools/dop-pflichtcheck" className="text-primary hover:underline">DoP-Pflichtcheck</Link>,
            um zu prüfen, ob Ihre aktuellen Leistungserklärungen den neuen Anforderungen der BauPVO 2024 genügen.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Die <Link href="/wissen/marktueberwachung-bauprodukte" className="text-primary hover:underline">Marktüberwachungsbehörden</Link>{" "}
            der Bundesländer intensivieren ihre Kontrollen. Wer jetzt handelt und seine CE-Dokumentation
            systematisch digitalisiert, schützt sein Unternehmen vor kostspieligen Beanstandungen und ist für
            den <Link href="/wissen/digitaler-produktpass" className="text-primary hover:underline">digitalen Produktpass</Link>{" "}
            der EU gerüstet, der schrittweise ab 2027 eingeführt wird.
          </p>
        </div>
      </div>
    </section>
  );
}
