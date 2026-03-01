# Research Brief: CE-Pilot

> Erstellt am: 2026-02-28

## Executive Summary

CE-Pilot adressiert eine strukturelle Compliance-Luecke fuer mindestens 50.000 Hersteller von harmonisierten Bauprodukten im DACH-Raum, die heute Leistungserklaerungen (DoP) und CE-Kennzeichnungen manuell in Word/Excel erstellen — mit erheblichem Fehler- und Bussgeldrisiko. Die neue EU-Bauproduktenverordnung (BauPVO 2024/3110), seit 8. Januar 2026 anwendbar, verschaerft die Dokumentationspflichten erheblich: kombinierte Leistungs- und Konformitaetserklaerung, Nachhaltigkeitsangaben (GWP), kuenftiger Digitaler Produktpass. Kein deutschsprachiger SaaS-Anbieter bedient diese Nische fuer KMU mit einem vollstaendigen, branchenspezifischen DoP-/CE-Workflow.

---

## Marktueberblick

### Branche

Die Zielbranche umfasst alle Hersteller von Bauprodukten, die unter harmonisierte technische Spezifikationen (hEN) fallen und daher zur CE-Kennzeichnung und DoP-Erstellung verpflichtet sind. Relevante Normen-/Produktfamilien:

- **Stahlbau / Metallbau / Treppenbau**: DIN EN 1090-1 (tragende Stahlbauteile, CE zwingend seit 01.07.2014)
- **Betonfertigteile**: EN 13369 (Zertifizierung WPK, jaehrliche Fremdkontrolle)
- **Fenster / Aussentüren**: EN 14351-1 (Konformitaetssystem 3)
- **Vorhangfassaden**: EN 13830 (Konformitaetssystem 3)
- **Diverses**: Daemmung, Dachdeckung, Befestigungsmittel, Gerüstbausysteme u.v.m.

### Marktgroesse (TAM/SAM/SOM)

**Marktgroesse DACH — Zielgruppe EN-1090-zertifizierte Betriebe (Stahlbau/Metallbau/Treppenbau):**
- Ca. 30.000 Metallbau-Handwerksbetriebe in Deutschland (Quelle: Zentralverband Deutsches Metallhandwerk)
- Davon ca. 15.000–20.000 mit EN-1090-Zertifizierung (CE-pflichtig fuer tragende Bauteile)
- Oesterreich + Schweiz: weitere ~3.000–5.000 EN-1090-Betriebe
- Betonfertigteile-Hersteller D: ~500–800 zertifizierte Werke
- Fenster-/Tuer-/Fassaden-Hersteller D: ~2.000–4.000 Hersteller mit CE-Pflicht

**Gesamt-Zielgruppe DACH (TAM):**
~25.000–30.000 Betriebe, die regelmaessig DoPs und CE-Kennzeichnungen erstellen muessen.

**Realistischer adressierbarer Markt (SAM):**
~10.000–15.000 KMU (5–200 MA), die aktuell ohne Spezialsoftware arbeiten (Word/Excel).

**Erreichbarer Markt in 3 Jahren (SOM):**
~500–1.500 zahlende Kunden bei ARPU 80–200 EUR/Monat = 500.000–3.600.000 EUR ARR.

**Marktdruck-Katalysator**: BauPVO 2024/3110, ab 08.01.2026 anwendbar — kombinierte Leistungs- und Konformitaetserklaerung ist NEU, Nachhaltigkeitsparameter (GWP, Global Warming Potential) werden Pflicht. Uebergangsfrist laeuft 2025/2026 aus. Viele Betriebe sind NOCH nicht angepasst.

### Digitalisierungsgrad

