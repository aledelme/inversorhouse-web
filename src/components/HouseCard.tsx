'use client'

import { IOpportunity } from "@/lib/models/Opportunity"
import { capitalizeWords, formatEUR } from "@/utils/functions";
import Link from "next/link";
import Image from "next/image";
import { REO_EXPLAIN } from "@/constants";
import Explainer from "./Explainer";

export default function HouseCard({ op }: { op: IOpportunity }) {
    const minRentability = (op.min_idealista - op.ask_price) / op.ask_price * 100;
    const maxRentability = (op.max_idealista - op.ask_price) / op.ask_price * 100;

    const imageUrl = `${process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_R2_CLOUDFLARE_DEV_URL : ''}/opportunities/${op.ref_code}/${op.ref_code}.png`;

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
                        src={imageUrl}
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
                <div className="mb-2">
                    Precio de venta fondo: <span className="font-semibold">{formatEUR(op.ask_price)}</span>
                </div>
                <div className="mb-2">
                    Precio de mercado: <span className="font-semibold">{formatEUR(op.min_idealista)} - {formatEUR(op.max_idealista)}</span>
                </div>
                <div className="mb-2">Ocupación: <span className={op.squatted ? "text-red-700 font-medium" : "text-green-700 font-medium"}>
                    {op.squatted ? "Ocupado" : "Libre"}
                </span> </div>
                <div className="mb-2 flex gap-1">Situación judicial: <span className="font-medium">REO</span><Explainer message={REO_EXPLAIN} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full text-sm shadow-sm border border-green-200">
                        Rentabilidad Aprox. <span className="text-green-700">{minRentability.toFixed(0)}% - {maxRentability.toFixed(0)}%</span>
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