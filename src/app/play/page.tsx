import Link from "next/link";
import Image from "next/image";
import UnityGame from "@/components/UnityGame";

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
      className="inline-flex items-center justify-center min-w-[2.25rem] h-8 px-2 rounded-sm border border-[var(--gold)]/50 bg-black/50 text-[var(--gold)] text-xs tracking-wide shadow-[0_0_8px_rgba(201,169,97,0.15)]"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {label}
    </span>
  );
}

export default function PlayPage() {
  return (
    <div className="flex flex-col flex-1 px-6 py-8">
      <header className="w-full flex items-center justify-between max-w-6xl mx-auto mb-4">
        <Link
          href="/"
          className="text-sm tracking-widest text-accent"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ← VOLVER
        </Link>
      </header>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="relative w-64 h-36 sm:w-80 sm:h-44 rounded-md overflow-hidden panel-border">
          <Image
            src="/images/titlecard.webp"
            alt="The Last Knight of Averon"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <main className="flex-1 flex flex-col lg:flex-row items-start justify-center gap-6 max-w-6xl mx-auto w-full">
        <UnityGame />

        <aside className="w-full lg:w-64 shrink-0 panel-border rounded-lg p-5 bg-[var(--panel)]/70">
          <h2
            className="text-[var(--gold)] text-base mb-4 tracking-widest"
            style={{ fontFamily: "var(--font-display)" }}
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
                <span className="text-xs text-white/60 text-right">{c.action}</span>
              </div>
            ))}
          </div>
        </aside>
      </main>

      <p className="text-xs text-white/40 max-w-md text-center mx-auto mt-8">
        El juego pesa varios MB, dale un momento a la carga la primera vez.
      </p>
    </div>
  );
}
