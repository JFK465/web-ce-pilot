"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FileText, Bell, Download, Shield, RefreshCw, Layers, Globe, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "DoP-Generator",
    description: "Leistungserklärungen nach CPR Anhang III und BauPVO 2024/3110. Alle Pflichtfelder vorausgefüllt — inklusive GWP-Angaben und kombinierter Erklärung.",
  },
  {
    icon: Bell,
    title: "WPK-Ablauf-Warnungen",
    description: "Automatische E-Mail-Erinnerungen 30, 60 und 90 Tage vor dem Ablauf Ihres FPC-Zertifikats der Notifizierten Stelle.",
  },
  {
    icon: Download,
    title: "CE-Label-PDF-Export",
    description: "Fertige CE-Kennzeichnungs-PDFs mit allen Pflichtangaben nach Anhang IV CPR — direkt druckbereit aus CE-Pilot herunterladen.",
  },
  {
    icon: Layers,
    title: "Produkt-Vorlagen",
    description: "Erstellen Sie Produktvorlagen und kopieren Sie bestehende DoPs für neue Varianten. Änderungen werden versioniert und nachvollziehbar dokumentiert.",
  },
  {
    icon: RefreshCw,
    title: "BauPVO 2024 ready",
    description: "Neue Pflichtfelder der Verordnung (EU) 2024/3110 bereits integriert: GWP-Angaben, kombinierte Leistungs- und Konformitätserklärung, aktualisierte Anhänge.",
  },
  {
    icon: Globe,
    title: "Mehrsprachige DoPs",
    description: "Leistungserklärungen in allen EU-Sprachen — geplant für die nächste Version. Ideal für Exporteure in den europäischen Markt.",
  },
  {
    icon: Shield,
    title: "Marktüberwachung-Check",
    description: "Prüfen Sie mit dem integrierten DoP-Vollständigkeitscheck, ob Ihre CE-Kennzeichnung einer Marktüberwachungskontrolle standhält.",
  },
  {
    icon: Lock,
    title: "DSGVO-konforme Datenspeicherung",
    description: "Alle Daten werden ausschließlich in deutschen Rechenzentren gespeichert. ISO 27001 zertifizierter Infrastruktur-Betrieb. 256-Bit SSL-Verschlüsselung.",
  },
  {
    icon: Zap,
    title: "In 5 Minuten eingerichtet",
    description: "Keine Installation, kein IT-Aufwand. Browser öffnen, Produkt anlegen, DoP generieren. Sofort einsatzbereit ohne Schulung.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="heading-section">Alles für normkonforme CE-Kennzeichnung</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              CE-Pilot deckt den gesamten Prozess ab — von der ersten DoP bis zur Ablaufüberwachung.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow group"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
