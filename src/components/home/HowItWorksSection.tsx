"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: 1,
    title: "Produkt anlegen",
    description: "Tragen Sie Ihr Bauprodukt ein: Produkttyp, anwendbare harmonisierte Norm (hEN), AVCP-System und Notifizierte Stelle. CE-Pilot führt Sie Schritt für Schritt durch die Pflichtfelder nach CPR Anhang III.",
  },
  {
    number: 2,
    title: "DoP automatisch generieren",
    description: "CE-Pilot erstellt die Leistungserklärung vollständig ausgefüllt — inklusive aller Pflichtangaben nach BauPVO 2024/3110. GWP-Felder und kombinierte Erklärung bereits integriert. Kein Norm-Lesen erforderlich.",
  },
  {
    number: 3,
    title: "CE-Label als PDF exportieren",
    description: "Laden Sie die fertige DoP als PDF herunter und generieren Sie direkt das CE-Kennzeichen mit allen Pflichtangaben nach Anhang IV CPR. Produktnummer, NoBo-Nummer und Leistungsmerkmale bereits vorausgefüllt.",
  },
  {
    number: 4,
    title: "WPK-Ablauf automatisch überwachen",
    description: "CE-Pilot überwacht Ihr FPC-Zertifikat der Notifizierten Stelle und sendet automatische Erinnerungen 30, 60 und 90 Tage vor dem Ablaufdatum — damit Ihr Inverkehrbringungs-Recht immer aktuell bleibt.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">In 4 Schritten zur normkonformen CE-Kennzeichnung</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Kein Normenstudium, kein Word-Chaos, kein Bußgeld-Risiko mehr.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <motion.div key={step.number} variants={fadeInUp} className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4 mx-auto md:mx-0">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center md:text-left">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-center md:text-left">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
