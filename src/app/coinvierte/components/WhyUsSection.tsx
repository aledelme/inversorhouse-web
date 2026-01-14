"use client";

interface Benefit {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// SVG Icons
const UsersIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const DocumentCheckIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ShieldCheckIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const ChatBubbleIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const AcademicCapIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
);

const benefits: Benefit[] = [
    {
        icon: <UsersIcon />,
        title: "Invierte con Profesionales",
        description: "Únete a una comunidad de inversores profesionales y patrimoniales. Diversifica tu cartera participando en proyectos de gran envergadura que antes solo estaban al alcance de unos pocos.",
    },
    {
        icon: <DocumentCheckIcon />,
        title: "Gestión Simplificada",
        description: "Firma directamente con el promotor de la obra. Sin intermediarios innecesarios. Documentación clara y proceso transparente de principio a fin.",
    },
    {
        icon: <ShieldCheckIcon />,
        title: "Activos con Garantías Reales",
        description: "Invierte en el activo más seguro del mercado: la vivienda. Todas las operaciones están respaldadas por garantías hipotecarias y activos tangibles.",
    },
    {
        icon: <ChatBubbleIcon />,
        title: "Información en Tiempo Real",
        description: "Grupo exclusivo de WhatsApp para cada operación. Mantente informado del avance del proyecto, hitos importantes y cualquier novedad relevante.",
    },
    {
        icon: <AcademicCapIcon />,
        title: "Aprende Mientras Inviertes",
        description: "Crea comunidad y contactos valiosos. Accede a formación exclusiva y aprende de primera mano cómo funcionan las grandes operaciones inmobiliarias.",
    },
];

interface BenefitsSectionProps {
    onCtaClick: () => void;
}

export default function WhyUsSection({ onCtaClick }: BenefitsSectionProps) {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {/* <span className="inline-block px-4 py-1.5 bg-[#d4a574]/10 text-[#d4a574] text-sm font-semibold rounded-full mb-4">
                        Ventajas Exclusivas
                    </span> */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f3460] mb-4">
                        ¿Por qué <span className="text-[#d4a574]">coinvertir</span> con nosotros?
                    </h2>
                    <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
                        La coinversión inmobiliaria te permite acceder a oportunidades de alto rendimiento
                        con todas las ventajas de la inversión profesional.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-[#fafbfc] rounded-2xl border border-[#e2e8f0] hover:border-[#d4a574]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#0f3460]/5 hover:-translate-y-1"
                        >
                            {/* Icon Container */}
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0f3460] to-[#1e4a73] text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {benefit.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-[#0f3460] mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-[#64748b] leading-relaxed">
                                {benefit.description}
                            </p>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#d4a574]/10 to-transparent rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button
                        onClick={onCtaClick}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f3460] hover:bg-[#1e4a73] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#0f3460]/30"
                    >
                        Quiero Saber Más
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
