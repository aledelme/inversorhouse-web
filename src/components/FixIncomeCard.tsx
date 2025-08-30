'use client'

import { capitalizeWords, formatEUR } from "@/utils/functions";
import Link from "next/link";
import Image from "next/image";
import { IFixIncome } from "@/lib/models/FixIncome";
import Explainer from "./Explainer";

interface FixIncomeCardProps {
    op: IFixIncome;
}

export default function FixIncomeCard({ op }: FixIncomeCardProps) {
    const progress = op.raised_capital / op.required_capital * 100;
    const imageUrl = `${process.env.NEXT_PUBLIC_R2_CLOUDFLARE_URL}/fix-income/${op._id}/${op._id}.jpg`;

    return (
        <article className="group card overflow-hidden transition-all duration-300 hover:shadow-professional-xl">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Link href={`/fix-incomes/${op._id}`}>
                    {/* Status Overlay */}
                    {(op.status === "COMPLETED" || op.status === "IN_PROGRESS") && (
                        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50">
                            <div className="bg-success text-white px-6 py-3 rounded-lg font-bold text-lg transform -rotate-[25deg] shadow-lg">
                                {op.status === "COMPLETED" ? "Financiada" : "En proceso"}
                            </div>
                        </div>
                    )}

                    <Image
                        alt={`Propiedad en ${capitalizeWords(op.city)} - ${op.property_type}`}
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
                        {capitalizeWords(op.city)} - {op.property_type}
                    </h3>
                    <p className="text-muted text-sm">
                        {op.state}, {op.province}
                    </p>
                </div>

                {/* Investment Details */}
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground flex items-center gap-1">
                            Tipo de operación:
                            <Explainer message={op.procedure_type === "CRV" ? "Compra-Reforma-Venta" : "Compra-Construcción-Venta"} />
                        </span>
                        <span className="font-semibold text-primary">{op.procedure_type}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Capital necesario:</span>
                        <span className="font-semibold text-secondary">{formatEUR(op.required_capital)}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground flex items-center gap-1">
                            Ticket flexible:
                            {op.ticket_explanation && <Explainer message={op.ticket_explanation} />}
                        </span>
                        <span className="font-semibold text-primary">{formatEUR(op.ticket)}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">Duración estimada:</span>
                        <span className="font-semibold text-primary">{op.duration} meses</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">Capital recaudado:</span>
                        <span className="text-sm font-bold text-secondary">{progress.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-surface-light rounded-full h-3 overflow-hidden border">
                        <div
                            className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] h-full rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                    </div>
                    <div className="text-xs mt-1 text-center font-bold">
                        {op.status === "IN_PROGRESS"
                            ? "Financiación en proceso..."
                            : `${formatEUR(op.raised_capital)} de ${formatEUR(op.required_capital)}`
                        }
                    </div>
                </div>

                {/* ROI and CTA */}
                <div className="flex items-center justify-between mb-4">
                    <div className="bg-success/10 text-success px-4 py-2 rounded-full">
                        <span className="text-sm font-bold">
                            Rentabilidad {op.yield}
                        </span>
                    </div>
                </div>
                {/* CTA Button */}
                {op.status !== "IN_PROGRESS" && (
                    <Link
                        href={`/fix-incomes/${op._id}`} className="w-full btn btn-primary text-center block hover:no-underline"
                    >
                        Ver Detalles
                    </Link>
                )}
            </div>
        </article>
    );
}