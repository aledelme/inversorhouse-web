"use client";

interface FinalCTAProps {
    onCtaClick: () => void;
}

export default function FinalCTA({ onCtaClick }: FinalCTAProps) {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0f3460] via-[#1e4a73] to-[#0f3460] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-[#d4a574]/20 rounded-full filter blur-3xl" />
                <div className="absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] bg-[#2563eb]/20 rounded-full filter blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                        <svg className="w-4 h-4 text-[#d4a574]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white text-sm font-medium">
                            Plazas Limitadas por Operación
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white! mb-6 leading-tight">
                        ¿Listo para dar el siguiente paso en tu{" "}
                        <span className="text-[#d4a574]">carrera como inversor</span>?
                    </h2>                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/90! mb-10 max-w-2xl mx-auto leading-relaxed">
                        No dejes pasar la oportunidad de participar en proyectos inmobiliarios
                        de alto rendimiento. Agenda tu cita hoy y descubre las operaciones
                        activas.
                    </p>

                    {/* CTA Button */}
                    <button
                        onClick={onCtaClick}
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-[#d4a574] hover:bg-[#c49464] text-[#0f3460] font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#d4a574]/40"
                    >
                        Reservar Mi Cita Ahora
                        <svg
                            className="w-6 h-6 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </button>                    {/* Trust Text */}
                    <p className="mt-8 text-white/70! text-sm flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Sin compromiso · Información 100% confidencial
                    </p>
                </div>
            </div>
        </section>
    );
}
