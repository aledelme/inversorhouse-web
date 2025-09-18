'use client'

import { capitalizeWords, formatEUR } from "@/utils/functions";
import { SignedOut, SignInButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useState } from "react";
import React from "react";
import { IFixIncome } from "@/lib/models/FixIncome";
import { Modal } from "@/components/Model";
import { sendFixIncome } from "@/lib/actions";
import { Tooltip } from "flowbite-react";
import { useFileExists } from "@/hooks/useFileExists";

export default function FixIncomeDetailView({ op }: { op: IFixIncome }) {
    const { isSignedIn } = useUser();
    const [confirmationMsg, setConfirmationMsg] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const progress = op.raised_capital / op.required_capital * 100;

    function handleAction() {
        if (isSignedIn) {
            setModalOpen(true);
        }
    }

    function handleFormResult(result: { ok: boolean; message: string }) {
        setModalOpen(false);
        setConfirmationMsg(result.message);
    }

    const baseR2Url = process.env.NEXT_PUBLIC_R2_CLOUDFLARE_URL + '/fix-income';
    const imageUrl = `${baseR2Url}/${op._id}/${op._id}.jpg`;

    const contractUrl = `${baseR2Url}/${op._id}/${op.city}-Contrato.pdf`;
    const contractExists = useFileExists(contractUrl);
    const dossierUrl = `${baseR2Url}/${op._id}/${op.city}-Dossier.pdf`;
    const dossierExists = useFileExists(dossierUrl);
    const planesUrl = `${baseR2Url}/${op._id}/${op.city}-Planos.pdf`;
    const planesExists = useFileExists(planesUrl);
    const analysisUrl = `${baseR2Url}/${op._id}/${op.city}-Analisis.xlsx`;
    const analysisExists = useFileExists(analysisUrl);
    const registryUrl = `${baseR2Url}/${op._id}/${op.city}-Nota-Simple.pdf`;
    const registryExists = useFileExists(registryUrl);

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            <div className={"mb-6 relative" + (op.status !== "OPEN" ? " opacity-50 pointer-events-none" : "")}>
                {(op.status === "COMPLETED" || op.status === "IN_PROGRESS") && <div
                    className="px-16 py-4 text-3xl md:text-5xl lg:text-6xl text-center"
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        transform: "translate(-50%, -50%) rotate(-25deg)",
                        background: "green",
                        color: "white",
                        fontWeight: "bold",
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

            {/* Progress Bar */}
            <div className="w-full flex justify-between text-lg font-bold">
                <div><span className="collapse sm:visible">Capital recaudado:</span> {formatEUR(op.raised_capital)}</div>
                <div><span className="collapse sm:visible">Capital necesario:</span> {formatEUR(op.required_capital)}</div>
            </div>
            <div className="w-full bg-gray-400 rounded-lg mb-8 relative">
                <div
                    className="bg-primary rounded-lg h-8 font-bold flex items-center justify-center text-white"
                    style={{
                        width: `${progress > 100 ? 100 : progress}%`,
                        transition: "width 1s"
                    }}
                >{progress.toFixed()}%</div>
            </div>

            <div className="flex flex-row justify-between items-start flex-wrap">
                <div>
                    <h1 className="text-3xl">{capitalizeWords(op.city)} - {op.property_type}</h1>
                    <div className="text-gray-500 mb-4">{op.state}, {op.province}</div>
                </div>
                <div className="flex flex-col">
                    {dossierExists && (
                        <Link href={dossierUrl} target="_blank" className="text-blue-500 underline text-lg sm:text-2xl font-bold align-text-top mb-4">
                            📑 Descargar dossier de la propiedad
                        </Link>
                    )}
                    {analysisExists && (
                        <Link href={analysisUrl} className="text-blue-500 underline text-lg sm:text-2xl font-bold align-text-top mb-4">
                            📊 Descargar Excel de la operación
                        </Link>
                    )}
                    {planesExists && (
                        <Link href={planesUrl} target="_blank" className="text-blue-500 underline text-lg sm:text-2xl font-bold align-text-top mb-4">
                            🗺️ Descargar plano de la propiedad
                        </Link>
                    )}
                    {contractExists && (
                        <Link href={contractUrl} target="_blank" className="text-blue-500 underline text-lg sm:text-2xl font-bold align-text-top mb-4">
                            📝 Descargar contrato de la propiedad
                        </Link>
                    )}
                    {registryExists && (
                        <Link href={registryUrl} target="_blank" className="text-blue-500 underline text-lg sm:text-2xl font-bold align-text-top mb-4">
                            🗒️ Descargar nota simple de la propiedad
                        </Link>
                    )}
                </div>
            </div>
            {/* <div className="mb-4">
                Referencia catastral: {op.ref_code}
            </div> */}

            <div className="font-semibold text-primary text-2xl mb-4">
                Resumen ejecutivo:
            </div>
            <p className="text-md mb-4 whitespace-pre-wrap">
                {op.summary || "No hay resumen disponible para esta operación."}
            </p>
            {/* Botones de acción */}
            <div className="flex flex-row flex-wrap gap-4 mb-4">
                <InvestButton
                    onClick={() => handleAction()}
                    text="Contactar para más información"
                    tooltip="Nos pondremos en contacto contigo para ofrecerte más detalles sobre esta oportunidad."
                    op={op}
                />

                <SignedOut>
                    <SignInButton mode="modal">
                        <div className="btn btn-primary h-12">Accede para participar</div>
                    </SignInButton>
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
        <Tooltip content={tooltip} className="max-w-xs">
            <button
                className="h-12 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled={!isSignedIn || op.status !== "OPEN"}
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
                <input className="w-auto!" name="terms" type="checkbox" required /> Acepto los <a href="/aviso-legal" className="underline text-primary" target="_blank">términos y condiciones</a>
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