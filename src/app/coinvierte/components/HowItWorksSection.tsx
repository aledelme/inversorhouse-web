"use client";

interface Step {
    number: string;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        number: "01",
        title: "Agenda una Cita",
        description: "Reserva una videollamada de 30 minutos con nuestro equipo. Resolveremos todas tus dudas sobre las operaciones activas y el proceso de inversión.",
    },
    {
        number: "02",
        title: "Analiza la Operación",
        description: "Recibe toda la documentación del proyecto: memorándum, proyecciones financieras, garantías y condiciones. Tómate tu tiempo para analizarlo con tu asesor.",
    },
    {
        number: "03",
        title: "Conoce a otros Inversores",
        description: "Entra al grupo de WhatsApp exclusivo de la operación. Comparte impresiones y resuelve dudas con otros inversores interesados en el mismo proyecto.",
    },
    {
        number: "04",
        title: "Firma y Transfiere",
        description: "Firma el contrato directamente con el promotor. El proceso es 100% digital y seguro. Realiza tu aportación desde 5.000€.",
    },
    {
        number: "05",
        title: "Sigue el Progreso",
        description: "Recibe actualizaciones periódicas sobre el avance de la obra y los hitos alcanzados. Por WhatsApp o por correo.",
    },
    {
        number: "06",
        title: "Recibe tu Rentabilidad",
        description: "Al finalizar la operación, recibe tu capital inicial más la rentabilidad acordada. Sin sorpresas, todo según lo pactado.",
    },
];

export default function HowItWorksSection() {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-[#fafbfc] to-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold rounded-full mb-4">
                        Proceso Simple
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f3460] mb-4">
                        ¿Cómo <span className="text-[#d4a574]">funciona</span>?
                    </h2>
                    <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
                        Un proceso transparente y sencillo diseñado para que puedas
                        empezar a invertir de forma segura en pocos pasos.
                    </p>
                </div>

                {/* Steps */}
                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
                        >
                            {/* Vertical Line */}
                            {index !== steps.length - 1 && (
                                <div className="absolute left-6 md:left-10 top-16 w-0.5 h-[calc(100%-4rem)] bg-gradient-to-b from-[#d4a574] to-[#e2e8f0]" />
                            )}

                            {/* Step Number */}
                            <div className="relative flex-shrink-0 w-12 h-12 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-[#0f3460] to-[#1e4a73] text-white rounded-2xl shadow-lg shadow-[#0f3460]/20">
                                <span className="text-lg md:text-2xl font-bold">
                                    {step.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-1 md:pt-4">
                                <h3 className="text-xl md:text-2xl font-bold text-[#0f3460] mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-[#64748b] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
