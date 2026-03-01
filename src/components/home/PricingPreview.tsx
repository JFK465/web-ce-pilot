"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "49",
    betaPrice: "0",
    description: "Für kleine Betriebe mit wenigen Produkten",
    features: [
      "Bis zu 10 Produkte",
      "DoP-Generator (CPR/BauPVO 2024)",
      "CE-Label-PDF-Export",
      "WPK-Ablauf-Erinnerungen",
      "E-Mail-Support",
    ],
    cta: "Beta-Zugang sichern",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "99",
    betaPrice: "0",
    description: "Für wachsende Hersteller mit vielen Produkten",
    features: [
      "Unbegrenzte Produkte",
      "DoP-Vorlagen & Kopier-Funktion",
      "Versionierung & Änderungs-Log",
      "WPK-Dashboard mit Frühwarnung",
      "DoP-Vollständigkeitscheck",
      "Prioritäts-Support",
    ],
    cta: "Beta-Zugang sichern",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "199",
    betaPrice: "0",
    description: "Für Konzerne und Systemhersteller",
    features: [
      "Alles aus Professional",
      "Mehrere Standorte / Werke",
      "API-Zugang",
      "Dedizierter Account Manager",
      "SLA-Garantie",
      "On-Premise-Option auf Anfrage",
    ],
    cta: "Beta-Zugang sichern",
    highlighted: false,
  },
];

export function PricingPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-primary" />
              </span>
              BETA-PHASE — Aktuell kostenlos
            </div>
            <h2 className="heading-section">Transparente Preise für jeden Betrieb</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Während der Beta-Phase erhalten alle Registrierten kostenlosen Zugang zu allen Funktionen.
              Keine Kreditkarte erforderlich.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeInUp}
                className={`relative bg-card rounded-xl border p-8 flex flex-col ${
                  tier.highlighted
                    ? "border-primary shadow-lg shadow-primary/10 scale-105"
                    : "border-border"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Beliebt
                    </span>
                  </div>
                )}

                {/* Beta Badge */}
                <div className="inline-flex self-start items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded mb-4">
                  BETA: Jetzt 0 EUR
                </div>

                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">0 €</span>
                    <span className="text-muted-foreground text-sm">/Monat</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    <span className="line-through">{tier.price} €/Monat</span>
                    {" "}nach Beta
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/ce-kennzeichnung-software#beta-anmeldung"
                  className={`w-full text-center px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border hover:bg-muted"
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link href="/preise" className="text-sm text-primary hover:underline">
              Alle Preisdetails ansehen →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
