import type { Metadata, Viewport } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { esES } from '@clerk/localizations'
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FacebookPixel from "@/components/FacebookPixel";

// Modern, professional fonts for real estate
const inter = Inter({
  variable: "--font-arimo",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-poly",
  subsets: ["latin"],
  display: 'swap',
});

// Enhanced SEO metadata
export const metadata: Metadata = {
  title: {
    default: "InversorHouse - Inversiones Inmobiliarias Exclusivas",
    template: "%s | InversorHouse"
  },
  description: "Accede a oportunidades inmobiliarias exclusivas fuera de mercado. Invierte en propiedades REO analizadas por expertos con rentabilidades del 15-40%. Coinversión desde 5.000€.",
  keywords: [
    "inversión inmobiliaria",
    "propiedades REO",
    "coinversión",
    "crowdfunding inmobiliario",
    "rentabilidad inmobiliaria",
    "inversión en España",
    "oportunidades inmobiliarias",
    "reforma y venta"
  ],
  authors: [{ name: "InversorHouse" }],
  creator: "InversorHouse",
  publisher: "InversorHouse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://inversorhouse.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://inversorhouse.com',
    title: 'InversorHouse - Inversiones Inmobiliarias Exclusivas',
    description: 'Accede a oportunidades inmobiliarias exclusivas fuera de mercado con rentabilidades del 15-40%.',
    siteName: 'InversorHouse',
    images: [
      {
        url: '/hero-inmobiliario.webp',
        width: 1200,
        height: 630,
        alt: 'InversorHouse - Inversiones Inmobiliarias',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InversorHouse - Inversiones Inmobiliarias Exclusivas',
    description: 'Accede a oportunidades inmobiliarias exclusivas fuera de mercado con rentabilidades del 15-40%.',
    images: ['/hero-inmobiliario.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    // Add other verification codes as needed
  },
};

export const viewport: Viewport = {
  themeColor: '#0f3460',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
        <body className="min-h-screen bg-background text-foreground antialiased">
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/60 border-b border-color">
              <Navbar />
            </header>

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
          <FacebookPixel />
        </body>
      </html>
    </ClerkProvider>
  );
}
