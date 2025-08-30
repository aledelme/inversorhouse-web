"use client";

import Image from "next/image";
import Link from "next/link";

// interface StatItem {
//     value: string;
//     label: string;
// }

// const stats: StatItem[] = [
//     { value: "15-40%", label: "Rentabilidad Promedio" },
//     { value: "200+", label: "Inversores Activos" },
//     { value: "€2.5M+", label: "Invertidos" },
//     { value: "95%", label: "Tasa de Éxito" },
// ];

// SVG Icons as components
const ArrowRightIcon = () => (
    <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

// const PlayCircleIcon = () => (
//     <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//     </svg>
// );

export default function HeroSection() {
    return (
        <section className="relative min-h-[95vh] w-full flex flex-col justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-inmobiliario.webp"
                    alt="Inversión inmobiliaria profesional"
                    fill
                    className="object-cover object-center opacity-75"
                    priority
                    sizes="100vw"
                    quality={90}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center gap-7 text-center p-5">
                {/* Badge */}
                {/* <div className="inline-flex items-center px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-6">
                        <span className="text-accent font-semibold text-sm">
                            🏆 Plataforma de Inversión #1 en REO
                        </span>
                    </div> */}

                {/* Main Headline */}
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight text-shadow-lg !text-white font-arimo">
                    Invierte en <span className="italic">oportunidades inmobiliarias</span> <br />
                    fuera de mercado y <span className="italic">gestionadas por expertos</span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl !text-white mb-8 max-w-3xl mx-auto leading-relaxed text-shadow-lg bg-black/10 backdrop-blur-sm rounded-lg p-6">
                    Accede a propiedades <strong>exclusivas</strong> analizadas por expertos.
                    Desde <strong>5.000€</strong> o compra completa. Gestión profesional garantizada.
                </p>
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/oportunidades"
                        className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group min-w-[200px]"
                    >
                        Ver Oportunidades
                        <ArrowRightIcon />
                    </Link>

                    {/* <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 min-w-[200px]">
                            <PlayCircleIcon />
                            Cómo Funciona
                        </button> */}
                </div>

                {/* Trust Indicators */}
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl md:text-3xl font-bold mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-white/80 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div> */}
            </div>
        </section>
    );
}
