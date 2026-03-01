"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

export function WpkCountdownTool() {
  const [ablaufDatum, setAblaufDatum] = useState("");
  const [result, setResult] = useState<{
    tage: number;
    risiko: "ok" | "warnung" | "kritisch" | "abgelaufen";
  } | null>(null);

  const handleCheck = () => {
    if (!ablaufDatum) return;
    const heute = new Date();
    const ablauf = new Date(ablaufDatum);
    const diffMs = ablauf.getTime() - heute.getTime();
    const tage = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    let risiko: "ok" | "warnung" | "kritisch" | "abgelaufen";
    if (tage < 0) risiko = "abgelaufen";
    else if (tage <= 30) risiko = "kritisch";
    else if (tage <= 90) risiko = "warnung";
    else risiko = "ok";
    setResult({ tage, risiko });
  };

  const risikoConfig = {
    ok: {
      color: "bg-green-50 border-green-200",
      icon: CheckCircle,
      iconColor: "text-green-600",
      text: "Ihr WPK-Zertifikat ist noch gültig. Stellen Sie sicher, dass Sie die Verlängerung rechtzeitig beantragen.",
    },
    warnung: {
      color: "bg-orange-50 border-orange-200",
      icon: Bell,
      iconColor: "text-orange-600",
      text: "Achtung: Ihr WPK-Zertifikat läuft in weniger als 90 Tagen ab. Kontaktieren Sie jetzt Ihre Notifizierte Stelle für die Verlängerung.",
    },
    kritisch: {
      color: "bg-red-50 border-red-200",
      icon: AlertTriangle,
      iconColor: "text-red-600",
      text: "Kritisch: Ihr WPK-Zertifikat läuft in weniger als 30 Tagen ab. Handeln Sie sofort — ohne gültiges Zertifikat dürfen Sie keine CE-Produkte in Verkehr bringen.",
    },
    abgelaufen: {
      color: "bg-red-100 border-red-400",
      icon: AlertTriangle,
      iconColor: "text-red-700",
      text: "Ihr WPK-Zertifikat ist abgelaufen! Alle CE-Kennzeichnungen für betroffene Produkte sind sofort ungültig. Kontaktieren Sie umgehend Ihre Notifizierte Stelle.",
    },
  };

  return (
    <>
      <div className="border border-border rounded-xl p-8 space-y-6 bg-card">
        <div>
          <label
            className="block font-medium text-sm mb-2"
            htmlFor="ablauf-datum"
          >
            Ablaufdatum Ihres WPK-Zertifikats
          </label>
          <input
            id="ablauf-datum"
            type="date"
            value={ablaufDatum}
            onChange={(e) => setAblaufDatum(e.target.value)}
            className="w-full px-3 py-2.5 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <button
          onClick={handleCheck}
          disabled={!ablaufDatum}
          className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-40"
        >
          Ablauf prüfen
        </button>
      </div>

      {result &&
        (() => {
          const cfg = risikoConfig[result.risiko];
          return (
            <div className={`mt-6 p-6 rounded-xl border-2 ${cfg.color}`}>
              <div className="flex items-start gap-3">
                <cfg.icon
                  className={`h-6 w-6 mt-0.5 flex-shrink-0 ${cfg.iconColor}`}
                />
                <div>
                  <h3 className="font-semibold mb-1">
                    {result.risiko === "abgelaufen"
                      ? "WPK-Zertifikat abgelaufen!"
                      : `Noch ${result.tage} Tage gültig`}
                  </h3>
                  <p className="text-sm">{cfg.text}</p>
                  <Link
                    href="/ce-kennzeichnung-software#beta-anmeldung"
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-3 hover:underline"
                  >
                    WPK automatisch überwachen mit CE-Pilot{" "}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })()}
    </>
  );
}