Sehr niedrig — charakteristisch fuer traditionelles deutsches Handwerk und Mittelstand:
- DoP-Erstellung erfolgt typischerweise in Word-Vorlage, die nach jeder Produktaenderung manuell angepasst wird
- WPK-Dokumentation per Excel-Tabellen oder Papierordner
- CE-Kennzeichnungs-Etiketten werden in Word oder Grafikprogrammen erstellt
- Zertifikate (FPC, WPK, Notifizierte Stelle) werden als PDF-Scans im Ordner abgelegt — keine Ablaufueberwachung
- Marktüberwachungsbehoerden prüfen zunehmend digital (Schnittstelle MUCE/ICSMS seit 2023 vollstaendig)

---

## Wettbewerber-Analyse

| Wettbewerber | URL | Pricing | Staerke | Schwaeche |
|---|---|---|---|---|
| WEKA Manager CE | weka-manager-ce.de | ~300–500 EUR/Jahr (Einzelplatz), Netzwerklizenz teurer | Etabliert, bekannt, breite EU-Richtlinien-Abdeckung (Maschinenrichtlinie, Niederspannung usw.) | NICHT auf Bauprodukte/CPR spezialisiert; kein DoP-Generator; keine WPK-Verknüpfung; kein KMU-SaaS |
| DoPCAP | dopcap.eu | Kostenlos fuer Endnutzer, Herstellerkonto unklar | Europaeische DoP-Datenbank, kostenlose Veroeffentlichung | Reine Publikationsplattform, KEIN Generator; kein Workflow; kein Tracking |
| asseso AG | asseso.eu | Dienstleistung (individuelle Preise, kein SaaS) | Full-Service-Beratung CE-Bauprodukte, technische Kompetenz | Kein Produkt/SaaS; teuer fuer KMU; kein Self-Service |
| Datalyxt | datalyxt.com | Individuelle Projekte | KI-basierte DoP-Digitalisierung (OCR/Einlesen) | Fokus auf VERARBEITUNG bestehender DoPs, nicht auf ERSTELLUNG fuer Hersteller |
| Orgadata LogiKal | orgadata.com/baupvo | Im ERP integriert (Fenster-Software) | Tief in Fensterbranche integriert, BauPVO-Modul vorhanden | Nur Fenster/Tuerenhersteller; kein universeller Bauprodukt-Ansatz |
| iPoint Product Compliance | ipoint-systems.com | Enterprise (ab 50.000 EUR/Jahr) | Vollstaendige Compliance-Suite, global | Viel zu teuer fuer KMU; nicht auf CPR/Bauprodukte ausgerichtet; englischsprachig |
| Zink Software (WPK-Modul) | zink-software.de | Individuell | WPK-Digitalisierung fuer Produktion via Scanner | Nur WPK-Tracking, kein DoP-Generator, kein CE-Kennzeichnungs-Modul |

### Differenzierungspotenzial

**Kernluecke im Markt**: Kein einziger Anbieter kombiniert (a) DoP-Generierung nach CPR 305/2011 + BauPVO 2024, (b) branchenspezifische hEN-Vorlagen (EN 1090-1, EN 13369, EN 14351-1), (c) WPK-/FPC-Zertifikat-Tracking mit Ablaufwarnungen, und (d) gesetzeskonforme CE-Kennzeichnungs-Erstellung — als selbstbedienbares, deutschsprachiges KMU-SaaS.

Differenzierung von CE-Pilot:
1. **Branchenspezifisch**: Vorlagen fuer EN 1090-1 (Stahlbau), EN 13369 (Beton), EN 14351-1 (Fenster), EN 13830 (Fassade) — keine generische CE-Software
2. **DoP-Assistent**: Schrittweise Erfassung aller Pflichtangaben nach Anhang III CPR + neue BauPVO 2024 Felder (GWP, Nachhaltigkeit)
3. **WPK-Verknüpfung**: Zertifikat-Ablaufdaten, Notifizierte-Stelle-Verknüpfung, automatische Warnungen
4. **CE-Label-Generator**: PDF-Export mit allen gesetzlichen Pflichtangaben, NoBo-Nummer, Notifizierungsnummer
5. **10-Jahres-Archivierung**: Gesetzeskonforme Aufbewahrung (Art. 11 CPR)
6. **DACH-Fokus**: Deutsch, Compliance mit nationalem Bauproduktengesetz (BauPG), DIBt-Anforderungen

