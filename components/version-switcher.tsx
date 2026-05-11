"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const V0Page = dynamic(() => import("@/components/versions/v0-page"), { ssr: false });
const V1Page = dynamic(() => import("@/components/versions/v1-page"), { ssr: false });
const V2Page = dynamic(() => import("@/components/versions/v2-page"), { ssr: false });

const versions = ["V0", "V1", "V2"] as const;
type Version = (typeof versions)[number];

export default function VersionSwitcher() {
  const [active, setActive] = useState<Version>("V0");

  return (
    <div className="relative">
      {/* Version pill — fixed top right, above everything */}
      <div className="fixed top-4 right-4 z-[9999] flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/15 rounded-full px-2 py-1.5 shadow-xl">
        <span className="text-[10px] font-semibold text-white/40 uppercase tracking-widest pr-1">Ver</span>
        {versions.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setActive(v)}
            className={`text-[12px] font-bold px-3 py-1 rounded-full transition-all ${
              active === v
                ? "bg-white text-black shadow"
                : "text-white/55 hover:text-white hover:bg-white/10"
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      {active === "V0" && <V0Page />}
      {active === "V1" && <V1Page />}
      {active === "V2" && <V2Page />}
    </div>
  );
}
