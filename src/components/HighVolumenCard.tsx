'use client'

import { formatEUR } from "@/utils/functions";
import Link from "next/link";
import Image from "next/image";
import { IHighVolumen } from "@/lib/models/HighVolumen";
import Explainer from "./Explainer";
import { REO_EXPLAIN } from "@/constants";

interface HighVolumenCardProps {
    op: IHighVolumen;
}

export default function HighVolumenCard({ op }: HighVolumenCardProps) {
    const minRentability = (op.min_idealista - op.ask_price) / op.ask_price * 100;
    const maxRentability = (op.max_idealista - op.ask_price) / op.ask_price * 100;
    const imageUrl = `${process.env.NEXT_PUBLIC_R2_CLOUDFLARE_URL}/high-volumen/${op._id}/${op._id}.jpg`;

    return (
        <article className="group card overflow-hidden transition-all duration-300 hover:shadow-professional-xl">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Link href={`/high-volumen/${op._id}`}>
                    <Image
                        alt={`Cartera de propiedades en ${op.city}`}
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
                        {op.city}
                    </h3>
                    <p className="text-muted text-sm">
                        {op.province}
                    </p>
                </div>

                {/* Asset Details */}
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Precio de venta:</span>
                        <span className="font-semibold text-primary">{formatEUR(op.ask_price)}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Activos disponibles:</span>
                        <span className="font-semibold text-secondary">
                            {(op.numberOfAssets - op.numberOfAssetsSelled)} / {op.numberOfAssets}
                        </span>
                    </div>

                    {(op.min_idealista && op.max_idealista) && (
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">Precio mercado:</span>
                            <span className="text-xs md:text-lg font-semibold text-secondary">
                                {formatEUR(op.min_idealista)} - {formatEUR(op.max_idealista)}
                            </span>
                        </div>
                    )}

                    {op.type === "REO" && (
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground flex items-center gap-1">
                                Situación judicial:
                                <Explainer message={REO_EXPLAIN} />
                            </span>
                            <span className="font-semibold text-primary">REO</span>
                        </div>
                    )}
                </div>

                {/* ROI and CTA */}
                <div className="flex items-center justify-between">
                    {op.type === "REO" && (
                        <div className="bg-success/10 text-success px-4 py-2 rounded-full">
                            <span className="text-sm font-bold">
                                ROI: {minRentability.toFixed(0)}% - {maxRentability.toFixed(0)}%
                            </span>
                        </div>
                    )}                    <Link
                        href={`/high-volumen/${op._id}`}
                        className={`btn btn-primary text-sm hover:no-underline ${op.type !== "REO" ? "w-full text-center" : ""}`}
                    >
                        Ver Detalles
                    </Link>
                </div>
            </div>
        </article>
    );
}