---

## Ideal Customer Profile (ICP)

### Demografie

- **Branche**: Metallbau / Stahlbau / Treppenbau (primaer), Betonfertigteile / Fassadenbau (sekundaer)
- **Firmengroesse**: 5–100 Mitarbeiter, Jahresumsatz 500.000–10 Mio. EUR
- **Ort**: Deutschland, Oesterreich, Schweiz (DACH)
- **Entscheider**: Geschaeftsfuehrer (oft gleichzeitig Qualitaetsverantwortlicher), Technischer Leiter, WPK-Beauftragter/Schweissaufsichtsperson
- **Typische Situation**: EN-1090-Zertifizierung seit 2014 vorhanden, aber DoP-Erstellung laeuft noch immer manuell in Word, einmal jaehrlich (Audit-Stress)

### Pain Points (Top 5)

1. **DoP-Chaos**: Fuer jedes tragende Produkt eine eigene DoP — Word-Vorlage wird copy-paste gepflegt, Versionsfehler entstehen, DoPs divergieren von der aktuellen WPK-Fassung
2. **Pflichtangaben unklar**: Welche 18+ Pflichtfelder muessen in der DoP stehen? CPR-Anhang III ist nicht intuitiv — Fehler oft erst beim Audit entdeckt
3. **Zertifikats-Chaos**: FPC-Zertifikat, Notifizierte-Stelle-Bescheinigung, WPS/WPQR — liegen als PDF-Scans auf dem Server, Ablauftermine werden verpasst
4. **CE-Kennzeichnungs-Fehler**: Falsche NoBo-Nummer, fehlende Leistungsangaben, veraltete Normenversion — bei Marktueberwaehchungskontrolle Bussgeldfaehig bis 50.000 EUR (BauPG) bzw. Inverkehrbringungsverbot
5. **BauPVO 2024-Unsicherheit**: Neue Verordnung ab 08.01.2026 — was aendert sich konkret? Kombinierte Leistungs- und Konformitaetserklaerung, GWP-Angabe, Digitaler Produktpass — Betriebe wissen nicht, was sie tun muessen

### Kaufmotivation

- **Compliance-Druck** (primaer): Marktueberwaechungsaktion laeuft, naechste WPK-Fremdkontrolle naht, BauPVO 2024 ist da
- **Zeitersparnis**: DoP-Erstellung soll von 2–4 Stunden auf <20 Minuten sinken
- **Rechtssicherheit**: "Mach ich das wirklich richtig?" — Sorge vor Bussgeldern und Haftung
- **Auditvorbereitung**: Alle Dokumente auf Knopfdruck bereit fuer TUeV/DVS/SLV-Auditor
- **Skalierbarkeit**: Mehr Produkte, mehr DoPs — manuell nicht mehr skalierbar

### Digitale Reife

- **Basisdigitalisierung**: E-Mail, Windows-Netzwerklaufwerk, MS Office
- **Branchensoftware**: Oft CAD (AutoCAD, Tekla), manchmal ERP (Sage, Lexware, Sorpo)
- **Compliance-Software**: KEINE spezifische — das ist die Luecke
- **Cloud-Bereitschaft**: Mittel — "Cloud wenn sicher und DSGVO-konform"
- **Zahlungsbereitschaft**: 50–250 EUR/Monat (SaaS-Abo), wenn ROI klar

---

## Branchen-Segmente

### Segment 1: Stahlbau / Metallbau (EN 1090-1) — Kern-Zielgruppe

