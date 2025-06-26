"use client";
import { useState } from "react";

const faqs = [
    {
        titulo: "¿Cómo funciona InversorHouse?",
        contenido:
            "InversorHouse selecciona oportunidades inmobiliarias, las analiza y las publica en la plataforma. Puedes invertir en las operaciones y seguir su evolución hasta la venta del inmueble.",
    },
    {
        titulo: "¿Cuál es la inversión mínima?",
        contenido:
            "La inversión mínima varía según la oportunidad, pero suele ser accesible para que cualquier persona pueda participar, normalmente desde 500€.",
    },
    {
        titulo: "¿Qué riesgos existen?",
        contenido:
            "Toda inversión conlleva riesgos. En el sector inmobiliario pueden existir retrasos en reformas, cambios en el mercado o imprevistos legales. Analizamos cada operación para minimizar riesgos, pero no se pueden eliminar completamente.",
    },
];

export default function FaqsPage() {
    const [open, setOpen] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpen(open === idx ? null : idx);
    };

    return (
        <div className="max-w-2xl mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold text-primary mb-8 text-center">FAQs</h1>
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow border">
                        <button
                            className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-left focus:outline-none"
                            onClick={() => toggle(idx)}
                            aria-expanded={open === idx}
                            aria-controls={`faq-content-${idx}`}
                        >
                            <span>{faq.titulo}</span>
                            <span className="ml-4 text-primary">
                                {open === idx ? "−" : "+"}
                            </span>
                        </button>
                        {open === idx && (
                            <div
                                id={`faq-content-${idx}`}
                                className="px-6 pb-4 text-foreground/80 text-base animate-fade-in"
                            >
                                {faq.contenido}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
