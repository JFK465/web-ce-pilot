"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">
              <AlertTriangle className="h-4 w-4" />
              BauPVO 2024/3110 gilt seit 8. Januar 2026
            </div>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
            Sind Ihre Leistungserklärungen BauPVO-2024-konform?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/80 mb-8">
            Prüfen Sie jetzt kostenlos mit dem DoP-Pflichtcheck oder sichern Sie sich direkt Ihren
            Beta-Zugang zu CE-Pilot — kostenlos und ohne Kreditkarte.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ce-kennzeichnung-software#beta-anmeldung"
              className="flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors text-base"
            >
              Kostenlos Beta-Zugang sichern
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/tools/dop-pflichtcheck"
              className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-base"
            >
              DoP-Pflichtcheck starten
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
