// "use client";
'use server'
import OportunidadesSection from "@/components/OportunidadesSection";
import WhyUsSection from "@/components/WhyUsSection";
import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import { getOpportunities } from "@/lib/opportunities";
import FixIncomeSection from "@/components/FixIncomeSection";
import { getFixIncomes } from "@/lib/fix-incomes";
import HighVolumenSection from "@/components/HighVolumenSection";
import { getHighVolumens } from "@/lib/high-volumens";

export default async function Home() {
	const oportunidades = await getOpportunities();
	const fixIncomes = await getFixIncomes()
	const highVolumens = await getHighVolumens();
	return (
		<div className="flex flex-col items-center w-full min-h-screen bg-background">
			<HeroSection />
			<OportunidadesSection oportunidades={oportunidades} />
			<FixIncomeSection oportunidades={fixIncomes} />
			<HighVolumenSection oportunidades={highVolumens} />
			<WhyUsSection />
			<AboutUsSection />
		</div>
	);
}
