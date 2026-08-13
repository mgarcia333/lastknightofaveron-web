import Link from "next/link";
import UnityGame from "@/components/UnityGame";
import { GithubButton } from "@/components/GithubButton";

export const metadata = {
  title: "Jugar — The Last Knight of Averon",
};

const controls = [
  { keys: ["W", "A", "S", "D"], action: "Moverse" },
  { keys: ["Espacio"], action: "Saltar" },
  { keys: ["Clic izq.", "Enter"], action: "Atacar" },
  { keys: ["Clic der."], action: "Bola de fuego" },
  { keys: ["Shift"], action: "Esquivar" },
  { keys: ["E"], action: "Interactuar" },
  { keys: ["I"], action: "Inventario" },
  { keys: ["ESC"], action: "Pausa" },
];

function KeyCap({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center justify-center min-w-[2.25rem] h-8 px-2 border border-[var(--gold-dim)] text-[var(--gold)] text-xs tracking-wide"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      {label}
    </span>
  );
}

export default function PlayPage() {
  return (
    <div className="flex flex-col flex-1 px-6 pt-28 pb-16">
      <header className="fixed top-0 inset-x-0 z-20 border-b border-[var(--hairline)] bg-[var(--ink)]/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <GithubButton />
            <Link
              href="/"
              className="text-xs tracking-[0.3em] text-[var(--gold)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ← AVERON
            </Link>
          </div>
          <Link href="/historia" className="btn !py-2 !px-4 !text-xs">
            Historia y arte
          </Link>
        </div>
      </header>

      <div className="text-center mb-10">
        <p className="eyebrow">The Last Knight of Averon</p>
      </div>

      <main className="flex-1 flex flex-col lg:flex-row items-start justify-center gap-8 max-w-[2200px] mx-auto w-full">
        <UnityGame />

        <aside className="w-full lg:w-64 shrink-0 frame corner-marks p-6 bg-[var(--panel)]/60">
          <h2
            className="text-[var(--gold)] text-sm mb-5 tracking-[0.3em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CONTROLES
          </h2>
          <div className="flex flex-col gap-4">
            {controls.map((c) => (
              <div key={c.action} className="flex items-center justify-between gap-3">
                <div className="flex gap-1 flex-wrap">
                  {c.keys.map((k) => (
                    <KeyCap key={k} label={k} />
                  ))}
                </div>
                <span className="text-xs text-[color:var(--foreground-dim)] text-right">
                  {c.action}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </main>

      <p className="text-xs text-[color:var(--foreground-dim)] max-w-md text-center mx-auto mt-10">
        El juego pesa varios MB, dale un momento a la carga la primera vez.
      </p>
    </div>
  );
}
