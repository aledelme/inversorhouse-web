'use client'


import { capitalizeWords, formatEUR } from "@/utils/functions";
import Link from "next/link";
import Image from "next/image";
import { IFixIncome } from "@/lib/models/FixIncome";
import { QuestionCircleIcon } from "./icons/QuestionCircle";
import { useState } from "react";

export default function FixIncomeCard({ op }: { op: IFixIncome }) {
    const [showTooltip, setShowTooltip] = useState(false);
    const [showTooltip2, setShowTooltip2] = useState(false);

    return (
        <div
            key={op._id}
            className="flex flex-col w-full max-w-full border border-gray-200 rounded-2xl p-0 bg-white text-inherit no-underline shadow-md overflow-hidden transition-shadow hover:shadow-lg"
            style={{ boxSizing: "border-box" }}
        >
            <div>
                <Link href={`/fix-incomes/${op._id}`} className={`${op.status !== "OPEN" ? "pointer-events-none opacity-50" : ""}`}>
                    <div style={{ position: "relative" }}>
                        {(op.status === "COMPLETED" || op.status === "IN_PROGRESS") && <div
                            className="w-auto min-w-xs text-center"
                            style={{
                                position: "absolute",
                                top: "40%",
                                left: "50%",
                                transform: "translate(-50%, -50%) rotate(-25deg)",
                                background: "green",
                                color: "white",
                                padding: "8px 32px",
                                fontWeight: "bold",
                                fontSize: "2rem",
                                zIndex: 2,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                borderRadius: "8px"
                            }}
                        >
                            {op.status === "COMPLETED" ? "Financiada" : "En proceso"}
                        </div>}
                        <Image
                            alt={`Imagen de la propiedad en ${op.city}`}
                            src={`/houses/${op._id}.jpg`}
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
                    </div>
                </Link>
            </div >
            <div className="flex-1 flex flex-col p-4">
                <div className="mb-2"><span className="font-bold text-2xl text-gray-900">{capitalizeWords(op.city)}</span> - {op.property_type} </div>
                <div className="text-gray-500 mb-1 text-sm">{op.state}, {op.province}</div>
                <div className="font-semibold mb-2 text-primary text-md sm:text-lg flex">
                    Tipo de operación: {op.procedure_type}
                    <span
                        style={{ position: "relative", display: "inline-block", marginLeft: 6 }}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <QuestionCircleIcon />
                        {showTooltip && (
                            <span
                                style={{
                                    position: "absolute",
                                    bottom: "120%",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    background: "#222",
                                    color: "#fff",
                                    padding: "6px 12px",
                                    borderRadius: "6px",
                                    fontSize: "0.95rem",
                                    whiteSpace: "nowrap",
                                    zIndex: 10,
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                                }}
                            >
                                {op.procedure_type === "CRV" ? "Compra-Reforma-Venta" : "Compra-Construcción-Venta"}
                            </span>
                        )}
                    </span>
                </div>
                <div className="font-semibold mb-2 text-primary text-md sm:text-lg">
                    Capital necesario: {formatEUR(op.required_capital)}
                </div>
                <div className="font-semibold mb-2 text-primary text-md sm:text-lg">
                    Capital recaudado: {formatEUR(op.raised_capital)}
                </div>
                <div className="font-semibold mb-2 text-primary text-md sm:text-lg">
                    Ticket flexible: {formatEUR(op.ticket)}
                    {op.ticket_explanation && <span
                        style={{ position: "relative", display: "inline-block", marginLeft: 6 }}
                        onMouseEnter={() => setShowTooltip2(true)}
                        onMouseLeave={() => setShowTooltip2(false)}
                    >
                        <QuestionCircleIcon />
                        {showTooltip2 && (
                            <span
                                style={{
                                    maxWidth: "320px",
                                    minWidth: "180px",
                                    position: "absolute",
                                    bottom: "120%",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    background: "#222",
                                    color: "#fff",
                                    padding: "8px 14px",
                                    borderRadius: "6px",
                                    fontSize: "0.95rem",
                                    whiteSpace: "normal",
                                    zIndex: 10,
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                                    wordBreak: "break-word"
                                }}
                            >
                                {op.ticket_explanation}
                            </span>
                        )}
                    </span>}
                </div>
                <div className="font-semibold mb-2 text-primary text-md sm:text-lg">
                    Duración estimada: {op.duration} meses
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full text-sm shadow-sm border border-green-200">
                        Rentabilidad {op.yield}
                    </span>
                    {op.status !== "IN_PROGRESS" && <Link
                        href={`/fix-incomes/${op._id}`}
                        className="ml-auto bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition text-center text-sm"
                    >
                        Ver detalle
                    </Link>}
                </div>
            </div>
        </div >
    )
}