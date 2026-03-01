"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Mail, Clock, MessageSquare, Check } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Gültige E-Mail-Adresse eingeben"),
  company: z.string().optional(),
  branche: z.string().optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch("/api/contact", {
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Kontakt-Info */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-medium text-sm">E-Mail</div>
            <a
              href="mailto:hallo@ce-pilot.de"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              hallo@ce-pilot.de
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-medium text-sm">Antwortzeit</div>
            <div className="text-sm text-muted-foreground">2 Werktage</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MessageSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-medium text-sm">Beta-Registrierung</div>
            <Link
              href="/ce-kennzeichnung-software#beta-anmeldung"
              className="text-sm text-primary hover:underline"
            >
              Kostenlos Beta-Zugang sichern →
            </Link>
          </div>
        </div>

        {/* Pre-Sales FAQ */}
        <div className="mt-8 pt-8 border-t border-border">
          <h3 className="font-semibold mb-4 text-sm">
            Häufige Pre-Sales-Fragen
          </h3>
          <div className="space-y-3">
            {[
              {
                q: "Ist die Beta wirklich kostenlos?",
                a: "Ja, kein Kreditkarten-Pflicht.",
              },
              {
                q: "Welche Normen werden unterstützt?",
                a: "EN 1090-1, EN 13369, EN 14351-1, EN 13830 und weitere.",
              },
              {
                q: "Wo werden meine Daten gespeichert?",
                a: "Ausschließlich in deutschen Rechenzentren.",
              },
            ].map((item) => (
              <div key={item.q}>
                <div className="text-xs font-medium mb-0.5">{item.q}</div>
                <div className="text-xs text-muted-foreground">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formular */}
      <div className="lg:col-span-2">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 mb-4">
              <Check className="h-7 w-7 text-green-600" />
            </div>
            <h2 className="text-xl font-bold mb-2">
              Vielen Dank für Ihre Nachricht!
            </h2>
            <p className="text-muted-foreground">
              Wir melden uns innerhalb von 2 Werktagen bei Ihnen.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-sm font-medium mb-1.5"
                  htmlFor="name"
                >
                  Name *
                </label>
                <input
                  id="name"
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
                  htmlFor="email"
                >
                  E-Mail *
                </label>
                <input
                  id="email"
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
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-sm font-medium mb-1.5"
                  htmlFor="company"
                >
                  Firma
                </label>
                <input
                  id="company"
                  {...register("company")}
                  placeholder="Musterfirma GmbH"
                  className="w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1.5"
                  htmlFor="branche"
                >
                  Branche
                </label>
                <select
                  id="branche"
                  {...register("branche")}
                  className="w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Bitte wählen</option>
                  <option value="stahlbau">Stahlbau / Metallbau</option>
                  <option value="betonfertigteile">Betonfertigteile</option>
                  <option value="fenster">Fenster & Türen</option>
                  <option value="fassaden">Fassadenbau</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1.5"
                htmlFor="message"
              >
                Nachricht *
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={5}
                placeholder="Ihre Frage oder Ihr Anliegen..."
                className="w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              {errors.message && (
                <p className="text-xs text-destructive mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
            </button>
            <p className="text-xs text-muted-foreground">
              Mit dem Absenden stimmen Sie unserer{" "}
              <Link
                href="/datenschutz"
                className="underline hover:text-primary"
              >
                Datenschutzerklärung
              </Link>{" "}
              zu. Keine Weitergabe an Dritte.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
