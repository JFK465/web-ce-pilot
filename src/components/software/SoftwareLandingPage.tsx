"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  AlertTriangle,
  FileText,
  Bell,
  Download,
  Check,
  ArrowRight,
  Shield,
  Lock,
  MapPin,
  Cloud,
  Layers,
  RefreshCw,
  Search,
  FileCheck,
  ClipboardCheck,
  ChevronRight,
  Zap,
} from "lucide-react";

const betaSchema = z.object({
  company: z.string().min(1, "Firma ist erforderlich"),
  name: z.string().min(2, "Name ist erforderlich"),
  email: z.string().email("Gültige E-Mail-Adresse eingeben"),
});

type BetaForm = z.infer<typeof betaSchema>;

// ---- HERO SECTION ----
function HeroSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Beta Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-primary" />
              </span>
              BETA-PHASE – Jetzt kostenlos testen
            </div>
          </motion.div>

          {/* Urgency */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm">
              <AlertTriangle className="h-4 w-4" />
              Neue BauPVO 2024/3110 gilt seit 8. Januar 2026 — Bußgeld bis
              100.000 EUR
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="heading-hero text-balance mb-6"
          >
            CE-Kennzeichnung Software —{" "}
            <span className="text-primary">
              Leistungserklärungen automatisch
            </span>{" "}
            nach BauPVO 2024
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            CE-Pilot automatisiert Ihre Leistungserklärungen (DoPs) nach CPR
            305/2011 und BauPVO 2024/3110. DoP-Generator,
            WPK-Zertifikat-Tracking und CE-Label-PDF-Export — für
            Bauprodukt-Hersteller im DACH-Raum.
          </motion.p>

          {/* Trust Chips */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            {[
              "BauPVO 2024 konform",
              "DSGVO-konform",
              "Made in Germany",
              "Keine Kreditkarte",
            ].map((chip) => (
              <div
                key={chip}
                className="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <Check className="h-3.5 w-3.5 text-primary" />
                {chip}
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#beta-anmeldung"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-base shadow-lg shadow-primary/25"
            >
              Kostenlos Beta-Zugang sichern
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#module"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition-colors text-base"
            >
              Module ansehen
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- PROBLEM SECTION ----
function ProblemSection() {
  const pains = [
    {
      icon: FileText,
      title: "Word-Chaos bei der DoP-Erstellung",
      description:
        "Jedes Bauprodukt braucht eine eigene Leistungserklärung. Bei 20 Produktvarianten entstehen 20 Word-Dateien — mit inkonsistenten Versionen und falschen Pflichtfeldern.",
    },
    {
      icon: AlertTriangle,
      title: "Fehlerhafte CE = Bußgeld bis 100.000 EUR",
      description:
        "Fehlerhafte CE-Kennzeichnungen oder fehlende DoPs führen zum Inverkehrbringungsverbot. Marktüberwachungsbehörden prüfen zunehmend schärfer.",
    },
    {
      icon: RefreshCw,
      title: "Neue BauPVO 2024 überfordert KMU",
      description:
        "Seit 8. Januar 2026 gilt BauPVO 2024/3110 mit kombinierter Erklärung, GWP-Feldern und neuen Pflichtangaben. Die meisten Betriebe haben noch keine angepassten DoPs.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="heading-section">
              Die Herausforderung bei der CE-Kennzeichnung
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Manuelle CE-Prozesse sind für Bauprodukt-Hersteller teuer,
              fehleranfällig und nicht skalierbar.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pains.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeInUp}
                className="border border-border rounded-xl p-6 bg-card"
              >
                <p.icon className="h-8 w-8 text-destructive mb-4" />
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- SOLUTION / USP SECTION ----
function SolutionSection() {
  const usps = [
    {
      icon: FileText,
      title: "DoP in 20 Minuten",
      description: "Alle Pflichtfelder vorausgefüllt — kein Norm-Studium mehr.",
    },
    {
      icon: Bell,
      title: "WPK-Ablauf-Warnungen",
      description: "Automatisch 30/60/90 Tage vor Zertifikatsablauf erinnert.",
    },
    {
      icon: Download,
      title: "CE-Label-PDF-Export",
      description: "Fertige, druckbereite CE-Kennzeichnungs-PDFs auf Klick.",
    },
    {
      icon: Layers,
      title: "DoP-Vorlagen & Kopieren",
      description:
        "Eine Vorlage, unbegrenzte Varianten — konsistent und schnell.",
    },
    {
      icon: Search,
      title: "DoP-Vollständigkeitscheck",
      description: "Prüfen Sie Ihre DoP bevor die Marktüberwachung es tut.",
    },
    {
      icon: RefreshCw,
      title: "BauPVO 2024 integriert",
      description: "GWP-Felder und kombinierte Erklärung bereits im System.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="heading-section">Die Lösung: CE-Pilot</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              CE-Pilot automatisiert den gesamten CE-Kennzeichnungsprozess —
              normkonform nach BauPVO 2024/3110.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usps.map((u) => (
              <motion.div
                key={u.title}
                variants={fadeInUp}
                className="flex gap-4 bg-card border border-border rounded-xl p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <u.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{u.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {u.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- KILLER DEMO QUOTE ----
function KillerQuoteSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container-custom text-center max-w-3xl mx-auto">
        <p className="text-xl md:text-2xl font-medium italic leading-relaxed">
          &bdquo;Von der ersten Produktanlage bis zum fertigen CE-Label — alles
          in einer Plattform. Ohne Normenstudium, ohne Word-Chaos, ohne
          Bußgeld-Risiko.&ldquo;
        </p>
        <p className="mt-4 text-primary-foreground/70 text-sm">
          CE-Pilot – Produktversprechen
        </p>
      </div>
    </section>
  );
}

// ---- MODULE SECTION ----
function ModuleSection() {
  const modules = [
    {
      icon: FileText,
      name: "DoP-Generator",
      description:
        "Normkonforme Leistungserklärungen nach CPR Anhang III und BauPVO 2024/3110. GWP-Felder und kombinierte Erklärung bereits integriert.",
    },
    {
      icon: Bell,
      name: "WPK-Tracking",
      description:
        "Automatische Erinnerungen 30, 60 und 90 Tage vor dem Ablauf Ihres FPC-Zertifikats der Notifizierten Stelle.",
    },
    {
      icon: Download,
      name: "CE-Label-Export",
      description:
        "Fertige CE-Kennzeichnungs-PDFs mit allen Pflichtangaben nach Anhang IV CPR — direkt druckbereit.",
    },
    {
      icon: Layers,
      name: "Produkt-Vorlagen",
      description:
        "DoP-Vorlagen erstellen, kopieren und für neue Produktvarianten anpassen. Versioniert und nachvollziehbar.",
    },
    {
      icon: Search,
      name: "DoP-Vollständigkeitscheck",
      description:
        "Automatische Prüfung auf fehlende Pflichtfelder nach CPR und BauPVO 2024/3110 — mit konkreten Handlungsempfehlungen.",
    },
    {
      icon: ClipboardCheck,
      name: "Normen-Assistent",
      description:
        "Wählen Sie Ihre hEN (EN 1090-1, EN 13369, EN 14351-1 etc.) — CE-Pilot passt die Eingabemaske automatisch an.",
    },
    {
      icon: FileCheck,
      name: "Digitaler Produktpass",
      description:
        "Produktdaten strukturiert speichern für die kommenden DPP-Anforderungen der EU (ESPR-Verordnung).",
    },
    {
      icon: RefreshCw,
      name: "BauPVO 2024 Update-Assistent",
      description:
        "Welche Ihrer bestehenden DoPs müssen angepasst werden? CE-Pilot zeigt es Ihnen und führt Sie durch die Änderungen.",
    },
    {
      icon: Zap,
      name: "Schnell-Onboarding",
      description:
        "In 5 Minuten eingerichtet. Kein IT-Aufwand, keine Installation. Browser öffnen und loslegen.",
    },
  ];

  return (
    <section id="module" className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="heading-section">Module & Funktionen</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              CE-Pilot deckt den gesamten CE-Kennzeichnungsprozess ab — von der
              ersten DoP bis zur Ablaufüberwachung.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <motion.div
                key={mod.name}
                variants={fadeInUp}
                className="bg-card border border-border rounded-xl p-6"
              >
                <mod.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{mod.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {mod.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- ICP SECTION ----
function ICPSection() {
  const icps = [
    {
      icon: FileCheck,
      title: "Stahlbau- und Metallbaubetriebe",
      tasks: "EN-1090-1-zertifizierte Betriebe mit mehreren Produktvarianten",
      benefit:
        "DoP-Vorlagen nach EN 1090-1, WPK-Überwachung, EXC-Klassen-Assistent",
    },
    {
      icon: Layers,
      title: "Betonfertigteilhersteller",
      tasks: "Hersteller nach EN 13369 mit regelmäßigen WPK-Audits",
      benefit: "DoP-Generator nach EN 13369, Zertifikats-Dashboard, PDF-Export",
    },
    {
      icon: Shield,
      title: "Fenster-, Türen- & Fassadenhersteller",
      tasks:
        "Hersteller nach EN 14351-1 und EN 13830 für den europäischen Markt",
      benefit:
        "Mehrsprachige DoPs geplant, EN-14351-1-Vorlage, CE-Label-Export",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="heading-section">Für wen ist CE-Pilot?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {icps.map((icp) => (
              <motion.div
                key={icp.title}
                variants={fadeInUp}
                className="bg-card border border-border rounded-xl p-6"
              >
                <icp.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{icp.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {icp.tasks}
                </p>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{icp.benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- PRICING SECTION ----
function PricingSection() {
  const tiers = [
    {
      name: "Starter",
      price: 49,
      features: [
        "10 Produkte / DoPs",
        "DoP-Generator BauPVO 2024",
        "CE-Label-PDF-Export",
        "WPK-Tracking (1)",
        "E-Mail-Support",
      ],
    },
    {
      name: "Professional",
      price: 99,
      features: [
        "Unbegrenzte Produkte",
        "DoP-Vorlagen & Kopieren",
        "Versionierung",
        "WPK-Dashboard",
        "DoP-Vollständigkeitscheck",
        "Prioritäts-Support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: 199,
      features: [
        "Alles aus Professional",
        "Mehrere Standorte",
        "API-Zugang",
        "Account Manager",
        "SLA-Garantie",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="heading-section">Transparente Preise</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Während der Beta-Phase sind alle Pläne kostenlos. Kein
              Kreditkarten-Pflicht.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeInUp}
                className={`relative bg-card rounded-xl border p-6 flex flex-col ${tier.highlighted ? "border-primary shadow-lg shadow-primary/10" : "border-border"}`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Beliebt
                    </span>
                  </div>
                )}
                <div className="inline-flex self-start px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded mb-4">
                  BETA: Jetzt 0 EUR
                </div>
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold">0 €</span>
                  <span className="text-muted-foreground text-sm">/Monat</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="line-through">{tier.price} €/Monat</span>{" "}
                  nach Beta
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#beta-anmeldung"
                  className={`w-full text-center px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border hover:bg-muted"
                  }`}
                >
                  Beta-Zugang sichern
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- TRUST SECTION ----
function TrustSection() {
  const trust = [
    {
      icon: Cloud,
      title: "Cloud-basiert",
      description:
        "Keine Installation erforderlich. Überall nutzbar im Browser. Updates automatisch.",
    },
    {
      icon: Shield,
      title: "DSGVO-konform",
      description:
        "Deutsche Rechenzentren. Keine Datenweitergabe. Jederzeit exportierbar und löschbar.",
    },
    {
      icon: Lock,
      title: "256-Bit SSL",
      description:
        "Alle Verbindungen SSL-verschlüsselt. Sicherer Zugang für alle Nutzer.",
    },
    {
      icon: MapPin,
      title: "Made in Germany",
      description:
        "Entwickelt in Deutschland. Deutschsprachiger Support. ISO 27001 konformer Infrastruktur-Betrieb.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="heading-section">Sicherheit & Vertrauen</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trust.map((t) => (
              <motion.div
                key={t.title}
                variants={fadeInUp}
                className="text-center bg-card border border-border rounded-xl p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-4">
                  <t.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---- BETA REGISTRATION FORM ----
function BetaRegistrationSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BetaForm>({ resolver: zodResolver(betaSchema) });

  const onSubmit = async (data: BetaForm) => {
    try {
      await fetch("/api/beta-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="beta-anmeldung"
      className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Incentives */}
          <div>
            <h2 className="heading-section mb-4">Jetzt Beta-Zugang sichern</h2>
            <p className="text-muted-foreground mb-8">
              Werden Sie einer der ersten CE-Pilot Beta-Nutzer — kostenlos,
              unverbindlich und ohne Kreditkarte.
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: "Kostenloser Zugang",
                  desc: "Alle Funktionen während der gesamten Beta-Phase gratis.",
                },
                {
                  title: "Direkter Einfluss",
                  desc: "Ihre Feature-Wünsche fließen direkt in die Entwicklung ein.",
                },
                {
                  title: "Bevorzugter Support",
                  desc: "Beta-Nutzer erhalten priorisierten deutschen Support.",
                },
                {
                  title: "Dauerhafter Rabatt",
                  desc: "Beta-Nutzer erhalten nach der Beta einen Treue-Rabatt.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-sm">{item.title}</span>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 mb-4">
                  <Check className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Willkommen im Beta-Programm!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Wir haben Ihre Registrierung erhalten und melden uns in Kürze
                  mit Ihren Zugangsdaten.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <h3 className="text-lg font-bold mb-6">
                  Kostenlos registrieren
                </h3>
                <div>
                  <label
                    className="block text-sm font-medium mb-1.5"
                    htmlFor="beta-company"
                  >
                    Firma *
                  </label>
                  <input
                    id="beta-company"
                    {...register("company")}
                    placeholder="Musterfirma GmbH"
                    className="w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  {errors.company && (
                    <p className="text-xs text-destructive mt-1">
                      {errors.company.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1.5"
                    htmlFor="beta-name"
                  >
                    Ihr Name *
                  </label>
                  <input
                    id="beta-name"
                    {...register("name")}
                    placeholder="Max Mustermann"
                    className="w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1.5"
                    htmlFor="beta-email"
                  >
                    E-Mail *
                  </label>
                  <input
                    id="beta-email"
                    type="email"
                    {...register("email")}
                    placeholder="max@firma.de"
                    className="w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting
                    ? "Wird registriert..."
                    : "Kostenlos registrieren"}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Kein Spam. Abmeldung jederzeit möglich. Gemäß{" "}
                  <Link href="/datenschutz" className="underline">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- CROSS LINKS SECTION ----
function CrossLinksSection() {
  const links = [
    {
      href: "/stahlbau-metallbau",
      label: "Stahlbau & Metallbau",
      icon: ChevronRight,
    },
    {
      href: "/betonfertigteile",
      label: "Betonfertigteile",
      icon: ChevronRight,
    },
    {
      href: "/wissen/baupvo-2024",
      label: "BauPVO 2024 Wissen",
      icon: ChevronRight,
    },
    {
      href: "/wissen/leistungserklärung-dop",
      label: "Leistungserklärung erklärt",
      icon: ChevronRight,
    },
    {
      href: "/tools/dop-pflichtcheck",
      label: "DoP-Pflichtcheck",
      icon: ChevronRight,
    },
    {
      href: "/blog/ce-kennzeichnung-fehler",
      label: "CE-Fehler vermeiden",
      icon: ChevronRight,
    },
    {
      href: "/tools/wpk-countdown",
      label: "WPK-Countdown",
      icon: ChevronRight,
    },
    { href: "/preise", label: "Alle Preise ansehen", icon: ChevronRight },
  ];

  return (
    <section className="py-12 bg-muted/20">
      <div className="container-custom">
        <h2 className="text-lg font-semibold text-center mb-6 text-muted-foreground">
          Mehr zu CE-Pilot und CE-Kennzeichnung
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 p-3 bg-card border border-border rounded-lg text-sm hover:border-primary hover:text-primary transition-colors"
            >
              <link.icon className="h-3.5 w-3.5 flex-shrink-0" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- FINAL CTA ----
function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-custom text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Starten Sie jetzt — kostenlos und unverbindlich
        </h2>
        <p className="text-primary-foreground/80 mb-8">
          CE-Kennzeichnung normkonform, schnell und ohne Bußgeld-Risiko. Während
          der Beta-Phase komplett kostenlos.
        </p>
        <a
          href="#beta-anmeldung"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
        >
          Beta-Zugang sichern
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

// ---- MAIN COMPONENT ----
export function SoftwareLandingPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <KillerQuoteSection />
      <ModuleSection />
      <ICPSection />
      <PricingSection />
      <TrustSection />
      <BetaRegistrationSection />
      <CrossLinksSection />
      <FinalCTASection />
    </>
  );
}
