"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, XCircle, AlertCircle, ArrowRight } from "lucide-react";

type Norm = "en1090" | "en13369" | "en14351" | "en13830" | "andere";

interface CheckResult {
  score: number;
  pflichtfelder: { name: string; ok: boolean }[];
  risiko: "niedrig" | "mittel" | "hoch";
}

function berechneCheck(
  norm: Norm,
  hatNoBo: boolean,
  hatWPK: boolean,
  hatBauPVO: boolean,
  hatGWP: boolean,
): CheckResult {
  const basis = [
    { name: "Eindeutige Kennnummer des Produkttyps", ok: true },
    { name: "Vorgesehene Verwendung(en)", ok: true },
    { name: "Name und Anschrift des Herstellers", ok: true },
    { name: "AVCP-System angegeben", ok: true },
    { name: "Harmonisierte Norm angegeben", ok: norm !== "andere" },
    { name: "Notifizierte Stelle (NoBo-Nummer)", ok: hatNoBo },
    { name: "WPK-Zertifikat gültig", ok: hatWPK },
    { name: "Leistungsmerkmale erklärte Werte", ok: true },
    { name: "BauPVO 2024 Format", ok: hatBauPVO },
    { name: "GWP-Wert angegeben (BauPVO 2024)", ok: hatGWP },
  ];
  const ok = basis.filter((b) => b.ok).length;
  const score = Math.round((ok / basis.length) * 100);
  const risiko: CheckResult["risiko"] =
    score >= 90 ? "niedrig" : score >= 70 ? "mittel" : "hoch";
  return { score, pflichtfelder: basis, risiko };
}

export function DopPflichtcheckTool() {
  const [norm, setNorm] = useState<Norm | "">("");
  const [hatNoBo, setHatNoBo] = useState<boolean | null>(null);
  const [hatWPK, setHatWPK] = useState<boolean | null>(null);
  const [hatBauPVO, setHatBauPVO] = useState<boolean | null>(null);
  const [hatGWP, setHatGWP] = useState<boolean | null>(null);
  const [result, setResult] = useState<CheckResult | null>(null);

  const canCalculate =
    norm !== "" &&
    hatNoBo !== null &&
    hatWPK !== null &&
    hatBauPVO !== null &&
    hatGWP !== null;

  const handleCalculate = () => {
    if (!canCalculate) return;
    setResult(
      berechneCheck(norm as Norm, hatNoBo!, hatWPK!, hatBauPVO!, hatGWP!),
    );
  };

  const risikoColor = {
    niedrig: "bg-green-50 border-green-200 text-green-800",
    mittel: "bg-orange-50 border-orange-200 text-orange-800",
    hoch: "bg-red-50 border-red-200 text-red-800",
  };

  return (
    <>
      <div className="border border-border rounded-xl p-8 space-y-6 bg-card">
        {/* Norm */}
        <div>
          <label className="block font-medium text-sm mb-3">
            1. Welche harmonisierte Norm gilt für Ihr Produkt?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { value: "en1090", label: "EN 1090-1 (Stahlbau)" },
              { value: "en13369", label: "EN 13369 (Betonfertigteile)" },
              { value: "en14351", label: "EN 14351-1 (Fenster/Türen)" },
              { value: "en13830", label: "EN 13830 (Fassaden)" },
              { value: "andere", label: "Andere hEN" },
            ].map((n) => (
              <button
                key={n.value}
                onClick={() => setNorm(n.value as Norm)}
                className={`px-3 py-2 text-sm rounded-lg border transition-colors text-left ${
                  norm === n.value
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-border hover:bg-muted"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>

        {/* NoBo */}
        <div>
          <label className="block font-medium text-sm mb-3">
            2. Haben Sie eine Notifizierte Stelle (NoBo) eingebunden?
          </label>
          <div className="flex gap-3">
            {[
              { v: true, l: "Ja" },
              { v: false, l: "Nein" },
            ].map((o) => (
              <button
                key={String(o.v)}
                onClick={() => setHatNoBo(o.v)}
                className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${
                  hatNoBo === o.v
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-border hover:bg-muted"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>
        </div>

        {/* WPK */}
        <div>
          <label className="block font-medium text-sm mb-3">
            3. Ist Ihr WPK-Zertifikat (FPC-Zertifikat) aktuell gültig?
          </label>
          <div className="flex gap-3">
            {[
              { v: true, l: "Ja, gültig" },
              { v: false, l: "Abgelaufen / nicht vorhanden" },
            ].map((o) => (
              <button
                key={String(o.v)}
                onClick={() => setHatWPK(o.v)}
                className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${
                  hatWPK === o.v
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-border hover:bg-muted"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>
        </div>

        {/* BauPVO */}
        <div>
          <label className="block font-medium text-sm mb-3">
            4. Ist Ihre DoP nach dem neuen BauPVO 2024/3110 Format erstellt?
          </label>
          <div className="flex gap-3">
            {[
              { v: true, l: "Ja, angepasst" },
              { v: false, l: "Noch altes Format (CPR 2011)" },
            ].map((o) => (
              <button
                key={String(o.v)}
                onClick={() => setHatBauPVO(o.v)}
                className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${
                  hatBauPVO === o.v
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-border hover:bg-muted"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>
        </div>

        {/* GWP */}
        <div>
          <label className="block font-medium text-sm mb-3">
            5. Enthält Ihre DoP GWP-Angaben (Globales Erwärmungspotenzial)?
          </label>
          <div className="flex gap-3">
            {[
              { v: true, l: "Ja" },
              { v: false, l: "Nein" },
            ].map((o) => (
              <button
                key={String(o.v)}
                onClick={() => setHatGWP(o.v)}
                className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${
                  hatGWP === o.v
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-border hover:bg-muted"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleCalculate}
          disabled={!canCalculate}
          className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          DoP-Pflichtcheck auswerten
        </button>
      </div>

      {/* Result */}
      {result && (
        <div
          className={`mt-6 p-6 rounded-xl border-2 ${risikoColor[result.risiko]}`}
        >
          <div className="flex items-center gap-3 mb-4">
            {result.risiko === "niedrig" ? (
              <CheckCircle className="h-8 w-8 text-green-600" />
            ) : result.risiko === "mittel" ? (
              <AlertCircle className="h-8 w-8 text-orange-600" />
            ) : (
              <XCircle className="h-8 w-8 text-red-600" />
            )}
            <div>
              <div className="font-bold text-lg">
                {result.score}% Pflichtfelder erfüllt — Risiko:{" "}
                {result.risiko === "niedrig"
                  ? "Niedrig"
                  : result.risiko === "mittel"
                    ? "Mittel"
                    : "Hoch"}
              </div>
              <div className="text-sm">
                {result.risiko === "hoch" &&
                  "Ihre DoP ist nicht BauPVO-2024-konform. Handeln Sie jetzt."}
                {result.risiko === "mittel" &&
                  "Einige Pflichtfelder fehlen. Optimierung empfohlen."}
                {result.risiko === "niedrig" &&
                  "Ihre DoP erfüllt die wesentlichen Anforderungen."}
              </div>
            </div>
          </div>
          <div className="space-y-2 mb-6">
            {result.pflichtfelder.map((f) => (
              <div key={f.name} className="flex items-center gap-2 text-sm">
                {f.ok ? (
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                )}
                {f.name}
              </div>
            ))}
          </div>
          <Link
            href="/ce-kennzeichnung-software#beta-anmeldung"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            DoP automatisch korrekt erstellen mit CE-Pilot{" "}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </>
  );
}
