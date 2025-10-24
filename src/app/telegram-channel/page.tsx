"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { useState } from "react";
import { sendTelegramChannelInviteLink } from "./action";

export default function TelegramChannelPage() {
    const [confirmationMsg, setConfirmationMsg] = useState<{ ok: boolean, message: string } | null>(null);
    const [isPending, setIsPending] = useState(false);

    const handleRequestInvite = async () => {
        setIsPending(true);
        const result = await sendTelegramChannelInviteLink();
        setIsPending(false);

        if (result.ok) {
            setConfirmationMsg({ ok: true, message: result.message });
        } else {
            setConfirmationMsg({ ok: false, message: result.message });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-6">
                            <span className="text-accent font-semibold text-sm">
                                🔐 Canal Privado Exclusivo
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                            Únete a Nuestro Canal de{" "}
                            <span className="text-secondary">Telegram</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-8">
                            Accede a oportunidades inmobiliarias exclusivas antes que nadie.
                            Recibe alertas en tiempo real de nuevas inversiones con alto potencial de rentabilidad.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <SignedIn>
                                <button
                                    onClick={handleRequestInvite}
                                    disabled={isPending || !!confirmationMsg}
                                    className="btn btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    {isPending ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Procesando...
                                        </>
                                    ) : confirmationMsg ? (
                                        <>
                                            ✓ Solicitud Enviada
                                        </>
                                    ) : (
                                        <>
                                            Recibir Invitación
                                            <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </SignedIn>

                            <SignedOut>
                                <SignInButton mode="modal">
                                    <button className="btn btn-primary text-lg px-8 py-4 group">
                                        Regístrate para Unirte
                                        <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </SignInButton>
                                <p className="text-sm text-muted">
                                    ¿Ya tienes cuenta?{" "}
                                    <SignInButton mode="modal">
                                        <button className="text-secondary font-semibold hover:underline">
                                            Inicia sesión
                                        </button>
                                    </SignInButton>
                                </p>
                            </SignedOut>
                        </div>

                        {/* Confirmation Message */}
                        {confirmationMsg && (
                            <div className={`mt-6 p-4 bg-${confirmationMsg.ok ? "success" : "warning"}/10 border border-${confirmationMsg.ok ? "success" : "warning"}/20 rounded-lg max-w-2xl mx-auto`}>
                                <p className={`text-${confirmationMsg.ok ? "success" : "warning"} font-semibold flex items-center justify-center gap-2`}>
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {confirmationMsg.message}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Telegram Icon Decoration */}
                    <div className="flex justify-center mb-12">
                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full"></div>
                            <svg className="relative w-24 h-24 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.122.098.155.23.171.324.016.094.036.308.02.475z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-6 bg-surface">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                        ¿Qué Obtendrás en el Canal?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="card hover:shadow-professional-lg transition-all">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Alertas en Tiempo Real
                                </h3>
                                <p className="text-muted">
                                    Sé el primero en conocer nuevas oportunidades de inversión inmobiliaria con alto potencial.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 2 */}
                        <div className="card hover:shadow-professional-lg transition-all">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Contenido Exclusivo
                                </h3>
                                <p className="text-muted">
                                    Accede a análisis detallados y oportunidades que no se publican en la plataforma principal.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 3 */}
                        <div className="card hover:shadow-professional-lg transition-all">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Comunidad de Inversores
                                </h3>
                                <p className="text-muted">
                                    Conecta con otros inversores, comparte experiencias y descubre oportunidades de coinversión.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 4 */}
                        <div className="card hover:shadow-professional-lg transition-all">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Análisis de Mercado
                                </h3>
                                <p className="text-muted">
                                    Recibe actualizaciones sobre tendencias del mercado inmobiliario y consejos de inversión.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 5 */}
                        <div className="card hover:shadow-professional-lg transition-all">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Ventaja Competitiva
                                </h3>
                                <p className="text-muted">
                                    Actúa rápido en propiedades con descuentos significativos antes que otros inversores.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 6 */}
                        <div className="card hover:shadow-professional-lg transition-all">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Soporte Directo
                                </h3>
                                <p className="text-muted">
                                    Haz preguntas y recibe asesoramiento directo de nuestro equipo de expertos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                        ¿Cómo Funciona?
                    </h2>

                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Regístrate en la Plataforma
                                </h3>
                                <p className="text-muted">
                                    Si aún no tienes cuenta, regístrate de forma gratuita. Es rápido y seguro.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                2
                            </div>                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Solicita tu Invitación
                                </h3>
                                <p className="text-muted">
                                    Una vez registrado, haz clic en el botón &quot;Recibir Invitación&quot; para solicitar acceso al canal.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Recibe el Enlace Único
                                </h3>
                                <p className="text-muted">
                                    Recibirás un correo electrónico con un enlace único.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    Únete y Comienza a Invertir
                                </h3>
                                <p className="text-muted">
                                    Usa el enlace para unirte al canal y empieza a recibir oportunidades exclusivas de inversión inmobiliaria.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 px-6 bg-gradient-to-r from-primary to-secondary text-white">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        No Te Pierdas las Mejores Oportunidades
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        Únete hoy a más de 200 inversores que ya están aprovechando nuestras alertas exclusivas.
                    </p>
                    <SignedIn>
                        <button
                            onClick={handleRequestInvite}
                            disabled={isPending || !!confirmationMsg}
                            className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {confirmationMsg ? "✓ Solicitud Enviada" : "Solicitar Invitación Ahora"}
                        </button>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition">
                                Regístrate Gratis
                            </button>
                        </SignInButton>
                    </SignedOut>
                </div>
            </section>
        </div>
    );
}