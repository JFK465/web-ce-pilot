"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Urgency Badge */}
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
              <AlertTriangle className="h-4 w-4" />
              Neue BauPVO 2024/3110 seit 8. Januar 2026 gültig
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeInUp}
            className="heading-hero text-balance mb-6"
          >
            CE-Kennzeichnung und{" "}
            <span className="text-primary">Leistungserklärung</span>
            {" "}— normkonform in 20 Minuten
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance"
          >
            CE-Pilot automatisiert Ihre Leistungserklärungen nach BauPVO 2024/3110 und CPR 305/2011.
            DoP-Generator, WPK-Zertifikat-Tracking und CE-Label-Export — ohne Word-Chaos und ohne Bußgeld-Risiko.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link
              href="/ce-kennzeichnung-software#beta-anmeldung"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-base shadow-lg shadow-primary/25"
            >
              Kostenlos Beta-Zugang sichern
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/tools/dop-pflichtcheck"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition-colors text-base"
            >
              DoP-Pflichtcheck starten
            </Link>
          </motion.div>

          {/* Trust Chips */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {[
              { icon: CheckCircle, text: "BauPVO 2024/3110 konform" },
              { icon: CheckCircle, text: "DSGVO-konform" },
              { icon: CheckCircle, text: "Made in Germany" },
              { icon: CheckCircle, text: "Keine Kreditkarte nötig" },
            ].map((chip) => (
              <div
                key={chip.text}
                className="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <chip.icon className="h-4 w-4 text-primary" />
                {chip.text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
