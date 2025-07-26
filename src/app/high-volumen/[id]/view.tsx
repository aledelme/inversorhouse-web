'use client'

import { capitalizeWords } from "@/utils/functions";
import { SignedOut, SignInButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import React from "react";
import { Modal } from "@/components/Model";
import { sendHighVolumen } from "@/lib/actions";
import { IHighVolumen } from "@/lib/models/HighVolumen";
import { Tooltip } from "flowbite-react";

export default function HighVolumenDetailView({ op }: { op: IHighVolumen }) {
    const { isSignedIn } = useUser();
    const [confirmationMsg, setConfirmationMsg] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const minRentability = (op.min_idealista - op.ask_price) / op.ask_price * 100;
    const maxRentability = (op.max_idealista - op.ask_price) / op.ask_price * 100;

    const baseR2Url = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_R2_CLOUDFLARE_DEV_URL : '';
    const imageUrl = `${baseR2Url}/high-volumen/${op._id}/${op._id}.jpg`;
    const analysisUrl = `${baseR2Url}/high-volumen/${op._id}/${op._id}.xlsx`;

    function handleAction() {
        if (isSignedIn) {
            setModalOpen(true);
        }
    }

    function handleFormResult(result: { ok: boolean; message: string }) {
        setModalOpen(false);
        setConfirmationMsg(result.message);
    }

    const [excelExists, setExcelExists] = useState(false);

    useEffect(() => {
        // Intenta hacer un HEAD request al PDF
        fetch(analysisUrl, { method: "HEAD" })
            .then(res => setExcelExists(res.ok))
            .catch(() => setExcelExists(false));
    }, [analysisUrl]);

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="mb-6">
                <div style={{ position: "relative" }}>
                    <Image
                        alt={`Imagen de la propiedad en ${op.city}`}
                        src={imageUrl}
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
            </div>
            <div className="flex flex-row justify-between items-start flex-wrap">
                <div>
                    <h1 className="text-3xl">{capitalizeWords(op.city)} - {op.property_type}</h1>
                    <div className="text-gray-500 mb-4">{op.province}</div>
                </div>
                <div className="flex flex-col">
                    {excelExists && (
                        <Link href={analysisUrl} target="_blank" className="text-blue-500 underline text-lg sm:text-2xl font-bold align-text-top mb-4">
                            📑 Descargar propiedades de la cartera
                        </Link>
                    )}
                </div>
            </div>
            <div className="font-semibold text-primary text-2xl mb-4">
                Precio de venta fondo: {op.ask_price.toLocaleString("es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </div>
            <div className="font-semibold text-primary text-2xl mb-4">
                Precio de mercado: {op.min_idealista.toLocaleString("es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 })} - {op.max_idealista.toLocaleString("es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </div>
            <div className="mb-4">
                Rentabilidad estimada: <span className="font-bold text-green-700">{minRentability.toFixed(0)}% - {maxRentability.toFixed(0)}%</span>
            </div>
            {/* Botones de acción */}
            <div className="flex flex-row flex-wrap gap-4 mb-4">
                <InvestButton
                    onClick={() => handleAction()}
                    text="Contactar para más información"
                    tooltip="Nos pondremos en contacto contigo para ofrecerte más detalles sobre esta oportunidad."
                />
                <SignedOut>
                    <SignInButton mode="modal">Accede para solicitar</SignInButton>
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
                            op={op}
                            onClose={() => setModalOpen(false)}
                            onResult={handleFormResult}
                        />
                    </Modal>
                )
            }
            {/* Puedes agregar más detalles aquí según los campos de IOpportunity */}
            {/* <div className="mt-8">
                <Link href="/oportunidades" className="text-primary underline">← Volver a oportunidades</Link>
            </div> */}
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
        <Tooltip content={tooltip} className="max-w-xs">
            <button
                className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled={!isSignedIn}
                onClick={onClick}
                type="button"
            >
                {text}
            </button>
        </Tooltip>
    </div>);
}


// Formulario de inversión
function InvestmentForm({
    op,
    onClose,
    onResult
}: {
    op: IHighVolumen,
    onClose: () => void,
    onResult: (result: { ok: boolean; message: string }) => void
}) {
    // Cambia el estado a useActionState y bindea op a la acción
    const [state, formAction, isPending] = useActionState(
        async (prevState, formData: FormData) => {
            return await sendHighVolumen(op, formData);
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
            <h2 className="font-bold mb-2">Participar en {op.city}</h2>

            <div>
                <p>Te contactaremos a través del teléfono que nos has facilitado.</p>
            </div>


            <label className="w-2/3">
                Teléfono:
                <input name="phone" type="tel" className="border rounded px-2 py-1 w-full" required />
            </label>

            <label className="flex items-center gap-2">
                <input name="terms" type="checkbox" required /> Acepto los <a href="/aviso-legal" className="underline text-primary" target="_blank">términos y condiciones</a>
            </label>

            <div className="flex gap-2 mt-2">
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded" disabled={isPending}>
                    {isPending ? "Enviando..." : "Enviar"}
                </button>
                <button type="button" className="text-gray-600 underline" onClick={onClose}>Cancelar</button>
            </div>
        </form>
    );
}