'use client'

import { IOpportunity } from "@/lib/models/Opportunity"
import { capitalizeWords, formatEUR } from "@/utils/functions";
import Link from "next/link";
import Image from "next/image";
import { REO_EXPLAIN } from "@/constants";
import Explainer from "./Explainer";

interface HouseCardProps {
    op: IOpportunity;
}

export default function HouseCard({ op }: HouseCardProps) {
    const minRentability = (op.min_idealista - op.ask_price) / op.ask_price * 100;
    const maxRentability = (op.max_idealista - op.ask_price) / op.ask_price * 100;

    const imageUrl = `${process.env.NEXT_PUBLIC_R2_CLOUDFLARE_URL}/opportunities/${op.ref_code}/${op.ref_code}.jpg`;

    return (
        <article className="group card overflow-hidden transition-all duration-300 hover:shadow-professional-xl">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Link href={`/oportunidades/${op.ref_code}`}>
                    {/* Status Overlay */}
                    {op.status === "COMPLETED" && (
                        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50">
                            <div className="bg-success text-white px-6 py-3 rounded-lg font-bold text-lg transform -rotate-[25deg] shadow-lg">
                                Completada
                            </div>
                        </div>
                    )}

                    <Image
                        alt={`Propiedad en ${capitalizeWords(op.city)} - ${op.sub_property_type}`}
                        src={imageUrl}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-primary mb-1">
                        {capitalizeWords(op.city)} - {op.sub_property_type}
                    </h3>
                    <p className="text-muted text-sm">
                        {op.state}, {op.province}
                    </p>
                </div>

                {/* Property Details */}
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Precio fondo:</span>
                        <span className="font-semibold text-primary">{formatEUR(op.ask_price)}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Valor mercado:</span>
                        <span className="font-semibold text-secondary">
                            {formatEUR(op.min_idealista)} - {formatEUR(op.max_idealista)}
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Ocupación:</span>
                        <span className={`font-semibold ${op.squatted ? "text-warning" : "text-success"}`}>
                            {op.squatted ? "Ocupado" : "Libre"}
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground flex items-center gap-1">
                            Situación:
                            <Explainer message={REO_EXPLAIN} />
                        </span>
                        <span className="font-semibold text-primary">REO</span>
                    </div>
                </div>

                {/* ROI Badge */}
                <div className="flex items-center justify-between mb-4">
                    <div className="bg-success/10 text-success px-4 py-2 rounded-full">
                        <span className="text-sm font-bold">
                            Rentabilidad Aprox {minRentability.toFixed(0)}% - {maxRentability.toFixed(0)}%
                        </span>
                    </div>
                </div>
                {/* CTA Button */}
                <Link
                    href={`/oportunidades/${op.ref_code}`}
                    className="w-full btn btn-primary text-center block hover:no-underline"
                >
                    Ver Detalles
                </Link>
            </div>
        </article>
    );
}