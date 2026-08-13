"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { abilities, bestiary, bosses, storyParagraphs, type LoreEntry } from "./lore-data";

type Tab = "historia" | "habilidades" | "bestiario" | "jefes";

const TABS: { id: Tab; label: string }[] = [
  { id: "historia", label: "Historia" },
  { id: "habilidades", label: "Habilidades" },
  { id: "bestiario", label: "Bestiario" },
  { id: "jefes", label: "Jefes" },
];

function EntryCard({ entry }: { entry: LoreEntry }) {
  return (
    <div className="frame corner-marks bg-[var(--panel)]/60 p-4 flex flex-col gap-3">
      <div className="relative aspect-square w-full bg-black/40 overflow-hidden">
        <Image
          src={entry.icon}
          alt={entry.name}
          fill
          className="object-contain p-3"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
      <div>
        <h3
          className="text-[var(--gold)] text-sm tracking-[0.12em] mb-1.5"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {entry.name.toUpperCase()}
        </h3>
        <p className="text-xs text-[color:var(--foreground-dim)] leading-relaxed">{entry.desc}</p>
      </div>
    </div>
  );
}

export function LoreModal() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("historia");

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn !py-2 !px-4 !text-xs flex items-center gap-2"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M4 5.5c2.5-1 5.5-1 8 0v14c-2.5-1-5.5-1-8 0v-14ZM20 5.5c-2.5-1-5.5-1-8 0v14c2.5-1 5.5-1 8 0v-14Z" strokeLinejoin="round" />
        </svg>
        Historia y arte
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Historia y arte de Averon"
        >
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative w-full max-w-4xl max-h-[88vh] frame corner-marks bg-[var(--ink)] flex flex-col">
            <div className="flex items-center justify-between border-b border-[var(--hairline)] px-6 py-4 shrink-0">
              <h2
                className="text-[var(--gold)] text-sm sm:text-base tracking-[0.3em]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                AVERON &middot; CRÓNICAS
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="flex items-center justify-center w-8 h-8 border border-[var(--gold)]/40 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex gap-1 px-6 pt-4 shrink-0 overflow-x-auto">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className="relative px-3 sm:px-4 py-2 text-xs tracking-[0.2em] whitespace-nowrap transition-colors"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: tab === t.id ? "var(--gold)" : "var(--foreground-dim)",
                  }}
                >
                  {t.label.toUpperCase()}
                  {tab === t.id && (
                    <span className="absolute left-0 right-0 -bottom-px h-px bg-[var(--gold)]" />
                  )}
                </button>
              ))}
              <div className="flex-1 border-b border-[var(--hairline)]" />
            </div>

            <div className="overflow-y-auto px-6 py-8">
              {tab === "historia" && (
                <div className="max-w-2xl mx-auto flex flex-col gap-5 story-text">
                  {storyParagraphs.map((p, i) => (
                    <p
                      key={i}
                      className={
                        "text-sm sm:text-base leading-relaxed text-[color:var(--foreground-dim)]" +
                        (i === 0 ? " story-first" : "")
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {tab === "habilidades" && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {abilities.map((a) => (
                    <EntryCard key={a.name} entry={a} />
                  ))}
                </div>
              )}

              {tab === "bestiario" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {bestiary.map((b) => (
                    <EntryCard key={b.name} entry={b} />
                  ))}
                </div>
              )}

              {tab === "jefes" && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {bosses.map((b) => (
                    <EntryCard key={b.name} entry={b} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
