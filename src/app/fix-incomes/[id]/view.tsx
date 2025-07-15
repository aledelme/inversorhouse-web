'use client'
import { QuestionCircleIcon } from "@/components/icons/QuestionCircle";
import { capitalizeWords } from "@/utils/functions";
import { SignedOut, SignInButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import React from "react";
import { IFixIncome } from "@/lib/models/FixIncome";
import { Modal } from "@/components/Model";
import { sendFixIncome } from "@/lib/actions";

export default function FixIncomeDetailView({ op }: { op: IFixIncome }) {
    const { isSignedIn } = useUser();
    const [confirmationMsg, setConfirmationMsg] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);


    function handleAction() {
        if (isSignedIn) {
            setModalOpen(true);
        }
    }

    function handleFormResult(result: { ok: boolean; message: string }) {
        setModalOpen(false);
        setConfirmationMsg(result.message);
    }

    const [pdfExists, setPdfExists] = useState(false);
    const [excelExists, setExcelExists] = useState(false);
    const [planoExists, setPlanoExists] = useState(false);
    const [contractExists, setContractExists] = useState(false);

    useEffect(() => {
        // Intenta hacer un HEAD request al PDF
        fetch(`/dossiers/${op._id}.pdf`, { method: "HEAD" })
            .then(res => setPdfExists(res.ok))
            .catch(() => setPdfExists(false));
    }, [op._id]);

    useEffect(() => {
        // Intenta hacer un HEAD request al Excel
        fetch(`/excel/${op._id}.xlsx`, { method: "HEAD" })
            .then(res => setExcelExists(res.ok))
            .catch(() => setExcelExists(false));
    }, [op._id]);

    useEffect(() => {
        // Intenta hacer un HEAD request al plano
        fetch(`/planos/${op._id}.pdf`, { method: "HEAD" })
            .then(res => setPlanoExists(res.ok))
            .catch(() => setPlanoExists(false));
    }, [op._id]);
    useEffect(() => {
        // Intenta hacer un HEAD request al contrato
        fetch(`/contracts/${op._id}.pdf`, { method: "HEAD" })
            .then(res => setContractExists(res.ok))
            .catch(() => setContractExists(false));
    }, [op._id]);

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="mb-6">
                <div style={{ position: "relative" }}>
                    {(op.status === "COMPLETED" || op.status === "IN_PROGRESS") && <div
                        className="w-auto min-w-xl text-center"
                        style={{
                            position: "absolute",
                            top: "40%",
                            left: "50%",
                            transform: "translate(-50%, -50%) rotate(-25deg)",
                            background: "green",
                            color: "white",
                            padding: "8px 32px",
                            fontWeight: "bold",
                            fontSize: "5rem",
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
                    <div className="text-gray-500 mb-4">{op.state}, {op.province}</div>
                </div>
                <div className="flex flex-col">
                    {pdfExists && (
                        <Link href={`/dossiers/${op._id}.pdf`} target="_blank" className="text-blue-500 underline text-lg sm:text-2xl font-bold align-text-top mb-4">
                            📑 Descargar dossier de la propiedad
                        </Link>
                    )}
                    {excelExists && (
                        <Link href={`/excel/${op._id}.xlsx`} className="text-blue-500 underline text-lg sm:text-2xl font-bold align-text-top mb-4">
                            📊 Descargar Excel de la operación
                        </Link>
                    )}
                    {planoExists && (
                        <Link href={`/planos/${op._id}.pdf`} target="_blank" className="text-blue-500 underline text-lg sm:text-2xl font-bold align-text-top mb-4">
                            🗺️ Descargar plano de la propiedad
                        </Link>
                    )}
                    {contractExists && (
                        <Link href={`/contracts/${op._id}.pdf`} target="_blank" className="text-blue-500 underline text-lg sm:text-2xl font-bold align-text-top mb-4">
                            📝 Descargar contrato de la propiedad
                        </Link>
                    )}
                </div>
            </div>
            <div className="font-semibold text-primary text-2xl mb-4">
                Referencia catastral: {op.ref_code}
            </div>
            <div className="mb-2">
                Situación judicial: <span className="font-medium">REO</span>
            </div>
            {/* Botones de acción */}
            <div className="flex flex-row flex-wrap gap-4 mb-4">
                <InvestButton
                    onClick={() => handleAction()}
                    text="Contactar con la promoción para más información"
                    tooltip="Nos pondremos en contacto contigo para ofrecerte más detalles sobre esta oportunidad."
                    op={op}
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
    op: IFixIncome;
};

function InvestButton({ onClick, text, tooltip, op }: InvestButtonProps) {
    const { isLoaded, isSignedIn } = useAuth();
    if (!isLoaded) return null; // Espera a que la autenticación esté cargada

    return (<div className="flex items-center gap-2">
        <button
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled={!isSignedIn || op.status !== "OPEN"}
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
    op,
    onClose,
    onResult
}: {
    op: IFixIncome,
    onClose: () => void,
    onResult: (result: { ok: boolean; message: string }) => void
}) {
    // Cambia el estado a useActionState y bindea op a la acción
    const [state, formAction, isPending] = useActionState(
        async (prevState, formData: FormData) => {
            return await sendFixIncome(op, formData);
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
                <input name="terms" type="checkbox" required /> Acepto los <a href="/terminos" className="underline text-primary" target="_blank">términos y condiciones</a>
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