- **Zielgruppe**: 15.000–20.000 EN-1090-zertifizierte Metallbau-, Stahlbau- und Treppenbaubetriebe in Deutschland
- **Pflicht-Norm**: DIN EN 1090-1 (CE-Kennzeichnung tragender Stahlbauteile), EN 1090-2 (Ausfuehrung)
- **Spezifische Pain Points**:
  - Jedes tragende Bauteil (Treppenlaeufe, Gelaender, Stützen, Traeger) braucht eine DoP
  - WPK-System muss dokumentiert und vom TUeV/SLV jaehrlich fremdüberwacht werden
  - EXC-Klasse (Execution Class) bestimmt Pruefumfang und DoP-Inhalte
  - Schweissaufsicht, WPS, WPQR, Schweisserzertifikate muessen mit DoP verknüpft sein
- **Ansprache**: "Deine WPK ist zertifiziert — deine DoPs muessen es auch sein"
- **Einstiegsprodukt**: DoP-Generator EN 1090-1 + WPK-Verknüpfung

### Segment 2: Betonfertigteile (EN 13369) — Wichtige Ergaenzung

- **Zielgruppe**: ~500–800 Hersteller von Betonfertigteilen (Wandplatten, Stützen, Treppen, Balken) in Deutschland
- **Pflicht-Norm**: EN 13369 (Allgemeine Regeln fuer Betonfertigteile), produktspezifische Normen (EN 1168, EN 1520 etc.)
- **Spezifische Pain Points**:
  - Jaehrliche FPC-Fremdkontrolle durch notifizierte Stelle ist Pflicht
  - Viele Werkseigenschaften (Druckfestigkeit, Brandklasse, Daemmung) muessen pro Produkt erklaert werden
  - Grosse Produktvielfalt (100+ Varianten) = viele DoPs
- **Ansprache**: "100 Produkte, 100 DoPs — automatisiert in Minuten"
- **Einstiegsprodukt**: Massen-DoP-Generierung mit Produktvarianten-Logik

### Segment 3: Fenster / Aussentüren (EN 14351-1)

- **Zielgruppe**: ~2.000–4.000 Fensterhersteller und -händler mit eigenem CE-Programm
- **Pflicht-Norm**: EN 14351-1 (Fenster und Aussentüren ohne Brandschutz)
- **Spezifische Pain Points**:
  - Wohnungsbau-Boom hat Variantenvielfalt explosionsartig erhoeht
  - U-Wert, Schallschutz, Einbruchhemmung — alles DoP-pflichtig
  - Softwarehersteller Orgadata hat Modul, aber nur fuer Orgadata-Nutzer
- **Ansprache**: "Jedes Fenster braucht eine DoP — erstell sie in 3 Minuten"
- **Einstiegsprodukt**: Fenster-spezifischer DoP-Generator mit Leistungsklassen-Auswahl

### Segment 4: Fassadenbau / Vorhangfassaden (EN 13830)

- **Zielgruppe**: ~500–1.000 Fassadenbauer und Elementhersteller in DACH
- **Pflicht-Norm**: EN 13830 (Vorhangfassaden), EN 1090-1 (wenn tragende Aluelemente)
- **Spezifische Pain Points**:
  - Grossprojekte (Buerogebaeude, Schulen) verlangen lueckenlose Dokumentation
  - Schnittstelle Fassade/Statik komplex — CE und Tragfaehigkeitsnachweis muessen zusammenspielen
  - Auftraggeber und Baubehörden verlangen DoP proaktiv
- **Ansprache**: "Keine Abnahme ohne DoP — hab sie immer parat"

### Segment 5: Sonstige harmonisierte Bauprodukte (Branchenübergreifend)

- **Zielgruppe**: Hersteller von Daemmung, Dachdeckung, Befestigungssystemen, Geruesten, Brandschutzprodukten usw.
- **Gemeinsamer Nenner**: CPR 305/2011 gilt, DoP und CE-Kennzeichnung sind Pflicht
- **Spezifische Pain Points**:
  - Sehr diverse Normenlandschaft
  - Oft keine Fachexpertise fuer CPR im Unternehmen
