'use client'

import { IOpportunity } from "@/lib/models/Opportunity"
import { capitalizeWords } from "@/utils/functions";
import Link from "next/link";
import Image from "next/image";

export default function HouseCard({ op }: { op: IOpportunity }) {
    const minRentability = (op.min_idealista - op.ask_price) / op.ask_price * 100;
    const maxRentability = (op.max_idealista - op.ask_price) / op.ask_price * 100;

    return (
        <div
            key={op._id}
            className="flex flex-col w-full max-w-full border border-gray-200 rounded-2xl p-0 bg-white text-inherit no-underline shadow-md overflow-hidden transition-shadow hover:shadow-lg"
            style={{ boxSizing: "border-box" }}
        >
            <div>
                <Link href={`/oportunidades/${op._id}`}>
                    <Image
                        alt={`Imagen de la propiedad en ${op.city}`}
                        src={`/houses/${op._id}.png`}
                        width={600}
                        height={360}
                        className="w-full aspect-[4/3] bg-gray-200 rounded-t-2xl overflow-hidden"
                        style={{
                            backgroundImage: "url('https://placehold.co/600x360?text=Inversor%20House')",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            boxSizing: "border-box"
                        }}
                    />
                </Link>
            </div>
            <div className="flex-1 flex flex-col p-4">
                <div className="mb-2"><span className="font-bold text-2xl text-gray-900">{capitalizeWords(op.city)}</span> - {op.sub_property_type} </div>
                <div className="text-gray-500 mb-1 text-sm">{op.state}, {op.province}</div>
                <div className="font-semibold mb-2 text-primary text-md sm:text-lg">
                    Precio de venta fondo: {op.ask_price.toLocaleString("es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </div>
                <div className="font-semibold mb-2 text-primary text-md sm:text-lg">
                    Precio de mercado: {op.min_idealista.toLocaleString("es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 })} - {op.max_idealista.toLocaleString("es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </div>
                <div className="mb-3">Ocupación: <span className={op.squatted ? "text-red-700 font-medium" : "text-green-700 font-medium"}>
                    {op.squatted ? "Ocupado" : "Libre"}
                </span> </div>
                <div className="mb-3">Situación judicial: <span className="font-medium">REO</span></div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full text-sm shadow-sm border border-green-200">
                        <span className="text-green-700">{minRentability.toFixed(0)}% - {maxRentability.toFixed(0)}%</span> estimada
                    </span>
                    <Link
                        href={`/oportunidades/${op._id}`}
                        className="ml-auto bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition text-center text-sm"
                    >
                        Ver detalle
                    </Link>
                </div>

            </div>
        </div>
    )
}