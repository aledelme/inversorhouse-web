"use client";

interface OpportunityVideoSectionProps {
    videoId: string;
    title?: string;
    description?: string;
    onCtaClick: () => void;
}

export default function OpportunityVideoSection({
    videoId,
    title = "Oportunidad Activa",
    description = "Conoce en detalle la operación de coinversión que tenemos abierta actualmente. En este vídeo te presentamos el proyecto, las condiciones y las rentabilidades esperadas.",
    onCtaClick,
}: OpportunityVideoSectionProps) {
    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#d4a574]/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0f3460]/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#059669]/10 text-[#059669] text-sm font-semibold rounded-full mb-4">
                        <span className="w-2 h-2 bg-[#059669] rounded-full animate-pulse" />
                        Operación Abierta
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f3460] mb-4">
                        {title.split(" ").map((word, i) =>
                            i === title.split(" ").length - 1
                                ? <span key={i} className="text-[#d4a574]">{word}</span>
                                : <span key={i}>{word} </span>
                        )}
                    </h2>
                    <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* Video Container */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0f3460]/20 border-4 border-[#d4a574]/30">
                        {/* Live Badge */}
                        <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-[#059669] text-white text-xs font-bold rounded-full shadow-lg">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            EN CAPTACIÓN
                        </div>

                        {/* Aspect Ratio Container */}
                        <div className="relative w-full bg-[#0f3460]" style={{ paddingBottom: "56.25%" }}>
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                                title="Presentación Oportunidad de Coinversión"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                        <div className="bg-[#fafbfc] rounded-xl p-4 border border-[#e2e8f0] text-center">
                            <div className="text-2xl font-bold text-[#d4a574]">15% Anual</div>
                            <div className="text-sm text-[#64748b]">Rentabilidad fija</div>
                        </div>
                        <div className="bg-[#fafbfc] rounded-xl p-4 border border-[#e2e8f0] text-center">
                            <div className="text-2xl font-bold text-[#0f3460]">48 meses</div>
                            <div className="text-sm text-[#64748b]">Plazo estimado</div>
                        </div>
                        <div className="bg-[#fafbfc] rounded-xl p-4 border border-[#e2e8f0] text-center">
                            <div className="text-2xl font-bold text-[#059669]">Abierta</div>
                            <div className="text-sm text-[#64748b]">Captación activa</div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12 text-2xl">
                        <button
                            onClick={onCtaClick}
                            className="inline-flex items-center gap-2 px-12 py-6 bg-[#0f3460] hover:bg-[#1e4a73] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#0f3460]/30"
                        >
                            Quiero Saber Más
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
