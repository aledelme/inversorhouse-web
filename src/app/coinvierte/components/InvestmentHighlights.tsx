"use client";

const CheckIcon = () => (
    <svg className="w-5 h-5 text-[#059669] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
);

const highlights = [
    "Rentabilidad anual del 10% al 25% antes de impuestos",
    "Ticket flexible desde 5.000€",
    "Plazos de 6 meses a 3 años según proyecto",
    "Garantías hipotecarias sobre activos reales",
    "Firma directa con el promotor de la obra",
    "Información continua vía WhatsApp",
    "Documentación 100% transparente",
    "Comunidad de inversores profesionales",
];

interface InvestmentHighlightsProps {
    onCtaClick: () => void;
}

export default function InvestmentHighlights({ onCtaClick }: InvestmentHighlightsProps) {
    return (
        <section className="py-20 lg:py-28 bg-[#0f3460] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5h18V20H22v-2h18v-2H22v-2h18v-2H22V8h18V6H22V4h18V2H22V0h18v40H22V20.5zM0 20h18v2H0v-2zm0 4h18v2H0v-2zm0 4h18v2H0v-2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a574]/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2563eb]/10 rounded-full filter blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-[#d4a574]/20 text-[#d4a574] text-sm font-semibold rounded-full mb-6">
                            Condiciones de Inversión
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white! mb-6">
                            Inversiones{" "}
                            <span className="text-[#d4a574]">Transparentes</span>
                            <br />
                            y Rentables
                        </h2>
                        <p className="text-lg text-white/70! mb-8 leading-relaxed">
                            Nuestras coinversiones están diseñadas para ofrecer
                            la máxima seguridad y rentabilidad. Cada proyecto es
                            analizado exhaustivamente antes de presentarlo a
                            nuestra comunidad de inversores.
                        </p>
                        <button
                            onClick={onCtaClick}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4a574] hover:bg-[#c49464] text-[#0f3460] font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#d4a574]/30"
                        >
                            Reservar Mi Cita
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Content - Highlights Card */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                        <h3 className="text-2xl font-bold text-[#0f3460] mb-8">
                            Lo que incluye cada operación
                        </h3>
                        <ul className="space-y-4">
                            {highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckIcon />
                                    <span className="text-[#1a2332]">{highlight}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Trust Badge */}
                        <div className="mt-8 pt-8 border-t border-[#e2e8f0]">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-[#0f3460] flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                                        JM
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-[#d4a574] flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                                        AL
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                                        CR
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-[#059669] flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                                        +
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#0f3460]">Inversores activos</p>
                                    <p className="text-sm text-[#64748b]">Únete a nuestra comunidad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
