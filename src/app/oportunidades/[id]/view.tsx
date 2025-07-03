'use client'
import { IOpportunity } from "@/services/models/Opportunity";
import { capitalizeWords } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";

export default function OpportunityDetailView({ op }: { op: IOpportunity }) {
    const minRentability = (op.min_idealista - op.ask_price) / op.ask_price * 100;
    const maxRentability = (op.max_idealista - op.ask_price) / op.ask_price * 100;

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="mb-6">
                <Image
                    alt={`Imagen de la propiedad en ${op.city}`}
                    src={`/houses/${op._id}.png`}
                    width={800}
                    height={480}
                    className="w-full h-100 object-cover rounded-2xl bg-gray-200"
                    style={{
                        backgroundImage: "url('https://placehold.co/800x480?text=Inversor%20House')",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}
                />
            </div>
            <h1 className="text-3xl font-bold mb-2">{capitalizeWords(op.city)} - {op.sub_property_type}</h1>
            <div className="text-gray-500 mb-2">{op.state}, {op.province}</div>
            <div className="font-semibold text-primary text-2xl mb-4">
                {op.ask_price.toLocaleString("es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </div>
            <div className="mb-2">
                Ocupación: <span className={op.squatted ? "text-red-700 font-medium" : "text-green-700 font-medium"}>
                    {op.squatted ? "Ocupado" : "Libre"}
                </span>
            </div>
            <div className="mb-4">
                Rentabilidad estimada: <span className="font-bold text-green-700">{minRentability.toFixed(0)}% - {maxRentability.toFixed(0)}%</span>
            </div>
            {/* Puedes agregar más detalles aquí según los campos de IOpportunity */}
            <div className="mt-8">
                <Link href="/oportunidades" className="text-primary underline">← Volver a oportunidades</Link>
            </div>
        </div>
    );
}