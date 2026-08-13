import Image from "next/image";
import Link from "next/link";
import { GithubButton } from "@/components/GithubButton";
import { PortraitCard } from "@/components/lore/PortraitCard";
import { abilities, bestiary, bosses, storyParagraphs } from "@/components/lore/lore-data";

export const metadata = {
  title: "Crónicas de Averon — The Last Knight of Averon",
  description:
    "Historia, habilidades, bestiario y jefes de The Last Knight of Averon, ilustrados con el arte real del juego.",
};

const sections = [
  { id: "historia", label: "Historia" },
  { id: "caballero", label: "El Caballero" },
  { id: "bestiario", label: "Bestiario" },
  { id: "jefes", label: "Guardianes" },
];

export default function HistoriaPage() {
  return (
    <div className="flex flex-col">
      <header className="fixed top-0 inset-x-0 z-30 border-b border-[var(--hairline)] bg-[var(--ink)]/80 backdrop-blur-sm">
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
          <Link href="/play" className="btn btn-solid !py-2 !px-5 !text-xs">
            Jugar
          </Link>
        </div>
      </header>

      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bloodmoon.webp"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-black/30" />
        </div>

        <div className="relative px-6 pb-14 pt-40 max-w-6xl mx-auto w-full">
          <p className="eyebrow mb-4">Una visita guiada</p>
          <h1
            className="text-4xl sm:text-6xl text-[var(--foreground)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Crónicas de Averon
          </h1>
          <p className="max-w-lg text-[color:var(--foreground-dim)] leading-relaxed">
            Historia, habilidades, bestiario y guardianes — contados con el arte real
            recortado directamente del proyecto.
          </p>
        </div>
      </section>

      <nav className="sticky top-[57px] z-20 border-b border-[var(--hairline)] bg-[var(--ink)]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 flex gap-6 overflow-x-auto">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs tracking-[0.2em] whitespace-nowrap py-3 text-[color:var(--foreground-dim)] hover:text-[var(--gold)] transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {s.label.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      <section id="historia" className="scroll-mt-28 px-6 py-24">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <div className="flex flex-col gap-5 story-text">
            <p className="eyebrow mb-1">I. Historia</p>
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
          <div className="relative aspect-[3/4] frame corner-marks overflow-hidden">
            <Image
              src="/images/titlecard.webp"
              alt="Averon bajo la luna de sangre"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="caballero" className="scroll-mt-28 px-6 py-24 border-t border-[var(--hairline)]">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">II. El Caballero</p>
          <hr className="rule mb-12" />

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
            <div
              className="relative aspect-[3/4] frame corner-marks flex items-center justify-center overflow-hidden"
              style={{ background: "radial-gradient(circle at 50% 40%, rgba(179,18,47,0.28), transparent 70%)" }}
            >
              <Image
                src="/images/art/attack.png"
                alt="El último caballero"
                width={360}
                height={360}
                className="object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.7)]"
                style={{ imageRendering: "pixelated", width: "78%", height: "auto" }}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {abilities.map((a) => (
                <PortraitCard key={a.name} entry={a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="bestiario" className="scroll-mt-28 px-6 py-24 border-t border-[var(--hairline)]">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">III. Bestiario</p>
          <hr className="rule mb-12" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {bestiary.map((b) => (
              <PortraitCard key={b.name} entry={b} />
            ))}
          </div>
        </div>
      </section>

      <section id="jefes" className="scroll-mt-28 px-6 py-24 border-t border-[var(--hairline)]">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">IV. Guardianes</p>
          <hr className="rule mb-12" />
          <div className="grid sm:grid-cols-3 gap-6">
            {bosses.map((b) => (
              <PortraitCard key={b.name} entry={b} size="lg" />
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-auto px-6 py-10 border-t border-[var(--hairline)]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[color:var(--foreground-dim)]">
          <Link
            href="/"
            className="tracking-[0.15em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ← VOLVER A AVERON
          </Link>
          <Link href="/play" className="btn btn-solid !py-2 !px-5 !text-xs">
            Jugar ahora
          </Link>
        </div>
      </footer>
    </div>
  );
}
