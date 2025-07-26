'use client'

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
import ProfitCalculator from "@/components/ProfitCalculator";
import { Tooltip } from "flowbite-react";
import Explainer from "@/components/Explainer";
import { REO_EXPLAIN } from "@/constants";

type InvesmentType = "ofertar" | "coinvertir" | "gestionar";

export default function OpportunityDetailView({ op }: { op: IOpportunity }) {
    const { isSignedIn } = useUser();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<InvesmentType | null>(null);
    const [confirmationMsg, setConfirmationMsg] = useState<string | null>(null);

    const minRentability = (op.min_idealista - op.ask_price) / op.ask_price * 100;
    const maxRentability = (op.max_idealista - op.ask_price) / op.ask_price * 100;

    const baseR2Url = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_R2_CLOUDFLARE_DEV_URL : '';
    const imageUrl = `${baseR2Url}/opportunities/${op.ref_code}/${op.ref_code}.png`;
    const dossierUrl = `${baseR2Url}/opportunities/${op.ref_code}/${op.file_key}`;

    function handleAction(type: InvesmentType) {
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
        fetch(dossierUrl, { method: "HEAD" })
            .then(res => setPdfExists(res.ok))
            .catch(() => setPdfExists(false));
    }, [dossierUrl]);

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="mb-6">
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
            <div className="flex flex-row justify-between items-start flex-wrap">
                <div>
                    <h1 className="text-3xl">{capitalizeWords(op.city)} - {op.sub_property_type}</h1>
                    <div className="text-gray-500 mb-4">{op.state}, {op.province}</div>
                </div>
                {pdfExists && (
                    <Link href={dossierUrl} target="_blank" className="text-blue-500 underline text-xl align-text-top mb-4">
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
            <div className="mb-2 flex gap-1">
                Situación judicial: <span className="font-medium">REO</span><Explainer message={REO_EXPLAIN} />
            </div>
            <div className="mb-4">
                Rentabilidad estimada: <span className="font-bold text-green-700">{minRentability.toFixed(0)}% - {maxRentability.toFixed(0)}%</span>
            </div>
            <ProfitCalculator
                maxInvestment={op.ask_price}
                minProfitPercent={minRentability}
                maxProfitPercent={maxRentability}
            />
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
                    onClick={() => handleAction("gestionar")}
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
    type,
    op,
    onClose,
    onResult
}: {
    type: InvesmentType,
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
            <h2 className="font-bold mb-2">{capitalizeWords(type)} en {op.city}</h2>
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

            {type === "gestionar" && (
                <div>
                    <p>Al gestionar, serás el ejecutor y la parte activa de toda la operación, permitiendo que el resto de los inversores actúe de forma pasiva.
                        Serás quien deba, en su caso, constituir una sociedad limitada o una comunidad de bienes, formalizar contratos con cada inversor, presentar la oferta, llevar a cabo la reforma, encargarte de los actos jurídicos necesarios, gestionar una posible desocupación, realizar la venta del inmueble, hacer reparto de beneficios  y concluir la operación.
                    </p>
                    <p>
                        En InversorHouse, solo seleccionamos gestores con experiencia previa comprobada.
                        Por encargarte de la gestión, recibirás una comisión que oscila entre el 20 % y el 50 %, la cual deberá ser acordada con los inversores.</p>
                    <p>Los gestores tambien deben participar como coinversores de la operación (min 5000€).</p>
                    <p>Te enviaremos un correo electrónico para confirmar tu participación y uno de nuestros agentes se pondrá en contacto contigo.</p>
                </div>
            )}

            <label className="w-2/3">
                Teléfono:
                <input name="phone" type="tel" className="border rounded px-2 py-1 w-full" required />
            </label>
            {(type === "coinvertir" || type === "gestionar") && (
                <div className="flex flex-col gap-3">
                    <label className="w-2/3">
                        Cantidad a invertir (€):
                        <input name="amount" type="number" min={5000} className="border rounded px-2 py-1 w-full" required />
                    </label>
                    <input name="isGestor" type="hidden" value={type === "gestionar" ? "true" : "false"} />
                </div>
            )}
            <label className="flex items-center gap-2">
                <input name="terms" type="checkbox" required /> Acepto los <a href="/aviso-legal" className="underline text-primary" target="_blank">términos y condiciones</a>
            </label>
            <div className="flex gap-2 mt-2">
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded" disabled={isPending}>
                    {isPending ? "Enviando..." : capitalizeWords(type)}
                </button>
                <button type="button" className="text-gray-600 underline" onClick={onClose}>Cancelar</button>
            </div>
        </form>
    );
}