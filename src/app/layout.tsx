import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";


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
        <header className="w-full bg-white dark:bg-[#23272f] shadow-sm fixed top-0 left-0 z-20">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary tracking-tight">
                🏠 Inversor
                <span className="text-secondary">House</span>
              </span>
            </div>
            <ul className="hidden sm:flex items-center gap-6 text-base font-medium">
              <li>
                <a
                  href="#oportunidades"
                  className="hover:text-primary transition"
                >
                  Oportunidades
                </a>
              </li>
              <li>
                <a
                  href="#conocenos"
                  className="hover:text-primary transition"
                >
                  Conócenos
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition"
                >
                  Acceder
                </a>
              </li>
              <li>
                <ThemeSwitcher />
              </li>
            </ul>
            <div className="sm:hidden flex items-center gap-2">
              <a
                href="/login"
                className="bg-primary text-white px-4 py-2 rounded-full text-sm"
              >
                Acceder
              </a>
              <ThemeSwitcher />
            </div>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
