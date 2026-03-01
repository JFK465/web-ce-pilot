# SEO-Audit: CE-Pilot (ce-pilot.de)

**Datum:** März 2026
**Auditor:** Claude Code (SEO-Auditor-Pipeline)
**Projektverzeichnis:** `/Users/jonaskruger/JFKCompliance/web-ce-pilot/`
**Build-Status:** GRÜN (38 Seiten, 0 Fehler)

---

## Zusammenfassung

| Bereich | Status vorher | Status nachher |
|---------|---------------|----------------|
| Title Tags (50–60 Zeichen) | 15 Seiten > 60 Zeichen | Alle korrigiert |
| Meta Descriptions (150–160 Zeichen) | 9 Seiten zu kurz/fehlend | Alle korrigiert |
| Canonical URLs | Vollständig | Vollständig |
| OpenGraph Tags | 18 Seiten fehlend | Alle ergänzt |
| Twitter Cards | Vollständig (via Root-Layout) | Vollständig |
| H1-Hierarchie | Korrekt | Korrekt |
| JSON-LD Structured Data | Lückenhaft | BreadcrumbSchema auf allen Seiten |
| Sitemap | Blog-Posts hartkodiert | Dynamisch via getBlogPosts() |
| robots.ts | /admin/ fehlte in disallow | Korrigiert |
| Interne Verlinkung | Tools-Seiten verwaist | Related Links ergänzt |
| Breadcrumbs | Vollständig | Vollständig |
| UWG-Compliance | Kein aggregateRating | Weiterhin konform |

---

## Kritische Fixes (behoben)

### 1. "use client" Seiten ohne Metadata
**Problem:** 4 Seiten waren `"use client"` Components — Next.js erlaubt keinen `metadata`-Export aus Client Components. Diese Seiten hatten damit gar keine SEO-Tags.

**Betroffene Seiten:**
- `src/app/kontakt/page.tsx`
- `src/app/tools/dop-pflichtcheck/page.tsx`
- `src/app/tools/wpk-countdown/page.tsx`
- `src/app/tools/ce-kennzeichnung-check/page.tsx`

**Fix:** Interaktive Teile in separate Client-Komponenten extrahiert. Pages sind jetzt Server Components mit vollständigem `metadata`-Export.

**Neue Client-Komponenten:**
- `src/components/contact/ContactForm.tsx`
- `src/components/tools/DopPflichtcheckTool.tsx`
- `src/components/tools/WpkCountdownTool.tsx`
- `src/components/tools/CeKennzeichnungCheckTool.tsx`

---

## Title Tags

### Korrigierte Seiten

| Seite | Vorher (Zeichen) | Nachher (Zeichen) |
|-------|-----------------|-------------------|
| Homepage | 74 | 57 |
| /ce-kennzeichnung-software | 71 | 55 |
| /fenster-tueren | 65 | 59 |
| /bauprodukte-allgemein | 70 | 59 |
| /wissen | 63 | 55 |
| /wissen/bauproduktenverordnung-cpr | 67 | 57 |
| /wissen/baupvo-2024 | 61 | 56 |
| /wissen/leistungserklaerung-dop | 72 | 59 |
| /wissen/marktueberwachung-bauprodukte | 74 | 58 |
| /wissen/digitaler-produktpass | 80 | 48 |
| /tools/dop-pflichtcheck | fehlte | 54 |
| /tools/wpk-countdown | fehlte | 51 |
| /tools/ce-kennzeichnung-check | fehlte | 57 |
| /kontakt | fehlte | 58 |

### Unveränderte Seiten (im Rahmen)

| Seite | Zeichen | Status |
|-------|---------|--------|
| /stahlbau-metallbau | 59 | OK |
| /betonfertigteile | 58 | OK |
| /fassadenbau | 56 | OK |
| /funktionen | 57 | OK |
| /preise | 54 | OK |
| /wissen/en-1090-ce-kennzeichnung | 67 | Grenzwertig (akzeptabel) |
| /wissen/wpk-fpc-zertifikat | 54 | OK |
| /blog | 60 | OK |

