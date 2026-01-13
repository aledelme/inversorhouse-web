"use client";

import { useState } from "react";

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "¿Cuál es el ticket mínimo para coinvertir?",
        answer: "El ticket mínimo es de 5.000€, aunque puede variar según la operación específica. Esta flexibilidad permite a inversores de diferentes perfiles participar en proyectos inmobiliarios de gran envergadura.",
    },
    {
        question: "¿Qué rentabilidad puedo esperar?",
        answer: "Las rentabilidades oscilan entre el 10% y el 25% anual antes de impuestos, dependiendo del tipo de operación, el riesgo asociado y el plazo de la misma. Cada proyecto tiene sus condiciones específicas que se detallan en la documentación.",
    },
    {
        question: "¿Cuánto tiempo durará mi inversión?",
        answer: "Los plazos de las operaciones varían desde 6 meses hasta 3 años, según la naturaleza del proyecto. Puede tratarse de una reforma y venta rápida o de un proyecto de construcción de obra nueva más extenso.",
    },
    {
        question: "¿Qué garantías tengo como inversor?",
        answer: "Todas las operaciones están respaldadas por activos inmobiliarios reales. Dependiendo del proyecto, las garantías pueden incluir hipotecas sobre el activo, avales del promotor o estructuras de garantía específicas que se detallan en cada memorándum.",
    },
    {
        question: "¿Cómo me mantengo informado del avance del proyecto?",
        answer: "Cada operación cuenta con un grupo exclusivo de WhatsApp donde recibirás actualizaciones periódicas sobre el avance de la obra, hitos alcanzados, documentación relevante y cualquier novedad importante.",
    },
    {
        question: "¿Con quién firmo el contrato?",
        answer: "Firmas directamente con el promotor de la obra o la sociedad vehículo del proyecto. InversorHouse actúa como facilitador y asesor, pero la relación contractual es directa entre el inversor y el promotor.",
    },
];

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
        className={`w-5 h-5 text-[#64748b] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 lg:py-28 bg-[#fafbfc]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-[#0f3460]/10 text-[#0f3460] text-sm font-semibold rounded-full mb-4">
                        Preguntas Frecuentes
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f3460] mb-4">
                        Resolvemos tus <span className="text-[#d4a574]">dudas</span>
                    </h2>
                    <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
                        Encuentra respuestas a las preguntas más comunes sobre nuestro
                        modelo de coinversión inmobiliaria.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-[#0f3460] pr-4">
                                    {faq.question}
                                </span>
                                <ChevronIcon isOpen={openIndex === index} />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="px-6 pb-6 text-[#64748b] leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Help */}
                <div className="text-center mt-12">
                    <p className="text-[#64748b] mb-2">¿Tienes más preguntas?</p>
                    <a
                        href="mailto:atencion@inversorhouse.com"
                        className="inline-flex items-center gap-2 text-[#0f3460] font-semibold hover:text-[#d4a574] transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Escríbenos y te ayudamos
                    </a>
                </div>
            </div>
        </section>
    );
}