- **Ansprache**: "Egal welches Bauprodukt — wenn es eine hEN gibt, brauchst du eine DoP"

---

## Regulatorischer Kontext + Wissens-Themen

### Norm/Thema 1: EU-Bauproduktenverordnung CPR 305/2011 — Das Fundament

- **Was es ist**: EU-Verordnung Nr. 305/2011, regelt das Inverkehrbringen von Bauprodukten im Europaeischen Wirtschaftsraum. Ersetzt seit 2013 die Bauproduktenrichtlinie 89/106/EWG.
- **Warum relevant**: Grundlage fuer DoP und CE-Kennzeichnungspflicht. Hersteller unter harmonisierten Normen MUESSEN DoP erstellen und CE-Kennzeichen anbringen.
- **Eignet sich als Wissens-Seite**: Ja — "Was ist die Bauproduktenverordnung? Erklaerung fuer Hersteller"

### Norm/Thema 2: BauPVO 2024/3110 — Die neue Verordnung ab Januar 2026

- **Was es ist**: Neue EU-Bauproduktenverordnung (EU) 2024/3110, in Kraft seit 07.01.2025, ab 08.01.2026 anwendbar. Loest die CPR 305/2011 schrittweise ab.
- **Wesentliche Aenderungen**:
  - Kombinierte "Leistungs- und Konformitaetserklaerung" ersetzt separate DoP
  - Nachhaltigkeitsangaben Pflicht (Global Warming Potential/GWP, Recyclinganteil)
  - Digitaler Produktpass (DPP) wird kuenftig Pflicht (Zeitplan via delegierte Rechtsakte bis Ende 2026)
  - Erweiterter Anwendungsbereich (gebrauchte Produkte, 3D-Druckmaterialien)
- **Warum relevant**: Alle Hersteller MUESSEN bis zur Umstellung der jeweiligen hEN auf die neue Verordnung reagieren — grosse Verunsicherung im Markt.
- **Eignet sich als Wissens-Seite**: Ja — "BauPVO 2024: Was aendert sich fuer Bauprodukt-Hersteller?"

### Norm/Thema 3: DIN EN 1090-1 — CE-Kennzeichnung im Stahlbau

- **Was es ist**: Norm fuer die CE-Kennzeichnung von tragenden Stahlbau- und Aluminiumbauprodukten. Pflicht seit 01.07.2014. Besteht aus EN 1090-1 (Konformitaetsbewertung, DoP) und EN 1090-2 (Ausfuehrungsanforderungen).
- **Warum relevant**: Direkte Norm fuer die groesste Zielgruppe (EN-1090-Metallbauer). Jede DoP nach EN 1090-1 muss Ausfuehrungsklasse (EXC1-4), WPK-Zertifikatsnummer, NoBo-Nummer enthalten.
- **Eignet sich als Wissens-Seite**: Ja — "EN 1090-1: Was muss in der DoP fuer Stahlbauprodukte stehen?"

### Norm/Thema 4: Leistungserklärung (DoP) — Pflichtangaben nach Anhang III CPR

- **Was es ist**: Dokument, das ein Hersteller fuer jedes CE-kennzeichnungspflichtige Bauprodukt ausstellen muss. Ersetzt die fruehre Konformitaetserklaerung. Muss 10 Jahre aufbewahrt werden.
- **Pflichtangaben (Anhang III CPR)**:
  1. Eindeutige Identifizierungsnummer des Produkttyps
  2. Verwendungszweck laut harmonisierter Norm
  3. Name und Kontakt des Herstellers
  4. Eindeutige Kennnummer des Bevollmaechtigten (falls zutreffend)
  5. AVCP-System (Konformitaetsbewertungssystem 1, 1+, 2, 2+, 3, 4)
  6. Notifizierte Stelle (falls AVCP-System 1/1+/2+)
  7. Erklaerte Leistung zu wesentlichen Merkmalen
  8. Unterzeichnung durch Hersteller
