import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verbrauchscheck — Deine Verbrauchsabrechnung, endlich verständlich",
  description:
    "Lade deine monatliche Verbrauchsabrechnung hoch und verstehe sofort, was die Zahlen bedeuten.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
