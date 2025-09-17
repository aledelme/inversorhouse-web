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
import WhyUsOpportunity from "../components/WhyUsOpportunity";
import AboutUsOpportunity from "../components/AboutUsOpportunity";
import { profitCalculator } from "@/lib/profit-calculator";

type InvesmentType = "ofertar" | "coinvertir" | "gestionar";

export default function OpportunityDetailView({ op }: { op: IOpportunity }) {
    const { isSignedIn } = useUser();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState<InvesmentType | null>(null);
    const [confirmationMsg, setConfirmationMsg] = useState<string | null>(null);

    const { minRentability, maxRentability } = profitCalculator(op);

    const baseR2Url = process.env.NEXT_PUBLIC_R2_CLOUDFLARE_URL + '/opportunities';
    const imageUrl = `${baseR2Url}/${op.ref_code}/${op.ref_code}.jpg`;
    const dossierUrl = `${baseR2Url}/${op.ref_code}/${op.file_key}`;

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


    const downloadExcel = async () => {
        const res = await fetch("/api/opportunities/" + op.ref_code + "/download", {
            method: "GET",
        });

        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `${op.city}.xlsx`;
        a.click();

        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            <div className={`mb-6 relative ${op.status === "COMPLETED" ? "opacity-50" : ""}`}>
                {(op.status === "COMPLETED") && <div
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
                    Completada
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
            <div className="flex flex-row justify-between items-start flex-wrap">
                <div>
                    <h1 className="text-3xl">{capitalizeWords(op.city)} - {op.sub_property_type}</h1>
                    <div className="text-gray-500 mb-4">{op.state}, {op.province}</div>
                </div>
                <div className="flex flex-col">
                    {pdfExists && (
                        <Link href={dossierUrl} target="_blank" className="text-blue-500 underline text-xl align-text-top mb-4">
                            📑 Descargar dossier de la propiedad
                        </Link>
                    )}
                    <a
                        onClick={downloadExcel}
                        className="text-blue-500 underline text-xl align-text-top mb-4 cursor-pointer"
                    >
                        📊 Descargar Excel de la operación
                    </a>
                </div>
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

            {/* Botones de acción */}
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-5 mb-4 mt-12 gap-y-12 justify-between justify-items-center" + (op.status === "COMPLETED" ? " hidden" : "")}>
                {/* Ofertar */}
                <div className="bg-white rounded-xl shadow p-5 flex flex-col h-full relative">
                    <div className="absolute -top-5 left-5">
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                            Más rentable
                        </span>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">Ofertar</h3>
                        <ul className="text-sm mb-4 list-disc px-3">
                            <li>Ideal para los que quieren quedarse con todos los beneficios ellos solos.</li>
                            <li>¡Haz tu oferta y llévate la propiedad y toda la operación para ti solo!</li>
                            <li>Eres la parte activa y única de la operación, sin intermediarios.</li>
                            <li>Perfecto si tienes experiencia o cuentas con un equipo propio para ejecutar la operación.</li>
                            <li>Máxima ganancia y agilidad de gestión.</li>
                            <li>Nos pondremos en contacto para darte más información y guiarte en los siguientes pasos.</li>
                        </ul>
                    </div>
                    <Link className="mb-3 underline!"
                        href='/docs/Guia_para_ofertar_InversorHouse.pdf'
                        target="_blank">
                        Descarga guía para ofertar
                    </Link>
                    <InvestButton
                        onClick={() => handleAction("ofertar")}
                        text="Ofertar"
                        tooltip="Haz una oferta para comprar la propiedad"
                    />
                </div>
                {/* Coinvertir */}
                <div className="bg-white rounded-xl shadow p-5 flex flex-col h-full relative scale-105">
                    <div className="absolute -top-5 left-5">
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                            Más popular
                        </span>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">Coinvertir</h3>
                        <ul className="text-sm mb-4 list-disc px-3">
                            <li>Ideal si estás empezando, quieres recibir ganancias y olvidarte de la gestión.</li>
                            <li>Gestión 100% pasiva: un gestor profesional, con experiencia acreditada, se encargará de todo el proceso.</li>
                            <li>Varios inversores unen fuerzas para participar en una misma operación, compartiendo capital y beneficios.</li>
                            <li>Perfecta para diversificar riesgo e invertir con importes accesibles (desde 5.000€).</li>
                            <li>Acceso a oportunidades sólidas y rentables, normalmente reservadas a grandes capitales.</li>
                            <li>Menor riesgo individual gracias a la coinversión.</li>
                            <li>Rendimientos repartidos en proporción a la cantidad invertida.</li>
                            <li>Te enviaremos un correo de confirmación y el gestor de la operación se pondrá en conctacto contigo para guiarte en los siguientes pasos.</li>
                        </ul>
                    </div>
                    <Link className="mb-3 underline!"
                        href='/docs/Guia_para_coinvertir_InversorHouse.pdf'
                        target="_blank">
                        Descarga guía para coinvertir
                    </Link>
                    <InvestButton
                        onClick={() => handleAction("coinvertir")}
                        text="Coinvertir"
                        tooltip="Invierte junto a otros inversores"
                    />
                </div>
                {/* Gestionar */}
                <div className="bg-white rounded-xl shadow p-5 flex flex-col h-full relative">
                    <div className="absolute -top-5 left-5">
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                            Para expertos
                        </span>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">Gestionar</h3>
                        <ul className="text-sm mb-4 list-disc px-3">
                            <li>Ideal para los que mas experiencia tienen, les apasiona el mundo inmobiliarios y quieren llevar la iniciativa en los proyectos.</li>
                            <li>Gestiona la operación y gana una comisión del 20% al 50% de los beneficios.</li>
                            <li>Solo seleccionamos gestores con experiencia comprobada en operaciones inmobiliarias de compra de deuda.</li>
                            <li>Participa como coinversor (mínimo 10.000€) para alinear intereses y maximizar la rentabilidad.</li>
                            <li>Perfil altamente demandado y bien remunerado.</li>
                            <li>Elige tu propia comisión en función del riesgo, la dificultad y tus aspiraciones.</li>
                            <li>Nos pondremos en contacto contigo para evaluar tu perfil y próximos pasos.</li>
                        </ul>
                    </div>
                    <Link className="mb-3 underline!"
                        href='/docs/Guia_para_gestionar_InversorHouse.pdf'
                        target="_blank">
                        Descarga guía para gestionar
                    </Link>
                    <InvestButton
                        onClick={() => handleAction("gestionar")}
                        text="Gestionar"
                        tooltip="Gestiona la operación de coinversión y lleváte un 20-40% de comisión"
                    />
                </div>

                <div className="md:col-span-3">
                    <p>
                        <span className="font-semibold text-lg">No es vinculante.</span> Al hacer clic en <span className="font-semibold">Ofertar, Coinvertir o Gestionar</span>, no estás obligado a realizar ninguna acción ni de participar en ninguna de las operaciones. Solo te enviaremos un correo electrónico para confirmar tu interés y uno de nuestros agentes se pondrá en contacto contigo para guiarte en los siguientes pasos.
                    </p>
                </div>
                <SignedOut>
                    <SignInButton mode="modal">
                        <div className="md:col-span-3 mb-8 btn btn-primary">Accede para participar</div>
                    </SignInButton>
                </SignedOut>
            </div>

            <ProfitCalculator
                maxInvestment={op.ask_price}
                minProfitPercent={minRentability}
                maxProfitPercent={maxRentability}
            />

            <section className="mt-14 bg-white p-6 rounded-lg shadow">
                <h2 className="text-center">Pasos que debes seguir...</h2>
                <ol className="list-decimal pl-6 text-lg">
                    <li>Haz tus propios analisis e investigaciones. Revisa detenidamente el <b>dossier de la propiedad</b> y el <b>Excel de la operación</b>.</li>
                    <li>Determina cuanto quieres invertir con la calculadora <b>de rentabilidad personalizada</b> de cada operación.</li>
                    <li>Determina como quieres participar: <b>Ofertar, Coinvertir o Gestionar.</b> Y descarga <b>la guía correspondiente</b> para entender el proceso.</li>
                    <li><b>Haz click</b> y recibirás más información de la operación que deseas realizar.</li>
                    <li>Uno de nuestros agentes se pondrá en contacto contigo y te guiaremos en los siguientes pasos.</li>
                </ol>
            </section>

            <div>
                {confirmationMsg && (
                    <span className={`text-sm ${confirmationMsg.startsWith("¡Gracias") ? "text-green-700" : "text-red-700"}`}>
                        {confirmationMsg}
                    </span>
                )}
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
            <WhyUsOpportunity />
            <AboutUsOpportunity />
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
                <input className="w-auto!" name="terms" type="checkbox" required /> Acepto los <a href="/aviso-legal" className="underline text-primary" target="_blank">términos y condiciones</a>
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