- **Eignet sich als Wissens-Seite**: Ja — "Leistungserklärung ausfüllen: Schritt-fuer-Schritt Anleitung"

### Norm/Thema 5: Werkseigene Produktionskontrolle (WPK/FPC) — Das Herzstück

- **Was es ist**: WPK = Werkseigene Produktionskontrolle (deutsch) / FPC = Factory Production Control (englisch). Vom Hersteller einzurichtendes internes System zur Ueberwachung der Produktion. Voraussetzung fuer CE-Kennzeichnung bei AVCP-Systemen 1, 1+, 2+.
- **Warum relevant**: Ohne notifiziertes WPK-Zertifikat keine CE-Kennzeichnung. WPK-Zertifikate laufen ab (jaehrliche/3-jaehrliche Fremdkontrolle). Ablauf = sofortiges Inverkehrbringungsverbot.
- **Eignet sich als Wissens-Seite**: Ja — "WPK-Zertifikat abgelaufen: Was jetzt? Pflichten und Massnahmen"

### Norm/Thema 6: Marktüberwachung durch DIBt und Landesbehoerden

- **Was es ist**: Das Deutsche Institut fuer Bautechnik (DIBt) ist gemeinsame Marktüberwachungsbehoerde der Laender. Prueft formal korrekte DoP, vollstaendige CE-Kennzeichnung, Konsistenz zwischen DoP und Produktbegleitunterlagen.
- **Sanktionen**: Geldbussen bis 50.000 EUR (BauPG), Inverkehrbringungsverbot, Rueckrufe.
- **Trend**: Digitalisierung der Marktüberwachung (MUCE/ICSMS-Schnittstelle seit 2023) — mehr Kontrollen, hoehere Trefferquote.
- **Eignet sich als Wissens-Seite**: Ja — "Marktüberwachung Bauprodukte: Was prüft der Kontrolleur?"

---

## Tool-/Rechner-Ideen

### Rechner 1: DoP-Pflichtcheck — Brauche ich eine Leistungserklärung?

- **Was er berechnet**: Entscheidungsbaum: Produkt-Kategorie eingeben → hEN ermitteln → AVCP-System anzeigen → Pflichtliste ausgeben
- **Inputs**: Produkttyp (Stahlbauteile, Fenster, Beton usw.), Verwendungszweck (Hochbau, Brückenbau, Fassade), Hersteller-Sitz (EU, Drittland)
- **Output**: "Ja, DoP Pflicht nach hEN XY, AVCP-System Z" + Checkliste der Pflichtangaben + direkter CTA "DoP jetzt erstellen"
- **Lead-Magnet-Potenzial**: Sehr hoch — jeder Hersteller fragt sich "Brauche ich wirklich eine DoP?". Interaktiver Entscheidungsbaum generiert qualifizierte Leads.

### Rechner 2: CE-Kennzeichnungs-Check — Vollstaendigkeitsprüfer

- **Was er berechnet**: Nutzer gibt seine bestehende CE-Kennzeichnung ein (oder laedt Bild hoch) → System prueft auf Pflichtangaben nach CPR Anhang IV
- **Inputs**: NoBo-Nummer, Norm-Referenz, Produkttyp-Nr., Jahreszahl, erklaerte Leistung, Unternehmensname, Anschrift
- **Output**: Ampel-Report (Gruen/Gelb/Rot) pro Pflichtfeld + "X Fehler gefunden"
- **Lead-Magnet-Potenzial**: Hoch — "Ist meine CE-Kennzeichnung korrekt?" ist eine brennende Frage vor Marktüberwachungskontrollen.

### Rechner 3: WPK-Zertifikat-Countdown

