import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Espada y hechicería",
    body: "Combate cuerpo a cuerpo, esquiva con el dash y lanza bolas de fuego para abrirte paso entre las ruinas de Averon.",
  },
  {
    title: "Explora Averon",
    body: "Desde la superficie hasta la ciudad sellada bajo la luna de sangre: cofres, llaves y pociones escondidos en cada rincón.",
  },
  {
    title: "Progreso local",
    body: "Tu partida se guarda en tu propio navegador. Nada de cuentas, nada de esperas.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="w-full px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <span
          className="text-lg sm:text-xl tracking-widest text-accent"
          style={{ fontFamily: "var(--font-display)" }}
        >
          THE LAST KNIGHT OF AVERON
        </span>
        <Link
          href="/play"
          className="px-4 py-2 text-sm tracking-wide text-black bg-[var(--accent)] rounded-sm hover:brightness-110 transition"
        >
          Jugar
        </Link>
      </header>

      <section className="relative flex flex-col items-center text-center px-6 pt-8 pb-20">
        <div className="relative w-full max-w-4xl aspect-[7/4] rounded-lg overflow-hidden panel-border">
          <Image
            src="/images/titlecard.webp"
            alt="The Last Knight of Averon"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="mt-8 max-w-xl text-base sm:text-lg text-white/70">
          Un action-RPG 2D de fantasía oscura. El último caballero se alza entre las
          tumbas de Averon para enfrentarse a lo que despertó bajo la luna de sangre.
          Sin instalar nada, directo desde el navegador.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/play"
            className="px-10 py-4 text-lg tracking-wide text-black bg-[var(--accent)] rounded-sm hover:brightness-110 transition text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            JUGAR AHORA
          </Link>
          <a
            href="https://github.com/mgarcia333/lastknightofaveron"
            target="_blank"
            rel="noreferrer"
            className="px-10 py-4 text-lg tracking-wide text-white/80 border border-white/20 rounded-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            CODIGO FUENTE
          </a>
        </div>
      </section>

      <section className="px-6 pb-24 max-w-5xl mx-auto grid gap-6 sm:grid-cols-3 w-full">
        {features.map((f) => (
          <div
            key={f.title}
            className="panel-border rounded-lg p-6 bg-[var(--panel)]/70"
          >
            <h2
              className="text-[var(--gold)] text-xl mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {f.title}
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">{f.body}</p>
          </div>
        ))}
      </section>

      <footer className="mt-auto px-6 py-8 text-center text-xs text-white/40 border-t border-white/10">
        The Last Knight of Averon — proyecto de portafolio, DAM. Hecho con Unity + Next.js.
      </footer>
    </div>
  );
}
