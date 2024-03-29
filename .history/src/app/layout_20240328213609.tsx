import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";
import LayoutProvider from "@/components/LayoutProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   
  return (
    <html lang="pl" className="scrollbar">
      <body className={`${inter.className} ${druk.variable}`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}

const inter = Inter({ subsets: ["latin"] });
const druk = localFont({
  src: "../../public/fonts/Druk-wide.ttf",
  variable: "--font-druk",
});

export const metadata: Metadata = {
  title: "Reklamy Figurscy | Projekt - Wykonanie - Montaż",
  description:
    "Bilboardy, Litery blokowe, Banery, Flagi, Maszty, Kasetony, Reklamy Na Autach",
  authors: [{ name: "wesiu.dev", url: "https://wesiu.dev" }],
  publisher: "wesiu.dev",
  keywords: [
    "Reklamy Figurscy",
    "Projekt reklamy",
    "Wykonanie reklamy",
    "Montaż reklam",
    "Bilboardy reklamowe",
    "Litery blokowe",
    "Banery reklamowe",
    "Flagi",
    "Maszty",
    "Kasetony",
    "Reklamy Na Autach",
    "Reklama Grudziądz",
    "Reklama",
  ],
  icons: [
    {
      url: "/icons/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/icons/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/icons/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      url: "/icons/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    {
      url: "/icons/favicon.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/icons/favicon.png",
      sizes: "16x16",
      type: "image/png",
    },
  ],
};
