"use client";

interface VideoSectionProps {
    videoId: string;
}

export default function VideoSection({ videoId }: VideoSectionProps) {
    return (
        <section className="py-20 lg:py-28 bg-[#fafbfc]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 bg-[#0f3460]/10 text-[#0f3460] text-sm font-semibold rounded-full mb-4">
                        Conoce el Modelo
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f3460] mb-4">
                        Descubre cómo funciona la <span className="text-[#d4a574]">Coinversión</span>
                    </h2>
                    <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
                        En este vídeo te explicamos paso a paso cómo puedes participar en
                        grandes proyectos inmobiliarios junto a otros inversores.
                    </p>
                </div>

                {/* Video Container */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0f3460]/20 bg-[#0f3460]">
                        {/* Aspect Ratio Container */}
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                                title="Presentación Coinversión InversorHouse"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#d4a574]/30 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2563eb]/20 rounded-full blur-2xl pointer-events-none" />
                    </div>

                    {/* Video Caption */}
                    <p className="text-center text-[#64748b] text-sm mt-6">
                        <span className="inline-flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Duración aproximada: 5 minutos
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
