import type { Metadata } from "next";
import OportunidadesSection from "@/components/OportunidadesSection";
import WhyUsSection from "@/components/WhyUsSection";
import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import { getOpportunities } from "@/lib/opportunities";
import FixIncomeSection from "@/components/FixIncomeSection";
import { getFixIncomes } from "@/lib/fix-incomes";
import HighVolumenSection from "@/components/HighVolumenSection";
import { getHighVolumens } from "@/lib/high-volumens";

// Enhanced SEO metadata for homepage
export const metadata: Metadata = {
	title: "InversorHouse - Inversiones Inmobiliarias Exclusivas | REO y Coinversión",
	description: "🏠 Accede a oportunidades inmobiliarias exclusivas fuera de mercado. Invierte en propiedades con rentabilidades del 15-40%. Coinversión desde 5.000€ con gestión profesional.",
	keywords: [
		"inversión inmobiliaria",
		"propiedades REO",
		"coinversión inmobiliaria",
		"crowdfunding inmobiliario",
		"rentabilidad 15-40%",
		"inversión España",
		"oportunidades inmobiliarias exclusivas",
		"compra reforma venta"
	],
	openGraph: {
		title: "InversorHouse - Inversiones Inmobiliarias Exclusivas",
		description: "Accede a oportunidades inmobiliarias exclusivas fuera de mercado con rentabilidades del 15-40%.",
		images: [
			{
				url: '/hero-inmobiliario.webp',
				width: 1200,
				height: 630,
				alt: 'InversorHouse - Oportunidades inmobiliarias exclusivas',
			}
		],
	},
};

export default async function HomePage() {
	// Fetch data with error handling
	const [oportunidades, fixIncomes, highVolumens] = await Promise.all([
		getOpportunities().catch(() => []),
		getFixIncomes().catch(() => []),
		getHighVolumens().catch(() => [])
	]);

	return (
		<>
			{/* Structured Data for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						"name": "InversorHouse",
						"description": "Plataforma de inversiones inmobiliarias exclusivas fuera de mercado",
						"url": "https://inversorhouse.com",
						"logo": "https://inversorhouse.com/logo.png",
						"sameAs": [
							"https://instagram.com/inversorhouse"
						],
						"contactPoint": {
							"@type": "ContactPoint",
							"telephone": "+34-XXX-XXX-XXX",
							"contactType": "customer service",
							"availableLanguage": "Spanish"
						}
					})
				}}
			/>
			<div className="flex flex-col items-center w-full min-h-screen bg-background">
				{/* Hero Section */}
				<HeroSection />

				{/* Main Content */}
				<main className="w-full">
					{/* Opportunities Section */}
					<section className="w-full py-20">
						<OportunidadesSection oportunidades={oportunidades} />
					</section>

					{/* Fixed Income Section */}
					<section id="fix-incomes" className="w-full py-20 bg-surface-secondary">
						<FixIncomeSection fixIncomes={fixIncomes} />
					</section>

					{/* High Volume Section */}
					<section id="high-volumens" className="w-full py-20">
						<HighVolumenSection highVolumens={highVolumens} />
					</section>

					{/* Why Choose Us */}
					<WhyUsSection />

					{/* About Us */}
					<AboutUsSection />
				</main>
			</div>
		</>
	);
}
