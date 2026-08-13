import Image from "next/image";
import type { LoreEntry } from "./lore-data";

export function PortraitCard({ entry, size = "md" }: { entry: LoreEntry; size?: "md" | "lg" }) {
  const imgSize = size === "lg" ? 320 : 220;

  return (
    <div className="frame corner-marks bg-[var(--panel)]/50 flex flex-col overflow-hidden">
      <div
        className="relative w-full flex items-center justify-center overflow-hidden border-b border-[var(--hairline)]"
        style={{
          aspectRatio: "1 / 1",
          background: `radial-gradient(circle at 50% 42%, ${entry.glow}, transparent 68%)`,
        }}
      >
        <Image
          src={entry.icon}
          alt={entry.name}
          width={imgSize}
          height={imgSize}
          className="object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.65)]"
          style={{ imageRendering: "pixelated", width: "70%", height: "70%" }}
        />
      </div>
      <div className={size === "lg" ? "p-6" : "p-4"}>
        <h3
          className={
            "text-[var(--gold)] tracking-[0.12em] mb-2 " + (size === "lg" ? "text-lg" : "text-sm")
          }
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {entry.name.toUpperCase()}
        </h3>
        <p
          className={
            "text-[color:var(--foreground-dim)] leading-relaxed " +
            (size === "lg" ? "text-sm" : "text-xs")
          }
        >
          {entry.desc}
        </p>
      </div>
    </div>
  );
}
