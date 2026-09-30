import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

const title = `${site.name} | Estética automotiva em ${site.city}`;
const description = `Lavagem técnica, polimento e vitrificação em ${site.city}. Peça seu orçamento pelo WhatsApp.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "pt_BR", siteName: site.name },
};
export const viewport: Viewport = { themeColor: "#0A0A0B" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
