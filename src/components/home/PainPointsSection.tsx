"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FileX, AlertCircle, Clock, Euro, RefreshCw, Search } from "lucide-react";

const pains = [
  {
    icon: FileX,
    title: "Word-Chaos bei der DoP-Erstellung",
    description: "Jedes Bauprodukt braucht eine eigene Leistungserklärung. Bei 20 Produktvarianten entstehen 20 Word-Dateien — mit inkonsistenten Versionen, falschen Pflichtfeldern und hohem Fehlerrisiko.",
  },
  {
    icon: AlertCircle,
    title: "Bußgelder bis 100.000 EUR",
    description: "Fehlerhafte CE-Kennzeichnungen oder fehlende DoPs führen zum Inverkehrbringungsverbot und Bußgeldern bis 100.000 EUR. Marktüberwachungsbehörden prüfen zunehmend aktiv.",
  },
  {
    icon: Clock,
    title: "Neue BauPVO 2024 überfordert KMU",
    description: "Seit 8. Januar 2026 gilt die neue BauPVO 2024/3110 mit kombinierten Erklärungen, GWP-Feldern und geänderten Pflichtangaben. Die meisten Betriebe haben noch keine angepassten DoPs.",
  },
  {
    icon: RefreshCw,
    title: "WPK-Zertifikat läuft ab — niemand merkt es",
    description: "Ein abgelaufenes FPC-Zertifikat bedeutet sofortiges Inverkehrbringungsverbot für alle CE-Produkte. Ohne systematische Überwachung werden Ablaufdaten oft erst zu spät bemerkt.",
  },
  {
    icon: Search,
    title: "Marktüberwachung prüft schärfer",
    description: "Die Marktüberwachungsbehörden der Bundesländer kontrollieren zunehmend systematisch. Eine fehlende oder falsche DoP führt direkt zu Beanstandungen und Betriebsstörungen.",
  },
  {
    icon: Euro,
    title: "Stundenlanger Zeitaufwand pro DoP",
    description: "Manuelle Erstellung einer DoP nach CPR Anhang III dauert 2-4 Stunden — inklusive Normen-Recherche, Pflichtfeld-Prüfung und Layout. Dieser Aufwand ist bei vielen Produkten nicht skalierbar.",
  },
];

export function PainPointsSection() {
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
            <h2 className="heading-section">Kennen Sie das?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              CE-Kennzeichnung ist für Bauprodukt-Hersteller Pflicht — aber der manuelle Prozess ist fehleranfällig, zeitaufwändig und teuer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pains.map((pain) => (
              <motion.div
                key={pain.title}
                variants={fadeInUp}
                className="border border-border rounded-xl p-6 bg-card hover:shadow-md transition-shadow"
              >
                <pain.icon className="h-8 w-8 text-destructive mb-4" />
                <h3 className="font-semibold text-lg mb-2">{pain.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pain.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
