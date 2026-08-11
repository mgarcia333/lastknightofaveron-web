import Image from "next/image";
import Link from "next/link";

const chapters = [
  {
    n: "I",
    title: "Espada y hechicería",
    body: "Combate cuerpo a cuerpo, esquiva con el dash y lanza bolas de fuego para abrirte paso entre las ruinas de Averon.",
  },
  {
    n: "II",
    title: "Explora Averon",
    body: "Desde la superficie hasta la ciudad sellada bajo la luna de sangre: cofres, llaves y pociones escondidos en cada rincón.",
  },
  {
    n: "III",
    title: "Progreso local",
    body: "Tu partida se guarda en tu propio navegador. Nada de cuentas, nada de esperas — cierra y vuelve cuando quieras.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="fixed top-0 inset-x-0 z-20 border-b border-[var(--hairline)] bg-[var(--ink)]/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span
            className="text-sm tracking-[0.4em] text-[var(--gold)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            AVERON
          </span>
          <Link href="/play" className="btn btn-solid !py-2 !px-5 !text-xs">
            Jugar
          </Link>
        </div>
      </header>

      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/titlecard.webp"
            alt="The Last Knight of Averon"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        </div>

        <div className="relative px-6 pb-20 pt-40 max-w-6xl mx-auto w-full">
          <p className="eyebrow mb-5">Action-RPG · Fantasía oscura</p>
          <p className="max-w-lg text-lg text-[color:var(--foreground-dim)] leading-relaxed mb-10">
            El último caballero se alza entre las tumbas de Averon para enfrentarse a lo
            que despertó bajo la luna de sangre. Sin instalar nada, directo desde el
            navegador.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/play" className="btn btn-solid">
              Jugar ahora
            </Link>
            <a
              href="https://github.com/mgarcia333/lastknightofaveron"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Código fuente
            </a>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-28">
        <div className="absolute inset-0 -z-10 opacity-[0.06]">
          <Image
            src="/images/bloodmoon.webp"
            alt=""
            fill
            className="object-cover grayscale"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-3">El juego</p>
          <hr className="rule mb-14" />

          <div className="flex flex-col">
            {chapters.map((c, i) => (
              <div key={c.n}>
                <div className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-6 sm:gap-10 py-10">
                  <span
                    className="text-[var(--gold-dim)] leading-none select-none"
                    style={{ fontFamily: "var(--font-display)", fontSize: "3.25rem" }}
                    aria-hidden
                  >
                    {c.n}
                  </span>
                  <div>
                    <h2
                      className="text-[var(--foreground)] text-xl mb-3 tracking-[0.08em]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {c.title.toUpperCase()}
                    </h2>
                    <p className="text-[color:var(--foreground-dim)] leading-relaxed max-w-xl">
                      {c.body}
                    </p>
                  </div>
                </div>
                {i < chapters.length - 1 && <hr className="rule" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-auto px-6 py-10 border-t border-[var(--hairline)]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[color:var(--foreground-dim)]">
          <span style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.15em" }}>
            THE LAST KNIGHT OF AVERON
          </span>
          <span>Proyecto de portafolio, DAM — Unity + Next.js</span>
        </div>
      </footer>
    </div>
  );
}
