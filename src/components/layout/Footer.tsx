"use client";

import Link from "next/link";
import { useState } from "react";
import { FileCheck, Shield, MapPin } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubscribed(true);
    } catch {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter */}
      <div className="border-b border-background/10">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-background">BauPVO 2024 Updates</h3>
              <p className="text-sm text-background/70 mt-1">
                Aktuelle Infos zu BauPVO 2024, CE-Kennzeichnung und Norm-Änderungen.
              </p>
            </div>
            {subscribed ? (
              <p className="text-sm text-accent font-medium">
                Danke! Sie erhalten unsere Updates.
              </p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ihre@email.de"
                  required
                  className="flex-1 md:w-64 px-3 py-2 text-sm rounded-md bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Anmelden
                </button>
              </form>
            )}
          </div>
          <p className="text-xs text-background/50 mt-3">
            Kein Spam. Abmeldung jederzeit möglich. Datenschutz gemäß DSGVO.
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Produkt */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4">Produkt</h4>
            <ul className="space-y-2">
              {[
                { name: "Funktionen", href: "/funktionen" },
                { name: "Preise", href: "/preise" },
                { name: "CE-Software", href: "/ce-kennzeichnung-software" },
                { name: "DoP-Pflichtcheck", href: "/tools/dop-pflichtcheck" },
                { name: "CE-Kennzeichnungs-Check", href: "/tools/ce-kennzeichnung-check" },
                { name: "WPK-Countdown", href: "/tools/wpk-countdown" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressourcen */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4">Ressourcen</h4>
            <ul className="space-y-2">
              {[
                { name: "Wissen & Ratgeber", href: "/wissen" },
                { name: "BauPVO 2024", href: "/wissen/baupvo-2024" },
                { name: "Leistungserklärung", href: "/wissen/leistungserklaerung-dop" },
                { name: "EN 1090 CE", href: "/wissen/en-1090-ce-kennzeichnung" },
                { name: "WPK / FPC-Zertifikat", href: "/wissen/wpk-fpc-zertifikat" },
                { name: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branchen */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4">Branchen</h4>
            <ul className="space-y-2">
              {[
                { name: "Stahlbau & Metallbau", href: "/stahlbau-metallbau" },
                { name: "Betonfertigteile", href: "/betonfertigteile" },
                { name: "Fenster & Türen", href: "/fenster-tueren" },
                { name: "Fassadenbau", href: "/fassadenbau" },
                { name: "Alle Bauprodukte", href: "/bauprodukte-allgemein" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              {[
                { name: "Kontakt", href: "/kontakt" },
                { name: "Datenschutz", href: "/datenschutz" },
                { name: "Impressum", href: "/impressum" },
                { name: "AGB", href: "/agb" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground">
              <FileCheck className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold text-background">CE-Pilot</span>
            <span className="text-sm text-background/50">
              © 2026 CE-Pilot. Alle Rechte vorbehalten.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-background/50">
              <Shield className="h-3.5 w-3.5" />
              DSGVO-konform
            </div>
            <div className="flex items-center gap-1.5 text-xs text-background/50">
              <MapPin className="h-3.5 w-3.5" />
              Made in Germany
            </div>
            <div className="text-xs text-background/50">
              🔒 256-Bit SSL
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