- **Was er berechnet**: Ablaufdatum des WPK/FPC-Zertifikats eingeben → Tage bis Ablauf → Handlungsempfehlung
- **Inputs**: Zertifikat-Typ, Ausstellungsdatum, Gueltigkeit (1 Jahr / 3 Jahre), Notifizierte Stelle
- **Output**: "Noch 47 Tage bis Ablauf" + Email-Erinnerungsdienst + CTA fuer CE-Pilot-Testzugang
- **Lead-Magnet-Potenzial**: Mittel — loest unmittelbaren Schmerz, generiert Email-Opt-in.

---

## Blog-Themen

| # | Titel-Idee | Ziel-Keyword | Suchintention | Geschaetzte Woerter |
|---|---|---|---|---|
| 1 | Leistungserklärung ausfüllen: Schritt-fuer-Schritt Anleitung fuer Stahlbau-Hersteller | "Leistungserklärung ausfüllen Bauprodukte" | informational | 2000 |
| 2 | BauPVO 2024: Was ändert sich ab Januar 2026 fuer Metallbauer? | "BauPVO 2024 Aenderungen Hersteller" | informational | 1800 |
| 3 | CE-Kennzeichnung Stahlbau: Die 8 haeufigsten Fehler und wie du sie vermeidest | "CE-Kennzeichnung Stahlbau Fehler" | informational | 1500 |
| 4 | Leistungserklärung (DoP) vs. Konformitaetserklaerung: Was ist der Unterschied? | "Leistungserklärung Konformitaetserklaerung Unterschied" | informational | 1200 |
| 5 | Marktüberwachung Bauprodukte: Was prueft der Kontrolleur wirklich? | "Marktüberwachung Bauprodukte Deutschland" | informational | 1600 |
| 6 | WPK-Zertifikat abgelaufen: Was jetzt? Sofortmassnahmen fuer Stahlbau-Betriebe | "WPK Zertifikat abgelaufen" | commercial | 1200 |
| 7 | EN 1090-1 erklaert: Welche Angaben muss meine Leistungserklärung enthalten? | "EN 1090-1 Leistungserklärung Pflichtangaben" | informational | 2200 |
| 8 | DoP erstellen fuer Betonfertigteile nach EN 13369: Schritt fuer Schritt | "DoP Betonfertigteile EN 13369" | informational | 1800 |
| 9 | CE-Kennzeichnung Fenster: Was Hersteller nach EN 14351-1 wissen muessen | "CE-Kennzeichnung Fenster EN 14351-1" | informational | 1500 |
| 10 | Digitaler Produktpass Bauprodukte: Zeitplan und Pflichten ab 2026/2027 | "Digitaler Produktpass Bauprodukte" | informational | 1400 |

---

## SEO-Hinweise fuer Phase 2

### Suchintentionen der Zielgruppe

1. **Verstaendnis-Suchen** (informational): "Was ist eine DoP?", "Wie erstellet man eine Leistungserklärung?", "Was muss in die CE-Kennzeichnung?"
2. **Compliance-Druck-Suchen** (commercial investigation): "DoP Software Bauprodukte", "Leistungserklärung Generator", "CE Kennzeichnung erstellen Software"
3. **Problem-Suchen** (transactional): "DoP Vorlage EN 1090", "CE Kennzeichnung Fehler prüfen", "WPK Zertifikat abgelaufen"
4. **Normen-Erklaerung** (informational): "EN 1090-1 erklaert", "BauPVO 2024 was aendert sich", "CPR 305/2011 DoP Pflicht"

### Erste Keyword-Ideen (Primaer + Sekundaer)

**Primaere Keywords (hohes Suchvolumen, hohe Relevanz):**
- "Leistungserklärung Bauprodukte" (informational, mittelstark)
- "DoP erstellen Software" (commercial)
- "CE-Kennzeichnung Stahlbau" (informational, stark)
- "Bauproduktenverordnung Software" (commercial)
- "EN 1090 Leistungserklärung" (informational)

