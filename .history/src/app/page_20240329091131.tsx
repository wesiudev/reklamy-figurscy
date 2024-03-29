import GetQuote from "@/components/GetQuote";
import UnderHeaderInfo from "@/components/Header/UnderHeaderInfo";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reklamy Figurscy | Projekt - Wykonanie - Montaż",
  description:
    "Bilboardy, Litery blokowe, Banery, Flagi, Maszty, Kasetony, Reklamy Na Autach",
  authors: [{ name: "wesiu.dev", url: "https://wesiu.dev" }],
  publisher: "wesiu.dev",
};
export default async function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <UnderHeaderInfo />
      <GetQuote />
    </div>
  );
}
