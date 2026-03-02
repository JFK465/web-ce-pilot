"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

interface NavDropdownConfig {
  label: string;
  items: DropdownItem[];
}

function DropdownMenu({ dropdown }: { dropdown: NavDropdownConfig }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted/50">
        {dropdown.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          <div className="absolute left-0 right-0 h-2" />
          <div className="absolute left-0 top-full pt-2 w-64 z-50">
            <div className="bg-white rounded-lg shadow-lg border border-border p-2">
              {dropdown.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-md text-sm hover:bg-muted transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-medium text-foreground">
                    {item.name}
                  </span>
                  {item.description && (
                    <span className="block text-xs text-muted-foreground mt-0.5">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const navDropdowns: NavDropdownConfig[] = [
  {
    label: "Produkt",
    items: [
      {
        name: "Funktionen",
        href: "/funktionen",
        description: "Alle Features im Überblick",
      },
      {
        name: "CE-Kennzeichnung Software",
        href: "/ce-kennzeichnung-software",
        description: "Software Landing Page",
      },
      {
        name: "DoP-Pflichtcheck",
        href: "/tools/dop-pflichtcheck",
        description: "Kostenloser Online-Check",
      },
      {
        name: "CE-Kennzeichnungs-Check",
        href: "/tools/ce-kennzeichnung-check",
        description: "CE-Prüfung online",
      },
    ],
  },
  {
    label: "Branchen",
    items: [
      {
        name: "Stahlbau & Metallbau",
        href: "/stahlbau-metallbau",
        description: "EN 1090-1 Leistungserklärungen",
      },
      {
        name: "Betonfertigteile",
        href: "/betonfertigteile",
        description: "DoP nach EN 13369",
      },
      {
        name: "Fenster & Türen",
        href: "/fenster-tueren",
        description: "CE nach EN 14351-1",
      },
      {
        name: "Fassadenbau",
        href: "/fassadenbau",
        description: "DoP Vorhangfassaden",
      },
      {
        name: "Allgemeine Bauprodukte",
        href: "/bauprodukte-allgemein",
        description: "Alle Produktgruppen",
      },
    ],
  },
  {
    label: "Wissen",
    items: [
      {
        name: "Bauproduktenverordnung CPR",
        href: "/wissen/bauproduktenverordnung-cpr",
        description: "CPR 305/2011 erklärt",
      },
      {
        name: "BauPVO 2024",
        href: "/wissen/baupvo-2024",
        description: "Neue Regelungen ab Jan. 2026",
      },
      {
        name: "Leistungserklärung (DoP)",
        href: "/wissen/leistungserklaerung-dop",
        description: "Pflichtangaben nach CPR",
      },
      {
        name: "EN 1090 CE-Kennzeichnung",
        href: "/wissen/en-1090-ce-kennzeichnung",
        description: "Für Stahlbau-Betriebe",
      },
      {
        name: "WPK / FPC-Zertifikat",
        href: "/wissen/wpk-fpc-zertifikat",
        description: "Ablauf und Überwachung",
      },
      {
        name: "Marktüberwachung",
        href: "/wissen/marktueberwachung-bauprodukte",
        description: "Behördliche Kontrollen",
      },
      { name: "Blog", href: "/blog", description: "Aktuelle Artikel & Guides" },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image
            src="/logo-icon.svg"
            alt="CE-Pilot Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-foreground">CE-Pilot</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navDropdowns.map((dropdown) => (
            <DropdownMenu key={dropdown.label} dropdown={dropdown} />
          ))}
          <Link
            href="/preise"
            className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
          >
            Preise
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://app.ce-pilot.de"
            className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-md border border-transparent hover:border-border"
          >
            Anmelden
          </Link>
          <Link
            href="/ce-kennzeichnung-software#beta-anmeldung"
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Kostenlos testen
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Navigation öffnen"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background absolute top-16 left-0 right-0 bottom-0 overflow-y-auto min-h-screen z-50">
          <div className="container-custom py-4 space-y-2">
            {navDropdowns.map((dropdown) => (
              <div key={dropdown.label}>
                <button
                  className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === dropdown.label ? null : dropdown.label,
                    )
                  }
                >
                  {dropdown.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileExpanded === dropdown.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === dropdown.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/preise"
              className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Preise
            </Link>
            <div className="pt-4 border-t space-y-2">
              <Link
                href="https://app.ce-pilot.de"
                className="block w-full text-center px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Anmelden
              </Link>
              <Link
                href="/ce-kennzeichnung-software#beta-anmeldung"
                className="block w-full text-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Kostenlos testen
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
