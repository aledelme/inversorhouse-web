import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-20">
          <Navbar />
        </header>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
