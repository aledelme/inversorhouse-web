"use client";

interface HeroSectionProps {
    onCtaClick: () => void;
}

const ChevronDownIcon = () => (
    <svg
        className="w-6 h-6 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
    </svg>
);

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f3460] via-[#1e4a73] to-[#0f3460]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a574]/20 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2563eb]/20 rounded-full filter blur-3xl animate-pulse delay-1000" />

            <div className="relative z-10 container mx-auto px-4 py-20 text-center">
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#d4a574]/20 backdrop-blur-sm rounded-full border border-[#d4a574]/40 mb-8">
                    <span className="w-2 h-2 bg-[#d4a574] rounded-full animate-pulse" />
                    <span className="text-[#d4a574] font-semibold text-sm tracking-wide uppercase">
                        Inversión Premium
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Coinvierte en{" "}
                    <span className="text-[#d4a574] italic">Grandes Proyectos</span>
                    <br className="hidden md:block" />
                    Inmobiliarios
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
                    Accede a operaciones de{" "}
                    <strong className="text-white">alto rendimiento</strong> junto a otros inversores.
                    Rentabilidades del{" "}
                    <span className="text-[#d4a574] font-bold">10% al 25% anual</span> en proyectos
                    respaldados por activos inmobiliarios reales.
                </p>

                {/* Key Stats */}
                <div className="flex flex-wrap justify-center gap-8 mb-10">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-[#d4a574]">
                            Desde 5.000€
                        </div>
                        <div className="text-white/60 text-sm">Ticket mínimo</div>
                    </div>
                    <div className="hidden sm:block w-px h-16 bg-white/20" />
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-[#d4a574]">
                            10-25%
                        </div>
                        <div className="text-white/60 text-sm">Rentabilidad anual</div>
                    </div>
                    <div className="hidden sm:block w-px h-16 bg-white/20" />
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-[#d4a574]">
                            6-36 meses
                        </div>
                        <div className="text-white/60 text-sm">Plazo de operación</div>
                    </div>
                </div>

                {/* CTA Button */}
                <button
                    onClick={onCtaClick}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#d4a574] hover:bg-[#c49464] text-[#0f3460] font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#d4a574]/30"
                >
                    Agenda tu Cita Ahora
                    <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </button>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50">
                    <ChevronDownIcon />
                </div>
            </div>
        </section>
    );
}
