import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Last Knight of Averon",
  description:
    "Action-RPG 2D de fantasía oscura. Explora las ruinas de Averon bajo una luna de sangre. Juega gratis en el navegador.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
