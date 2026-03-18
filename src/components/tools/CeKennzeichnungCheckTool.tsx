"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

export function CeKennzeichnungCheckTool() {
  const [produktkategorie, setProductkategorie] = useState("");
  const [hatHEN, setHatHEN] = useState<boolean | null>(null);
  const [hatInVerkehr, setHatInVerkehr] = useState<boolean | null>(null);
  const [result, setResult] = useState<
    "pflicht" | "keine-pflicht" | "unklar" | null
  >(null);

  const handleCheck = () => {
    if (!produktkategorie || hatHEN === null || hatInVerkehr === null) return;
    if (hatHEN && hatInVerkehr) setResult("pflicht");
    else if (!hatHEN) setResult("keine-pflicht");
    else setResult("unklar");
  };

  return (
    <>
      <div className="border border-border rounded-xl p-8 space-y-6 bg-card">
        <div>
          <label
            htmlFor="produktkategorie"
            className="block font-medium text-sm mb-2"
          >
            1. Welche Produktkategorie?
          </label>
          <input
            id="produktkategorie"
            type="text"
            value={produktkategorie}
            onChange={(e) => setProductkategorie(e.target.value)}
            placeholder="z.B. Stahlstütze, Betonsteinpflaster, Fensterrahmen"
            className="w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label className="block font-medium text-sm mb-3">
            2. Existiert eine harmonisierte europäische Norm (hEN) für dieses
            Produkt?
          </label>
          <div className="flex gap-3">
            {[
              { v: true, l: "Ja" },
              { v: false, l: "Nein / unbekannt" },
            ].map((o) => (
              <button
                key={String(o.v)}
                onClick={() => setHatHEN(o.v)}
                className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${
                  hatHEN === o.v
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-border hover:bg-muted"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block font-medium text-sm mb-3">
            3. Bringen Sie das Produkt im EU-Binnenmarkt in Verkehr?
          </label>
          <div className="flex gap-3">
            {[
              { v: true, l: "Ja" },
              { v: false, l: "Nein" },
            ].map((o) => (
              <button
                key={String(o.v)}
                onClick={() => setHatInVerkehr(o.v)}
                className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${
                  hatInVerkehr === o.v
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
          onClick={handleCheck}
          disabled={
            !produktkategorie || hatHEN === null || hatInVerkehr === null
          }
          className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-40"
        >
          CE-Pflicht prüfen
        </button>
      </div>

      {result && (
        <div
          className={`mt-6 p-6 rounded-xl border-2 ${
            result === "pflicht"
              ? "bg-red-50 border-red-200"
              : result === "keine-pflicht"
                ? "bg-green-50 border-green-200"
                : "bg-orange-50 border-orange-200"
          }`}
        >
          <div className="flex items-start gap-3">
            {result === "pflicht" ? (
              <XCircle className="h-6 w-6 text-red-600 mt-0.5" />
            ) : (
              <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
            )}
            <div>
              <h3 className="font-semibold mb-1">
                {result === "pflicht" && "CE-Kennzeichnungspflicht: JA"}
                {result === "keine-pflicht" &&
                  "CE-Kennzeichnung: Voraussichtlich keine Pflicht"}
                {result === "unklar" && "CE-Kennzeichnung: Prüfung empfohlen"}
              </h3>
              <p className="text-sm">
                {result === "pflicht" &&
                  "Ihr Produkt fällt unter eine harmonisierte Norm und wird in Verkehr gebracht — CE-Kennzeichnung und Leistungserklärung (DoP) sind Pflicht."}
                {result === "keine-pflicht" &&
                  "Ohne harmonisierte Norm besteht in der Regel keine CE-Pflicht. Prüfen Sie ob für Ihr Produkt eine hEN existiert oder geplant ist."}
                {result === "unklar" &&
                  "Klären Sie ab, ob für Ihr Produkt eine harmonisierte Norm existiert. Konsultieren Sie ggf. einen Sachverständigen."}
              </p>
              {result === "pflicht" && (
                <Link
                  href="/ce-kennzeichnung-software#beta-anmeldung"
                  className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-3 hover:underline"
                >
                  DoP jetzt automatisch erstellen{" "}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
