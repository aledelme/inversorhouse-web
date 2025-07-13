'use client'
import { QuestionCircleIcon } from "@/components/icons/QuestionCircle";
import { IOpportunity } from "@/lib/models/Opportunity";
import { sendCoinvestment, sendOffer } from "../../../lib/actions";
import { capitalizeWords } from "@/utils/functions";
import { SignedOut, SignInButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import React from "react";
import { Modal } from "@/components/Model";

export default function OpportunityDetailView({ op }: { op: IOpportunity }) {
    const { isSignedIn } = useUser();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"ofertar" | "coinvertir" | null>(null);
    const [confirmationMsg, setConfirmationMsg] = useState<string | null>(null);

    const minRentability = (op.min_idealista - op.ask_price) / op.ask_price * 100;
    const maxRentability = (op.max_idealista - op.ask_price) / op.ask_price * 100;

    function handleAction(type: "ofertar" | "coinvertir") {
        if (isSignedIn) {
            setModalType(type);
            setModalOpen(true);
        }
    }

    function handleFormResult(result: { ok: boolean; message: string }) {
        setModalOpen(false);
        setConfirmationMsg(result.message);
    }

    const [pdfExists, setPdfExists] = useState(false);

    useEffect(() => {
        // Intenta hacer un HEAD request al PDF
        fetch(`/dossiers/${op._id}.pdf`, { method: "HEAD" })
            .then(res => setPdfExists(res.ok))
            .catch(() => setPdfExists(false));
    }, [op._id]);

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="mb-6">
                <Image
                    alt={`Imagen de la propiedad en ${op.city}`}
                    src={`/houses/${op._id}.png`}
                    width={800}
                    height={480}
                    className="w-full aspect-[4/3] object-cover rounded-2xl bg-gray-200"
                    style={{
                        backgroundImage: "url('https://placehold.co/800x480?text=Inversor%20House')",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}
                />
            </div>
            <div className="flex flex-row justify-between items-start flex-wrap">
                <div>
                    <h1 className="text-3xl">{capitalizeWords(op.city)} - {op.sub_property_type}</h1>
                    <div className="text-gray-500 mb-4">{op.state}, {op.province}</div>
                </div>
                {pdfExists && (
                    <Link href={`/dossiers/${op._id}.pdf`} target="_blank" className="text-blue-500 underline text-xl align-text-top mb-4">
                        📑 Descargar dossier de la propiedad
                    </Link>
                )}
            </div>
            <div className="font-semibold text-primary text-2xl mb-4">
                Precio de venta fondo: {op.ask_price.toLocaleString("es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </div>
            <div className="font-semibold text-primary text-2xl mb-4">
                Precio de mercado: {op.min_idealista.toLocaleString("es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 })} - {op.max_idealista.toLocaleString("es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </div>
            <div className="font-semibold text-primary text-2xl mb-4">
                Referencia catastral: {op.ref_code}
            </div>
            <div className="mb-2">
                Ocupación: <span className={op.squatted ? "text-red-700 font-medium" : "text-green-700 font-medium"}>
                    {op.squatted ? "Ocupado" : "Libre"}
                </span>
            </div>
            <div className="mb-2">
                Situación judicial: <span className="font-medium">REO</span>
            </div>
            <div className="mb-4">
                Rentabilidad estimada: <span className="font-bold text-green-700">{minRentability.toFixed(0)}% - {maxRentability.toFixed(0)}%</span>
            </div>
            {/* Botones de acción */}
            <div className="flex flex-row flex-wrap gap-4 mb-4">
                <InvestButton
                    onClick={() => handleAction("ofertar")}
                    text="Ofertar"
                    tooltip="Haz una oferta para comprar la propiedad"
                />
                <InvestButton
                    onClick={() => handleAction("coinvertir")}
                    text="Coinvertir"
                    tooltip="Invierte junto a otros inversores"
                />
                <InvestButton
                    onClick={() => handleAction("coinvertir")}
                    text="Gestionar"
                    tooltip="Gestiona la operación de coinversión y lleváte un 20-40% de comisión"
                />
                <SignedOut>
                    <SignInButton mode="modal">Accede para participar</SignInButton>
                </SignedOut>
                <div>
                    {confirmationMsg && (
                        <span className={`text-sm ${confirmationMsg.startsWith("¡Gracias") ? "text-green-700" : "text-red-700"}`}>
                            {confirmationMsg}
                        </span>
                    )}
                </div>
            </div>
            {/* Modal */}
            {
                modalOpen && (
                    <Modal onClose={() => setModalOpen(false)}>
                        <InvestmentForm
                            type={modalType!}
                            op={op}
                            onClose={() => setModalOpen(false)}
                            onResult={handleFormResult}
                        />
                    </Modal>
                )
            }
            {/* Puedes agregar más detalles aquí según los campos de IOpportunity */}
            <div className="mt-8">
                <Link href="/oportunidades" className="text-primary underline">← Volver a oportunidades</Link>
            </div>
        </div >
    );
}

type InvestButtonProps = {
    onClick: () => void;
    text: string;
    tooltip: string;
};

function InvestButton({ onClick, text, tooltip }: InvestButtonProps) {
    const { isLoaded, isSignedIn } = useAuth();
    if (!isLoaded) return null; // Espera a que la autenticación esté cargada

    return (<div className="flex items-center gap-2">
        <button
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled={!isSignedIn}
            onClick={onClick}
            type="button"
        >
            {text}
        </button>
        <div className="relative group flex items-center">
            <QuestionCircleIcon className="w-8 h-8 " />
            <span className="absolute left-1/2 -translate-x-1/2 -top-9 w-max px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
                {tooltip}
            </span>
        </div>
    </div>);
}


// Formulario de inversión
function InvestmentForm({
    type,
    op,
    onClose,
    onResult
}: {
    type: "ofertar" | "coinvertir",
    op: IOpportunity,
    onClose: () => void,
    onResult: (result: { ok: boolean; message: string }) => void
}) {
    // Cambia el estado a useActionState y bindea op a la acción
    const [state, formAction, isPending] = useActionState(
        async (prevState, formData: FormData) => {
            if (type === "ofertar") {
                return await sendOffer(op, formData);
            } else {
                return await sendCoinvestment(op, formData);
            }
        },
        { ok: false, message: "" }
    );

    // Cuando el resultado cambia y es exitoso o error, llama a onResult
    React.useEffect(() => {
        if (state.message) {
            onResult(state);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.message]);

    return (
        <form className="flex flex-col gap-4" action={formAction}>
            <h2 className="font-bold mb-2">{type === "ofertar" ? "Ofertar" : "Coinvertir"} en {op.city}</h2>
            {type === "coinvertir" && (
                <div>
                    <p>Al coinvertir, participas en una inversión conjunta con otros inversores. Las participaciones y rendimientos se repartirán en función de las cuantias aportadas (min 5000€).</p>
                    <p>Al registrarte te enviaremos un correo electrónico para confirmar tu participación y uno de nuestros agentes se pondrá en contacto contigo.</p>
                </div>
            )}

            {type === "ofertar" && (
                <div>
                    <p>Al ofertar, estás haciendo una propuesta para comprar la propiedad.</p>
                    <p>Te enviaremos un correo electrónico para confirmar tu oferta y uno de nuestros agentes se pondrá en contacto contigo para completar la documentación.</p>
                </div>
            )}
            <label className="w-2/3">
                Teléfono:
                <input name="phone" type="tel" className="border rounded px-2 py-1 w-full" required />
            </label>
            {type === "coinvertir" && (
                <div className="flex flex-col gap-3">
                    <label className="w-2/3">
                        Cantidad a invertir (€):
                        <input name="amount" type="number" min={5000} className="border rounded px-2 py-1 w-full" required />
                    </label>
                    <label className="flex items-center gap-2">
                        <input name="terms" type="checkbox" required />Gestionar esta operacion - Los gestores pueden llegar a conseguir entre un 20% y un 40% de comisión por operación.
                    </label>
                </div>
            )}
            <label className="flex items-center gap-2">
                <input name="terms" type="checkbox" required /> Acepto los <a href="/terminos" className="underline text-primary" target="_blank">términos y condiciones</a>
            </label>
            <div className="flex gap-2 mt-2">
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded" disabled={isPending}>
                    {isPending ? "Enviando..." : (type === "ofertar" ? "Ofertar" : "Coinvertir")}
                </button>
                <button type="button" className="text-gray-600 underline" onClick={onClose}>Cancelar</button>
            </div>
        </form>
    );
}