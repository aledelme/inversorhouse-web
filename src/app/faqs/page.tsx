"use client";
import { REO_EXPLAIN } from "@/constants";
import { useState } from "react";

const faqs = [
    {
        titulo: "¿Qué es InversorHouse?",
        contenido:
            `InversorHouse es una inmobiliaria digital especializada en productos fuera de mercado pensados para inversores. Nuestro objetivo es facilitar el acceso a oportunidades exclusivas que no suelen estar disponibles en los canales tradicionales. Además, promovemos el networking entre inversores, fomentando la colaboración en proyectos conjuntos. Esto permite que, al unir capital y experiencia, puedan acceder a inversiones de mayor envergadura que quizá no serían viables de forma individual.`,
    },
    {
        titulo: "¿Cómo funciona InversorHouse?",
        contenido:
            "InversorHouse selecciona oportunidades inmobiliarias, las analiza y las publica en la plataforma. Puedes elegir entre distintos tipos de inversiones según tu perfil.",
    },
    {
        titulo: "¿Qué es un crowdfunding/coinversión inmobiliario?",
        contenido:
            "El crowdfunding/coinversión inmobiliario es una forma de financiación colectiva que permite a múltiples inversores aportar capital para financiar proyectos inmobiliarios. A través de plataformas como InversorHouse, los inversores pueden participar en proyectos que de otro modo no podrían financiar individualmente, diversificando así su cartera y accediendo a oportunidades exclusivas.",
    },
    {
        titulo: "¿Qué es la compra de deuda inmobiliaria?",
        contenido:
            "La compra de deuda inmobiliaria es una estrategia de inversión que consiste en adquirir la deuda de un inmueble en lugar de comprar la propiedad directamente. Esto puede incluir la compra de hipotecas impagadas o la adquisición de préstamos que están garantizados por propiedades inmobiliarias. Esta estrategia puede ofrecer oportunidades de inversión atractivas, pero también conlleva riesgos asociados.",
    },
    {
        titulo: "¿Cuál es la inversión mínima?",
        contenido:
            "La inversión mínima varía según la oportunidad, pero suele ser accesible para que cualquier persona pueda participar, normalmente desde 5000€.",
    },
    {
        titulo: "¿Qué es un REO?",
        contenido: REO_EXPLAIN,
    },
    {
        titulo: "¿Qué son contratos de cuentas por participación?",
        contenido:
            "Los contratos de cuentas por participación son acuerdos entre un inversor y un promotor inmobiliario donde el inversor aporta capital para financiar un proyecto a cambio de una participación en los beneficios y pérdidas generadas en igual proporción. Este tipo de contrato permite a los inversores participar en proyectos inmobiliarios sin necesidad de adquirir la propiedad directamente, diversificando así su cartera y accediendo a oportunidades exclusivas. Este es el tipo de contrato que se usa en compra de deuda inmobiliaria.",
    },
    {
        titulo: "¿Qué son operaciones de financiación a tipo fijo?",
        contenido:
            "Las operaciones de financiación a tipo fijo son aquellas en las que el interés (anual o sobre el capital) aplicado al préstamo se mantiene constante durante toda la vida del mismo. Esto proporciona seguridad al inversor, ya que las cuotas a pagar no variarán con el tiempo, independientemente de las fluctuaciones en el mercado. En InversorHouse, ofrecemos la posibilidad de invertir en este tipo de operaciones, permitiendo a los inversores beneficiarse de ingresos predecibles y estables.",
    },
    {
        titulo: "¿Qué es el interés anual y el interés sobre el capital?",
        contenido:
            "El interés anual es la cantidad que se paga en un año por un préstamo o inversión, expresada como un porcentaje del capital. El interés sobre el capital, por otro lado, se refiere a la cantidad de interés que se calcula sobre el capital invertido en un período de tiempo no determinado hasta finalizar el proyecto inmobiliario.",
    },
    {
        titulo: "¿Qué son operaciones de gran volumen?",
        contenido:
            "Las operaciones de gran volumen son transacciones inmobiliarias que implican una cantidad significativa de capital y suelen estar destinadas a inversores de gran envergadura. Estas operaciones pueden incluir la compra de carteras de propiedades, desarrollos inmobiliarios a gran escala o proyectos de rehabilitación complejos. En InversorHouse, facilitamos el acceso a este tipo de oportunidades, permitiendo a los inversores diversificar su cartera y adquirir descuentos por volumen.",
    },
    {
        titulo: "¿Qué riesgos existen?",
        contenido:
            "Toda inversión conlleva riesgos. En el sector inmobiliario pueden existir retrasos en reformas, cambios en el mercado o imprevistos legales. Analizamos cada operación para minimizar riesgos, pero no se pueden eliminar completamente. Existe el riesgo de perder parte o la totalidad del capital invertido.",
    },

];

export default function FaqsPage() {
    const [open, setOpen] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpen(open === idx ? null : idx);
    };

    return (
        <div className="max-w-2xl mx-auto py-6 px-4">
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
                            <span className="py-2">{faq.titulo}</span>
                            <span className="ml-4 text-white">
                                {open === idx ? "−" : "+"}
                            </span>
                        </button>
                        {open === idx && (
                            <div
                                id={`faq-content-${idx}`}
                                className="px-6 pt-3 pb-4 text-foreground/80 text-base animate-fade-in"
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
