import type { Metadata } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { esES } from '@clerk/localizations'
import { Poly, Arimo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const poly = Poly({
  variable: "--font-poly",
  subsets: ["latin"],
  weight: "400"
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InversorHouse - Oportunidades de Inversión Inmobiliaria",
  description:
    "Invierte en inmuebles analizados y accede a oportunidades exclusivas para comprar, reformar y vender.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={esES} >
      <html lang="es">
        <body
          className={`${poly.variable} ${arimo.variable} antialiased`}
        >
          <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-20">
            <Navbar />
          </header>
          <main className="pt-13">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
