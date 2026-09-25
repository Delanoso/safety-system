import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./brochure.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-brochure-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-brochure-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salus — Health & Safety Management System",
  description:
    "Salus is a multi-company health and safety platform for workplaces worldwide: inspections, incidents, PPE, appointments, contractors, and compliance — with WhatsApp e-signatures and branded PDFs.",
};

export default function BrochureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`brochure-root ${outfit.variable} ${syne.variable}`}>
      {children}
    </div>
  );
}
