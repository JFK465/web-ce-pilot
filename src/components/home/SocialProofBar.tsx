"use client";

import { Shield, Lock, MapPin, FileCheck, Zap } from "lucide-react";

const trustItems = [
  { icon: FileCheck, text: "BauPVO 2024/3110 konform" },
  { icon: Shield, text: "DSGVO-konform" },
  { icon: Lock, text: "256-Bit SSL" },
  { icon: MapPin, text: "Made in Germany" },
  { icon: Zap, text: "In 5 Minuten eingerichtet" },
];

export function SocialProofBar() {
  return (
    <section className="py-8 bg-muted/40 border-y border-border">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
              <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