**Sekundaere Keywords (Long-Tail, hoehere Conversion):**
- "Leistungserklärung Vorlage EN 1090-1"
- "WPK Zertifikat Ablauf Warnung"
- "DoP Pflichtangaben CPR Anhang III"
- "CE Kennzeichnung Fehler Busssgeld Bauprodukte"
- "BauPVO 2024 Aenderungen Metallbauer"
- "Leistungserklärung Betonfertigteile EN 13369"
- "CE Kennzeichnung Fenster EN 14351-1 Hersteller"

### Content-Luecken der Wettbewerber

1. **Keine KMU-taugliche DoP-Erklaerung**: Alle Informationsseiten (DIBt, IHK, WEKA) sind schwer verstaendlich oder sehr allgemein. CE-Pilot kann einfache, branchenspezifische Erklaerungen liefern.
2. **BauPVO 2024 konkret fuer KMU**: Grosse Beratungsunternehmen sprechen von GWP und DPP in abstrakten Begriffen. KMU-gerechte "Was musst du konkret tun?"-Anleitungen fehlen komplett.
3. **WPK-Tracking und Ablauf-Warnungen**: Kein Wettbewerber thematisiert das reale Risiko ablaufender WPK-Zertifikate als Content.
4. **Branchenspezifische DoP-Anleitungen**: "Leistungserklärung fuer Treppenlaeufe" oder "DoP fuer Fenster EN 14351-1" — hochspezifisch, wenig Wettbewerb.
5. **Interaktive Tools**: Kein Wettbewerber bietet kostenlose Online-Checker oder Rechner an — grosses SEO-Potenzial fuer Tool-Pages.

---

## Quellen

- [DIBt — Marktüberwachung harmonisierter Bauprodukte](https://www.dibt.de/de/wir-bieten/marktueberwachung)
- [DIBt — BauPVO 2024 ab 8. Januar 2026 anwendbar](https://www.dibt.de/de/aktuelles/meldungen/nachricht-detail/meldung/baupvo-2024-seit-8-januar-2026-anwendbar)
- [IHK Koblenz — Neue EU-Bauprodukte-Verordnung ab 2025/2026](https://www.ihk.de/koblenz/unternehmensservice/umwelt-nachhaltigkeit/aktuelles-und-termine/aktuelles/die-neue-eu-bauprodukte-verordnung-6732066)
- [DoPCAP — Leistungserklarungen fuer Bauprodukte](https://www.dopcap.eu/en-gb/index.html)
- [WEKA Manager CE](https://www.weka-manager-ce.de/)
- [asseso AG — CE-Bauprodukte](https://asseso.eu/de/dienstleistungen/ce-bauprodukte)
- [Zentralverband Deutsches Metallhandwerk — Struktur- und Konjunkturdaten](https://www.metallhandwerk.de/struktur-und-konjunkturdaten-zum-metallhandwerk/)
- [bauforumstahl — CE-Kennzeichnung nach EN 1090-1](https://bauforumstahl.de/wp-content/uploads/2024/02/bfs-CE-Kennzeichnung_nach_EN-1090.pdf)
- [it-recht-kanzlei — Leistungserklärung EU-Bauproduktenverordnung](https://www.it-recht-kanzlei.de/leistungserklaerung-eu-bauproduktenverordnung.html)
- [Datalyxt — DoP Digitalisierung](https://www.datalyxt.com/blog/leistungserklaerungen-dop-digitalisieren/)
- [innenausbau.org — CPR-Arbeitsprogramm 2026-2029](https://innenausbau.org/blog/2025/12/22/cpr-arbeitsprogramm-2026-2029-kommission-legt-fahrplan-fuer-neue-bauproduktenverordnung-vor/)
- [DSD Berlin — EU-Bauprodukte-Verordnung: Digitaler Produktpass wird Pflicht](https://www.dsd.berlin/eu-bauprodukte-verordnung-digitaler-produktpass-wird-pflicht/)
