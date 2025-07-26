'use client'


import { capitalizeWords, formatEUR } from "@/utils/functions";
import Link from "next/link";
import Image from "next/image";
import { IFixIncome } from "@/lib/models/FixIncome";
import Explainer from "./Explainer";

export default function FixIncomeCard({ op }: { op: IFixIncome }) {
    const progress = op.raised_capital / op.required_capital * 100;

    const baseR2Url = process.env.NEXT_PUBLIC_R2_CLOUDFLARE_URL + '/fix-income';
    const imageUrl = `${baseR2Url}/${op._id}/${op._id}.jpg`;

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
                    </div>
                </Link>
            </div >
            <div className="flex-1 flex flex-col p-4">
                <div className="mb-2"><span className="font-bold text-2xl text-gray-900">{capitalizeWords(op.city)}</span> - {op.property_type} </div>
                <div className="text-gray-500 mb-1 text-sm">{op.state}, {op.province}</div>
                <div className="mb-2 flex gap-1">
                    Tipo de operación: <span className="font-semibold">{op.procedure_type}</span>
                    <Explainer message={op.procedure_type === "CRV" ? "Compra-Reforma-Venta" : "Compra-Construcción-Venta"} />
                </div>
                <div className="mb-2">
                    Capital necesario: <span className="font-semibold">{formatEUR(op.required_capital)}</span>
                </div>


                <div className="w-full bg-gray-400 rounded-full mb-2 relative">
                    <div
                        className="bg-primary rounded-full h-6"
                        style={{
                            width: `${progress > 100 ? 100 : progress}%`,
                            transition: "width 0.3s"
                        }}
                    />
                    <span
                        className="absolute left-1/2 top-1/2 text-sm font-medium text-white"
                        style={{
                            transform: "translate(-50%, -50%)",
                            whiteSpace: "nowrap",
                            pointerEvents: "none"
                        }}
                    >
                        {op.status === "IN_PROGRESS" ? `En proceso...` : `Capital recaudado: ${formatEUR(op.raised_capital)} (${progress}%)`}
                    </span>
                </div>


                <div className="mb-2 flex gap-1">
                    Ticket flexible: <span className="font-semibold">{formatEUR(op.ticket)}</span>
                    {op.ticket_explanation && <Explainer message={op.ticket_explanation} />}
                </div>
                <div className="mb-2">
                    Duración estimada: <span className="font-semibold">{op.duration} meses</span>
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