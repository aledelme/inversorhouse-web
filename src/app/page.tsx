"use client";

import OportunidadesSection from "@/components/OportunidadesSection";
import WhyUsSection from "@/components/WhyUsSection";
import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
	return (
		<div className="flex flex-col items-center w-full min-h-screen bg-background">
			<HeroSection />
			<OportunidadesSection />
			<WhyUsSection />
			<AboutUsSection />
		</div>
	);
}