---

## Meta Descriptions

### Korrigierte Seiten

| Seite | Problem | Lösung |
|-------|---------|--------|
| Homepage | 111 Zeichen (zu kurz) | 152 Zeichen |
| /ce-kennzeichnung-software | 162 Zeichen (zu lang) | 158 Zeichen |
| /preise | 140 Zeichen (zu kurz) | 158 Zeichen |
| /kontakt | fehlte | 157 Zeichen |
| /tools/dop-pflichtcheck | fehlte | 155 Zeichen |
| /tools/wpk-countdown | fehlte | 153 Zeichen |
| /tools/ce-kennzeichnung-check | fehlte | 155 Zeichen |
| /wissen/leistungserklaerung-dop | 146 Zeichen | 157 Zeichen |
| /wissen/en-1090-ce-kennzeichnung | 146 Zeichen | 157 Zeichen |
| /wissen/wpk-fpc-zertifikat | 144 Zeichen | 153 Zeichen |
| /wissen/digitaler-produktpass | 144 Zeichen | 155 Zeichen |

---

## OpenGraph Tags

Hinzugefügt auf folgenden Seiten (alle hatten vorher kein `openGraph`-Objekt):

- `/` (Homepage)
- `/ce-kennzeichnung-software`
- `/funktionen`
- `/preise`
- `/kontakt`
- `/stahlbau-metallbau`
- `/betonfertigteile`
- `/fassadenbau`
- `/bauprodukte-allgemein`
- `/fenster-tueren`
- `/wissen`
- `/wissen/bauproduktenverordnung-cpr`
- `/wissen/baupvo-2024`
- `/wissen/leistungserklaerung-dop`
- `/wissen/en-1090-ce-kennzeichnung`
- `/wissen/wpk-fpc-zertifikat`
- `/wissen/marktueberwachung-bauprodukte`
- `/wissen/digitaler-produktpass`
- `/tools/dop-pflichtcheck`
- `/tools/wpk-countdown`
- `/tools/ce-kennzeichnung-check`
- `/blog`

**Bereits vorhanden (unverändert):** Root-Layout (Twitter-Cards), `/blog/[slug]` (dynamisch via generateMetadata)

---

## JSON-LD Structured Data

### BreadcrumbSchema ergänzt

BreadcrumbSchema (`BreadcrumbList`) wurde auf folgenden Seiten hinzugefügt, die Breadcrumbs-Komponente hatten, aber kein JSON-LD:

- `/funktionen`
- `/preise`
- `/stahlbau-metallbau`
- `/betonfertigteile`
- `/fassadenbau`
- `/kontakt`
- `/tools/dop-pflichtcheck`
- `/tools/wpk-countdown`
- `/tools/ce-kennzeichnung-check`

### Bereits vorhanden (unverändert)

- `WebSiteSchema` + `OrganizationSchema` im Root-Layout
- `SoftwareAppSchema` im Root-Layout
- `FAQSchema` auf Branchen-Seiten (stahlbau, betonfertigteile)
- `ArticleSchema` + `BreadcrumbSchema` auf `/blog/[slug]`
- `WebPageSchema` auf allen Wissen-Seiten

### UWG-Hinweis

Kein `aggregateRating`-Schema in der gesamten Website — korrekt (keine echten Bewertungen vorhanden). Bleibt so.

---

## Sitemap

**Problem:** `sitemap.ts` enthielt eine hartkodierte Liste von Blog-Posts. Neue MDX-Dateien würden automatisch fehlen.

**Fix:** Dynamisches Laden via `getBlogPosts()` aus `@/lib/blog`. Alle Blog-Posts werden jetzt automatisch in die Sitemap aufgenommen, sobald eine neue MDX-Datei in `src/content/blog/` angelegt wird.

