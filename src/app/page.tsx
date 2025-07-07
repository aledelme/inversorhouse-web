// "use client";
'use server'
import OportunidadesSection from "@/components/OportunidadesSection";
import WhyUsSection from "@/components/WhyUsSection";
import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import { getOpportunities } from "@/lib/opportunities";

export default async function Home() {
	const oportunidades = await getOpportunities();
	return (
		<div className="flex flex-col items-center w-full min-h-screen bg-background">
			<HeroSection />
			<OportunidadesSection oportunidades={oportunidades} />
			<WhyUsSection />
			<AboutUsSection />
		</div>
	);
}
