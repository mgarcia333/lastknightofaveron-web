"use client";

import { useEffect, useRef, useState } from "react";

// Unity WebGL build output goes in public/game/Build/, exported from
// Unity with Build Name "LastKnightOfAveron" (File > Build Settings > WebGL > Build).
const BUILD_NAME = "LastKnightOfAveron";
const BUILD_URL = "/game/Build";
const LOADER_SRC = `${BUILD_URL}/${BUILD_NAME}.loader.js`;

interface UnityInstance {
  Quit: () => Promise<void>;
  SetFullscreen: (state: 0 | 1) => void;
}

declare global {
  interface Window {
    createUnityInstance?: (
      canvas: HTMLCanvasElement,
      config: Record<string, unknown>,
      onProgress?: (progress: number) => void
    ) => Promise<UnityInstance>;
  }
}

export default function UnityGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instanceRef = useRef<UnityInstance | null>(null);
  // Guards against React Strict Mode's dev-only double-invoke of effects,
  // which would otherwise start the WASM download twice and abort the
  // first (real) attempt when the script tag got removed mid-fetch.
  const startedRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || startedRef.current) return;
    startedRef.current = true;

    const startGame = () => {
      if (!window.createUnityInstance) {
        setError("No se pudo inicializar el motor del juego.");
        return;
      }
      window
        .createUnityInstance(
          canvas,
          {
            dataUrl: `${BUILD_URL}/${BUILD_NAME}.data.unityweb`,
            frameworkUrl: `${BUILD_URL}/${BUILD_NAME}.framework.js.unityweb`,
            codeUrl: `${BUILD_URL}/${BUILD_NAME}.wasm.unityweb`,
            streamingAssetsUrl: "StreamingAssets",
            companyName: "LastKnightOfAveron",
            productName: "The Last Knight of Averon",
            productVersion: "1.0",
            devicePixelRatio: window.devicePixelRatio || 1,
          },
          (p) => setProgress(p)
        )
        .then((instance) => {
          instanceRef.current = instance;
          setReady(true);
        })
        .catch((err: unknown) => {
          console.error(err);
          setError("No se pudo cargar el juego. Comprueba que la build WebGL este publicada.");
        });
    };

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${LOADER_SRC}"]`);
    if (existing) {
      if (window.createUnityInstance) {
        startGame();
      } else {
        existing.addEventListener("load", startGame, { once: true });
      }
    } else {
      const script = document.createElement("script");
      script.src = LOADER_SRC;
      script.onload = startGame;
      script.onerror = () => setError("No se encontro la build del juego en /game/Build.");
      document.body.appendChild(script);
    }

    return () => {
      // Real unmount only: quit the running instance to free memory/audio.
      // We deliberately never remove the loader <script> here — doing so
      // is what aborted the WASM streaming fetch under Strict Mode.
      instanceRef.current?.Quit().catch(() => {});
    };
  }, []);

  const handleFullscreen = () => {
    instanceRef.current?.SetFullscreen(1);
  };

  return (
    <div className="relative w-full aspect-video max-w-[1920px] bg-black overflow-hidden frame corner-marks">
      <canvas
        id="unity-canvas"
        tabIndex={-1}
        ref={canvasRef}
        width={1920}
        height={1080}
        className="w-full h-full block"
        style={{ visibility: ready ? "visible" : "hidden" }}
      />
      {ready && (
        <button
          type="button"
          onClick={handleFullscreen}
          aria-label="Pantalla completa"
          title="Pantalla completa (1920x1080)"
          className="absolute top-3 right-3 flex items-center justify-center w-10 h-10 border border-[var(--gold)]/60 bg-black/60 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3H4v4M16 3h4v4M8 21H4v-4M16 21h4v-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      {!ready && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white/80">
          <span style={{ fontFamily: "var(--font-heading)" }} className="tracking-wide text-[var(--accent)]">
            CARGANDO...
          </span>
          <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--accent)] transition-all"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center px-8 text-center text-white/70 text-sm">
          {error}
        </div>
      )}
    </div>
  );
}