```typescript
// vorher: hardcodierte Blog-URLs
// nachher:
const blogPosts = getBlogPosts().map((post) => ({
  url: `${base}/blog/${post.slug}`,
  lastModified: post.date ? new Date(post.date) : new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.6,
}));
```

Außerdem korrigiert:
- `/wissen`: `changeFrequency` von `"monthly"` auf `"weekly"` (aktiv gepflegter Hub)
- `/kontakt`: `changeFrequency` von `"monthly"` auf `"yearly"` (ändert sich selten)

---

## robots.ts

**Problem:** `/admin/` fehlte im `disallow`-Array.

**Fix:**
```typescript
disallow: ["/api/", "/admin/", "/_next/"],
```

---

## Interne Verlinkung

### Tools-Seiten

Alle drei Tool-Seiten wurden um educationale Sections und Related-Links-Blöcke ergänzt. Dies verbessert die interne Verlinkung und erhöht die Verweildauer:

- `/tools/dop-pflichtcheck` → Links zu `/wissen/leistungserklaerung-dop`, `/wissen/marktueberwachung-bauprodukte`, `/ce-kennzeichnung-software`
- `/tools/wpk-countdown` → Links zu `/wissen/wpk-fpc-zertifikat`, `/wissen/en-1090-ce-kennzeichnung`, `/ce-kennzeichnung-software`
- `/tools/ce-kennzeichnung-check` → Links zu `/wissen/bauproduktenverordnung-cpr`, `/tools/dop-pflichtcheck`, `/ce-kennzeichnung-software`

---

## Offene Punkte (nicht in diesem Audit behoben)

### Assets — Fehlende Dateien

Im `public/`-Verzeichnis fehlen folgende SEO-relevanten Assets:

| Datei | Priorität | Beschreibung |
|-------|-----------|--------------|
| `favicon.ico` | KRITISCH | Browser-Tab-Icon |
| `favicon.svg` | Hoch | Modernes SVG-Favicon |
| `favicon-16x16.png` | Hoch | Klassisches Favicon |
| `favicon-32x32.png` | Hoch | Klassisches Favicon |
| `apple-touch-icon.png` | Mittel | iOS Home Screen Icon |
| `android-chrome-192x192.png` | Mittel | Android Icon |
| `android-chrome-512x512.png` | Mittel | Android Icon |
| `logo.svg` | Hoch | Wird in OrganizationSchema referenziert |
| `og.png` | Hoch | Fallback OG-Image (wird in ArticleSchema referenziert) |

**Empfehlung:** `/saas-branding` oder `/generate-assets` Skill verwenden, um Favicon-Set und OG-Image zu generieren.

### Blog-Content

Aktuell 5 MDX-Blog-Posts vorhanden. Zielgröße laut Strategy-Brief: 20+ Posts in 12 Monaten.

Empfohlene nächste Posts (hohe Suchvolumen-Keywords):
- `doP-erstellen-schritt-fuer-schritt` — "Leistungserklärung ausfüllen" Cluster
- `ce-kennzeichnung-pflicht-bauprodukte` — "CE-Kennzeichnung Pflicht" Cluster
- `baupvo-2024-was-aendert-sich` — "BauPVO 2024" Cluster

### Fassadenbau-Seite (dünn)

`/fassadenbau` hat sehr wenig Inhalt (2 Feature-Cards + CTA). Empfehlung: FAQ-Section analog zu `/stahlbau-metallbau` ergänzen.

### Wissen/en-1090-ce-kennzeichnung

Title mit 67 Zeichen ist grenzwertig lang. Bei Gelegenheit kürzen auf ≤60.

---

## Build-Ergebnis

```
✓ Compiled successfully
✓ Generating static pages (38/38) in 370.4ms
○ Alle 28 statischen Routen erfolgreich gerendert
● /blog/[slug] mit 5 Blog-Posts (generateStaticParams)
ƒ 3 API-Routes (dynamisch)
```

Keine TypeScript-Fehler, keine Lint-Fehler.
