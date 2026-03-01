"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/lib/types";

const faqItems: FAQItem[] = [
  {
    question: "Was ist eine Leistungserklärung (DoP) und wann ist sie Pflicht?",
    answer:
      "Eine Leistungserklärung (Declaration of Performance, DoP) ist ein Dokument, das ein Hersteller für Bauprodukte ausstellen muss, die unter eine harmonisierte technische Norm (hEN) fallen. Mit der DoP erklärt der Hersteller, welche Leistungsmerkmale sein Produkt erfüllt. Sie ist Pflicht für alle CE-kennzeichnungspflichtigen Bauprodukte — das ist jedes Produkt, für das eine harmonisierte Norm existiert und das in Verkehr gebracht wird.",
  },
  {
    question: "Was ändert sich durch die neue BauPVO 2024/3110 ab Januar 2026?",
    answer:
      "Die Verordnung (EU) 2024/3110 (BauPVO 2024) ist seit 8. Januar 2026 gültig und bringt wesentliche Neuerungen: Die separate Konformitätserklärung entfällt — stattdessen gibt es eine kombinierte Leistungs- und Konformitätserklärung. Neu sind auch Umweltangaben (GWP, Recyclinganteil) als optionale Pflichtfelder sowie ein neues Rahmensystem für den Digitalen Produktpass. CE-Pilot hat alle neuen Felder bereits integriert.",
  },
  {
    question: "Was passiert wenn meine CE-Kennzeichnung fehlerhaft ist?",
    answer:
      "Eine fehlerhafte CE-Kennzeichnung oder eine unvollständige DoP führt zum sofortigen Inverkehrbringungsverbot für die betroffenen Produkte. Zusätzlich drohen Bußgelder bis zu 100.000 EUR (je nach Bundesland). Marktüberwachungsbehörden können Produkte aus dem Handel nehmen und öffentlich auf dem RAPEX-Portal melden — was erheblichen Reputationsschaden verursacht.",
  },
  {
    question: "Für welche Normen unterstützt CE-Pilot die DoP-Erstellung?",
    answer:
      "CE-Pilot unterstützt aktuell die wichtigsten harmonisierten Normen für Bauprodukte im DACH-Raum: EN 1090-1 (tragende Stahlbauteile), EN 13369 (Betonfertigteile), EN 14351-1 (Fenster und Türen), EN 13830 (Vorhangfassaden) sowie weitere gängige Normen. Die Liste wird laufend erweitert — tragen Sie sich für die Beta ein und teilen Sie Ihre Norm-Anforderungen.",
  },
  {
    question:
      "Was ist ein WPK-Zertifikat und warum ist seine Überwachung wichtig?",
    answer:
      "Das WPK-Zertifikat (Werkseigene Produktionskontrolle) wird von einer Notifizierten Stelle ausgestellt und bestätigt, dass Ihr Qualitätssicherungssystem den Anforderungen entspricht. Für viele Bauprodukte (AVCP-System 1, 1+, 2, 2+) ist es Pflichtvoraussetzung für die CE-Kennzeichnung. Ein abgelaufenes WPK-Zertifikat macht Ihre CE-Kennzeichnung sofort ungültig — alle betroffenen Produkte dürfen nicht mehr in Verkehr gebracht werden.",
  },
  {
    question: "Ist CE-Pilot auch für kleine Betriebe geeignet?",
    answer:
      "Ja, CE-Pilot ist speziell für KMU im DACH-Raum entwickelt. Während der Beta-Phase ist der Zugang komplett kostenlos. Nach der Beta beginnen die Preise bei 49 EUR/Monat für kleine Betriebe mit bis zu 10 Produkten. Keine IT-Abteilung nötig: CE-Pilot ist vollständig browserbasiert, in 5 Minuten eingerichtet und auf kleine Teams ausgelegt.",
  },
  {
    question: "Wie sicher sind meine Produktdaten bei CE-Pilot?",
    answer:
      "Ihre Daten werden ausschließlich in deutschen Rechenzentren gespeichert. Der Betrieb erfolgt nach ISO 27001-Anforderungen, die Verbindung ist 256-Bit SSL-verschlüsselt. CE-Pilot ist vollständig DSGVO-konform. Sie können Ihre Daten jederzeit exportieren oder löschen lassen.",
  },
  {
    question:
      "Kann ich bestehende Word/Excel-Vorlagen in CE-Pilot importieren?",
    answer:
      "Aktuell bietet CE-Pilot keine direkte Import-Funktion für Word/Excel-Dateien. Das Anlegen eines Produkts dauert jedoch nur wenige Minuten — CE-Pilot führt Sie durch alle Pflichtfelder nach CPR Anhang III. Ein Import-Tool ist für eine spätere Version geplant. Tragen Sie sich für die Beta ein, um über neue Features informiert zu werden.",
  },
];

function FAQAccordionItem({ item }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="flex w-full items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium pr-4">{item.question}</span>
        <ChevronDown
          className={`h-4 w-4 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export function HomepageFAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom max-w-3xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">Häufige Fragen zu CE-Pilot</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Antworten auf die wichtigsten Fragen zur CE-Kennzeichnung und zur
              Software.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-3">
            {faqItems.map((item, i) => (
              <FAQAccordionItem key={i} item={item} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export { faqItems };
